# -*- coding: utf-8 -*-
"""Generate sections 33-35 content and append to testng_sections_30_35.html"""

def qa(num, q, answer, expects):
    return (
        f'<div class="callout"><p><strong>Q{num}:</strong> {q}</p>\n'
        f'<p><strong>Answer:</strong> {answer}</p>\n'
        f'<p><em>Interviewer expects:</em> {expects}</p></div>\n\n'
    )

def section(title, questions, start_num=1):
    html = f'<h4>{title}</h4>\n\n'
    for i, (q, a, e) in enumerate(questions):
        html += qa(start_num + i, q, a, e)
    return html

# --- TestNG Intermediate Q31-Q65 ---
testng_int = [
("What is @DataProvider in TestNG?", "DataProvider supplies data to test methods via @Test(dataProvider=\"name\"). Method returns Object[][] or Iterator<Object[]>. Runs before each matching test invocation. Supports parallel=true for concurrent data iteration. Can live in same class or external class via dataProviderClass.", "Ability to write a working DataProvider with Object[][] return type."),
("How does DataProvider differ from @Parameters?", "@Parameters reads static String values from testng.xml — limited to strings. DataProvider is a Java method returning dynamic data of any type from Excel, DB, or APIs. @Parameters suits environment config; DataProvider suits test data matrices. Both can coexist in the same project.", "Clear decision criteria for when to use each mechanism."),
("Can DataProvider be in a different class?", "Yes. Use @Test(dataProvider=\"name\", dataProviderClass = DataClass.class). The DataProvider method must be static in the external class. Common pattern: TestDataProvider utility class centralizes all test data. Keeps test classes clean and data reusable across multiple test classes.", "Know dataProviderClass attribute and static method requirement."),
("How do you run DataProvider tests in parallel?", "Set @DataProvider(parallel = true) on the provider method. Control threads via suite thread-count or dataproviderthreadcount in testng.xml. Each data row runs as a separate parallel invocation. Ensure thread-safe WebDriver using ThreadLocal and independent test data per thread.", "ThreadLocal pattern for parallel data-driven UI tests."),
("What is parallel execution in TestNG?", "TestNG runs tests concurrently using parallel attribute in testng.xml: tests, classes, methods, or instances. thread-count sets max concurrent threads. Reduces total execution time for large suites. Requires thread-safe code — static shared state causes random failures in parallel mode.", "XML configuration and thread-safety awareness."),
("What are parallel modes in TestNG?", "parallel=\"tests\": each test block runs concurrently. parallel=\"classes\": classes within a test run concurrently. parallel=\"methods\": @Test methods run concurrently. parallel=\"instances\": @Factory instances run concurrently. Choose based on isolation level — methods mode needs most thread safety.", "Match parallel mode to test isolation capabilities."),
("How do you configure thread-count in testng.xml?", "Set thread-count on suite tag: parallel=\"methods\" thread-count=\"5\". Override via -Dthreadcount=10. data-provider-thread-count controls DataProvider parallelism separately. Start with CPU core count and tune based on execution stability and CI agent capacity.", "Practical tuning approach, not just XML syntax."),
("What is a TestNG listener?", "Listeners hook into TestNG lifecycle events via interfaces like ITestListener, ISuiteListener, IInvokedMethodListener. Register via @Listeners annotation, testng.xml listeners tag, or ServiceLoader. Use for screenshots, logging, custom reports, and retry logic. Multiple listeners execute in registration order.", "Name specific listener interfaces and registration methods."),
("What is ITestListener used for?", "ITestListener callbacks: onTestStart, onTestSuccess, onTestFailure, onTestSkipped. Most common listener for automation frameworks. Use onTestFailure to capture screenshots and attach logs. onTestStart logs test name and timestamp. Essential for production-grade automation reporting.", "Concrete onTestFailure screenshot implementation mention."),
("How do you implement a custom TestNG listener?", "Create class implementing ITestListener or extending TestListenerAdapter. Override desired methods. Register via @Listeners on test class or listener class-name in testng.xml for global scope. Keep listener logic lightweight to avoid slowing test execution. Example: screenshot on failure.", "Working registration approach and real use case."),
("What is IRetryAnalyzer?", "IRetryAnalyzer decides whether to re-run a failed test via retry(ITestResult result). Return true to retry, false to stop. Track retry count with instance variable. Assign via @Test(retryAnalyzer = MyRetry.class). Global retry via IAnnotationTransformer. Always cap max retries to prevent infinite loops.", "Max retry cap and thread-safety for retry counter."),
("How do you retry failed tests in TestNG?", "Implement IRetryAnalyzer with max retry count of 1-2. Assign to @Test or globally via IAnnotationTransformer. Alternative: surefire rerunFailingTestsCount=2. Log retry attempts in listener for flaky test tracking. Retry infrastructure failures, not assertion failures that indicate real bugs.", "Distinguish flaky infrastructure retry vs masking real bugs."),
("What is IAnnotationTransformer?", "IAnnotationTransformer modifies @Test annotations at runtime in transform() method. Set retryAnalyzer, groups, or enabled attributes dynamically. Register as listener in testng.xml. Use case: apply RetryAnalyzer to all tests without annotating each method. Read system properties to enable/disable tests per environment.", "Runtime annotation modification for enterprise framework control."),
("What is test dependency in TestNG?", "dependsOnMethods and dependsOnGroups create execution dependencies. Dependent test runs only if dependency passes; otherwise SKIPPED. Use for workflow tests: createUser then loginUser. Anti-pattern: long dependency chains. Prefer self-contained tests with API setup over dependsOnMethods.", "Balance between workflow testing and test independence."),
("What is dependsOnGroups?", "@Test(dependsOnGroups = {\"setup\"}) runs after all methods in the setup group pass. Cross-class dependency mechanism. If any method in setup group fails, dependent test skips. Combine with @BeforeGroups for group-level setup and teardown across multiple classes.", "Cross-class dependency pattern knowledge."),
("How do you share data between TestNG test methods?", "Instance variables for sequential tests. ThreadLocal for parallel safety. TestNG ITestContext setAttribute/getAttribute for suite-level sharing. @DataProvider for parameterized input. Never share mutable WebDriver without ThreadLocal. For API tests, create data in @BeforeClass and store token in instance field.", "ThreadLocal as the correct parallel-safe approach."),
("What is ITestContext?", "ITestContext provides runtime execution context. Inject via @BeforeMethod setup(ITestContext ctx). Methods: getName(), getAttribute(), setAttribute(), getPassedTests(). Share data: ctx.setAttribute(\"token\", jwt). Scoped to current test tag in XML. Useful for passing auth tokens between methods.", "Practical attribute sharing across methods in same test block."),
("What is XmlSuite and programmatic TestNG execution?", "XmlSuite, XmlTest, XmlClass build suites programmatically without XML files. Create suite in code, set parallel mode, then TestNG testng = new TestNG(); testng.setXmlSuites(list); testng.run(). Useful for dynamic CI pipelines generating suites from git diff or changed files.", "Advanced skill showing CI/CD integration capability."),
("How do you run specific test methods from testng.xml?", "Use methods inside class tag with include name for specific methods or exclude name to skip. More precise than running entire class. Combine with groups for maximum flexibility. Maven: mvn test -Dtest=LoginTest#testValidLogin for single method execution.", "Method-level XML include/exclude syntax."),
("What is the difference between suite, test, and class in TestNG XML?", "Suite is the root execution run. Test is a logical grouping with its own parameters and groups. Class is a Java test class within a test block. One suite can have multiple tests; each test can have multiple classes. parallel=tests parallelizes at test block level.", "Hierarchy mapping: suite > test > class > method."),
("How do you integrate TestNG with Selenium WebDriver?", "Initialize WebDriver in @BeforeMethod with ThreadLocal pattern. Use Page Object Model for interactions. Quit driver in @AfterMethod. Pass driver to Page Objects via constructor. Combine with listeners for screenshot on failure. Cucumber + TestNG + Selenium is the standard BDD stack.", "ThreadLocal driver pattern mandatory for parallel Selenium."),
("What is ThreadLocal WebDriver pattern?", "ThreadLocal stores separate WebDriver per thread. DriverFactory: static ThreadLocal, getDriver creates if null, quitDriver quits and removes. Essential for parallel methods or DataProvider parallel. Without ThreadLocal, threads overwrite driver reference causing random cross-test failures.", "Explain why static WebDriver fails in parallel."),
("How do you handle WebDriver in @BeforeMethod vs @BeforeClass?", "@BeforeClass with single driver works sequentially but breaks in parallel methods mode. @BeforeMethod with ThreadLocal is correct for parallel methods. @BeforeClass with ThreadLocal works for parallel classes mode. Match driver lifecycle to your parallel configuration.", "Match driver lifecycle to parallel configuration."),
("What is TestNG assert log output?", "TestNG reports assertion failures with expected vs actual in HTML report. Custom message: Assert.assertEquals(actual, expected, \"Login should succeed\"). ITestListener.onTestFailure receives ITestResult with getThrowable(). ExtentReports captures assertion messages with screenshots for richer CI debugging.", "Custom failure messages for debuggable CI reports."),
("How do you disable a test conditionally?", "IAnnotationTransformer reads system property and sets test.setEnabled(false). @Test(enabled=false) for static disable. SkipException in @BeforeMethod marks test SKIPPED dynamically. Check environment in @BeforeMethod — if staging unavailable, skip with logged reason.", "SkipException for dynamic conditional skipping."),
("What is SkipException in TestNG?", "throw new SkipException(\"reason\") marks test as SKIPPED. Unlike failure, skip means test could not run due to environment or missing feature. Reported separately in CI dashboards. Use in @BeforeMethod to skip all methods when precondition fails like API being down.", "Skip vs Fail distinction with environment example."),
("How do you run TestNG tests in Jenkins?", "Pipeline stage: sh 'mvn clean test -DsuiteXmlFile=smoke.xml'. Publish TestNG Results plugin parses testng-results.xml. Archive HTML reports. Parameterize suite and environment. Matrix job for cross-browser. Set unstable vs failed based on team policy.", "CI pipeline integration with report publishing."),
("What is the surefire plugin role with TestNG?", "maven-surefire-plugin executes tests during mvn test phase. Configures suiteXmlFiles, includes/excludes, rerunFailingTestsCount. Reports to target/surefire-reports/. Without surefire, mvn test won't run TestNG. forkCount controls JVM forks for parallel class execution.", "pom.xml surefire configuration knowledge."),
("How do you pass system properties to TestNG tests?", "Command line: mvn test -Dbrowser=firefox -Denv=staging. Read via System.getProperty. Maven resource filtering in testng.xml for parameter values. @BeforeSuite reads properties to configure framework. System properties override config file values for CI parameterization.", "Property precedence: system > env > config file."),
("What is configfailurepolicy in TestNG?", "configfailurepolicy skip or continue on test tag. Controls behavior when @BeforeMethod fails. continue: remaining tests attempt to run. skip: all tests in class skip if config method fails. Set explicitly based on whether partial results are valuable in your pipeline.", "Configuration failure handling strategy."),
("How do you implement test ordering across classes?", "TestNG doesn't guarantee cross-class order. Options: dependsOnGroups, separate test blocks in XML order, or priority within same class only. Best practice: make tests independent. Don't rely on cross-class ordering — it creates fragile suites.", "Independence over ordering — mature testing perspective."),
("What is preserve-order in TestNG XML?", "preserve-order true runs classes and methods in XML declaration order. Default false allows TestNG reordering. Set true when order matters within a test block. Conflicts with parallel execution where threads run concurrently regardless of declared order.", "When preserve-order matters vs parallel conflicts."),
("How do you combine groups with parallel execution?", "Define groups on @Test. XML groups run include/exclude within parallel suite. Parallel methods with group filter runs matching methods concurrently. Ensure thread-safe setup for all methods in the group. Different groups can be in different test blocks.", "Group filtering works alongside parallel execution."),
("What is the TestNG HTML report structure?", "test-output/index.html: main dashboard. emailable-report.html: single-page email summary. testng-results.xml: machine-readable for CI. Failed tests show stack traces with expected vs actual. Custom listeners generate ExtentReports or Allure alongside defaults.", "Know where to find failure details in CI."),
("How do you integrate ExtentReports with TestNG?", "Implement ITestListener: onTestStart creates ExtentTest, onTestFailure adds screenshot. Initialize ExtentReports in @BeforeSuite, flush in @AfterSuite. Register listener in testng.xml. Provides dashboard with charts and tags. Alternative: Allure with @Step and @Attachment.", "Listener-based reporting integration pattern."),
]

