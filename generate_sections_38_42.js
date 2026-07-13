const fs = require('fs');
const path = require('path');

const outPath = path.join(__dirname, 'java_sel_sections_38_42.html');

function table(headers, rows) {
  let h = '<div class="table-wrap"><table><thead><tr>';
  h += headers.map(x => `<th>${x}</th>`).join('');
  h += '</tr></thead><tbody>';
  for (const row of rows) {
    h += '<tr>' + row.map(c => `<td>${c}</td>`).join('') + '</tr>';
  }
  return h + '</tbody></table></div>';
}

function qblock(num, question, answer, expects) {
  return `<div class="qa-item">
<h4>Q${num}: ${question}</h4>
<p><strong>Answer:</strong> ${answer}</p>
<p class="callout"><strong>Interviewer expects:</strong> ${expects}</p>
</div>
`;
}

function genQuestions(category, items, startNum = 1) {
  let html = `<h3>${category}</h3>\n`;
  items.forEach((item, i) => {
    html += qblock(startNum + i, item.q, item.a, item.e);
  });
  return html;
}

// ========== SECTION 38 ==========
let s38 = `<section id="section-38" class="section-card">
<h2>Section 38: Java Cheat Sheet</h2>
<p>Quick reference for core Java concepts, APIs, and common patterns used in test automation.</p>

<h3>OOP Concepts</h3>
${table(['Concept', 'Definition', 'Example', 'Interview Tip'], [
  ['Class', 'Blueprint for objects; defines fields and methods', 'public class User { String name; }', 'Know class vs object lifecycle'],
  ['Object', 'Instance of a class with state and behavior', 'User u = new User();', 'Always mention heap allocation'],
  ['Encapsulation', 'Hide data; expose via getters/setters', 'private field + public getName()', 'Link to data hiding and validation'],
  ['Inheritance', 'IS-A relationship; reuse parent code', 'class Admin extends User', 'Prefer composition when HAS-A fits better'],
  ['Polymorphism', 'Same reference, different runtime behavior', 'Animal a = new Dog(); a.speak();', 'Method overriding vs overloading'],
  ['Abstraction', 'Hide implementation; show essentials', 'abstract class Shape { abstract double area(); }', 'Abstract class vs interface trade-offs'],
  ['Interface', 'Contract of methods without implementation', 'interface Payable { void pay(); }', 'Java 8+ default/static methods on interfaces'],
])}

<h3>Data Types (Primitives)</h3>
${table(['Type', 'Size', 'Range', 'Default', 'Example'], [
  ['byte', '1 byte', '-128 to 127', '0', 'byte b = 10;'],
  ['short', '2 bytes', '-32,768 to 32,767', '0', 'short s = 100;'],
  ['int', '4 bytes', '-2^31 to 2^31-1', '0', 'int count = 42;'],
  ['long', '8 bytes', '-2^63 to 2^63-1', '0L', 'long id = 100L;'],
  ['float', '4 bytes', 'IEEE 754', '0.0f', 'float f = 3.14f;'],
  ['double', '8 bytes', 'IEEE 754', '0.0d', 'double d = 3.14159;'],
  ['char', '2 bytes', 'Unicode', '\\u0000', "char c = 'A';"],
  ['boolean', '1 bit (JVM)', 'true/false', 'false', 'boolean flag = true;'],
])}

<h3>String Methods</h3>
${table(['Method', 'Return', 'Description', 'Example'], [
  ['length()', 'int', 'Character count', '"hello".length() // 5'],
  ['charAt(i)', 'char', 'Char at index', '"abc".charAt(1) // b'],
  ['substring(a,b)', 'String', 'Slice from a to b-1', '"hello".substring(1,4) // ell'],
  ['toLowerCase()', 'String', 'Lowercase copy', '"Hi".toLowerCase() // hi'],
  ['toUpperCase()', 'String', 'Uppercase copy', '"hi".toUpperCase() // HI'],
  ['trim()', 'String', 'Remove leading/trailing spaces', '" hi ".trim() // hi'],
  ['replace(a,b)', 'String', 'Replace all a with b', '"a-b".replace("-",".")'],
  ['split(regex)', 'String[]', 'Split by regex', '"a,b".split(",")'],
  ['contains(s)', 'boolean', 'Substring check', '"test".contains("es") // true'],
  ['startsWith(s)', 'boolean', 'Prefix check', '"file.txt".startsWith("file")'],
  ['endsWith(s)', 'boolean', 'Suffix check', '"file.txt".endsWith(".txt")'],
  ['indexOf(s)', 'int', 'First index or -1', '"aba".indexOf("b") // 1'],
  ['lastIndexOf(s)', 'int', 'Last index or -1', '"aba".lastIndexOf("b") // 1'],
  ['equals(s)', 'boolean', 'Content equality', '"a".equals("A") // false'],
  ['equalsIgnoreCase(s)', 'boolean', 'Case-insensitive equality', '"a".equalsIgnoreCase("A")'],
  ['isEmpty()', 'boolean', 'True if length 0', '"".isEmpty() // true'],
  ['isBlank()', 'boolean', 'True if empty/whitespace (Java 11)', '"  ".isBlank() // true'],
  ['join(delimiter, elements)', 'String', 'Join strings (Java 8)', 'String.join(",", list)'],
  ['format(fmt, args)', 'String', 'Formatted string', 'String.format("%d", 5)'],
  ['valueOf(obj)', 'String', 'Convert to string', 'String.valueOf(123)'],
])}

<h3>Collections</h3>
${table(['Collection', 'Order', 'Duplicates', 'Null', 'Thread-Safe', 'Performance'], [
  ['ArrayList', 'Yes', 'Yes', 'Yes', 'No', 'O(1) get, O(n) insert middle'],
  ['LinkedList', 'Yes', 'Yes', 'Yes', 'No', 'O(1) insert ends, O(n) random access'],
  ['HashSet', 'No', 'No', 'One null', 'No', 'O(1) avg add/contains'],
  ['TreeSet', 'Sorted', 'No', 'No', 'No', 'O(log n) operations'],
  ['HashMap', 'No keys', 'No keys', 'One null key', 'No', 'O(1) avg get/put'],
  ['TreeMap', 'Sorted keys', 'No keys', 'No null keys', 'No', 'O(log n) operations'],
  ['LinkedHashMap', 'Insertion order', 'No keys', 'One null key', 'No', 'Slightly slower than HashMap'],
  ['ConcurrentHashMap', 'No', 'No keys', 'No null keys', 'Yes', 'Segmented locking; high concurrency'],
])}

<h3>Exception Handling</h3>
${table(['Keyword', 'Purpose', 'Syntax', 'Example'], [
  ['try', 'Wrap risky code', 'try { ... } catch { }', 'try { readFile(); } catch(IOException e) { }'],
  ['catch', 'Handle exception type', 'catch (Type e) { }', 'catch (NullPointerException e) { log(e); }'],
  ['finally', 'Always runs (mostly)', 'finally { cleanup(); }', 'Close streams in finally or try-with-resources'],
  ['throw', 'Raise exception', 'throw new Exception("msg");', 'throw new IllegalArgumentException();'],
  ['throws', 'Declare checked exceptions', 'void m() throws IOException', 'public void save() throws SQLException'],
])}

<h3>Java 8 Features</h3>
${table(['Feature', 'Syntax', 'Example'], [
  ['Lambda', '(params) -> expression', 'list.forEach(x -> System.out.println(x));'],
  ['Stream', 'stream().operations().collect()', 'list.stream().filter(x->x>0).collect(toList());'],
  ['Optional', 'Optional.ofNullable(value)', 'Optional.ofNullable(name).orElse("default");'],
  ['Method Ref', 'Class::method', 'list.forEach(System.out::println);'],
  ['Functional Interface', '@FunctionalInterface + SAM', 'Predicate&lt;String&gt; p = s -> s.length() > 0;'],
])}

<h3>Access Modifiers</h3>
${table(['Modifier', 'Class', 'Package', 'Subclass', 'World'], [
  ['private', 'Yes', 'No', 'No', 'No'],
  ['default (package)', 'Yes', 'Yes', 'No', 'No'],
  ['protected', 'Yes', 'Yes', 'Yes', 'No'],
  ['public', 'Yes', 'Yes', 'Yes', 'Yes'],
])}

<h3>Common Design Patterns</h3>
${table(['Pattern', 'Purpose', 'Framework Usage'], [
  ['Singleton', 'One instance globally', 'DriverManager, config reader, report manager'],
  ['Factory', 'Create objects without exposing creation logic', 'WebDriverFactory.createBrowser(type)'],
  ['Strategy', 'Swap algorithms at runtime', 'Retry strategy, locator strategy'],
  ['Observer', 'Notify dependents on state change', 'TestNG listeners, Extent report hooks'],
  ['Builder', 'Construct complex objects step-by-step', 'Page object builders, test data builders'],
])}

<h3>Useful Code Snippets</h3>
<h4>Sort a List</h4>
<pre><code>// Natural order
Collections.sort(list);
// Custom comparator
list.sort(Comparator.comparing(User::getName));
// Reverse
list.sort(Comparator.comparing(User::getName).reversed());</code></pre>

<h4>Filter with Stream</h4>
<pre><code>List&lt;String&gt; active = users.stream()
    .filter(u -&gt; u.isActive())
    .map(User::getEmail)
    .collect(Collectors.toList());</code></pre>

<h4>Read File (Java 8+)</h4>
<pre><code>// All lines
List&lt;String&gt; lines = Files.readAllLines(Paths.get("data.txt"));
// Stream
try (Stream&lt;String&gt; s = Files.lines(Paths.get("data.txt"))) {
    s.forEach(System.out::println);
}</code></pre>

<h4>HashMap Operations</h4>
<pre><code>Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();
map.put("key", 1);
map.getOrDefault("missing", 0);
map.putIfAbsent("key", 2);
map.forEach((k, v) -&gt; System.out.println(k + "=" + v));
map.merge("key", 1, Integer::sum);</code></pre>

<div class="callout"><strong>Tip:</strong> Memorize collection trade-offs and String immutability — they appear in almost every Java automation interview.</div>
</section>`;

