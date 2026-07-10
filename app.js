(function () {
  'use strict';

  /* ============ AUTH MODULE ============ */
  const Auth = {
    KEY: 'notes-auth',
    CREDS: { user: 'admin', pass: 'admin' },

    isLoggedIn() {
      return sessionStorage.getItem(this.KEY) === 'true';
    },

    login(user, pass) {
      if (user === this.CREDS.user && pass === this.CREDS.pass) {
        sessionStorage.setItem(this.KEY, 'true');
        return true;
      }
      return false;
    },

    logout() {
      sessionStorage.removeItem(this.KEY);
    },

    init() {
      const overlay = document.getElementById('login-overlay');
      const form = document.getElementById('login-form');
      const errorEl = document.getElementById('login-error');
      if (!overlay || !form) return;

      if (this.isLoggedIn()) {
        overlay.classList.add('hidden');
        setTimeout(() => { overlay.style.display = 'none'; }, 600);
      }

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('login-user').value.trim();
        const pass = document.getElementById('login-pass').value;
        if (this.login(user, pass)) {
          overlay.classList.add('hidden');
          setTimeout(() => { overlay.style.display = 'none'; }, 600);
          if (errorEl) errorEl.textContent = '';
        } else {
          if (errorEl) errorEl.textContent = 'Invalid credentials. Use admin / admin';
          const passField = document.getElementById('login-pass');
          if (passField) passField.value = '';
        }
      });

      document.querySelectorAll('.logout-btn, .dashboard-logout').forEach(btn => {
        btn.addEventListener('click', () => {
          this.logout();
          overlay.style.display = 'flex';
          overlay.classList.remove('hidden');
          const u = document.getElementById('login-user');
          const p = document.getElementById('login-pass');
          if (u) u.value = '';
          if (p) p.value = '';
          if (errorEl) errorEl.textContent = '';
        });
      });
    }
  };

  /* ============ NAVIGATION MODULE ============ */
  const Nav = {
    init() {
      const progressBar = document.getElementById('progress-bar');
      const backToTop = document.getElementById('back-to-top');
      const menuToggle = document.getElementById('menu-toggle');
      const sidebar = document.getElementById('sidebar');
      const navLinks = document.querySelectorAll('#nav-links a');
      const sections = document.querySelectorAll('.section-card');

      if (progressBar) {
        window.addEventListener('scroll', () => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';

          if (backToTop) backToTop.classList.toggle('visible', scrollTop > 400);

          if (navLinks.length && sections.length) {
            let current = '';
            sections.forEach(s => {
              if (scrollTop >= s.offsetTop - 130) current = s.id;
            });
            navLinks.forEach(link => {
              link.classList.toggle('active', link.getAttribute('href') === '#' + current);
            });
          }
        }, { passive: true });
      }

      if (backToTop) {
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      }

      if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
        navLinks.forEach(link => link.addEventListener('click', () => {
          if (window.innerWidth <= 768) sidebar.classList.remove('open');
        }));
        document.addEventListener('click', (e) => {
          if (window.innerWidth <= 768 && sidebar.classList.contains('open') &&
              !sidebar.contains(e.target) && e.target !== menuToggle) {
            sidebar.classList.remove('open');
          }
        });
      }

      const collapseBtn = document.querySelector('.sidebar-collapse-btn');
      const expandBtn = document.getElementById('sidebar-expand-btn');
      if (collapseBtn && sidebar) {
        collapseBtn.addEventListener('click', () => {
          sidebar.classList.add('collapsed');
          if (expandBtn) expandBtn.classList.add('visible');
          const mainContent = document.getElementById('main-content');
          if (mainContent) mainContent.style.marginLeft = '0';
        });
      }
      if (expandBtn && sidebar) {
        expandBtn.addEventListener('click', () => {
          sidebar.classList.remove('collapsed');
          expandBtn.classList.remove('visible');
          const mainContent = document.getElementById('main-content');
          if (mainContent) mainContent.style.marginLeft = '';
        });
      }
    }
  };

  /* ============ SEARCH MODULE ============ */
  const Search = {
    timeout: null,

    clearHighlights() {
      document.querySelectorAll('mark.search-highlight').forEach(m => {
        const parent = m.parentNode;
        parent.replaceChild(document.createTextNode(m.textContent), m);
        parent.normalize();
      });
      document.querySelectorAll('span[data-search-wrap]').forEach(span => {
        const parent = span.parentNode;
        while (span.firstChild) parent.insertBefore(span.firstChild, span);
        parent.removeChild(span);
        parent.normalize();
      });
    },

    highlightInNode(node, regex) {
      let count = 0;
      const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
      const textNodes = [];
      while (walker.nextNode()) textNodes.push(walker.currentNode);

      textNodes.forEach(tn => {
        const parent = tn.parentElement;
        if (!parent || parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' ||
            parent.tagName === 'CODE' || parent.tagName === 'PRE' ||
            parent.classList.contains('search-highlight')) return;
        if (!regex.test(tn.textContent)) return;
        regex.lastIndex = 0;

        const frag = document.createDocumentFragment();
        let lastIdx = 0;
        let match;
        const text = tn.textContent;
        regex.lastIndex = 0;
        while ((match = regex.exec(text)) !== null) {
          if (match.index > lastIdx) frag.appendChild(document.createTextNode(text.slice(lastIdx, match.index)));
          const mark = document.createElement('mark');
          mark.className = 'search-highlight';
          mark.textContent = match[0];
          frag.appendChild(mark);
          count++;
          lastIdx = regex.lastIndex;
          if (lastIdx === match.index) break;
        }
        if (lastIdx < text.length) frag.appendChild(document.createTextNode(text.slice(lastIdx)));

        const wrapper = document.createElement('span');
        wrapper.setAttribute('data-search-wrap', '1');
        wrapper.appendChild(frag);
        parent.replaceChild(wrapper, tn);
      });
      return count;
    },

    initTopicSearch() {
      const searchBox = document.getElementById('search-box');
      const sections = document.querySelectorAll('.section-card');
      const noResults = document.getElementById('no-results');
      const infoEl = document.querySelector('.search-info');
      if (!searchBox || !sections.length) return;

      const doSearch = () => {
        this.clearHighlights();
        const q = searchBox.value.trim();
        if (!q) {
          sections.forEach(s => s.classList.remove('search-hidden'));
          if (noResults) noResults.style.display = 'none';
          if (infoEl) infoEl.textContent = '';
          return;
        }

        const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escaped, 'gi');
        let visibleCount = 0;
        let totalMatches = 0;

        sections.forEach(section => {
          const text = section.textContent.toLowerCase();
          const match = text.includes(q.toLowerCase());
          section.classList.toggle('search-hidden', !match);
          if (match) {
            visibleCount++;
            totalMatches += this.highlightInNode(section, regex);
          }
        });

        if (noResults) noResults.style.display = (visibleCount === 0) ? 'block' : 'none';
        if (infoEl) {
          infoEl.textContent = visibleCount > 0
            ? visibleCount + ' section(s) \u2022 ' + totalMatches + ' match(es)'
            : '';
        }

        const first = document.querySelector('mark.search-highlight');
        if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };

      searchBox.addEventListener('input', () => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(doSearch, 250);
      });

      searchBox.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          searchBox.value = '';
          doSearch();
          searchBox.blur();
        }
      });
    },

    initDashboardSearch() {
      const searchBox = document.querySelector('.dashboard-search');
      const cards = document.querySelectorAll('.topic-card');
      if (!searchBox || !cards.length) return;

      searchBox.addEventListener('input', () => {
        const q = searchBox.value.trim().toLowerCase();
        let visible = 0;
        cards.forEach(card => {
          const text = card.textContent.toLowerCase();
          const match = !q || text.includes(q);
          card.style.display = match ? '' : 'none';
          if (match) visible++;
        });
        let empty = document.querySelector('.empty-state');
        if (!empty && visible === 0 && q) {
          empty = document.createElement('div');
          empty.className = 'empty-state search-empty';
          empty.innerHTML = '<div class="empty-icon">\uD83D\uDD0D</div><p>No topics match your search.</p>';
          document.querySelector('.topics-grid').appendChild(empty);
        } else if (empty && (visible > 0 || !q)) {
          if (empty.classList.contains('search-empty')) empty.remove();
        }
      });
    },

    initKeyboardShortcut() {
      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          const sb = document.getElementById('search-box') || document.querySelector('.dashboard-search');
          if (sb) { sb.focus(); sb.select(); }
        }
      });
    },

    init() {
      this.initTopicSearch();
      this.initDashboardSearch();
      this.initKeyboardShortcut();
    }
  };

  /* ============ UI MODULE ============ */
  const UI = {
    initAccordions() {
      document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
          header.classList.toggle('open');
          const body = header.nextElementSibling;
          if (body) body.classList.toggle('open');
        });
      });
    },

    showToast(message, duration) {
      duration = duration || 2500;
      let toast = document.querySelector('.toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
      }
      toast.textContent = message;
      requestAnimationFrame(() => {
        toast.classList.add('visible');
        setTimeout(() => toast.classList.remove('visible'), duration);
      });
    },

    init() {
      this.initAccordions();
    }
  };

  /* ============ BOOTSTRAP ============ */
  function init() {
    Auth.init();
    Nav.init();
    Search.init();
    UI.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.NotesApp = { Auth: Auth, Search: Search, UI: UI, Nav: Nav };
})();