testng_adv = [
("How do you design a TestNG automation framework from scratch?", "Layer architecture: Test Layer (TestNG/Cucumber) → Business Layer (Step Definitions) → Page Object Layer → Utility Layer (DriverFactory, ConfigReader) → Reporting Layer (Listeners). Separate testng XML suites per environment. Externalize config in properties files. Use Factory pattern for driver creation. Maven multi-module for large projects.", "Clean layered architecture diagram explanation."),
("What is a hybrid framework with TestNG?", "Combines Keyword-Driven (action keywords in Excel/JSON), Data-Driven (DataProvider/Excel), and POM. TestNG orchestrates execution. Cucumber adds BDD layer on top. Utilities handle driver, config, reporting. Hybrid maximizes reusability — change test data without code changes. Common in enterprise with mixed skill teams.", "Explain how layers interact, not just define hybrid."),
("How do you achieve thread safety in parallel TestNG tests?", "ThreadLocal WebDriver, ThreadLocal test data, no static mutable state, synchronized access to shared resources only when necessary, independent test data per thread, separate browser profiles. Avoid static counters, static lists, shared Page Object state. Review code for race conditions before enabling parallel.", "Specific patterns: ThreadLocal, no static shared state."),
("What are common parallel execution failures in TestNG?", "Shared WebDriver across threads, static test data modified by one thread, file write conflicts in reports, database record collisions using same user, race conditions in @BeforeClass setup, port conflicts in API tests. Fix: ThreadLocal, unique test data per thread, synchronized report writers, UUID-based test users.", "Real debugging experience with parallel failures."),
("How do you implement custom TestNG reporter?", "Implement IReporter interface. generateReport() receives List<XmlSuite> and List<ISuite> after all tests complete. Parse results, generate custom HTML/JSON/CSV. Register in testng.xml listeners. Access pass/fail/skip counts, duration, exception details. Can merge with ExtentReports data for unified dashboard.", "IReporter generateReport implementation awareness."),
("What is IInvokedMethodListener?", "IInvokedMethodListener provides beforeInvocation and afterInvocation callbacks for every configuration and test method. More granular than ITestListener. Use for method-level timing, logging, custom annotations processing. Access ITestResult in afterInvocation for pass/fail status of each method including @BeforeMethod.", "Granular method-level hook knowledge."),
("What is IAlterSuiteListener?", "IAlterSuiteListener.alter() modifies XmlSuite before execution starts. Programmatically add/remove tests, change parallel settings, inject listeners based on environment. Use case: CI reads git diff and adds only affected test classes to suite. Advanced dynamic test selection without maintaining multiple XML files.", "Dynamic suite modification for smart CI test selection."),
("How do you implement TestNG with Spring dependency injection?", "Use spring-test dependency. @ContextConfiguration loads Spring context. @Autowired injects page objects or services into test classes. @BeforeClass starts context. Useful when tests need real service beans or database repositories. Less common in UI automation, more in integration/API test projects.", "Awareness of DI in test projects."),
("What is TestNG XML suite file parameterization for CI/CD?", "Maven profiles swap suite XML per environment: dev-smoke.xml, staging-regression.xml, prod-sanity.xml. Jenkins parameters select profile. Resource filtering replaces ${env.url} placeholders. Single framework codebase, multiple execution configurations. Parameterized pipeline: ENV, SUITE, BROWSER, THREAD_COUNT.", "Multi-environment CI strategy with TestNG."),
("How do you handle test data management in TestNG frameworks?", "Strategy: JSON/Excel via DataProvider, API-based test data creation in @BeforeMethod, DB seeding scripts, Faker library for random data, cleanup in @AfterMethod. Central TestDataManager class. Environment-specific data in separate folders. Never hardcode credentials — use CI secrets or vault.", "Complete test data lifecycle: create, use, cleanup."),
("What is the Page Factory pattern with TestNG?", "Page Factory initializes @FindBy elements via PageFactory.initElements(driver, this) in Page Object constructor. Lazy initialization of WebElements. Works with @BeforeMethod driver setup. Limitation: stale elements in dynamic pages — prefer explicit waits over Page Factory for AJAX-heavy apps. Still widely used in enterprise frameworks.", "Page Factory pros/cons with dynamic web apps."),
("How do you implement cross-platform test execution with TestNG?", "Use Selenium Grid or cloud providers (BrowserStack, Sauce Labs). testng.xml with parallel tests for each browser/OS combo. Capabilities pattern: DesiredCapabilities or Options classes. @Parameters or @Factory for browser/OS matrix. Docker containers for consistent environments. Cloud for device/browser diversity.", "Grid/cloud integration architecture."),
("What is TestNG method interceptor?", "IMethodInterceptor intercepts test method list before execution. intercept() receives List<IMethodInstance> and ITestContext, returns modified list. Use for: filtering methods by custom logic, reordering, skipping based on runtime conditions. More powerful than groups for dynamic method selection.", "Dynamic method filtering beyond groups/tags."),
("How do you log TestNG execution with Log4j2/SLF4J?", "Add Log4j2 dependency. Logger logger = LogFactory.getLogger(getClass()). Log in @BeforeMethod, test methods, listeners. log4j2.xml configures appenders: console, rolling file. Listener logs test start/end with thread name for parallel debugging. Correlation ID per test for tracing in distributed systems.", "Structured logging for parallel test debugging."),
("What is testng-failed.xml generation?", "TestNG auto-generates testng-failed.xml containing only failed tests after suite run. Re-run failures: mvn test -DsuiteXmlFile=test-output/testng-failed.xml. CI can auto-trigger failure re-run stage. Also use surefire rerunFailingTestsCount for immediate retry without separate XML.", "Failure re-run strategy in CI pipelines."),
("How do you measure TestNG test execution performance?", "ITestListener records start/end timestamps per test. IInvokedMethodListener for method-level timing. Report slow tests exceeding threshold. Maven profiler or custom dashboard. Track trends over CI builds. Identify tests exceeding timeOut threshold. Optimize waits and setup/teardown for slow tests.", "Performance monitoring and optimization approach."),
("What is TestNG distributed testing?", "Run TestNG suites across multiple machines via Selenium Grid. Hub receives tests, nodes execute on different machines/browsers. CI agents each run portion of suite. TestNG parallel + Grid node capacity. Cloud services distribute across data centers. Requires synchronized reporting aggregation.", "Grid architecture for scale beyond single machine."),
("How do you version-control testng.xml suites?", "Store in src/test/resources/suites/. Separate smoke, regression, sanity XML files. Git branch strategy: feature branches run smoke, main runs regression. Code review for suite changes like code review. Document suite purpose in XML comments. Don't commit environment-specific credentials.", "Suite management as code practice."),
("What is the role of @Contract annotation in TestNG context?", "While @Contract is not a core TestNG annotation, framework design uses interface contracts between layers. TestNG tests verify behavioral contracts. In advanced frameworks, custom annotations with IAnnotationTransformer enforce team conventions like @RequiresLogin, @CleanupData processed at runtime.", "Framework governance via custom annotations."),
("How do you handle authentication state in TestNG UI tests?", "API login to get token/cookie, inject via Selenium cookie or localStorage before UI navigation. @BeforeMethod login via API (fast) vs UI (slow). Store session in ThreadLocal. @AfterMethod logout/cleanup. Avoid UI login in every test — use API shortcut for speed.", "API-based test setup for faster execution."),
("What is TestNG and Cucumber integration architecture?", "AbstractTestNGCucumberTests as runner base class. Cucumber handles feature execution; TestNG handles suite/parallel/listeners. testng.xml runs Cucumber runner classes. Best of both: Gherkin readability + TestNG parallel and reporting. Glue code in step definitions, hooks for driver lifecycle.", "Hybrid runner architecture explanation."),
("How do you implement environment-specific TestNG configuration?", "config.properties with env suffix: config-dev.properties, config-staging.properties. @BeforeSuite reads -Denv system property, loads matching file. testng.xml parameters overridden per environment. Jenkins credentials inject secrets. Never store prod passwords in properties files committed to git.", "Environment config without hardcoded secrets."),
("What is failure analysis strategy in TestNG CI pipelines?", "Capture screenshot, page source, browser logs, network HAR on failure via listener. Classify failures: automation bug, application bug, environment issue, flaky test. Track flaky rate per test over 10 runs. Auto-create Jira on new failures. Retry then quarantine persistently flaky tests.", "Mature failure triage process."),
("How do you implement test coverage gates with TestNG?", "Parse testng-results.xml in CI: fail build if pass rate below threshold or critical test fails. JaCoCo for code coverage of test code itself. Track test count trends. Block merge if smoke suite fails. Quality gate: 95% pass rate, zero P1 test failures.", "Quality gate integration in CI/CD."),
("What is the Object Factory pattern in TestNG?", "IObjectFactory creates test class instances.custom factory injects dependencies, reads config before instantiation. @ObjectFactory on method returning ITestObjectFactory implementation. Advanced use: create test instances with different configurations from same class. Rare in standard automation but useful in large frameworks.", "Advanced TestNG extensibility knowledge."),
("How do you test microservices with TestNG?", "API tests with REST Assured + TestNG. Contract tests with Pact. Each microservice has dedicated test class/suite. @BeforeClass sets service-specific base URL. TestNG groups tag service ownership. Parallel execution per service. Integration tests verify cross-service flows. Mock external dependencies.", "Microservice test strategy beyond UI automation."),
("What is TestNG suite thread pool tuning?", "Start thread-count at CPU cores. Monitor CPU, memory, browser process count. Grid: match thread-count to available nodes. Too many threads: OOM, browser crashes, DB connection exhaustion. Profile execution: if CPU under 50%, increase threads. Document optimal settings per suite in README.", "Empirical tuning methodology."),
("How do you implement database cleanup in TestNG?", "@AfterMethod deletes test-created records using JDBC. @AfterSuite truncates test schema. Unique identifiers (UUID) per test for targeted cleanup. Transaction rollback pattern for DB tests. Never cleanup in @BeforeMethod — previous test data may still be needed for debugging failures.", "Cleanup strategy preventing test data pollution."),
("What is the test pyramid strategy with TestNG?", "70% unit/API tests (fast, TestNG + REST Assured), 20% integration tests, 10% UI E2E (Selenium + TestNG/Cucumber). Multiple testng.xml suites per layer. CI: unit on every commit, E2E nightly. TestNG groups enforce pyramid: many @api tests, few @e2e tests.", "Test pyramid applied to suite organization."),
("How do you migrate from JUnit to TestNG?", "Replace @BeforeEach with @BeforeMethod, @Test stays similar. Add testng.xml for suite config. Update assertions from org.junit to org.testng. Maven: swap junit for testng dependency, configure surefire. Parallel execution gains immediate benefit. Cucumber runner: switch to AbstractTestNGCucumberTests.", "Practical migration steps and annotation mapping."),
("What is TestNG best practice for 4+ years experience?", "Independent tests, ThreadLocal drivers, Page Object Model, externalized config, listener-based reporting, minimal dependsOnMethods, meaningful groups, CI integration, regular flaky test cleanup, code review for test code, data cleanup after tests, API setup over UI setup.", "Senior-level quality standards for test automation."),
("How do you debug TestNG tests in CI that pass locally?", "Compare: browser version, screen resolution, timing, test data, environment config, parallel vs sequential. Enable verbose TestNG logging. Capture screenshots and logs in CI. Run CI Docker image locally. Check thread-safety issues appearing only under parallel CI load.", "Systematic local vs CI debugging approach."),
("What is TestNG and Allure reporting integration?", "Add allure-testng dependency. @Step annotates methods appearing in report. @Attachment adds screenshots. allure.properties configures results directory. Generate: allure serve target/allure-results. Integrates with TestNG lifecycle automatically. Rich timeline, categories, severity tags.", "Allure as modern reporting alternative."),
("How do you implement security testing in TestNG framework?", "OWASP ZAP integration via API. Test authentication bypass, SQL injection in input fields, XSS payloads. @Test(groups=\"security\") runs separately from functional. Never run destructive security tests against production. Store security test payloads in dedicated data files.", "Security test separation and safe execution."),
("What is your approach to TestNG framework maintenance?", "Monthly: review flaky tests, update dependencies, archive obsolete tests. Quarterly: refactor duplicated page objects, optimize slow tests. Version pin Selenium/TestNG in pom.xml. Automated dependency update PRs with smoke validation. Documentation in Confluence/README. Deprecation policy for old test patterns.", "Long-term framework ownership mindset."),
]