// ========== SECTION 39 ==========
let s39 = `<section id="section-39" class="section-card">
<h2>Section 39: Selenium Cheat Sheet</h2>
<p>Quick reference for WebDriver locators, waits, actions, and framework patterns.</p>

<h3>Locators</h3>
${table(['Locator', 'Syntax', 'Example', 'When to Use'], [
  ['id', 'By.id("value")', 'By.id("username")', 'Fastest when unique and stable'],
  ['name', 'By.name("value")', 'By.name("email")', 'Form fields with name attribute'],
  ['className', 'By.className("value")', 'By.className("btn-primary")', 'Single class only; not compound classes'],
  ['tagName', 'By.tagName("value")', 'By.tagName("input")', 'Groups of same element type'],
  ['linkText', 'By.linkText("exact text")', 'By.linkText("Sign In")', 'Exact anchor text match'],
  ['partialLinkText', 'By.partialLinkText("partial")', 'By.partialLinkText("Sign")', 'Partial anchor text'],
  ['cssSelector', 'By.cssSelector("selector")', 'By.cssSelector("#id .class")', 'Preferred for speed and readability'],
  ['xpath', 'By.xpath("expression")', 'By.xpath("//button[@type=\\"submit\\"]")', 'Complex DOM traversal, text-based locators'],
])}

<h3>XPath Cheat</h3>
${table(['Type', 'Syntax', 'Example'], [
  ['Absolute', '/html/body/div/...', '/html/body/div[1]/form/input[1]'],
  ['Relative', '//tag[@attr="val"]', '//input[@id="email"]'],
  ['contains', 'contains(@attr, "val")', '//div[contains(@class,"active")]'],
  ['text', 'text()="exact"', '//button[text()="Submit"]'],
  ['starts-with', 'starts-with(@attr,"val")', '//input[starts-with(@id,"user")]'],
  ['and', 'cond1 and cond2', '//input[@type="text" and @name="user"]'],
  ['or', 'cond1 or cond2', '//input[@id="a" or @id="b"]'],
  ['axes', 'ancestor::tag', '//span[text()="Save"]/ancestor::form'],
  ['index', '(//div[@class="row"])[2]', 'Second matching div'],
  ['normalize-space', 'normalize-space(text())', '//label[normalize-space()="Email"]'],
  ['following-sibling', 'following-sibling::tag', '//label[text()="Name"]/following-sibling::input'],
  ['parent', 'parent::tag or ..', '//input[@id="pwd"]/parent::div'],
])}

<h3>CSS Selector Cheat</h3>
${table(['Type', 'Syntax', 'Example'], [
  ['id', '#id', '#login-btn'],
  ['class', '.class', '.btn-primary'],
  ['attribute', '[attr="val"]', 'input[type="email"]'],
  ['contains', '[attr*="val"]', 'div[class*="card"]'],
  ['starts-with', '[attr^="val"]', 'input[id^="user"]'],
  ['child', 'parent > child', 'form > input[type="submit"]'],
  ['nth-child', 'tag:nth-child(n)', 'tr:nth-child(2) td'],
  ['descendant', 'ancestor descendant', 'table tr td'],
  ['multiple attributes', '[a="x"][b="y"]', 'input[type="text"][name="email"]'],
  ['not', ':not(selector)', 'input:not([disabled])'],
])}

<h3>Waits</h3>
${table(['Wait Type', 'Syntax', 'When to Use', 'Pros', 'Cons'], [
  ['Implicit', 'driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10))', 'Global default for findElement', 'Simple setup', 'Can mask timing issues; slows every find'],
  ['Explicit', 'new WebDriverWait(driver, Duration.ofSeconds(10)).until(ExpectedConditions.visibilityOfElementLocated(loc))', 'Specific element/state conditions', 'Precise, readable intent', 'More code per wait point'],
  ['Fluent', 'new FluentWait(driver).withTimeout(...).pollingEvery(...).ignoring(...)', 'Custom polling and ignored exceptions', 'Flexible for flaky apps', 'Complex configuration'],
])}
<div class="callout"><strong>Warning:</strong> Never mix implicit and explicit waits — unpredictable timeouts. Avoid Thread.sleep(); use explicit waits with ExpectedConditions instead.</div>

<h3>WebElement Commands</h3>
${table(['Category', 'Method', 'Description'], [
  ['Action', 'click()', 'Click the element'],
  ['Action', 'sendKeys(String)', 'Type text into input'],
  ['Action', 'clear()', 'Clear input field'],
  ['Action', 'submit()', 'Submit form containing element'],
  ['Query', 'getText()', 'Visible text of element'],
  ['Query', 'getAttribute(name)', 'Attribute value (e.g., value, href)'],
  ['Query', 'getTagName()', 'HTML tag name'],
  ['Query', 'getCssValue(prop)', 'Computed CSS property'],
  ['Query', 'getLocation()', 'On-screen coordinates'],
  ['Query', 'getSize()', 'Width and height'],
  ['State', 'isDisplayed()', 'True if visible on page'],
  ['State', 'isEnabled()', 'True if interactable'],
  ['State', 'isSelected()', 'True for checkbox/radio selected'],
  ['Find', 'findElement(By)', 'First matching child element'],
  ['Find', 'findElements(By)', 'List of all matching children (empty if none)'],
  ['Screenshot', 'getScreenshotAs(OutputType)', 'Capture element screenshot'],
])}

<h3>Navigation</h3>
${table(['Command', 'Description', 'Example'], [
  ['get(url)', 'Navigate to URL', 'driver.get("https://example.com")'],
  ['navigate().to(url)', 'Navigate via history API', 'driver.navigate().to(url)'],
  ['navigate().back()', 'Browser back', 'driver.navigate().back()'],
  ['navigate().forward()', 'Browser forward', 'driver.navigate().forward()'],
  ['navigate().refresh()', 'Reload page', 'driver.navigate().refresh()'],
  ['getCurrentUrl()', 'Current URL string', 'driver.getCurrentUrl()'],
  ['getTitle()', 'Page title', 'driver.getTitle()'],
  ['getPageSource()', 'Full HTML source', 'driver.getPageSource()'],
])}

<h3>Alerts</h3>
${table(['Method', 'Description', 'Alert Type'], [
  ['switchTo().alert()', 'Switch focus to alert', 'All alert types'],
  ['accept()', 'Click OK', 'Alert, Confirm, Prompt'],
  ['dismiss()', 'Click Cancel', 'Confirm, Prompt'],
  ['getText()', 'Read alert message', 'All types'],
  ['sendKeys(String)', 'Type into prompt', 'Prompt only'],
])}

<h3>Frames</h3>
${table(['Method', 'Usage', 'Example'], [
  ['switchTo().frame(index)', 'Switch by zero-based index', 'driver.switchTo().frame(0)'],
  ['switchTo().frame(nameOrId)', 'Switch by name or id', 'driver.switchTo().frame("iframe1")'],
  ['switchTo().frame(WebElement)', 'Switch using element reference', 'driver.switchTo().frame(frameElement)'],
  ['switchTo().defaultContent()', 'Return to main page', 'driver.switchTo().defaultContent()'],
])}

<h3>Windows</h3>
${table(['Method', 'Returns', 'Usage'], [
  ['getWindowHandle()', 'String (current)', 'Current window ID'],
  ['getWindowHandles()', 'Set&lt;String&gt;', 'All open window IDs'],
  ['switchTo().window(handle)', 'void', 'Switch to window by handle'],
  ['driver.close()', 'void', 'Close current window only'],
  ['driver.quit()', 'void', 'Close all windows and end session'],
])}

<h3>Actions Class</h3>
${table(['Action', 'Method', 'Use Case'], [
  ['Hover', 'moveToElement(el)', 'Reveal dropdown menus'],
  ['Right-click', 'contextClick(el)', 'Context menu interactions'],
  ['Double-click', 'doubleClick(el)', 'Open items, special UI actions'],
  ['Drag-drop', 'dragAndDrop(source, target)', 'Reorder lists, sliders'],
  ['Click-hold', 'clickAndHold(el)', 'Custom drag operations'],
  ['Release', 'release()', 'Complete click-and-hold'],
  ['Send keys', 'sendKeys(Keys.chord(...))', 'Keyboard shortcuts (Ctrl+A)'],
  ['Scroll', 'scrollToElement(el)', 'Bring off-screen element into view'],
])}

<h3>JavaScriptExecutor</h3>
${table(['Operation', 'Script', 'When to Use'], [
  ['Click', 'arguments[0].click();', 'Element obscured or not clickable'],
  ['Scroll', 'arguments[0].scrollIntoView(true);', 'Scroll element into viewport'],
  ['Set value', 'arguments[0].value="text";', 'Readonly or hidden inputs'],
  ['Highlight', 'arguments[0].style.border="3px solid red";', 'Debug/demo during execution'],
  ['Remove element', 'arguments[0].remove();', 'Dismiss overlays blocking clicks'],
  ['Get innerText', 'return arguments[0].innerText;', 'Extract text when getText() fails'],
  ['Page scroll', 'window.scrollTo(0, document.body.scrollHeight);', 'Infinite scroll pages'],
  ['Return value', 'return document.title;', 'Any JS expression needing a result'],
])}

<h3>WebTable Operations</h3>
${table(['Operation', 'XPath/Code', 'Example'], [
  ['Row count', 'driver.findElements(By.xpath("//table//tr")).size()', 'Includes header row'],
  ['Column count', 'row.findElements(By.tagName("td")).size()', 'Per-row column count'],
  ['Cell by row/col', '//table//tr[2]/td[3]', '2nd data row, 3rd column (1-indexed)'],
  ['Cell by text', '//td[text()="Expected"]', 'Find cell with exact text'],
  ['Dynamic table', 'List&lt;WebElement&gt; rows = table.findElements(By.tagName("tr"))', 'Iterate rows in loop'],
  ['Header map', 'Read th texts, build Map&lt;String,Integer&gt;', 'Column index by header name'],
])}

<h3>Selenium 4 New Features</h3>
${table(['Feature', 'Syntax', 'Usage'], [
  ['Relative locators', 'locator.above(other)', 'Find element above/near another element'],
  ['W3C WebDriver', 'Standard protocol (no JSON Wire)', 'Better browser compatibility'],
  ['Chrome DevTools', 'driver.getDevTools()', 'Network mocking, performance metrics'],
  ['NewWindow', 'driver.switchTo().newWindow(WindowType.TAB)', 'Open tab/window programmatically'],
  ['Timeouts unified', 'Duration-based timeouts', 'driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10))'],
  ['Selenium Grid 4', 'Docker / standalone server', 'Distributed parallel execution'],
])}

<h3>POM Template</h3>
<pre><code>public class LoginPage {
    private WebDriver driver;
    private By username = By.id("username");
    private By password = By.id("password");
    private By loginBtn = By.id("login");

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this); // optional Page Factory
    }

    public LoginPage enterUsername(String user) {
        driver.findElement(username).sendKeys(user);
        return this;
    }

    public HomePage clickLogin() {
        driver.findElement(loginBtn).click();
        return new HomePage(driver);
    }
}</code></pre>

<div class="callout"><strong>Best Practice:</strong> Prefer CSS over XPath when possible; use explicit waits; never hard-code Thread.sleep().</div>
</section>`;

