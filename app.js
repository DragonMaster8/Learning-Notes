(function () {
  'use strict';

  /* ============ AUTH MODULE (multi-user, localStorage) ============ */
  const Auth = {
    USERS_KEY: 'notes-users',
    SESSION_KEY: 'notes-current-user',

    getUsers() {
      try { return JSON.parse(localStorage.getItem(this.USERS_KEY)) || {}; } catch (e) { return {}; }
    },

    saveUsers(users) {
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    },

    seed() {
      const users = this.getUsers();
      if (!users['admin']) {
        users['admin'] = { pass: 'admin', created: Date.now() };
        this.saveUsers(users);
      }
    },

    currentUser() {
      return sessionStorage.getItem(this.SESSION_KEY) || null;
    },

    isLoggedIn() {
      return !!this.currentUser();
    },

    login(user, pass) {
      const users = this.getUsers();
      if (users[user] && users[user].pass === pass) {
        sessionStorage.setItem(this.SESSION_KEY, user);
        return true;
      }
      return false;
    },

    register(user, pass) {
      if (!user || !pass) return { ok: false, msg: 'Username and password are required.' };
      if (user.length < 3) return { ok: false, msg: 'Username must be at least 3 characters.' };
      if (pass.length < 4) return { ok: false, msg: 'Password must be at least 4 characters.' };
      const users = this.getUsers();
      if (users[user]) return { ok: false, msg: 'Username already exists. Choose another.' };
      users[user] = { pass: pass, created: Date.now() };
      this.saveUsers(users);
      sessionStorage.setItem(this.SESSION_KEY, user);
      return { ok: true };
    },

    logout() {
      sessionStorage.removeItem(this.SESSION_KEY);
    },

    init() {
      this.seed();
      const overlay = document.getElementById('login-overlay');
      const loginForm = document.getElementById('login-form');
      const regForm = document.getElementById('register-form');
      const errorEl = document.getElementById('login-error');
      const regError = document.getElementById('register-error');
      const toggleToReg = document.getElementById('show-register');
      const toggleToLogin = document.getElementById('show-login');
      const loginPanel = document.getElementById('login-panel');
      const regPanel = document.getElementById('register-panel');

      if (!overlay) return;

      const hideOverlay = () => {
        overlay.classList.add('hidden');
        setTimeout(() => { overlay.style.display = 'none'; }, 600);
        UserBar.update();
        Progress.init();
        DashProgress.init();
      };

      if (this.isLoggedIn()) hideOverlay();

      if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const user = document.getElementById('login-user').value.trim();
          const pass = document.getElementById('login-pass').value;
          if (this.login(user, pass)) {
            if (errorEl) errorEl.textContent = '';
            hideOverlay();
          } else {
            if (errorEl) errorEl.textContent = 'Invalid username or password.';
            const pf = document.getElementById('login-pass');
            if (pf) pf.value = '';
          }
        });
      }

      if (regForm) {
        regForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const user = document.getElementById('reg-user').value.trim();
          const pass = document.getElementById('reg-pass').value;
          const confirm = document.getElementById('reg-confirm').value;
          if (pass !== confirm) {
            if (regError) regError.textContent = 'Passwords do not match.';
            return;
          }
          const result = this.register(user, pass);
          if (result.ok) {
            if (regError) regError.textContent = '';
            hideOverlay();
          } else {
            if (regError) regError.textContent = result.msg;
          }
        });
      }

      if (toggleToReg && loginPanel && regPanel) {
        toggleToReg.addEventListener('click', (e) => {
          e.preventDefault();
          loginPanel.style.display = 'none';
          regPanel.style.display = 'block';
          if (errorEl) errorEl.textContent = '';
        });
      }
      if (toggleToLogin && loginPanel && regPanel) {
        toggleToLogin.addEventListener('click', (e) => {
          e.preventDefault();
          regPanel.style.display = 'none';
          loginPanel.style.display = 'block';
          if (regError) regError.textContent = '';
        });
      }

      document.querySelectorAll('.logout-btn, .dashboard-logout').forEach(btn => {
        btn.addEventListener('click', () => {
          this.logout();
          overlay.style.display = 'flex';
          overlay.classList.remove('hidden');
          if (loginPanel) loginPanel.style.display = 'block';
          if (regPanel) regPanel.style.display = 'none';
          ['login-user', 'login-pass', 'reg-user', 'reg-pass', 'reg-confirm'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
          });
          if (errorEl) errorEl.textContent = '';
          if (regError) regError.textContent = '';
          UserBar.update();
        });
      });
    }
  };

  /* ============ USER BAR MODULE ============ */
  const UserBar = {
    update() {
      const user = Auth.currentUser();
      document.querySelectorAll('.user-greeting').forEach(el => {
        el.textContent = user ? 'Hello, ' + user : '';
        el.style.display = user ? '' : 'none';
      });
      document.querySelectorAll('.user-avatar').forEach(el => {
        el.textContent = user ? user.charAt(0).toUpperCase() : '';
        el.style.display = user ? '' : 'none';
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

  /* ============ READ TIME MODULE ============ */
  const ReadTime = {
    WPM: 200,

    countWords(el) {
      const text = el.innerText || el.textContent || '';
      return text.split(/\s+/).filter(w => w.length > 0).length;
    },

    formatTime(minutes) {
      if (minutes < 1) return '< 1 min read';
      if (minutes < 60) return Math.ceil(minutes) + ' min read';
      const h = Math.floor(minutes / 60);
      const m = Math.ceil(minutes % 60);
      return h + 'h ' + (m > 0 ? m + 'm' : '') + ' read';
    },

    init() {
      const sections = document.querySelectorAll('.section-card');
      if (!sections.length) return;

      let totalWords = 0;

      sections.forEach(section => {
        const words = this.countWords(section);
        totalWords += words;
        const mins = words / this.WPM;
        const badge = document.createElement('span');
        badge.className = 'read-time-badge';
        badge.textContent = this.formatTime(mins);
        badge.title = words.toLocaleString() + ' words';
        const h2 = section.querySelector('h2');
        if (h2) h2.appendChild(badge);
      });

      const totalMins = totalWords / this.WPM;
      const totalEl = document.getElementById('total-read-time');
      if (totalEl) {
        totalEl.textContent = this.formatTime(totalMins);
        totalEl.title = totalWords.toLocaleString() + ' total words';
      }

      const navLinks = document.querySelectorAll('#nav-links a');
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        const sec = document.getElementById(href.slice(1));
        if (!sec) return;
        const w = this.countWords(sec);
        const m = w / this.WPM;
        const tag = document.createElement('span');
        tag.className = 'nav-read-time';
        tag.textContent = Math.ceil(m) + 'm';
        link.appendChild(tag);
      });
    }
  };

  /* ============ COPY CODE MODULE ============ */
  const CopyCode = {
    init() {
      document.querySelectorAll('pre').forEach(pre => {
        if (pre.querySelector('.copy-btn')) return;
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = 'Copy';
        btn.title = 'Copy to clipboard';
        btn.addEventListener('click', () => {
          const code = pre.querySelector('code') || pre;
          const text = code.innerText || code.textContent;
          navigator.clipboard.writeText(text).then(() => {
            btn.textContent = 'Copied!';
            btn.classList.add('copied');
            setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1500);
          }).catch(() => {
            btn.textContent = 'Failed';
            setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
          });
        });
        pre.style.position = 'relative';
        pre.appendChild(btn);
      });
    }
  };

  /* ============ FONT SIZE MODULE ============ */
  const FontSize = {
    KEY: 'notes-font-size',
    sizes: [14, 15, 16, 17, 18, 20],
    current: 2,

    init() {
      const toolbar = document.getElementById('reading-toolbar');
      if (!toolbar) return;

      const saved = localStorage.getItem(this.KEY);
      if (saved !== null) this.current = parseInt(saved, 10);
      this.apply();

      const btnMinus = toolbar.querySelector('.font-decrease');
      const btnPlus = toolbar.querySelector('.font-increase');
      const display = toolbar.querySelector('.font-size-display');

      if (btnMinus) btnMinus.addEventListener('click', () => { this.change(-1); if (display) display.textContent = this.sizes[this.current] + 'px'; });
      if (btnPlus) btnPlus.addEventListener('click', () => { this.change(1); if (display) display.textContent = this.sizes[this.current] + 'px'; });
      if (display) display.textContent = this.sizes[this.current] + 'px';
    },

    change(dir) {
      this.current = Math.max(0, Math.min(this.sizes.length - 1, this.current + dir));
      localStorage.setItem(this.KEY, this.current);
      this.apply();
    },

    apply() {
      const main = document.getElementById('main-content');
      if (main) main.style.fontSize = this.sizes[this.current] + 'px';
    }
  };

  /* ============ KEYBOARD NAV MODULE ============ */
  const KeyNav = {
    init() {
      const sections = document.querySelectorAll('.section-card');
      if (!sections.length) return;

      document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const scrollY = window.scrollY + 150;
          let idx = 0;
          sections.forEach((s, i) => { if (scrollY >= s.offsetTop) idx = i; });
          const next = e.key === 'ArrowRight' ? Math.min(idx + 1, sections.length - 1) : Math.max(idx - 1, 0);
          sections[next].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  };

  /* ============ PROGRESS MODULE (per-user, manual marking) ============ */
  const Progress = {
    STORE_KEY: 'notes-progress',

    getStore() {
      try { return JSON.parse(localStorage.getItem(this.STORE_KEY)) || {}; } catch (e) { return {}; }
    },

    getUserProgress() {
      const user = Auth.currentUser();
      if (!user) return {};
      const store = this.getStore();
      return store[user] || {};
    },

    saveSection(pageKey, secId, done) {
      const user = Auth.currentUser();
      if (!user) return;
      const store = this.getStore();
      if (!store[user]) store[user] = {};
      if (!store[user][pageKey]) store[user][pageKey] = {};
      if (done) {
        store[user][pageKey][secId] = Date.now();
      } else {
        delete store[user][pageKey][secId];
      }
      localStorage.setItem(this.STORE_KEY, JSON.stringify(store));
    },

    getPageProgress(pageKey) {
      const user = Auth.currentUser();
      if (!user) return {};
      const store = this.getStore();
      return (store[user] && store[user][pageKey]) ? store[user][pageKey] : {};
    },

    getPagePercent(pageKey, totalSections) {
      const done = Object.keys(this.getPageProgress(pageKey)).length;
      return totalSections > 0 ? Math.round((done / totalSections) * 100) : 0;
    },

    init() {
      const sections = document.querySelectorAll('.section-card');
      if (!sections.length || !Auth.isLoggedIn()) return;

      const pageKey = location.pathname.split('/').pop() || 'page';
      const pageRead = this.getPageProgress(pageKey);

      sections.forEach(sec => {
        if (!sec.id) return;
        const existing = sec.querySelector('.mark-complete-bar');
        if (existing) existing.remove();

        const isRead = !!pageRead[sec.id];
        sec.classList.toggle('section-read', isRead);

        const bar = document.createElement('div');
        bar.className = 'mark-complete-bar';

        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.className = 'mark-cb';
        cb.id = 'cb-' + sec.id;
        cb.checked = isRead;

        const label = document.createElement('label');
        label.htmlFor = cb.id;
        label.className = 'mark-label';
        label.textContent = isRead ? 'Completed' : 'Mark as complete';

        cb.addEventListener('change', () => {
          const checked = cb.checked;
          this.saveSection(pageKey, sec.id, checked);
          sec.classList.toggle('section-read', checked);
          label.textContent = checked ? 'Completed' : 'Mark as complete';
          this.updateToolbar(sections, pageKey);
          this.updateNavDots(pageKey);
        });

        bar.appendChild(cb);
        bar.appendChild(label);
        sec.appendChild(bar);
      });

      this.updateToolbar(sections, pageKey);
      this.updateNavDots(pageKey);
    },

    updateToolbar(sections, pageKey) {
      const el = document.getElementById('sections-progress');
      if (!el) return;
      const pageRead = this.getPageProgress(pageKey);
      const countable = Array.from(sections).filter(s => s.id);
      const done = countable.filter(s => pageRead[s.id]).length;
      const total = countable.length;
      const pct = total > 0 ? Math.round((done / total) * 100) : 0;
      el.textContent = done + '/' + total + ' sections (' + pct + '%)';
    },

    updateNavDots(pageKey) {
      const pageRead = this.getPageProgress(pageKey);
      document.querySelectorAll('#nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        const secId = href.slice(1);
        let dot = link.querySelector('.nav-done-dot');
        if (pageRead[secId]) {
          if (!dot) {
            dot = document.createElement('span');
            dot.className = 'nav-done-dot';
            dot.title = 'Completed';
            link.insertBefore(dot, link.firstChild);
          }
        } else if (dot) {
          dot.remove();
        }
      });
    },

    resetPage(pageKey) {
      const user = Auth.currentUser();
      if (!user) return;
      const store = this.getStore();
      if (store[user]) delete store[user][pageKey];
      localStorage.setItem(this.STORE_KEY, JSON.stringify(store));
      this.init();
    }
  };

  /* ============ DASHBOARD PROGRESS MODULE ============ */
  const DashProgress = {
    pages: {
      'JMeter_Notes_Website.html': 16,
      'git_github.html': 16,
      'unix_linux.html': 21,
      'api_testing_notes.html': 14,
      'dipali_notes.html': 12
    },

    init() {
      if (!Auth.isLoggedIn()) return;
      const cards = document.querySelectorAll('.topic-card');
      cards.forEach(card => {
        const href = card.getAttribute('href');
        if (!href) return;
        const file = href.split('/').pop();
        const total = this.pages[file];
        if (!total) return;

        let barWrap = card.querySelector('.card-progress-wrap');
        if (!barWrap) {
          barWrap = document.createElement('div');
          barWrap.className = 'card-progress-wrap';
          barWrap.innerHTML = '<div class="card-progress-bar"><div class="card-progress-fill"></div></div><span class="card-progress-text"></span>';
          card.appendChild(barWrap);
        }

        const pct = Progress.getPagePercent(file, total);
        const fill = barWrap.querySelector('.card-progress-fill');
        const text = barWrap.querySelector('.card-progress-text');
        if (fill) fill.style.width = pct + '%';
        if (text) text.textContent = pct + '% complete';
      });
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

    initResetProgress() {
      const btn = document.getElementById('reset-progress');
      if (!btn) return;
      btn.addEventListener('click', () => {
        if (!confirm('Reset all progress on this page? This cannot be undone.')) return;
        const pageKey = location.pathname.split('/').pop() || 'page';
        Progress.resetPage(pageKey);
        UI.showToast('Progress reset.');
      });
    },

    init() {
      this.initAccordions();
      this.initResetProgress();
    }
  };

  /* ============ BOOTSTRAP ============ */
  function init() {
    Auth.init();
    UserBar.update();
    Nav.init();
    Search.init();
    UI.init();
    ReadTime.init();
    CopyCode.init();
    FontSize.init();
    KeyNav.init();
    Progress.init();
    DashProgress.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.NotesApp = { Auth: Auth, Search: Search, UI: UI, Nav: Nav, ReadTime: ReadTime, FontSize: FontSize, Progress: Progress };
})();