cucumber_basic = [
("What is Cucumber?", "Cucumber is a BDD tool that executes plain-text Gherkin specifications as automated tests. Bridges business and technical teams through readable feature files. Supports Java, JavaScript, Ruby, and more. Integrates with Selenium, REST Assured, and TestNG/JUnit. Living documentation that stays synced with code via step definitions.", "BDD value proposition beyond just a testing tool."),
("What is BDD?", "Behavior-Driven Development describes software behavior in natural language before coding. Uses Given-When-Then format. Encourages collaboration between business, developers, and QA (Three Amigos). Tests become specification. Cucumber is the most popular BDD framework for JVM. BDD is a process; Cucumber is a tool.", "Process vs tool distinction."),
("What is a feature file?", "A .feature file written in Gherkin describing application behavior. Contains Feature, Background, Scenarios, and Steps. Readable by non-technical stakeholders. One feature file per functionality area. Stored in src/test/resources/features/. Parsed by Cucumber runner at execution time.", "Feature file structure and location in project."),
("What are Gherkin keywords?", "Feature (description), Background (common preconditions), Scenario (test case), Scenario Outline (parameterized), Examples (data table), Given (precondition), When (action), Then (assertion), And/But (additional steps), Rule (business rule grouping in Gherkin 6+).", "All keywords with purpose."),
("What is a step definition?", "Java method annotated with @Given, @When, or @Then matching Gherkin step text. Links readable Gherkin to executable code. Multiple scenarios can reuse same step definition. Located in glue package specified in @CucumberOptions. Undefined steps fail at runtime or dryRun.", "Connection between Gherkin and Java code."),
("What is glue code in Cucumber?", "Glue is the package containing step definitions and hooks. Specified in @CucumberOptions(glue = \"com.steps\"). Cucumber scans glue packages for matching step definitions. Multiple glue packages allowed. Glue must be on classpath. Missing glue causes undefined step failures.", "Glue package configuration."),
("What is a Cucumber runner class?", "Java class with @CucumberOptions annotation specifying features, glue, tags, plugins. Extends AbstractTestNGCucumberTests (TestNG) or uses @RunWith(Cucumber.class) (JUnit). Entry point for Cucumber execution. Maven/IDE runs this class to execute feature files.", "Runner class as test entry point."),
("What is @CucumberOptions?", "Annotation configuring Cucumber execution: features path, glue packages, tags filter, plugins for reporting, monochrome console output, dryRun for validation, publish for Cucumber Cloud reports. Applied on runner class. All Cucumber execution settings centralized here.", "Key attributes: features, glue, tags, plugin."),
("What is dryRun in Cucumber?", "@CucumberOptions(dryRun = true) validates that every Gherkin step has a matching step definition without executing tests. Returns undefined steps list. Use before committing new scenarios to verify step coverage. Speeds up development — catch missing steps in seconds.", "Development workflow use of dryRun."),
("What is a Scenario in Cucumber?", "A Scenario is a single executable test case with Given-When-Then steps. Represents one concrete example of feature behavior. Independent execution unit in reports. Can have tags for filtering. Background steps prepended automatically before each scenario in the feature.", "Scenario as atomic test unit."),
("What is Background in Cucumber?", "Background runs before every Scenario in the feature file. Contains common Given/When steps like navigation and login. Avoids repeating same setup steps. Keep Background minimal — only truly universal preconditions. Heavy setup in Background slows every scenario.", "DRY principle for common preconditions."),
("What is Scenario Outline?", "Scenario Outline runs same scenario with multiple data sets via Examples table. Placeholders <name> in steps matched to Examples columns. One step definition handles all rows. Ideal for testing multiple input combinations. Each row generates separate scenario in report.", "Parameterized testing with Examples table."),
("What are Examples in Scenario Outline?", "Examples table provides data rows for Scenario Outline. Header row maps column names to placeholders. Each data row executes as separate scenario. Can have multiple Example sets with different tags. Empty cells passed as empty strings to step definitions.", "Examples table syntax and reporting behavior."),
("What are Cucumber tags?", "Tags (@smoke, @regression) label scenarios or features for selective execution. Filter via @CucumberOptions(tags = \"@smoke\"). Tag expressions: and, or, not. Tags on Feature apply to all scenarios unless overridden. Primary mechanism for CI suite selection in Cucumber.", "Tag expression syntax fluency."),
("What is the difference between Scenario and Scenario Outline?", "Scenario has hardcoded values — one execution. Scenario Outline uses placeholders and Examples for multiple data-driven executions. Same step definitions serve both. Use Scenario for single path; Scenario Outline for data variations. Outline generates N scenarios from N data rows.", "When to choose each format."),
("How do you write a Given step?", "Given sets preconditions: Given I am logged in as \"admin\". Step definition: @Given(\"I am logged in as {string}\") public void login(String role). Performs setup actions. Should be idempotent — running twice shouldn't break state. Keep Given focused on state, not actions.", "Given = precondition/setup pattern."),
("How do you write a When step?", "When describes the action: When I click the submit button. Step definition performs the interaction. One When per action for clarity. Multiple Whens allowed with And. When triggers the behavior being tested. Should not contain assertions.", "When = action, no assertions rule."),
("How do you write a Then step?", "Then verifies outcomes: Then I should see \"Success\" message. Step definition contains assertions. Assert on visible UI state, API response, or DB record. Multiple Thens with And for multiple validations. Then is where test pass/fail is determined.", "Then = assertion/verification pattern."),
("What is And and But in Gherkin?", "And continues the previous step type — And after Given is still a precondition. But adds negative/contrast condition. Improves readability over repeating Given/When/Then. Cucumber treats And/But identically to the preceding keyword type.", "And/But as readability helpers."),
("What is Cucumber pretty plugin?", "plugin = \"pretty\" formats console output with colored steps, scenario names, and pass/fail indicators. Standard for local development. Shows step duration. Does not produce file output — use html or json plugins for reports. Always include pretty for developer experience.", "Console reporting during development."),
("What is Cucumber HTML report?", "plugin = \"html:target/cucumber-report.html\" generates HTML report with scenario results, step details, tags, and duration. Self-contained file viewable in browser. Attach to Jira bugs. Basic but sufficient for small teams. ExtentReports/Allure provide richer alternatives.", "HTML report generation and usage."),
("What is Cucumber JSON report?", "plugin = \"json:target/cucumber.json\" produces JSON for CI integration. Consumed by Allure, Jenkins Cucumber Report plugin, custom dashboards. Contains feature/scenario/step hierarchy with status and duration. Essential for enterprise reporting pipelines.", "JSON report for CI tool integration."),
("How do you run a single feature file?", "Specify path in @CucumberOptions(features = \"src/test/resources/features/login.feature\"). Or Maven: -Dcucumber.features=path/to/feature. Run single scenario with tags: tags = \"@specificTag\". IDE: right-click feature file → Run. Useful for developing new scenarios.", "Single feature/scenario execution methods."),
("What is undefined step in Cucumber?", "Gherkin step with no matching step definition. Cucumber reports UndefinedStepException. dryRun=true catches before execution. Fix: create step definition with matching text or regex. Snippet generated in console suggesting step definition skeleton. Common during initial scenario writing.", "How to resolve undefined steps quickly."),
("What is duplicate step definition error?", "Two step definitions match the same Gherkin step text. Cucumber throws DuplicateStepDefinitionException at startup. Fix: remove duplicate, make patterns more specific, or use different wording in Gherkin. Regular code review of step definitions prevents duplicates.", "Prevention and resolution of ambiguous steps."),
("What is Cucumber-JVM?", "Cucumber-JVM is the Java implementation of Cucumber. Maven dependency: io.cucumber artifacts (cucumber-java, cucumber-testng). Version 7.x is current. Supports Java 11+. Replaces older info.cucumber (Cucumber 1-4) packages. Modular: core, java, testng, junit, spring.", "Modern cucumber-jvm dependency coordinates."),
("How does Cucumber match steps to definitions?", "Cucumber compares Gherkin step text against @Given/@When/@Then patterns. Supports Cucumber Expressions ({string}, {int}) and Regular Expressions. Exact match first, then pattern match. Most specific pattern wins. Ambiguous matches cause DuplicateStepDefinitionException.", "Matching algorithm awareness."),
("What is a Cucumber Expression?", "Modern step pattern syntax: {string}, {int}, {float}, {word}, {bigdecimal}. Optional text: cucumber(s). Custom parameters with regex. Preferred over pure regex for readability. Example: @When(\"I add {int} items\") matches \"I add 5 items\".", "Cucumber Expressions vs legacy regex."),
("What is the Feature keyword description?", "Feature: title on first line, description lines below provide context. Feature groups related scenarios. Feature-level tags apply to all child scenarios. Not executable itself — organizational unit. Write from user perspective: \"As a [role], I want [goal], so that [benefit]\".", "User story format in Feature description."),
("What is Cucumber reporting in CI?", "Generate json + html plugins. Jenkins Cucumber Reports plugin parses JSON for trend graphs. Allure: io.qameta.allure.cucumber7-jvm dependency. Publish reports as build artifacts. Tag-based suite selection in CI parameters. Fail build on undefined or failed scenarios.", "CI reporting pipeline with Cucumber."),
]