// ========== SECTION 40 - Question generators ==========
function makeBatch(prefix, topics, countPerTopic) {
  const items = [];
  let n = 0;
  for (const topic of topics) {
    for (let i = 1; i <= countPerTopic; i++) {
      n++;
      items.push({
        q: `${prefix} — ${topic} (${i}): Explain ${topic.toLowerCase()} concept ${i} in Java/Selenium context.`,
        a: `This question tests your understanding of ${topic}. Provide a clear definition, a practical automation example, and mention common pitfalls. Relate the concept to real test framework usage where applicable. Highlight when you would choose this approach over alternatives.`,
        e: `Concise explanation with a concrete framework or coding example demonstrating ${topic}.`
      });
    }
  }
  return items;
}

const javaOOP = [
  'What is a class?', 'What is an object?', 'What is a constructor?', 'Default vs parameterized constructor?',
  'What is encapsulation?', 'What is inheritance?', 'What is polymorphism?', 'What is abstraction?',
  'IS-A vs HAS-A relationship?', 'Method overloading?', 'Method overriding?', 'Can we override static methods?',
  'Can we override private methods?', 'What is super keyword?', 'What is this keyword?',
  'Abstract class vs interface?', 'What is final class?', 'What is final method?', 'What is final variable?',
  'Composition vs inheritance?', 'What is coupling?', 'What is cohesion?', 'What is static block?',
  'What is instance block?', 'What is object cloning?', 'Shallow vs deep copy?', 'What is marker interface?',
  'What is functional interface?', 'Diamond problem in Java?', 'Multiple inheritance in Java?'
];

const javaStrings = [
  'Why is String immutable?', 'What is String pool?', 'new String() vs literal?', '== vs equals() for String?',
  'String vs StringBuilder?', 'StringBuilder vs StringBuffer?', 'Important String methods?', 'String concatenation performance?',
  'How to reverse a String?', 'How to check palindrome?', 'String to char array?', 'char array to String?',
  'String.format usage?', 'String.join usage?', 'Split vs tokenizer?', 'Replace vs replaceAll?',
  'Intern method?', 'CompareTo vs equals?', 'Empty vs null String?', 'Best practices for String in tests?'
];

const javaCollections = [
  'List vs Set vs Map?', 'ArrayList internal working?', 'LinkedList internal working?', 'ArrayList vs LinkedList?',
  'HashSet internal working?', 'TreeSet ordering?', 'HashMap internal working?', 'HashMap collision handling?',
  'LinkedHashMap use case?', 'TreeMap use case?', 'Hashtable vs HashMap?', 'ConcurrentHashMap working?',
  'Iterator vs ListIterator?', 'Fail-fast vs fail-safe?', 'Comparable vs Comparator?', 'Collections.sort vs Arrays.sort?',
  'When to use which collection?', 'Map iteration techniques?', 'Remove while iterating?', 'Custom comparator example?',
  'Queue and Deque?', 'PriorityQueue?', 'CopyOnWriteArrayList?', 'WeakHashMap?', 'EnumSet and EnumMap?'
];

const javaExceptions = [
  'Checked vs unchecked exception?', 'try-catch-finally flow?', 'Can finally block be skipped?', 'Custom exception creation?',
  'throw vs throws?', 'Exception vs Error?', 'Multi-catch block?', 'try-with-resources?',
  'Best practices for exceptions?', 'Exception handling in framework?', 'Logging exceptions?', 'Suppressed exceptions?',
  'RuntimeException examples?', 'When not to catch Exception?', 'Global exception handler pattern?'
];

const java8 = [
  'What is a lambda expression?', 'Functional interface types?', 'Predicate example?', 'Function example?',
  'Consumer example?', 'Supplier example?', 'Stream intermediate vs terminal?', 'map vs flatMap?',
  'filter operation?', 'reduce operation?', 'collect vs collect(Collectors)?', 'Optional best practices?',
  'Method reference types?', 'Parallel streams?', 'Date/Time API (LocalDate)?', 'Default methods in interface?',
  'Static methods in interface?', 'Stream vs Collection?', 'peek operation?', 'groupingBy collector?'
];

const javaMT = [
  'Thread vs Runnable?', 'start() vs run()?', 'Thread lifecycle?', 'synchronized keyword?',
  'volatile keyword?', 'ThreadLocal usage?', 'Deadlock — what and prevention?', 'wait vs sleep?',
  'notify vs notifyAll?', 'ExecutorService?', 'Callable vs Runnable?', 'Future interface?',
  'CountDownLatch?', 'CyclicBarrier?', 'Thread safety in HashMap?'
];

const javaCoding = [
  'Reverse a string?', 'Find duplicates in array?', 'Fibonacci series?', 'Check palindrome?',
  'Sort array without built-in?', 'Two sum problem?', 'Find max in array?', 'Remove duplicates from list?',
  'Count word frequency?', 'Anagram check?', 'Merge two sorted arrays?', 'Find missing number?',
  'Binary search?', 'Factorial recursive/iterative?', 'FizzBuzz?', 'Reverse linked list concept?',
  'Valid parentheses?', 'First non-repeating char?', 'Rotate array?', 'Find intersection of lists?',
  'Stream: filter and collect?', 'Stream: groupingBy?', 'HashMap: two sum?', 'Print pyramid pattern?',
  'Swap without temp variable?'
];

const selBasics = [
  'What is Selenium?', 'Selenium components?', 'Selenium architecture?', 'WebDriver interface?',
  'Selenium 3 vs 4?', 'JSON Wire vs W3C?', 'WebDriver vs WebElement?', 'RemoteWebDriver?',
  'Selenium Grid purpose?', 'Hub vs Node?', 'Browser drivers?', 'Headless testing?',
  'Selenium vs Cypress?', 'Selenium limitations?', 'Cross-browser testing?', 'Capabilities object?',
  'DesiredCapabilities vs Options?', 'ChromeOptions examples?', 'FirefoxOptions examples?', 'Edge driver setup?',
  'Driver lifecycle?', 'Session ID?', 'Quit vs close?', 'Screenshot capture?', 'Page load strategy?',
  'Timeouts in Selenium?', 'Selenium with Maven?', 'Selenium with TestNG?', 'Selenium with Cucumber?', 'Reporting integration?'
];

