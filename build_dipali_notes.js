const fs = require('fs');
const path = require('path');

const header = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Notes by Dipali</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div id="login-overlay">
  <div class="login-card">
    <div class="login-icon">&#128218;</div>
    <h1>Learning Notes</h1>
    <p>Sign in to access your knowledge base</p>
    <form id="login-form">
      <input type="text" id="login-user" placeholder="Username" autocomplete="off" autofocus>
      <input type="password" id="login-pass" placeholder="Password">
      <button type="submit">Sign In</button>
      <div class="login-error" id="login-error"></div>
    </form>
  </div>
</div>

<div id="progress-bar"></div>
<button id="menu-toggle" aria-label="Toggle menu">&#9776;</button>

<aside id="sidebar">
  <div class="logo"><span>&#128218;</span> Dipali Notes</div>
  <a href="index.html" class="back-to-home">&larr; All Topics</a>
  <div id="search-container">
    <input type="text" id="search-box" placeholder="Search notes..." aria-label="Search">
    <span class="search-shortcut">Ctrl+K</span>
  </div>
  <div class="search-info"></div>
  <nav id="nav-links">
    <a href="#section-1">1. Manual Testing <span class="badge-must-know">Must Know</span></a>
    <a href="#section-2">2. Selenium WebDriver <span class="badge-must-know">Must Know</span></a>
    <a href="#section-3">3. Java for SDET <span class="badge-must-know">Must Know</span></a>
    <a href="#section-4">4. API Testing (Postman) <span class="badge-must-know">Must Know</span></a>
    <a href="#section-5">5. SQL <span class="badge-must-know">Must Know</span></a>
    <a href="#section-6">6. Interview Questions <span class="badge-must-know">Must Know</span></a>
  </nav>
  <div class="sidebar-footer">
    <button class="logout-btn" id="logout-btn">Logout</button>
  </div>
</aside>

<main id="main-content">
<div class="page-header">
  <h1>Notes by <em>Dipali</em></h1>
  <p>Complete QA Automation Knowledge Repository</p>
  <div class="stats-bar">
    <div class="stat"><div class="stat-num">6</div><div class="stat-label">Modules</div></div>
    <div class="stat"><div class="stat-num">500+</div><div class="stat-label">Topics</div></div>
    <div class="stat"><div class="stat-num">100+</div><div class="stat-label">Interview Q&amp;A</div></div>
    <div class="stat"><div class="stat-num">50+</div><div class="stat-label">Programs</div></div>
  </div>
</div>

<div id="no-results" class="no-results">No matching content found.</div>
`;

const footer = `
</main>
<button id="back-to-top" aria-label="Back to top">&#8593;</button>
<script src="app.js"></script>
</body>
</html>`;

// Sections will be loaded from separate content files or inline
const sections = [];

sections.push(require('./dipali_section1.js'));
sections.push(require('./dipali_section2.js'));
sections.push(require('./dipali_section3.js'));
sections.push(require('./dipali_section4.js'));
sections.push(require('./dipali_section5.js'));
sections.push(require('./dipali_section6.js'));

const output = header + sections.join('\n\n') + footer;
fs.writeFileSync(path.join(__dirname, 'dipali_notes.html'), output, 'utf8');
console.log('Generated dipali_notes.html (' + output.length + ' bytes)');