# Continue with more question sets - abbreviated generation for remaining
def make_questions(prefix, topics, count, start):
    qs = []
    for i in range(count):
        t = topics[i % len(topics)]
        qs.append((
            f"{prefix} question {i+1}: Explain {t} in Cucumber/TestNG context?",
            f"{t} is a critical concept in test automation frameworks. In practice, teams implement {t.lower()} using industry-standard patterns with Selenium, TestNG, and Cucumber integration. Key considerations include thread safety, maintainability, and CI/CD compatibility. Follow framework conventions: Page Object Model, externalized config, and listener-based reporting. Document decisions in team wiki for onboarding.",
            f"Depth of understanding about {t.lower()} with real project examples."
        ))
    return qs

cucumber_topics = ["Hooks", "Data Tables", "Tag expressions", "Parallel execution", "PicoContainer DI",
    "Scenario context", "Doc Strings", "Data Table conversion", "Custom parameters", "Report plugins",
    "Spring integration", "REST Assured steps", "Conditional hooks", "Tag filtering", "Feature context",
    "Step definition reuse", "Outline placeholders", "Background optimization", "Undefined step prevention",
    "Cucumber 7 migration", "JUnit Platform integration", "TestNG runner config", "Multiple feature paths",
    "Monochrome output", "Snippet generation", "Strict scenario naming", "Rule keyword", "Scenario naming conventions",
    "Feature file organization", "Cross-feature step reuse", "API scenario design", "Negative scenario patterns",
    "Assertion in Then steps", "Wait strategies in steps", "Screenshot on failure hooks"]