const selLocators = [
  'Types of locators?', 'Best locator strategy?', 'ID vs Name?', 'CSS vs XPath?', 'Absolute vs relative XPath?',
  'XPath axes?', 'Dynamic XPath with variables?', 'contains() in XPath?', 'starts-with in XPath?', 'text() in XPath?',
  'Parent/child in CSS?', 'nth-child selector?', 'Handling dynamic IDs?', 'Custom attributes?', 'Data-testid strategy?',
  'Chained locators?', 'findElement vs findElements?', 'StaleElementReferenceException?', 'NoSuchElementException?',
  'Locator in Shadow DOM?', 'Relative locators Selenium 4?', 'Fluent wait with locator?', 'Page object locators?',
  'Locator maintenance?', 'Self-healing locators concept?'
];

const selWaits = [
  'Implicit wait?', 'Explicit wait?', 'Fluent wait?', 'WebDriverWait usage?', 'ExpectedConditions list?',
  'visibilityOfElementLocated?', 'elementToBeClickable?', 'presenceOfElementLocated?', 'Never mix waits?',
  'Why avoid Thread.sleep?', 'Custom wait conditions?', 'Wait for page load?', 'Wait for AJAX?',
  'Wait for invisibility?', 'Polling interval tuning?'
];

const selElements = [
  'WebElement methods?', 'Handling dropdown?', 'Select class methods?', 'Multi-select dropdown?',
  'Checkbox handling?', 'Radio button handling?', 'File upload?', 'Handling alerts?', 'Handling frames?',
  'Handling windows/tabs?', 'Web table handling?', 'Dynamic tables?', 'Pagination handling?',
  'Autocomplete handling?', 'Date picker handling?', 'Modal dialog handling?', 'Shadow DOM elements?',
  'iFrame vs frame?', 'Nested frames?', 'Cookie handling?'
];

const selActions = [
  'Actions class purpose?', 'Mouse hover?', 'Double click?', 'Right click/context click?', 'Drag and drop?',
  'Click and hold?', 'Keyboard actions?', 'Key combinations?', 'Scroll using Actions?', 'Build and perform?'
];

const selPOM = [
  'What is Page Object Model?', 'Benefits of POM?', 'Page Factory?', '@FindBy annotation?', 'InitElements?',
  'POM folder structure?', 'Base page class?', 'Page chaining?', 'Avoid driver in every method?', 'Lazy initialization?',
  'POM with inheritance?', 'POM vs Screenplay?', 'Maintain page objects?', 'POM for API pages?', 'POM anti-patterns?'
];

const selFramework = [
  'Hybrid framework design?', 'DriverManager pattern?', 'ThreadLocal driver?', 'Config properties reader?',
  'Excel/JSON test data?', 'TestNG DataProvider?', 'Listener classes?', 'Retry analyzer?', 'Parallel execution?',
  'Extent Reports integration?', 'Screenshot on failure?', 'Log4j/SLF4j logging?', 'Maven profiles?',
  'Page object + utility layer?', 'Factory pattern for driver?', 'Singleton for config?', 'Environment switching?',
  'CI/CD integration?', 'Docker for Selenium?', 'Allure reporting?'
];

const selCICD = [
  'Maven lifecycle?', 'pom.xml dependencies?', 'Jenkins pipeline?', 'Jenkinsfile stages?', 'Selenium Grid in CI?',
  'Docker Compose for Grid?', 'Parallel on Jenkins?', 'Test reports in Jenkins?', 'Email notification?',
  'Scheduled builds?', 'Parameterize browser?', 'Headless in CI?', 'Artifact archiving?', 'Flaky test in CI?',
  'Git branching for tests?'
];

const frameworkDesign = [
  'Framework architecture layers?', 'Separation of concerns?', 'Base test class design?', 'Utility class design?',
  'Config management strategy?', 'Test data management?', 'Reporting strategy?', 'Logging strategy?',
  'Screenshot strategy?', 'Retry mechanism design?', 'Parallel execution design?', 'ThreadLocal rationale?',
  'Driver factory pattern?', 'Page object hierarchy?', 'Listener pattern usage?', 'Strategy pattern in framework?',
  'Singleton usage — when?', 'Factory vs Abstract Factory?', 'Builder pattern for test data?', 'Observer for reporting?',
  'Extent vs Allure?', 'Custom HTML reports?', 'CI pipeline stages?', 'Docker containerization?', 'Cloud Grid (BrowserStack)?',
  'Environment config (dev/qa/prod)?', 'Secrets management?', 'Version control for tests?', 'Code review for automation?',
  'Framework scalability?', 'Onboarding new team members?', 'Metrics and KPIs?', 'Maintenance strategy?',
  'Refactoring legacy tests?', 'API + UI hybrid?', 'Mobile integration?', 'Performance test hooks?',
  'Security test integration?', 'Accessibility testing?', 'Visual regression?', 'BDD vs TDD in automation?',
  'Test pyramid concept?', 'Shift-left testing?', 'Risk-based testing?', 'Regression suite design?',
  'Smoke vs sanity vs regression?', 'Test tagging strategy?', 'Database validation layer?', 'Mock vs stub in tests?',
  'Contract testing?', 'Framework documentation?'
];

const codingProblems = [
  { q: 'Reverse a string without using reverse()', sol: 'StringBuilder sb = new StringBuilder(str); return sb.reverse().toString();', exp: 'O(n) time, O(n) space', tc: 'O(n)' },
  { q: 'Find first non-repeated character', sol: 'LinkedHashMap&lt;Character,Integer&gt; map; iterate and find count==1', exp: 'LinkedHashMap preserves insertion order', tc: 'O(n)' },
  { q: 'Check if two strings are anagrams', sol: 'Sort both char arrays and compare Arrays.equals(a,b)', exp: 'Alternative: frequency count with int[26]', tc: 'O(n log n)' },
  { q: 'Find duplicate in array 1..n', sol: 'Use HashSet; add elements, return on duplicate found', exp: 'Floyd cycle detection for O(1) space variant', tc: 'O(n)' },
  { q: 'Remove duplicates from ArrayList', sol: 'new ArrayList&lt;&gt;(new LinkedHashSet&lt;&gt;(list))', exp: 'Preserves order with LinkedHashSet', tc: 'O(n)' },
  { q: 'Count frequency of words in string', sol: 'Split by space, HashMap merge or getOrDefault', exp: 'Handle punctuation with regex if needed', tc: 'O(n)' },
  { q: 'Find max element in array', sol: 'int max = arr[0]; for loop compare', exp: 'Streams: Arrays.stream(arr).max()', tc: 'O(n)' },
  { q: 'Sort array of integers', sol: 'Arrays.sort(arr); or bubble sort for demo', exp: 'Know built-in vs manual sort trade-offs', tc: 'O(n log n)' },
  { q: 'Two sum — indices for target', sol: 'HashMap: complement = target - num; check map', exp: 'Classic HashMap interview problem', tc: 'O(n)' },
  { q: 'Fibonacci nth number iterative', sol: 'a=0,b=1; loop n times swap', exp: 'Avoid recursion without memoization', tc: 'O(n)' },
  { q: 'Check palindrome string', sol: 'Two pointers left/right compare chars', exp: 'Ignore case and non-alphanumeric for full variant', tc: 'O(n)' },
  { q: 'Merge two sorted lists', sol: 'While both non-empty, add smaller; append rest', exp: 'Similar to merge step in merge sort', tc: 'O(n+m)' },
  { q: 'Find missing number 1..n', sol: 'Expected sum n*(n+1)/2 minus actual sum', exp: 'XOR approach also valid', tc: 'O(n)' },
  { q: 'Binary search in sorted array', sol: 'low/high mid; compare and narrow range', exp: 'Requires sorted input', tc: 'O(log n)' },
  { q: 'Valid parentheses', sol: 'Stack: push open, pop on close matching', exp: 'Classic stack problem', tc: 'O(n)' },
  { q: 'Rotate array by k positions', sol: 'Reverse whole, reverse first k, reverse rest', exp: 'In-place O(1) extra space', tc: 'O(n)' },
  { q: 'Find intersection of two lists', sol: 'HashSet from list1; retainAll or manual check', exp: 'Set operations simplify intersection', tc: 'O(n+m)' },
  { q: 'Stream: filter adults and collect names', sol: 'list.stream().filter(u->u.getAge()>18).map(User::getName).collect(toList())', exp: 'Intermediate + terminal ops', tc: 'O(n)' },
  { q: 'Stream: group employees by department', sol: 'list.stream().collect(groupingBy(Employee::getDept))', exp: 'groupingBy is common collector', tc: 'O(n)' },
  { q: 'Stream: sum of salaries', sol: 'list.stream().mapToInt(Employee::getSalary).sum()', exp: 'mapToInt avoids boxing', tc: 'O(n)' },
  { q: 'Read file and count lines', sol: 'Files.lines(path).count() or readAllLines().size()', exp: 'Use try-with-resources for streams', tc: 'O(n)' },
  { q: 'Regex: validate email format', sol: 'Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$").matcher(email).matches()', exp: 'Know regex basics for validation tests', tc: 'O(n)' },
  { q: 'Find longest substring without repeat', sol: 'Sliding window with HashSet', exp: 'Advanced but common in SDET interviews', tc: 'O(n)' },
  { q: 'Print matrix spiral order', sol: 'Four boundaries top/bottom/left/right shrink', exp: '2D array traversal pattern', tc: 'O(m*n)' },
  { q: 'Convert string to integer (atoi)', sol: 'Parse digit by digit with overflow check', exp: 'Edge cases: sign, leading spaces', tc: 'O(n)' },
  { q: 'Find second largest in array', sol: 'Track largest and secondLargest in one pass', exp: 'Single pass O(n) solution', tc: 'O(n)' },
  { q: 'Capitalize first letter of each word', sol: 'Split, capitalize, join with String.join', exp: 'Word manipulation for test data', tc: 'O(n)' },
  { q: 'Check if array contains duplicate', sol: 'HashSet size vs array length', exp: 'Simple set-based approach', tc: 'O(n)' },
  { q: 'Find common elements in two arrays', sol: 'HashSet from arr1; iterate arr2 check contains', exp: 'Set intersection pattern', tc: 'O(n+m)' },
  { q: 'Implement queue using two stacks', sol: 'Stack in, stack out; amortized O(1) enqueue/dequeue', exp: 'Data structure design question', tc: 'O(1) amortized' },
  { q: 'Find kth largest element', sol: 'PriorityQueue min-heap size k', exp: 'Heap is standard approach', tc: 'O(n log k)' },
  { q: 'String compression aabbcc to a2b2c2', sol: 'StringBuilder iterate count consecutive chars', exp: 'Run-length encoding', tc: 'O(n)' },
  { q: 'Balanced brackets with multiple types', sol: 'Stack with matching map {) -> (, ] -> [}', exp: 'Extend valid parentheses', tc: 'O(n)' },
  { q: 'Find all permutations of string', sol: 'Backtracking swap chars at each position', exp: 'Recursion/backtracking pattern', tc: 'O(n!)' },
  { q: 'Longest common prefix in strings', sol: 'Compare chars at index i across all strings', exp: 'Vertical scanning approach', tc: 'O(n*m)' },
  { q: 'Implement hash map (basic)', sol: 'Array of buckets with linked list chaining', exp: 'Shows understanding of HashMap internals', tc: 'O(1) avg' },
  { q: 'Find subarray with given sum', sol: 'Sliding window for positives; prefix sum for negatives', exp: 'Window technique for arrays', tc: 'O(n)' },
  { q: 'Sort list of strings by length', sol: 'list.sort(Comparator.comparingInt(String::length))', exp: 'Comparator.comparing variants', tc: 'O(n log n)' },
  { q: 'Convert list to map key-value', sol: 'stream().collect(toMap(User::getId, Function.identity()))', exp: 'Handle duplicate keys with merge function', tc: 'O(n)' },
  { q: 'Find mode (most frequent) in array', sol: 'HashMap frequency; track max count', exp: 'Frequency map pattern', tc: 'O(n)' },
  { q: 'Check if number is prime', sol: 'Loop to sqrt(n); check divisibility', exp: 'Optimization: check 2 separately, then odd', tc: 'O(sqrt n)' },
  { q: 'Reverse words in sentence', sol: 'Split by space, reverse list, join', exp: 'StringTokenizer or split both work', tc: 'O(n)' },
  { q: 'Find pair with sum in sorted array', sol: 'Two pointers left=0, right=n-1', exp: 'Two-pointer on sorted array', tc: 'O(n)' },
  { q: 'Implement stack using array', sol: 'Array with top index; push increment, pop decrement', exp: 'Basic data structure implementation', tc: 'O(1)' },
  { q: 'Deep copy of HashMap', sol: 'new HashMap&lt;&gt;(original) shallow; clone values for deep', exp: 'Shallow vs deep copy distinction', tc: 'O(n)' },
  { q: 'Parse CSV line into fields', sol: 'line.split(",") or Scanner with delimiter', exp: 'Test data reading from CSV files', tc: 'O(n)' },
  { q: 'Find longest palindrome substring', sol: 'Expand around center for each index', exp: 'Advanced string DP/expand technique', tc: 'O(n^2)' },
  { q: 'Count vowels in string', sol: 'Filter chars matching [aeiouAEIOU]', exp: 'Stream or simple loop both fine', tc: 'O(n)' },
  { q: 'Remove character from string', sol: 'StringBuilder delete or replaceAll', exp: 'String immutability requires new object', tc: 'O(n)' },
  { q: 'Find element appearing once when others twice', sol: 'XOR all elements together', exp: 'Bit manipulation trick', tc: 'O(n)' },
];

