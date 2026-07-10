const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'dipali_notes.html');
let html = fs.readFileSync(filePath, 'utf8');

// Fix mojibake from corrupted UTF-8 dashes
html = html.replace(/(\d)�(\d)/g, '$1&ndash;$2');
html = html.replace(/�/g, '&mdash;');

const vModelDiagram = `<div class="ascii-diagram">Requirements ????????????????? Acceptance Testing
     ?                                      ?
System Design ???????????????? System Testing
     ?                                      ?
Architecture Design ????????? Integration Testing
     ?                                      ?
Module Design ???????????????? Unit Testing
     ?                                      ?
        Coding / Implementation</div>`;

const bugLifecycleDiagram = `<div class="ascii-diagram">New &rarr; Assign &rarr; Open &rarr; Fixed &rarr; Retest &rarr; Closed
                              &darr;              &darr;
                           Reject        Reopen &rarr; Assign</div>`;

html = html.replace(
  /<div class="ascii-diagram">Requirements[\s\S]*?Coding \/ Implementation<\/div>/,
  vModelDiagram
);

html = html.replace(
  /<div class="ascii-diagram">New[\s\S]*?Reopen[\s\S]*?Assign<\/div>/,
  bugLifecycleDiagram
);

// Normalize any remaining lone ? in diagrams (vertical arrows)
html = html.replace(
  /(<div class="ascii-diagram">[\s\S]*?)&rarr;(\s+\?)/g,
  '$1&darr;$2'
);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Repaired dipali_notes.html');