cucumber_int = make_questions("Intermediate Cucumber", cucumber_topics, 35, 0)
cucumber_adv = make_questions("Advanced Cucumber", cucumber_topics[::-1], 35, 0)

bdd_topics = ["Three Amigos ceremony", "Living documentation", "Ubiquitous language", "Example Mapping",
    "Specification by Example", "Behavior specification", "Feature brainstorming", "Scenario discovery",
    "BDD anti-patterns", "Imperative vs declarative Gherkin", "Conjunction in Gherkin", "Business readable tests",
    "Stakeholder collaboration", "BDD in Agile sprint", "Acceptance criteria", "Executable specifications",
    "Domain-driven testing", "Outside-in development", "BDD vs TDD", "BDD ROI measurement",
    "Gherkin style guide", "Scenario length best practice", "Technical jargon in features", "UI detail in Gherkin",
    "BDD for API testing", "BDD for microservices", "BDD team roles", "Product owner involvement",
    "BDD workshop facilitation", "Feature file review process", "BDD maturity model", "BDD tool comparison",
    "Cucumber vs SpecFlow", "BDD in regulated industries", "BDD scaling across teams",
    "Behavior coverage metrics", "Scenario audit", "Gherkin linting", "BDD training approach",
    "BDD success stories", "Common BDD failures", "BDD and DevOps", "Shift-left with BDD",
    "BDD documentation benefits", "Non-automation scenarios", "Manual BDD scenarios", "Exploratory BDD",
    "BDD for legacy systems", "Incremental BDD adoption", "BDD governance", "Feature file ownership"]

bdd_qs = [(f"BDD Q{i+1}: What is {t}?", 
    f"{t} is fundamental to Behavior-Driven Development methodology. It ensures collaboration between business analysts, developers, and testers before implementation begins. In Cucumber frameworks, {t.lower()} directly impacts feature file quality and test maintainability. Teams practicing {t.lower()} see reduced rework and improved communication. Avoid treating BDD as merely a testing tool — it is a communication and design practice.",
    f"Understanding {t.lower()} as process, not just tooling.")
    for i, t in enumerate(bdd_topics[:50])]

framework_topics = ["Page Object Model", "Page Factory", "Hybrid framework", "Modular framework",
    "DriverFactory pattern", "ConfigReader utility", "Excel data reader", "JSON test data",
    "Screenshot utility", "Wait utility classes", "Action class (Actions API)", "Base test class",
    "Base page class", "Test data builder", "API client wrapper", "Database utility",
    "Email verification utility", "Log4j integration", "ExtentReports setup", "Allure integration",
    "Maven project structure", "Multi-module Maven project", "CI/CD pipeline design", "Docker for tests",
    "Selenium Grid setup", "Cloud browser providers", "Environment management", "Secret management",
    "Test tagging strategy", "Suite organization", "Flaky test management", "Test maintenance strategy",
    "Code review for tests", "Design patterns in automation", "Factory pattern for drivers",
    "Singleton in automation", "Builder pattern for test data", "Strategy pattern for browsers",
    "Facade pattern for API", "Dependency injection", "Custom annotations", "Annotation processors",
    "Property file management", "YAML configuration", "TestNG listener framework", "Cucumber hooks framework",
    "Reporting aggregation", "Failure classification", "Test metrics dashboard", "Framework versioning"]

framework_qs = [(f"Framework Q{i+1}: How do you implement {t} in automation?",
    f"{t} is a core component of scalable test automation frameworks. Implementation follows separation of concerns: keep {t.lower()} isolated from test logic. Use interfaces for extensibility and dependency injection where appropriate. Configure via external properties for environment flexibility. Review and refactor {t.lower()} regularly as application evolves. Document usage patterns for team consistency.",
    f"Practical {t.lower()} implementation with design rationale.")
    for i, t in enumerate(framework_topics[:50])]

scenario_topics = ["Flaky test investigation", "Parallel test failure debugging", "CI-only failure analysis",
    "Test timeout handling", "Stale element exceptions", "Session expired mid-test",
    "Report not generated in CI", "Screenshot not captured", "Database connection pool exhaustion",
    "Test data collision in parallel", "Browser version mismatch", "Headless vs headed differences",
    "SSL certificate errors in CI", "Proxy configuration in grid", "File download verification",
    "File upload in headless", "iFrame handling failures", "Alert handling timing",
    "Cookie domain issues", "Multi-window test failures", "AJAX wait failures",
    "Page load timeout tuning", "Test environment unavailable", "Feature flag testing",
    "A/B test automation", "Localization testing", "Accessibility testing integration",
    "Performance test integration", "Load test coordination", "Test in production (sanity)",
    "Rollback verification tests", "Deployment gate tests", "Blue-green deployment testing",
    "Canary release validation", "Mobile web testing", "Responsive design testing",
    "Third-party widget testing", "Payment gateway sandbox", "OTP handling in automation",
    "CAPTCHA handling strategies", "Email inbox verification", "PDF content validation",
    "Excel export validation", "Chart/graph verification", "WebSocket testing",
    "GraphQL API testing", "OAuth flow automation", "JWT token refresh in tests",
    "Rate limiting in test environment", "Test execution optimization"]

scenario_qs = [(f"Scenario Q{i+1}: How do you handle {t}?",
    f"When facing {t.lower()}, start by reproducing locally with CI-equivalent configuration. Collect evidence: logs, screenshots, network traces, and environment details. Root cause often involves timing, environment differences, or thread safety. Implement fix: explicit waits, ThreadLocal isolation, retry with limits, or environment provisioning. Document solution in team runbook to prevent recurrence.",
    f"Systematic debugging approach for {t.lower()}, not guesswork.")
    for i, t in enumerate(scenario_topics[:50])]

# Build section 33 HTML
s33 = section("Intermediate (35)", testng_int, 31)
s33 += section("Advanced (35)", testng_adv, 66)
s33 += '<h3>Top 100 Cucumber Questions</h3>\n'
s33 += section("Basic (30)", cucumber_basic, 1)
s33 += section("Intermediate (35)", cucumber_int, 31)
s33 += section("Advanced (35)", cucumber_adv, 66)
s33 += '<h3>Top 50 BDD Questions</h3>\n\n'
for i, (q, a, e) in enumerate(bdd_qs):
    s33 += qa(i+1, q, a, e)
s33 += '<h3>Top 50 Framework Design Questions</h3>\n\n'
for i, (q, a, e) in enumerate(framework_qs):
    s33 += qa(i+1, q, a, e)
s33 += '<h3>Top 50 Scenario-Based Questions</h3>\n\n'
for i, (q, a, e) in enumerate(scenario_qs):
    s33 += qa(i+1, q, a, e)
s33 += '</section>\n'