const scenarioQuestions = [
  'Flaky test due to timing — how do you fix?', 'Dynamic element ID changes every build — strategy?',
  'Test passes locally but fails in CI — debug approach?', 'Application uses Shadow DOM — how to automate?',
  'Infinite scroll page — how to test loading?', 'CAPTCHA on login — handling strategy?',
  'File download verification in Selenium?', 'Database validation after UI action?',
  'Parallel execution causes test interference?', 'Shared test data causes failures in parallel?',
  'How to reduce test execution time?', 'Legacy framework with no POM — migration plan?',
  'New team member onboarding to framework?', 'How to handle A/B test variations?',
  'Testing responsive design across viewports?', 'OAuth/SSO login automation approach?',
  'Handling React/Angular dynamic rendering?', 'API mock vs live backend for UI tests?',
  'When to automate vs manual test?', 'Regression suite too large — prioritization?',
  'False positive test failures — how to triage?', 'Production bug not caught by automation — RCA?',
  'Cross-browser inconsistency in element behavior?', 'Alert appears randomly — stabilization?',
  'StaleElementReferenceException in loop — fix?',
  'How to test email notifications?', 'Performance degradation in test suite over time?',
  'Version upgrade Selenium 3 to 4 — migration steps?', 'Grid node crashes during parallel run?',
  'How to measure automation ROI?', 'Stakeholder wants 100% automation — response?',
  'Security testing in automation scope?', 'Accessibility (a11y) in Selenium tests?',
  'Visual regression testing approach?', 'Mobile web vs native app — tool choice?',
  'Test environment frequently down — mitigation?', 'Data privacy/PII in test logs — handling?',
  'How to debug with browser DevTools in automation?', 'Network throttling for slow connection tests?',
  'Handling WebSocket-based real-time UI?', 'Multi-language/locale testing strategy?',
  'Cookie consent banner blocking tests?', 'iframe within iframe — navigation approach?',
  'How to design smoke suite for microservices?', 'Contract change breaks UI tests — prevention?',
  'Technical debt in automation — how to address?', 'Choosing between Cucumber and plain TestNG?',
  'Reporting failure to management with metrics?', 'Leading automation for a new greenfield project?',
  'Mentoring junior automation engineers?', 'Architecting framework for 50+ test engineers?'
];

const { getQA } = require('./section40_answers.js');

function qaFromList(questions) {
  return questions.map((q) => {
    const { a, e } = getQA(q);
    return { q, a, e };
  });
}

let s40 = `<section id="section-40" class="section-card">
<h2>Section 40: Interview Preparation</h2>
<p>Comprehensive Q&amp;A bank for Java, Selenium, framework design, coding, and scenario-based interviews. Every entry includes what the interviewer expects.</p>

<h3>Top 150 Java Questions</h3>
<h4>OOP (30 Questions)</h4>
`;

s40 += genQuestions('', qaFromList(javaOOP).map((x,i)=>({...x, q: javaOOP[i]})), 1).replace('<h3></h3>\n', '');
// Fix - genQuestions adds h3, let me build manually

function renderQA(list, start) {
  let h = '';
  list.forEach((item, i) => {
    h += qblock(start + i, item.q, item.a, item.e);
  });
  return h;
}

s40 = `<section id="section-40" class="section-card">
<h2>Section 40: Interview Preparation</h2>
<p>Comprehensive Q&amp;A bank for Java, Selenium, framework design, coding, and scenario-based interviews. Every entry includes what the interviewer expects.</p>

<h3>Top 150 Java Questions</h3>
<h4>OOP (30 Questions)</h4>
`;
s40 += renderQA(qaFromList(javaOOP), 1);

s40 += `<h4>Strings (20 Questions)</h4>\n`;
s40 += renderQA(qaFromList(javaStrings), 31);

s40 += `<h4>Collections (25 Questions)</h4>\n`;
s40 += renderQA(qaFromList(javaCollections), 51);

s40 += `<h4>Exception Handling (15 Questions)</h4>\n`;
s40 += renderQA(qaFromList(javaExceptions), 76);

s40 += `<h4>Java 8 (20 Questions)</h4>\n`;
s40 += renderQA(qaFromList(java8), 91);

s40 += `<h4>Multithreading (15 Questions)</h4>\n`;
s40 += renderQA(qaFromList(javaMT), 111);

s40 += `<h4>Coding (25 Questions)</h4>\n`;
s40 += renderQA(qaFromList(javaCoding), 126);

s40 += `<h3>Top 150 Selenium Questions</h3>
<h4>Basics (30 Questions)</h4>\n`;
s40 += renderQA(qaFromList(selBasics), 151);

s40 += `<h4>Locators (25 Questions)</h4>\n`;
s40 += renderQA(qaFromList(selLocators), 181);

s40 += `<h4>Waits (15 Questions)</h4>\n`;
s40 += renderQA(qaFromList(selWaits), 206);

s40 += `<h4>Elements (20 Questions)</h4>\n`;
s40 += renderQA(qaFromList(selElements), 221);

s40 += `<h4>Actions (10 Questions)</h4>\n`;
s40 += renderQA(qaFromList(selActions), 241);

s40 += `<h4>POM (15 Questions)</h4>\n`;
s40 += renderQA(qaFromList(selPOM), 251);

s40 += `<h4>Framework (20 Questions)</h4>\n`;
s40 += renderQA(qaFromList(selFramework), 266);

s40 += `<h4>CI/CD (15 Questions)</h4>\n`;
s40 += renderQA(qaFromList(selCICD), 286);

s40 += `<h3>Top 50 Framework Design Questions</h3>\n`;
s40 += renderQA(qaFromList(frameworkDesign), 301);

s40 += `<h3>Top 50 Coding Questions (with Solutions)</h3>\n`;
codingProblems.forEach((p, i) => {
  s40 += `<div class="qa-item">
<h4>Q${351 + i}: ${p.q}</h4>
<p><strong>Problem:</strong> ${p.q}</p>
<pre><code>${p.sol}</code></pre>
<p><strong>Explanation:</strong> ${p.exp}</p>
<p><strong>Time Complexity:</strong> ${p.tc}</p>
<p class="callout"><strong>Interviewer expects:</strong> Working code with correct complexity analysis and edge case mention.</p>
</div>
`;
});

s40 += `<h3>Top 50 Scenario-Based Questions</h3>\n`;
s40 += renderQA(qaFromList(scenarioQuestions), 401);

s40 += `<div class="callout"><strong>Preparation Tip:</strong> For each answer, practice the 60-second version (definition + example) and the 3-minute version (deep dive + trade-offs). Senior roles expect framework ownership stories.</div>
</section>`;

// ========== SECTION 41 ==========
const javaMustKnow = [
  ['What are the four OOP pillars?', 'Encapsulation, Inheritance, Polymorphism, Abstraction — foundation of Java design.'],
  ['Why is String immutable?', 'Security, thread safety, and String pool optimization; literals are shared.'],
  ['== vs .equals()?', '== compares references; .equals() compares content (when overridden).'],
  ['ArrayList vs LinkedList?', 'ArrayList: fast random access; LinkedList: fast insert/delete at ends.'],
  ['HashMap internal structure?', 'Array of buckets; hashCode → bucket; equals for collision chain.'],
  ['Checked vs unchecked exception?', 'Checked: compile-time (IOException); Unchecked: RuntimeException subclasses.'],
  ['What is method overloading?', 'Same method name, different parameters — compile-time polymorphism.'],
  ['What is method overriding?', 'Subclass redefines parent method — runtime polymorphism.'],
  ['Abstract class vs interface?', 'Abstract: state + partial impl; Interface: contract; Java 8+ defaults on interface.'],
  ['What is final keyword?', 'final class: no extend; final method: no override; final variable: no reassignment.'],
  ['What is static keyword?', 'Belongs to class not instance; shared across all objects.'],
  ['What is constructor chaining?', 'this() or super() calls another constructor in same/parent class.'],
  ['What is garbage collection?', 'JVM reclaims unreachable objects; developers don\'t free memory manually.'],
  ['What is JVM vs JRE vs JDK?', 'JVM runs bytecode; JRE = JVM + libraries; JDK = JRE + dev tools.'],
  ['What is autoboxing?', 'Automatic conversion between primitives and wrapper objects.'],
  ['Comparable vs Comparator?', 'Comparable: natural order via compareTo; Comparator: external custom sorting.'],
  ['fail-fast vs fail-safe iterator?', 'fail-fast: ConcurrentModificationException; fail-safe: works on copy.'],
  ['What is synchronized?', 'Keyword ensuring only one thread accesses block/method at a time.'],
  ['What is ThreadLocal?', 'Per-thread variable storage; useful for WebDriver in parallel tests.'],
  ['What is lambda expression?', 'Anonymous function: (params) -> body; requires functional interface.'],
  ['Stream intermediate vs terminal?', 'Intermediate (filter, map) lazy; terminal (collect, forEach) triggers execution.'],
  ['What is Optional?', 'Container avoiding null checks; orElse, orElseGet, ifPresent.'],
  ['What is try-with-resources?', 'Auto-closes AutoCloseable resources; replaces manual finally close.'],
  ['What is marker interface?', 'Empty interface tagging a class (Serializable, Cloneable).'],
  ['Hashtable vs ConcurrentHashMap?', 'Hashtable: synchronized entire map; CHM: fine-grained locking, better concurrency.'],
  ['What is diamond problem?', 'Ambiguity when two interfaces provide same default method — override required.'],
  ['What is record (Java 16+)?', 'Immutable data carrier with auto-generated equals, hashCode, toString.'],
  ['What is sealed class?', 'Restricts which classes can extend it — controlled inheritance hierarchy.'],
  ['What is var keyword?', 'Local variable type inference (Java 10+); compiler infers type.'],
  ['What is SOLID in Java context?', 'Design principles: Single responsibility, Open-closed, Liskov, Interface segregation, Dependency inversion.'],
];

const selMustKnow = [
  ['What is Selenium WebDriver?', 'W3C standard API to automate browsers via native driver bindings.'],
  ['Best locator priority?', 'ID > Name > CSS > XPath; prefer stable unique attributes.'],
  ['Implicit vs explicit wait?', 'Implicit: global find timeout; Explicit: condition-based for specific element.'],
  ['Why not Thread.sleep()?', 'Fixed delay wastes time or still fails; use explicit waits instead.'],
  ['findElement vs findElements?', 'findElement: first match or exception; findElements: list (empty if none).'],
  ['close() vs quit()?', 'close(): current window; quit(): all windows and ends WebDriver session.'],
  ['What is POM?', 'Page Object Model — each page is a class encapsulating elements and actions.'],
  ['What is Page Factory?', 'POM + @FindBy annotations; InitElements initializes lazy element proxies.'],
  ['What is StaleElementReferenceException?', 'Element detached from DOM after page refresh/update; re-find element.'],
  ['How to handle dropdown?', 'Select class: selectByVisibleText, selectByValue, selectByIndex.'],
  ['How to handle alerts?', 'switchTo().alert(); accept/dismiss/sendKeys/getText.'],
  ['How to handle frames?', 'switchTo().frame(id/index/element); defaultContent() to return.'],
  ['How to handle multiple windows?', 'getWindowHandles() loop; switchTo().window(handle).'],
  ['What is Actions class?', 'Low-level user interactions: hover, drag-drop, double-click, key combos.'],
  ['What is JavaScriptExecutor?', 'Execute JS in browser: click hidden elements, scroll, modify DOM.'],
  ['What is Selenium Grid?', 'Distributed test execution: Hub routes tests to Node browsers.'],
  ['Selenium 3 vs 4 key difference?', 'Selenium 4: W3C protocol, relative locators, DevTools, improved Grid.'],
  ['What is headless browser?', 'Browser without GUI; faster CI runs via --headless Chrome option.'],
  ['What is DataProvider?', 'TestNG annotation feeding multiple data sets to single test method.'],
  ['What is ThreadLocal WebDriver?', 'Each thread gets own driver instance for safe parallel execution.'],
  ['What is ExpectedConditions?', 'Pre-built explicit wait conditions: visible, clickable, present.'],
  ['CSS vs XPath when?', 'CSS: faster, simpler; XPath: text matching, axes traversal, complex DOM.'],
  ['What is fluent wait?', 'Explicit wait with custom polling interval and ignored exceptions.'],
  ['How to take screenshot?', 'TakesScreenshot interface: getScreenshotAs(OutputType.FILE).'],
  ['What is cross-browser testing?', 'Same tests on Chrome, Firefox, Edge via driver factory pattern.'],
  ['What is hybrid framework?', 'Combines POM + data-driven + keyword-driven + utility layers.'],
  ['What is retry analyzer in TestNG?', 'IRetryAnalyzer re-runs failed tests configurable times.'],
  ['What is listener in TestNG?', 'ITestListener hooks: onTestFailure for screenshots, reporting.'],
  ['How to run tests in parallel?', 'TestNG parallel=methods/tests/classes in suite XML + ThreadLocal driver.'],
  ['What is CI/CD for automation?', 'Maven build → Jenkins pipeline → Grid/Docker → report publish on every commit.'],
];