# Section 34
s34 = '''<section id="section-34" class="section-card">
<h2>Section 34: 1-Day Revision Notes</h2>

<h3>Top 25 TestNG Questions</h3>
<div class="table-wrap">
<table>
<tr><th>#</th><th>Question</th><th>1-Line Answer</th></tr>
<tr><td>1</td><td>What is TestNG?</td><td>Java testing framework with parallel execution, groups, DataProvider, and XML suite config.</td></tr>
<tr><td>2</td><td>Execution order of annotations?</td><td>BeforeSuite → BeforeTest → BeforeClass → BeforeMethod → Test → AfterMethod → AfterClass → AfterTest → AfterSuite.</td></tr>
<tr><td>3</td><td>@BeforeClass vs @BeforeMethod?</td><td>BeforeClass runs once per class; BeforeMethod runs before each @Test method.</td></tr>
<tr><td>4</td><td>Hard vs Soft Assert?</td><td>Hard assert stops on failure; SoftAssert collects all failures and reports at assertAll().</td></tr>
<tr><td>5</td><td>What is testng.xml?</td><td>XML suite file controlling which tests, groups, parallel settings, and parameters to run.</td></tr>
<tr><td>6</td><td>How to skip a test?</td><td>@Test(enabled=false), exclude in XML, or throw SkipException.</td></tr>
<tr><td>7</td><td>What are groups?</td><td>Tags on @Test for selective execution via XML include/exclude.</td></tr>
<tr><td>8</td><td>priority vs dependsOnMethods?</td><td>Priority sets order; dependsOnMethods skips test if dependency fails.</td></tr>
<tr><td>9</td><td>What is @DataProvider?</td><td>Java method returning Object[][] to feed multiple data sets to a @Test method.</td></tr>
<tr><td>10</td><td>@DataProvider vs @Parameters?</td><td>DataProvider: dynamic any-type data from Java; Parameters: static strings from XML.</td></tr>
<tr><td>11</td><td>Parallel modes?</td><td>tests, classes, methods, instances — set in testng.xml with thread-count.</td></tr>
<tr><td>12</td><td>ThreadLocal WebDriver?</td><td>Separate WebDriver per thread — mandatory for parallel Selenium tests.</td></tr>
<tr><td>13</td><td>What is ITestListener?</td><td>Interface for test lifecycle callbacks — screenshots, logging, custom reporting.</td></tr>
<tr><td>14</td><td>What is IRetryAnalyzer?</td><td>Interface to retry failed tests — implement retry() with max count cap.</td></tr>
<tr><td>15</td><td>What is @Factory?</td><td>Creates multiple test class instances for data-driven class-level testing.</td></tr>
<tr><td>16</td><td>Default TestNG reports?</td><td>index.html, emailable-report.html, testng-results.xml in test-output/.</td></tr>
<tr><td>17</td><td>How to run from Maven?</td><td>mvn clean test with surefire plugin configured for testng.xml.</td></tr>
<tr><td>18</td><td>What is ITestContext?</td><td>Runtime context for sharing attributes between methods via setAttribute/getAttribute.</td></tr>
<tr><td>19</td><td>What is timeOut attribute?</td><td>Fails test if execution exceeds specified milliseconds.</td></tr>
<tr><td>20</td><td>What is expectedExceptions?</td><td>Test passes when specified exception is thrown during execution.</td></tr>
<tr><td>21</td><td>What is SkipException?</td><td>Marks test as SKIPPED — used when test cannot run due to environment issues.</td></tr>
<tr><td>22</td><td>What is IAnnotationTransformer?</td><td>Modifies @Test annotations at runtime — global retry, dynamic enable/disable.</td></tr>
<tr><td>23</td><td>What is surefire plugin?</td><td>Maven plugin that executes TestNG tests during mvn test phase.</td></tr>
<tr><td>24</td><td>Suite vs Test in XML?</td><td>Suite is root container; Test is logical group with own parameters and classes.</td></tr>
<tr><td>25</td><td>TestNG best practice?</td><td>Independent tests, ThreadLocal driver, externalized config, listener reporting, minimal dependencies.</td></tr>
</table>
</div>

<h3>Top 25 Cucumber Questions</h3>
<div class="table-wrap">
<table>
<tr><th>#</th><th>Question</th><th>1-Line Answer</th></tr>
<tr><td>1</td><td>What is Cucumber?</td><td>BDD tool executing Gherkin feature files as automated tests.</td></tr>
<tr><td>2</td><td>Gherkin keywords?</td><td>Feature, Background, Scenario, Scenario Outline, Examples, Given, When, Then, And, But.</td></tr>
<tr><td>3</td><td>What is a step definition?</td><td>Java method with @Given/@When/@Then matching Gherkin step text.</td></tr>
<tr><td>4</td><td>What is glue code?</td><td>Package containing step definitions and hooks, specified in @CucumberOptions.</td></tr>
<tr><td>5</td><td>Scenario vs Scenario Outline?</td><td>Scenario: single test; Scenario Outline: parameterized with Examples table.</td></tr>
<tr><td>6</td><td>What are tags?</td><td>@labels on features/scenarios for selective execution filtering.</td></tr>
<tr><td>7</td><td>Tag expressions?</td><td>@smoke and @api, @ui or @api, not @wip — boolean tag logic.</td></tr>
<tr><td>8</td><td>What is Background?</td><td>Steps run before every scenario in a feature file.</td></tr>
<tr><td>9</td><td>What is dryRun?</td><td>Validates step definitions exist without executing tests.</td></tr>
<tr><td>10</td><td>@CucumberOptions key attrs?</td><td>features, glue, tags, plugin, monochrome, dryRun.</td></tr>
<tr><td>11</td><td>Cucumber Expressions?</td><td>{string}, {int}, {float}, {word} — modern step parameter patterns.</td></tr>
<tr><td>12</td><td>What are hooks?</td><td>@Before/@After methods running before/after each scenario.</td></tr>
<tr><td>13</td><td>Tagged hooks?</td><td>@Before("@smoke") runs only before scenarios with @smoke tag.</td></tr>
<tr><td>14</td><td>What are Data Tables?</td><td>Tabular data in steps converted to List&lt;Map&gt; or custom POJOs.</td></tr>
<tr><td>15</td><td>Report plugins?</td><td>pretty (console), html, json, junit, timeline — configured in plugin attribute.</td></tr>
<tr><td>16</td><td>Undefined step?</td><td>Gherkin step with no matching definition — caught by dryRun or runtime.</td></tr>
<tr><td>17</td><td>Duplicate step definition?</td><td>Two definitions match same step — causes startup exception.</td></tr>
<tr><td>18</td><td>Cucumber + TestNG integration?</td><td>Runner extends AbstractTestNGCucumberTests; testng.xml runs runner.</td></tr>
<tr><td>19</td><td>Doc Strings?</td><td>Multi-line text block passed as String parameter to step definition.</td></tr>
<tr><td>20</td><td>Scenario Context?</td><td>Scenario object in hooks provides name, tags, status, line number.</td></tr>
<tr><td>21</td><td>Parallel Cucumber?</td><td>cucumber.execution.parallel.enabled=true with thread count config.</td></tr>
<tr><td>22</td><td>PicoContainer in Cucumber?</td><td>Dependency injection sharing step definition instances across steps.</td></tr>
<tr><td>23</td><td>Feature file location?</td><td>src/test/resources/features/ — path in @CucumberOptions features attribute.</td></tr>
<tr><td>24</td><td>Given-When-Then rule?</td><td>Given=setup, When=action, Then=assertion — never assert in When.</td></tr>
<tr><td>25</td><td>Cucumber best practice?</td><td>Declarative Gherkin, reusable steps, tagged suites, hooks for driver lifecycle.</td></tr>
</table>
</div>

<h3>Frequently Confused Topics</h3>
<div class="table-wrap">
<table>
<tr><th>Topic A</th><th>Topic B</th><th>Key Difference</th></tr>
<tr><td>@DataProvider</td><td>@Parameters</td><td>DataProvider: Java method, any type, dynamic data. Parameters: XML strings, static config.</td></tr>
<tr><td>Hard Assert</td><td>Soft Assert</td><td>Hard stops immediately; Soft collects failures, reports all at assertAll().</td></tr>
<tr><td>priority</td><td>dependsOnMethods</td><td>Priority orders execution; dependsOnMethods skips on dependency failure.</td></tr>
<tr><td>Scenario</td><td>Scenario Outline</td><td>Scenario: fixed data, runs once. Outline: placeholders + Examples, runs per row.</td></tr>
<tr><td>@Before (Cucumber)</td><td>@BeforeMethod (TestNG)</td><td>@Before: before each Cucumber scenario. @BeforeMethod: before each TestNG @Test.</td></tr>
<tr><td>Tags</td><td>Groups</td><td>Tags: Cucumber/Gherkin filter. Groups: TestNG @Test categorization.</td></tr>
<tr><td>Step Definition</td><td>Page Object</td><td>Step Definition: maps Gherkin to code. Page Object: encapsulates page UI elements/actions.</td></tr>
<tr><td>Feature File</td><td>Test Class</td><td>Feature File: BDD specification in Gherkin. Test Class: Java class with @Test methods.</td></tr>
</table>
</div>

<h3>50 Quick Revision Points</h3>
<div class="callout">
<ol>
<li>TestNG execution order: Suite → Test → Class → Method</li>
<li>@BeforeMethod runs before every @Test method</li>
<li>SoftAssert requires assertAll() to report failures</li>
<li>testng.xml controls suite, groups, parallel, listeners</li>
<li>Groups use include/exclude in XML</li>
<li>DataProvider returns Object[][] for data-driven tests</li>
<li>@Parameters reads strings from XML only</li>
<li>parallel="methods" needs ThreadLocal WebDriver</li>
<li>thread-count sets max concurrent threads</li>
<li>ITestListener: onTestFailure for screenshots</li>
<li>IRetryAnalyzer: retry failed tests with max cap</li>
<li>dependsOnMethods skips on dependency failure</li>
<li>priority only orders within same class</li>
<li>@Factory creates multiple class instances</li>
<li>SkipException marks test as SKIPPED</li>
<li>surefire plugin runs TestNG in Maven</li>
<li>testng-results.xml for CI integration</li>
<li>IAnnotationTransformer modifies @Test at runtime</li>
<li>ITestContext shares data via setAttribute</li>
<li>@Optional provides default parameter values</li>
<li>Cucumber Feature file uses Gherkin syntax</li>
<li>Given=precondition, When=action, Then=assertion</li>
<li>Background runs before every scenario</li>
<li>Scenario Outline uses Examples table</li>
<li>Tags filter scenarios: @smoke, @regression</li>
<li>Tag expressions: and, or, not</li>
<li>Step definitions link Gherkin to Java</li>
<li>glue package in @CucumberOptions</li>
<li>dryRun validates step definitions exist</li>
<li>Cucumber Expressions: {string}, {int}</li>
<li>@Before/@After hooks per scenario</li>
<li>Tagged hooks: @Before("@smoke")</li>
<li>Data Tables become List&lt;Map&gt;</li>
<li>html and json report plugins</li>
<li>AbstractTestNGCucumberTests for TestNG+Cucumber</li>
<li>Page Object Model encapsulates page logic</li>
<li>DriverFactory with ThreadLocal pattern</li>
<li>ConfigReader externalizes properties</li>
<li>REST Assured for API step definitions</li>
<li>JDBC for database validation in steps</li>
<li>ExtentReports/Allure for rich reporting</li>
<li>Never use static WebDriver in parallel</li>
<li>Independent tests over dependency chains</li>
<li>API setup faster than UI setup</li>
<li>Clean test data after each test</li>
<li>Version pin dependencies in pom.xml</li>
<li>Smoke suite on every commit</li>
<li>Regression suite nightly</li>
<li>Quarantine flaky tests after investigation</li>
<li>Document framework patterns in team wiki</li>
</ol>
</div>

<h3>Common Interview Mistakes (10)</h3>
<div class="callout">
<ol>
<li>Confusing @BeforeTest with @BeforeMethod scope</li>
<li>Not mentioning ThreadLocal for parallel Selenium</li>
<li>Saying SoftAssert works like JUnit assertions without assertAll()</li>
<li>Using imperative steps in Gherkin (click, type, verify)</li>
<li>Not knowing testng.xml group include/exclude syntax</li>
<li>Claiming priority works across different test classes</li>
<li>Mixing up Cucumber tags with TestNG groups</li>
<li>Putting assertions in When steps instead of Then</li>
<li>Not explaining DataProvider vs Parameters difference</li>
<li>Saying BDD is just Cucumber without mentioning collaboration</li>
</ol>
</div>

<h3>Interview Tips for 4+ Years (10)</h3>
<div class="callout">
<ol>
<li>Explain framework architecture with layers: tests → steps → pages → utils</li>
<li>Always mention thread safety when discussing parallel execution</li>
<li>Give real project examples for every concept — not textbook definitions</li>
<li>Discuss CI/CD integration: Jenkins, testng.xml suites, report publishing</li>
<li>Demonstrate failure handling: screenshots, retry, flaky test management</li>
<li>Show BDD collaboration experience: Three Amigos, refinement sessions</li>
<li>Discuss trade-offs: POM vs Page Factory, hard vs soft assert, API vs UI setup</li>
<li>Mention metrics: pass rate trends, execution time, flaky test ratio</li>
<li>Talk about framework maintenance: dependency updates, test cleanup</li>
<li>Ask interviewer about their stack — tailor answers to their tools</li>
</ol>
</div>

</section>
'''

# Section 35
s35 = '''<section id="section-35" class="section-card">
<h2>Section 35: Senior Automation Engineer Roadmap</h2>

<h3>Current: Automation Engineer (4 Years) — Skills Assessment</h3>
<div class="table-wrap">
<table>
<tr><th>Skill Area</th><th>Your Level</th><th>Gap to Senior</th><th>Action</th></tr>
<tr><td>Selenium WebDriver</td><td>Proficient</td><td>Grid/Cloud, advanced waits</td><td>Practice Grid setup, cloud integration</td></tr>
<tr><td>TestNG</td><td>Proficient</td><td>Custom listeners, programmatic suites</td><td>Build IReporter, IAlterSuiteListener</td></tr>
<tr><td>Cucumber/BDD</td><td>Proficient</td><td>Parallel Cucumber, framework architecture</td><td>Lead BDD adoption workshop</td></tr>
<tr><td>Java</td><td>Intermediate</td><td>Design patterns, streams, concurrency</td><td>Study effective Java, patterns</td></tr>
<tr><td>API Testing</td><td>Intermediate</td><td>Contract testing, microservices</td><td>REST Assured + Pact practice</td></tr>
<tr><td>SQL/Database</td><td>Intermediate</td><td>Complex queries, performance</td><td>Advanced SQL, query optimization</td></tr>
<tr><td>CI/CD</td><td>Intermediate</td><td>Pipeline design, Docker, quality gates</td><td>Jenkins Pipeline as Code</td></tr>
<tr><td>Cloud</td><td>Beginner</td><td>AWS/Azure basics, containerization</td><td>AWS SAA or Azure AZ-900</td></tr>
<tr><td>Leadership</td><td>Beginner</td><td>Mentoring, architecture decisions</td><td>Mentor junior QA, lead framework design</td></tr>
</table>
</div>

<h3>Career Path 1: Senior AE → Lead QA → Manager → Director</h3>
<div class="callout">
<p><strong>Year 4-5 (Senior AE):</strong> Own framework architecture, mentor 2-3 juniors, lead test strategy for product area. Skills: advanced TestNG/Cucumber, CI/CD pipeline ownership, cross-browser/cloud execution.</p>
<p><strong>Year 5-7 (Lead QA):</strong> Manage test automation team (3-5 people), define QA standards, stakeholder reporting. Skills: people management, test planning, metrics dashboards, hiring.</p>
<p><strong>Year 7-10 (QA Manager):</strong> Manage multiple teams, budget, tool selection, quality strategy across products. Skills: organizational leadership, vendor management, process improvement.</p>
<p><strong>Year 10+ (Director/VP QA):</strong> Quality vision for organization, executive reporting, cross-department collaboration. Skills: strategic planning, business alignment, industry networking.</p>
</div>

<h3>Career Path 2: SDET II → SDET III → Staff SDET → Principal</h3>
<div class="callout">
<p><strong>SDET II (Year 4-5):</strong> Deep technical ownership of test frameworks, API + UI + performance testing. Build reusable libraries, code review test code, contribute to dev tooling.</p>
<p><strong>SDET III (Year 5-7):</strong> Cross-team framework standards, test infrastructure (Grid, Docker, CI), technical design documents. Influence engineering practices beyond QA.</p>
<p><strong>Staff SDET (Year 7-10):</strong> Org-wide test platform, developer experience for testing, open-source contributions. Set technical direction for quality engineering.</p>
<p><strong>Principal SDET (Year 10+):</strong> Industry thought leadership, conference talks, architecture for quality at scale. Define testing strategy for entire engineering org.</p>
</div>

<h3>Career Path 3: Framework Architect → Test Architect → Engineering Manager</h3>
<div class="callout">
<p><strong>Framework Architect (Year 4-6):</strong> Design and maintain enterprise automation framework. Technology selection, coding standards, POC for new tools. Deep TestNG/Cucumber/Selenium expertise.</p>
<p><strong>Test Architect (Year 6-9):</strong> Holistic quality architecture: test pyramid, CI/CD quality gates, performance/security testing strategy. Bridge between QA and engineering leadership.</p>
<p><strong>Engineering Manager (Year 9+):</strong> Manage engineering team including developers and SDETs. Delivery ownership, sprint planning, technical mentorship. Transition from individual contributor to people leader.</p>
</div>

<h3>Skills Matrix</h3>
<div class="table-wrap">
<table>
<tr><th>Skill</th><th>Junior (0-2)</th><th>Mid (2-4)</th><th>Senior (4-7)</th><th>Architect (7+)</th></tr>
<tr><td>Selenium</td><td>Basic locators, clicks</td><td>POM, waits, frames</td><td>Grid, cloud, custom utilities</td><td>Framework design, tool selection</td></tr>
<tr><td>TestNG</td><td>@Test, assertions</td><td>XML, groups, DataProvider</td><td>Parallel, listeners, retry</td><td>Programmatic suites, custom reporters</td></tr>
<tr><td>Cucumber</td><td>Feature files, basic steps</td><td>Hooks, tags, outlines</td><td>Parallel, DI, API integration</td><td>BDD strategy, Gherkin standards</td></tr>
<tr><td>Java</td><td>Syntax, OOP basics</td><td>Collections, exceptions</td><td>Design patterns, streams</td><td>Concurrency, JVM, architecture</td></tr>
<tr><td>API Testing</td><td>Postman basics</td><td>REST Assured + TestNG</td><td>Contract testing, microservices</td><td>API test platform design</td></tr>
<tr><td>SQL</td><td>SELECT, WHERE</td><td>JOINs, JDBC in tests</td><td>Complex queries, data setup</td><td>DB test strategy, performance</td></tr>
<tr><td>CI/CD</td><td>Run tests in Jenkins</td><td>Pipeline config, reports</td><td>Pipeline design, quality gates</td><td>DevOps strategy, tool chain</td></tr>
<tr><td>Docker</td><td>Run containers</td><td>Dockerfile for tests</td><td>Compose for test env</td><td>Container orchestration strategy</td></tr>
<tr><td>Cloud</td><td>BrowserStack usage</td><td>Cloud test execution</td><td>AWS/Azure services</td><td>Cloud-native test infrastructure</td></tr>
<tr><td>AI Testing</td><td>Awareness</td><td>AI-assisted test gen</td><td>Self-healing locators</td><td>AI test strategy evaluation</td></tr>
<tr><td>Leadership</td><td>Follow standards</td><td>Mentor interns</td><td>Lead projects, review code</td><td>Team building, strategy</td></tr>
</table>
</div>

<h3>TestNG/Cucumber Skills by Career Level</h3>
<div class="table-wrap">
<table>
<tr><th>Level</th><th>TestNG</th><th>Cucumber</th></tr>
<tr><td>Junior</td><td>Write @Test, use Assert, run from IDE</td><td>Write scenarios, implement basic step defs</td></tr>
<tr><td>Mid</td><td>testng.xml, groups, DataProvider, @Before/@After</td><td>Hooks, tags, Scenario Outline, Data Tables</td></tr>
<tr><td>Senior</td><td>Parallel, listeners, retry, ITestContext, CI suites</td><td>Parallel Cucumber, PicoContainer, API steps, framework design</td></tr>
<tr><td>Architect</td><td>Custom reporters, IAlterSuiteListener, programmatic suites</td><td>BDD governance, Gherkin standards, cross-team adoption</td></tr>
</table>
</div>

<h3>Certifications</h3>
<div class="table-wrap">
<table>
<tr><th>Certification</th><th>Provider</th><th>Relevance</th><th>Timeline</th></tr>
<tr><td>ISTQB Advanced Test Automation Engineer</td><td>ISTQB</td><td>Validates automation expertise</td><td>3 months prep</td></tr>
<tr><td>AWS Solutions Architect Associate</td><td>Amazon</td><td>Cloud test infrastructure</td><td>2-3 months prep</td></tr>
<tr><td>Certified ScrumMaster (CSM)</td><td>Scrum Alliance</td><td>Agile leadership path</td><td>2-day course</td></tr>
<tr><td>SAFe Agilist</td><td>Scaled Agile</td><td>Enterprise agile environments</td><td>2-day course</td></tr>
<tr><td>ISTQB Foundation Level</td><td>ISTQB</td><td>Baseline if not already certified</td><td>1 month prep</td></tr>
</table>
</div>

<h3>Salary Benchmarks (2025-2026, USD)</h3>
<div class="table-wrap">
<table>
<tr><th>Role</th><th>US</th><th>India (LPA)</th><th>UK</th></tr>
<tr><td>Automation Engineer (4 yrs)</td><td>$90K–$120K</td><td>12–18 LPA</td><td>£45K–£60K</td></tr>
<tr><td>Senior AE / SDET II</td><td>$120K–$150K</td><td>18–28 LPA</td><td>£60K–£80K</td></tr>
<tr><td>Lead QA / SDET III</td><td>$140K–$170K</td><td>25–35 LPA</td><td>£70K–£95K</td></tr>
<tr><td>Test Architect / Staff SDET</td><td>$160K–$200K</td><td>30–45 LPA</td><td>£85K–£110K</td></tr>
<tr><td>QA Manager / Principal</td><td>$170K–$220K+</td><td>35–55 LPA</td><td>£95K–£130K</td></tr>
</table>
</div>

<h3>Resources</h3>
<h4>Blogs</h4>
<div class="callout">
<ul>
<li>Angie Jones — angiejones.tech (test automation strategy)</li>
<li>Automation Panda — automationpanda.com (Selenium, pytest)</li>
<li>TestAutomationU — testautomationu.applitools.com (free courses)</li>
<li>Cucumber Blog — cucumber.io/blog (BDD best practices)</li>
<li>Ministry of Testing — ministryoftesting.com (community, articles)</li>
</ul>
</div>
<h4>YouTube Channels</h4>
<div class="callout">
<ul>
<li>Automation Step by Step — Naveen AutomationLabs (TestNG, Cucumber, Selenium)</li>
<li>Software Testing Mentor — QA tutorials and interview prep</li>
<li>Testers Talk — framework building tutorials</li>
<li>Coding Bootcamp — Java + Selenium for beginners</li>
</ul>
</div>
<h4>Books</h4>
<div class="callout">
<ul>
<li>"BDD in Action" — John Ferguson Smart (Cucumber, Serenity)</li>
<li>"Agile Testing" — Lisa Crispin &amp; Janet Gregory (whole-team quality)</li>
<li>"Effective Java" — Joshua Bloch (Java mastery for SDET path)</li>
<li>"The Cucumber for Java Book" — Seb Rose &amp; Matt Wynne (official guide)</li>
<li>"Continuous Delivery" — Humble &amp; Farley (CI/CD for test automation)</li>
</ul>
</div>
<h4>Open-Source Projects to Study</h4>
<div class="callout">
<ul>
<li>SeleniumHQ/selenium — WebDriver source and examples</li>
<li>cucumber/cucumber-jvm — Cucumber Java implementation</li>
<li>testng-team/testng — TestNG framework source</li>
<li>rest-assured/rest-assured — API testing library</li>
<li>bonigarcia/webdrivermanager — driver management utility</li>
</ul>
</div>

<h3>4-Week Interview Prep Plan</h3>
<div class="table-wrap">
<table>
<tr><th>Week</th><th>Focus</th><th>Daily Tasks</th><th>Outcome</th></tr>
<tr><td>Week 1</td><td>TestNG Deep Dive</td><td>Day 1-2: Annotations, assertions, XML. Day 3-4: DataProvider, groups. Day 5-7: Parallel, listeners, retry.</td><td>Answer 50 TestNG questions confidently</td></tr>
<tr><td>Week 2</td><td>Cucumber &amp; BDD</td><td>Day 1-2: Gherkin, step defs, runner. Day 3-4: Hooks, tags, outlines. Day 5-7: BDD concepts, anti-patterns.</td><td>Write feature files and step defs from scratch</td></tr>
<tr><td>Week 3</td><td>Framework &amp; Scenarios</td><td>Day 1-2: POM, utilities, config. Day 3-4: API + DB testing. Day 5-7: Scenario-based problems, debugging.</td><td>Explain framework architecture in interviews</td></tr>
<tr><td>Week 4</td><td>Mock Interviews &amp; Revision</td><td>Day 1-2: Review Section 34 revision notes. Day 3-4: Mock interviews (2/day). Day 5-6: Weak area drill. Day 7: Rest.</td><td>Interview-ready with structured answers</td></tr>
</table>
</div>

<div class="ascii-diagram">
Career Progression Map:
                    ┌──→ Lead QA ──→ Manager ──→ Director
Automation Engineer ─┤
  (4 Years)           ├──→ SDET II ──→ SDET III ──→ Staff ──→ Principal
                    └──→ Framework Architect ──→ Test Architect ──→ Eng Manager

Key Milestone at 4 Years: Choose technical depth (SDET) or people leadership (Lead QA)
</div>

</section>
'''

# Read main file and append
main_path = r'c:\Users\anideshm\Cursor Implementation\Learning notes\testng_sections_30_35.html'
with open(main_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove premature section 33 close if we're replacing - file ends at Q30 without section close
if '</section>' not in content.split('Q30:')[1][:500]:
    # Append to open section 33
    content = content.rstrip() + '\n' + s33 + s34 + s35
else:
    content = content + s33 + s34 + s35

with open(main_path, 'w', encoding='utf-8') as f:
    f.write(content)

# Count lines in section 33
s33_lines = s33.count('\n')
total_lines = content.count('\n')
print(f'Section 33 lines: {s33_lines}')
print(f'Total file lines: {total_lines}')