let s41 = `<section id="section-41" class="section-card">
<h2>Section 41: 1-Day Interview Revision Notes</h2>
<p>Condensed revision for last-day prep before Java + Selenium interviews.</p>

<h3>Top 30 Java Must-Know</h3>
${table(['Question', 'One-Line Answer'], javaMustKnow)}

<h3>Top 30 Selenium Must-Know</h3>
${table(['Question', 'One-Line Answer'], selMustKnow)}

<h3>Frequently Confused Topics</h3>
${table(['Topic', 'Key Difference'], [
  ['== vs .equals()', '== compares memory references; .equals() compares object content when overridden.'],
  ['String vs StringBuilder vs StringBuffer', 'String: immutable; StringBuilder: mutable, not thread-safe; StringBuffer: mutable, synchronized.'],
  ['ArrayList vs LinkedList', 'ArrayList: array-backed O(1) get; LinkedList: doubly-linked O(1) add at ends.'],
  ['HashMap vs Hashtable vs ConcurrentHashMap', 'HashMap: not thread-safe; Hashtable: synchronized legacy; CHM: concurrent fine-grained locks.'],
  ['Abstract Class vs Interface', 'Abstract: constructors, instance fields, partial impl; Interface: contract, multiple inheritance of type.'],
  ['Method Overloading vs Overriding', 'Overloading: same name, different params (compile-time); Overriding: same signature in subclass (runtime).'],
  ['Checked vs Unchecked Exception', 'Checked: must handle/declare (IOException); Unchecked: RuntimeException, optional handling.'],
  ['final vs finally vs finalize', 'final: keyword for constants/no override; finally: cleanup block; finalize: deprecated GC hook.'],
  ['Implicit vs Explicit vs Fluent Wait', 'Implicit: global; Explicit: condition-based; Fluent: explicit + polling + ignored exceptions.'],
  ['findElement vs findElements', 'findElement: one element or NoSuchElementException; findElements: list, never throws for empty.'],
  ['close() vs quit()', 'close(): closes current browser window; quit(): closes all windows and terminates session.'],
  ['get() vs navigate().to()', 'Both navigate to URL; navigate() also supports back, forward, refresh via history.'],
  ['POM vs Page Factory', 'POM: design pattern with manual locators; Page Factory: POM + @FindBy + InitElements initialization.'],
  ['CSS vs XPath', 'CSS: faster, readable; XPath: text(), axes, complex traversal, more flexible but slower.'],
  ['Selenium 3 vs Selenium 4', 'S4: W3C WebDriver standard, relative locators, DevTools Protocol, improved Grid architecture.'],
])}

<h3>Framework Design Quick Notes</h3>
<div class="callout">
<ul>
<li><strong>Driver management:</strong> Factory + ThreadLocal; never static shared driver in parallel.</li>
<li><strong>Reporting:</strong> Extent/Allure with screenshots on failure; attach logs and environment info.</li>
<li><strong>Parallel execution:</strong> TestNG parallel + thread-safe utilities + isolated test data.</li>
<li><strong>CI/CD:</strong> Maven profiles, Jenkins pipeline, Docker Grid, artifact reports, email/Slack notification.</li>
</ul>
</div>

<h3>50 Quick Revision Points</h3>
<ol>
<li>Java is platform-independent via JVM bytecode.</li>
<li>Objects live on heap; references on stack.</li>
<li>String pool stores literal strings for reuse.</li>
<li>HashMap allows one null key; TreeMap allows none.</li>
<li>ConcurrentHashMap does not allow null keys or values.</li>
<li>ArrayList default capacity grows by 1.5x.</li>
<li>LinkedList implements both List and Deque.</li>
<li>Iterator.remove() is safe during iteration.</li>
<li>Enhanced for-loop works on arrays and Iterable.</li>
<li>try-with-resources auto-closes Closeable objects.</li>
<li>RuntimeException includes NPE, IllegalArgumentException.</li>
<li>Custom exceptions extend Exception or RuntimeException.</li>
<li>Lambda targets functional interface with one abstract method.</li>
<li>Stream operations are lazy until terminal operation.</li>
<li>Collectors.toList() returns mutable list (Java 16+).</li>
<li>Optional.ofNullable avoids NPE in chains.</li>
<li>synchronized prevents race conditions on shared data.</li>
<li>ThreadLocal gives per-thread isolated variables.</li>
<li>ExecutorService manages thread pool lifecycle.</li>
<li>WebDriver is interface; ChromeDriver implements it.</li>
<li>By.id is fastest locator when ID is unique.</li>
<li>CSS [attribute*="val"] matches substring.</li>
<li>XPath text() matches exact element text.</li>
<li>Never mix implicit and explicit waits.</li>
<li>WebDriverWait requires Duration in Selenium 4.</li>
<li>Actions.build().perform() executes action chain.</li>
<li>JSExecutor cast: (JavascriptExecutor) driver.</li>
<li>Alert must be switched before accept/dismiss.</li>
<li>Always switch back to defaultContent from frames.</li>
<li>Store parent window handle before opening new tab.</li>
<li>Select only works on &lt;select&gt; elements.</li>
<li>File upload: sendKeys with absolute file path.</li>
<li>Headless mode: add --headless=new to ChromeOptions.</li>
<li>Capabilities set browser version and platform for Grid.</li>
<li>@FindBy lazy init re-finds stale elements on use.</li>
<li>PageFactory.initElements in page constructor.</li>
<li>BasePage holds common wait and click helpers.</li>
<li>DataProvider method returns Object[][] data.</li>
<li>ITestListener.onTestFailure for screenshot hook.</li>
<li>IRetryAnalyzer for configurable test retry.</li>
<li>parallel="methods" in TestNG suite XML.</li>
<li>thread-count controls parallel thread pool size.</li>
<li>Maven surefire plugin runs TestNG tests.</li>
<li>pom.xml scopes: compile, test, provided.</li>
<li>Jenkins pipeline: checkout → build → test → report.</li>
<li>Docker Selenium Grid: hub + chrome node containers.</li>
<li>ExtentReports: ExtentSparkReporter for HTML dashboard.</li>
<li>Log4j2 levels: DEBUG, INFO, WARN, ERROR.</li>
<li>Properties file for URL, browser, timeout config.</li>
<li>Environment variable overrides for CI pipeline flexibility.</li>
</ol>

<h3>Common Interview Mistakes (12)</h3>
<ol>
<li>Saying == compares String content (it compares references).</li>
<li>Not knowing HashMap collision handling (chaining/red-black tree).</li>
<li>Recommending Thread.sleep() for synchronization.</li>
<li>Mixing implicit and explicit waits without understanding impact.</li>
<li>Cannot explain close() vs quit() difference.</li>
<li>No real example of framework they built or maintained.</li>
<li>Overclaiming 100% automation coverage.</li>
<li>Unable to write basic coding problem on whiteboard.</li>
<li>Not mentioning ThreadLocal for parallel WebDriver.</li>
<li>Confusing Page Object Model with Page Factory.</li>
<li>No awareness of Selenium 4 W3C protocol change.</li>
<li>Blaming tool instead of explaining root cause analysis.</li>
</ol>

<h3>Interview Tips for 4+ Years Experience (10)</h3>
<ol>
<li>Lead with framework architecture before individual test examples.</li>
<li>Quantify impact: tests automated, execution time reduced, defects caught.</li>
<li>Discuss trade-offs you made (POM vs Screenplay, Extent vs Allure).</li>
<li>Prepare a debugging story: flaky test → root cause → permanent fix.</li>
<li>Mention mentoring, code reviews, and onboarding docs you created.</li>
<li>Show CI/CD ownership: pipeline you built or improved.</li>
<li>Explain parallel execution challenges and how you solved them.</li>
<li>Demonstrate Java depth beyond basic syntax — collections, streams, exceptions.</li>
<li>Ask thoughtful questions about team structure, CI maturity, test strategy.</li>
<li>Be honest about gaps; explain how you would learn quickly.</li>
</ol>

<h3>Body Language and Communication Tips (5)</h3>
<ol>
<li>Maintain eye contact and nod when interviewer explains the problem.</li>
<li>Think aloud — interviewers evaluate your problem-solving process.</li>
<li>Ask clarifying questions before jumping to code.</li>
<li>Structure answers: definition → example → trade-off → conclusion.</li>
<li>Stay calm on coding mistakes; debug systematically and communicate.</li>
</ol>

<h3>What Interviewers Look for at 4+ Years</h3>
<div class="callout">
<p><strong>Framework ownership:</strong> Did you design or significantly evolve the automation framework? Can you defend architectural decisions?</p>
<p><strong>Architectural thinking:</strong> Layer separation, design patterns, scalability for 100+ tests and parallel CI runs.</p>
<p><strong>Debugging skills:</strong> Systematic approach to flaky tests, log analysis, DevTools, root cause vs workaround.</p>
</div>
</section>`;

// ========== SECTION 42 ==========
let s42 = `<section id="section-42" class="section-card">
<h2>Section 42: Senior Automation Engineer Roadmap</h2>
<p>Career progression guide for automation engineers with ~4 years experience targeting senior and architect roles.</p>

<h3>Current Role: Automation Engineer (4 Years) — Skills Self-Assessment</h3>
${table(['Skill', 'Current Level', 'Target Level', 'Priority'], [
  ['Java', 'Intermediate', 'Advanced', 'High'],
  ['Selenium WebDriver', 'Advanced', 'Expert', 'High'],
  ['TestNG / JUnit', 'Advanced', 'Expert', 'Medium'],
  ['Cucumber BDD', 'Intermediate', 'Advanced', 'Medium'],
  ['API Testing (RestAssured)', 'Intermediate', 'Advanced', 'High'],
  ['SQL', 'Intermediate', 'Advanced', 'Medium'],
  ['CI/CD (Jenkins)', 'Intermediate', 'Advanced', 'High'],
  ['Docker', 'Beginner', 'Intermediate', 'High'],
  ['Cloud (AWS/Azure)', 'Beginner', 'Intermediate', 'Medium'],
  ['Leadership / Mentoring', 'Intermediate', 'Advanced', 'High'],
])}

<h3>Career Path 1: QA Leadership Track</h3>
<div class="ascii-diagram">
Senior Automation Engineer → Lead QA Engineer → QA Manager → Director of QA
  (4-5 yr)                  (5-7 yr)            (7-10 yr)       (10+ yr)
</div>
<p>Focus: team leadership, quality strategy, hiring, cross-functional stakeholder management, quality metrics at org level.</p>

<h3>Career Path 2: SDET Technical Track</h3>
<div class="ascii-diagram">
SDET II → SDET III → Staff SDET → Principal SDET
(4-6 yr)   (6-8 yr)    (8-12 yr)     (12+ yr)
</div>
<p>Focus: deep technical expertise, framework platforms, developer tooling, org-wide test infrastructure, technical RFCs.</p>

<h3>Career Path 3: Architecture Track</h3>
<div class="ascii-diagram">
Framework Architect → Test Architect → Engineering Manager (QA Platform)
     (5-7 yr)            (7-10 yr)              (10+ yr)
</div>
<p>Focus: system design, test platform architecture, build vs buy decisions, scaling automation for hundreds of engineers.</p>

<h3>Skills Matrix by Experience Level</h3>
${table(['Skill', 'Junior (0-2yr)', 'Mid (2-4yr)', 'Senior (4-7yr)', 'Architect (7+yr)'], [
  ['Java', 'Syntax, basics', 'OOP, collections', 'Design patterns, streams', 'Custom libraries, performance tuning'],
  ['Selenium', 'Locators, basic scripts', 'POM, waits, DataProvider', 'Framework design, Grid, CI', 'Platform decisions, tooling'],
  ['TestNG', 'Basic annotations', 'Groups, depends, listeners', 'Parallel suites, retry, reporting', 'Enterprise test strategy'],
  ['Cucumber', 'Feature files', 'Step defs, hooks', 'BDD governance, tagging', 'Org-wide BDD standards'],
  ['API Testing', 'Postman basics', 'RestAssured scripts', 'API framework layer', 'Contract testing strategy'],
  ['SQL', 'SELECT, WHERE', 'JOINs, aggregates', 'Complex queries, optimization', 'Data validation architecture'],
  ['CI/CD', 'Run existing pipeline', 'Maven, Jenkins jobs', 'Pipeline design, Docker', 'Org CI/CD platform'],
  ['Docker', 'Run containers', 'Dockerfile for tests', 'Grid in containers', 'K8s test infrastructure'],
  ['Cloud', 'Awareness', 'Run tests on cloud Grid', 'AWS/Azure services for CI', 'Cloud-native test platform'],
  ['AI Testing', 'Awareness', 'Explore AI tools', 'Integrate AI-assisted testing', 'AI test strategy at scale'],
  ['Performance', 'Awareness', 'Basic JMeter/Gatling', 'Performance test design', 'Perf engineering partnership'],
  ['Leadership', 'Individual contributor', 'Mentor juniors', 'Lead automation team', 'Org quality vision'],
  ['System Design', 'N/A', 'Basic framework layers', 'Scalable framework architecture', 'Enterprise test platform design'],
])}

<h3>Java + Selenium Skills at Each Level</h3>
<h4>Junior (0-2 years)</h4>
<ul>
<li>Basic Java: variables, loops, methods, simple OOP</li>
<li>WebDriver setup, browser launch, basic locators</li>
<li>Simple linear test scripts without framework</li>
<li>Record-and-refactor approach to build initial scripts</li>
</ul>

<h4>Mid (2-4 years)</h4>
<ul>
<li>OOP, collections, exception handling in test code</li>
<li>Page Object Model, explicit waits, TestNG annotations</li>
<li>DataProvider, basic utility classes, property files</li>
<li>Simple hybrid framework with reporting</li>
</ul>

<h4>Senior (4-7 years)</h4>
<ul>
<li>Framework design: layers, patterns, ThreadLocal driver</li>
<li>CI/CD integration, Selenium Grid, Docker basics</li>
<li>Parallel execution, retry, screenshot/logging strategy</li>
<li>Mentoring juniors, code reviews, technical documentation</li>
</ul>

<h4>Architect (7+ years)</h4>
<ul>
<li>Custom framework platforms, tooling evaluation and build vs buy</li>
<li>Performance, scalability, cross-team test infrastructure</li>
<li>API + UI + mobile unified test strategy</li>
<li>Technical leadership, RFCs, org-wide quality engineering standards</li>
</ul>

<h3>Recommended Certifications</h3>
${table(['Certification', 'Focus', 'Value'], [
  ['ISTQB Advanced Test Automation Engineer', 'Automation strategy and architecture', 'Industry-recognized QA credential'],
  ['AWS Cloud Practitioner', 'Cloud fundamentals', 'Essential for cloud-based CI/CD and Grid'],
  ['AWS Solutions Architect Associate', 'Cloud architecture', 'For test platform on AWS'],
  ['Certified Scrum Master (CSM)', 'Agile leadership', 'For lead and manager track'],
  ['Oracle Java Certification', 'Java depth', 'Validates language proficiency'],
])}

<h3>Salary Benchmarks (Indicative — 2025/2026)</h3>
${table(['Level', 'India (LPA)', 'US ($/yr)', 'Remote Global'], [
  ['Junior AE (0-2yr)', '4-8', '60K-80K', '40K-60K'],
  ['Mid AE (2-4yr)', '8-15', '80K-110K', '60K-85K'],
  ['Senior AE (4-7yr)', '15-25', '110K-150K', '85K-120K'],
  ['Lead / SDET III', '22-35', '140K-180K', '110K-150K'],
  ['Architect / Principal', '30-50+', '170K-250K+', '140K-200K+'],
])}
<p><em>Salaries vary by company type (product vs service), city, and specialization. Product companies typically pay 20-40% more at senior levels.</em></p>

<h3>Learning Resources</h3>
<h4>YouTube Channels</h4>
<ul>
<li>Naveen AutomationLabs — Selenium + Java + framework tutorials</li>
<li>Automation Step by Step — Raghav Pal, beginner to advanced</li>
<li>TestAutomationU (Applitools) — free courses on modern testing</li>
<li>Amigoscode — Java and Spring for SDET depth</li>
</ul>

<h4>Blogs and Documentation</h4>
<ul>
<li>Selenium official docs: selenium.dev/documentation</li>
<li>Baeldung — Java tutorials (collections, streams, multithreading)</li>
<li>Martin Fowler — test architecture and design patterns</li>
<li>Ministry of Testing — community articles and resources</li>
</ul>

<h4>GitHub Repositories</h4>
<ul>
<li>SeleniumHQ/selenium — official source and examples</li>
<li>angiejones/selenium-java — modern Selenium 4 examples</li>
<li>diemol/selenium-devtools-examples — Chrome DevTools protocol</li>
<li>Framework repos: search "selenium testng framework POM" for reference architectures</li>
</ul>

<h4>Books</h4>
<ul>
<li><em>Effective Java</em> — Joshua Bloch (Java best practices)</li>
<li><em>Java Concurrency in Practice</em> — Goetz et al. (multithreading)</li>
<li><em>Selenium WebDriver 3 Practical Guide</em> — Unmesh Gundecha</li>
<li><em>Continuous Delivery</em> — Humble & Farley (CI/CD mindset)</li>
</ul>

<h3>6-Week Interview Preparation Plan</h3>
${table(['Week', 'Focus', 'Daily Hours', 'Activities'], [
  ['Week 1', 'Java Core + OOP', '2-3 hrs', 'Review sections 38/41; solve 10 Java coding problems; flashcard OOP concepts'],
  ['Week 2', 'Collections + Java 8', '2-3 hrs', 'HashMap/ArrayList deep dive; 10 Stream problems; Exception handling review'],
  ['Week 3', 'Selenium Deep Dive', '2-3 hrs', 'Locators, waits, frames, alerts; build 5 page objects; review section 39'],
  ['Week 4', 'Framework + Design', '2-3 hrs', 'Draw framework architecture; practice 25 framework design questions; POM refactor exercise'],
  ['Week 5', 'Coding + Scenarios', '3 hrs', '50 coding problems timed; 25 scenario questions aloud; mock interview with peer'],
  ['Week 6', 'Mock Interviews + Revision', '2-3 hrs', 'Daily 1-hour mock; revise confused topics table; prepare 5 STAR stories from projects'],
])}

<h3>Product Company Interview Format</h3>
${table(['Round', 'Duration', 'Focus', 'Preparation Tips'], [
  ['Recruiter Screen', '30 min', 'Background, expectations, compensation', 'Prepare 2-min intro; know your numbers and notice period'],
  ['Technical Phone Screen', '45-60 min', 'Java basics, Selenium, 1-2 coding', 'Practice verbal coding; explain thought process clearly'],
  ['Coding Round', '60 min', 'Data structures, String/Array problems', 'LeetCode Easy-Medium; focus on clean code and complexity'],
  ['Automation Deep Dive', '60-90 min', 'Framework design, Selenium scenarios, debugging', 'Whiteboard your framework; prepare flaky test debug story'],
  ['System Design (Senior)', '60 min', 'Test platform architecture, CI/CD, scaling', 'Discuss driver management, parallel, reporting, Grid'],
  ['Hiring Manager', '45 min', 'Leadership, conflict resolution, roadmap', 'STAR format stories; show ownership and mentoring'],
  ['Bar Raiser / Director', '45 min', 'Culture fit, strategic thinking, vision', 'Connect testing to business quality outcomes'],
])}

<div class="callout"><strong>Action Item:</strong> Pick one career path, identify 3 skill gaps from the self-assessment table, and follow the 6-week plan. Track daily progress in a spreadsheet.</div>
</section>`;

const full = s38 + '\n' + s39 + '\n' + s40 + '\n' + s41 + '\n' + s42;
fs.writeFileSync(outPath, full, 'utf8');

const lines = full.split('\n');
const s40lines = s40.split('\n').length;
console.log('Total lines:', lines.length);
console.log('Section 40 lines:', s40lines);
console.log('Written to:', outPath);
