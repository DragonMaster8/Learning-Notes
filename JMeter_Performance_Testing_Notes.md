# JMeter - Performance Testing Tool: Complete Notes

**Instructor:** Rahul Shetty

---

## Section 1: Introduction to Performance Testing

### What is Performance Testing?

- **Definition:** It is a type of testing to ensure that software applications will perform well under a specified workload.
- **Key Difference from Functional Testing:**
  - **Functional Testing:** Testing whether the application works correctly (e.g., Can you buy a product from Amazon? Can you go to the confirmation page? Does the product get shipped?)
  - **Performance Testing:** Testing the **same flow** but under a **specific workload** (e.g., What happens when **thousands of users** try to buy the same product simultaneously?)

### Functional Testing Example (Amazon)

- Go to Amazon.com
- Select a product (e.g., Fire TV Stick with Alexa)
- Go to purchase page
- Enter delivery address
- Confirm purchase
- This is the **end-to-end flow** to test if you can successfully buy a product

### Performance Testing Example (Amazon)

- Same purchase flow but with **thousands of users simultaneously**
- Questions being answered:
  - How do Amazon's servers respond when thousands of users try to buy?
  - Do servers respond the same way as when one person buys?
  - Is the website slow when thousands of users try to access and buy the product?
- **[Important/Emphasized]:** We are testing the server with some workload — this is called Performance Testing

### Another Performance Testing Scenario

- Continuously purchasing a product for **100 hours non-stop**
- Testing: Does the server remain stable when there is continuous maximum traffic?
- Essentially testing the flow under some loads and determining the application's performance

---

## Types of Performance Testing

All the following fall under the **umbrella of Performance Testing:**

| Test Type | Description |
|-----------|-------------|
| **Load Testing** | Testing with expected number of users |
| **Stress Testing** | Testing beyond normal capacity |
| **Volume Testing** | Testing with large amounts of data |
| **Endurance Testing** | Testing under load for extended duration |

- **[Important/Emphasized]:** Generally, when people say "Performance Testing," they are referring to Load Testing or Stress Testing
- Performance Testing is the **general/common word** used; it is the simplest form that encompasses all these types

---

## Why is Performance Testing Necessary?

### Real-World Scenario: Independence Day Sale

1. You put up advertisements one month before the sale (radio ads, online ads)
2. You spend thousands of dollars on advertising
3. Backend developers write code to show discounted prices during the specific duration (e.g., $2000 → $1000)
4. Independence Day sale arrives
5. **10,000 users** land on your website to buy something
6. **Problem:** If your application cannot handle all those users → **Server goes down**

### Consequences of Not Doing Performance Testing

- **[Important/Emphasized]:** What's the use when your application doesn't work on that particular day?
- You may have done extensive testing:
  - Automation test cases
  - Manual test cases
  - Functional test cases
  - Application is bug-free
- **BUT** if the server crashes when heavy load is applied — **you've lost the game**
- This is an **expensive cost**

### Partial vs. Complete Failure

- If one section fails (e.g., Electronics) → Users can still buy from Clothing, Furniture, etc. → Some profit still possible
- If **entire servers crash** → No sales at all from the website → Complete loss

### [Important/Emphasized] Key Takeaway

- When you have a website receiving traffic, **Performance Testing is MANDATORY**
- In current trends, **every company has a performance testing team**
- Especially: E-commerce websites, video platforms, any platform with significant user traffic
- Performance testing team highlights defects like: "What happens when 1000 users hit your system servers?"
- **This plays a major role in the industry**

---

## How Do Load Testing Tools Help?

### Purpose of Load Testing Tools

- Load testing tools provide details about **how the system behaves when load is applied** to your application

### Process Overview (High-Level)

1. **Write a script** to perform an action (e.g., buy a product from Amazon)
   - Similar to Selenium automation, but **without UI** (headless)
   - **[Important/Emphasized]:** All performance testing is done in **headless mode only** — no UI is open
2. **Apply load** using the tool's features:
   - Thousands of users (e.g., 10,000 users)
   - Duration-based (e.g., run for 5 hours continuously)
   - Different combinations of load
3. **Measure results** — how the application server performs
4. **Track metrics** obtained from load testing
5. **Send to client** for review

### Comparison: Selenium vs. Load Testing Tool

| Aspect | Selenium | Load Testing Tool |
|--------|----------|-------------------|
| Purpose | Functional testing | Performance testing |
| Execution | Single user | Thousands of users |
| UI | Browser-based | Headless (no UI) |
| Output | Pass/Fail for functionality | Performance metrics |
| Script | Automate one scenario, run once | Automate one scenario, run with various loads |

### What Happens After Testing

- Client checks if metrics match their **benchmark/standards**
- Based on results, they decide:
  - Tune the application with optimized code
  - Take other necessary actions

---

## Popular Load Testing Tools in the Market

| Tool | Type |
|------|------|
| **JMeter** | Open Source (Free) |
| **LoadRunner** | Paid |
| **NeoLoad** | Paid |
| **LoadUI** | Paid |

---

## Section 2: Why JMeter?

### Advantage 1: Open Source (Free)

- Can download and start testing for free
- **Comparison:** Similar to Selenium (open source for functional testing), JMeter is open source for performance testing
- **Competitor:** LoadRunner is a great tool but is **paid**
- LoadRunner's graph has been **slowly declining** because of JMeter
- **[Important/Emphasized]:** All product-based companies are now looking at JMeter because it's free and open source

### Advantage 2: Built on Java → Cross-Platform Support

- Since JMeter is built on Java, it works on **any platform**:
  - Windows
  - Mac
  - Linux
  - Solaris
- Some other tools only support Windows, but JMeter works on **any OS**
- **[Important/Emphasized]:** Cross-platform support is a major advantage

### Advantage 3: No Scripting/Coding Required

- Scripting can be done by **Record and Playback**
- After recording, you just modify some scripts here and there to make it robust
- **No need to create any script from scratch**
- **[Important/Emphasized]:** If you are a complete manual tester with NO coding knowledge, you can still master JMeter
- Some scripting exists for **advanced load testing**, but it's **not mandatory** for basic load testing
- Record and Playback function automatically creates the script without much effort
- Optional: There is one section in the course dedicated to scripting

### Advantage 4: User-Friendly GUI

- Everything visible on screen
- All features available in menus — select, drag & drop, and work
- Other tools are complex to learn due to their architecture
- JMeter is **neatly organized** → can learn very quickly
- **[Important/Emphasized]:** GUI is completely user-friendly — easy to learn, understand, and grasp concepts

### Advantage 5: Extensive Online Documentation

- Lots of documentation available online
- Every topic has multiple websites that can teach you
- Documentation helps understand the tool and do more research

### Why JMeter Leads the Market

- Open source
- Cross-platform support
- User-friendly
- Extensive documentation
- **Result:** More job opportunities compared to LoadRunner, NeoLoad, LoadUI
- **[Important/Emphasized]:** JMeter stands out as a leading tool in performance testing tools in the market

---

## Course Structure & Prerequisites

### Target Audience

- **No prior knowledge** of performance testing or JMeter assumed
- Teaching from scratch (from downloading JMeter)
- Every feature will be explained
- All scripting done in **real-time** in the video

### What Will Be Covered

- All real-time scenarios encountered in actual projects
- Based on instructor's experience handling **three major projects** from highly experienced e-commerce clients
- All struggles, solutions, and easy approaches using JMeter

### Course Outcome Guarantee

- **[Important/Emphasized]:** By end of this course → you will be proficient and ready to start any JMeter role in your company
- No prior tool knowledge required — everything covered as part of this course

---

## Section 3: JMeter Installation

### Step 1: Download JMeter

- Search: "Install JMeter" or "Download JMeter"
- Go to **Apache JMeter official website** (Apache provides this tool)
- Navigate to download section
- Two sections available: **Binaries** and **Source**
- **Download from Binaries section:**
  - **Mac/Linux:** Use `.tgz` extension
  - **Windows:** Use `.zip` extension
- Click the link → downloads to your machine

### Step 2: Install Java (Prerequisite)

- JMeter requires a **specific Java version**
- Check the JMeter website for supported Java version
- Search: "Download Java SDK"
- Go to Oracle's official website
- Download the **specific version** that JMeter expects (check compatibility)
- **[Important/Emphasized]:** Make sure you download the correct Java version BEFORE opening JMeter

### Step 3: Extract and Run JMeter

1. Downloaded file comes in `.zip` format
2. **Extract/Unzip** the file → opens JMeter folder
3. Navigate inside the folder → you'll see different sub-folders
4. Go to **`bin` directory**
5. Find **`ApacheJMeter`** file (`.bat` file on Windows)
6. **Run this file** → JMeter tool opens

### Summary of Installation

1. Download Apache JMeter from official website
2. Download correct Java version
3. Extract the zip file
4. Navigate to `bin` folder
5. Run `ApacheJMeter.bat`

---

## About JMeter Versions

### Version Changes — What You Need to Know

- **[Important/Emphasized]:** Versions change frequently — don't worry about version numbers
- By the time you watch, it might be Apache JMeter 7 or 8 (new releases happen)
- New versions are released based on **bug fixes**

### What Does NOT Change Between Versions

- **[Important/Emphasized]:** Core functionalities were established in version 2.3
- Every version from then on has the **same functionalities**
- All topics learned remain valid across versions
- Videos from JMeter 2.3, 5, or 6 — all are the same in terms of functionality

### What DOES Change Between Versions

| Aspect | Changes |
|--------|---------|
| Java Support | e.g., v2.3 supports Java 7, v5 supports Java 8-9, future versions may support Java 11+ |
| UI Theme | Black theme, white theme, visual changes |
| Bug Fixes | Internal fixes found in current version |

### [Important/Emphasized] Key Point

- Version changes do **NOT** affect core functionalities and topics
- UI look may differ (white background vs. black background)
- Don't panic if colors/themes change
- Don't assume videos are outdated because of version number differences
- Only difference visible to user: **UI appearance**
- Backend difference: Java compatibility (not visible to end user)

---

## Section 4: JMeter Interface Overview

### Test Plan

- **Definition:** Consists of all actions and components needed to execute your performance test script
- This is where your **actual execution** happens
- You need to add:
  - Components
  - Scripts
  - All types of actions
- **[Important/Emphasized]:** If you want to develop a script in JMeter, you must write it under the Test Plan folder
- Think of it as: "Plan of how you want to test" → put it in this folder → run it

### Key Limitation: Single Project at a Time

- **[Important/Emphasized]:** Unlike Eclipse (where you can have multiple projects in one workspace), in JMeter you can only work on **ONE project at a time**
- To open another project → must open the tool fresh
- Cannot see multiple projects in one window

### WorkBench

- **Definition:** A practice area or temporary storage for components
- Everything written under WorkBench is **NOT part of execution**
- Like a **rough/scratch folder** for:
  - Doing hard/rough work
  - Storing temporary variables
- Used for **temporary caching** during recording
- Later, move items from WorkBench back to Test Plan

---

## JMeter Components (Right-Click Menu Overview)

### 1. Threads (Thread Groups)

- **Purpose:** Put load on your JMeter test script
- This is where you define the number of users, ramp-up time, etc.
- Will be covered in detail in upcoming lectures

### 2. Config Elements (Configuration Elements)

- **Purpose:** Configure your test based on needs
- Examples:
  - Set cookies for test to run
  - Set headers
  - JDBC connections
  - Random variables
- Basically: **configure the test** based on your requirements

### 3. Timers

- **Purpose:** Add wait time between requests
- Between one request and the next, if you want to wait some time → use Timer
- Each timer has its unique definition and unique way of handling requests

### 4. Pre-Processors

- **Purpose:** Processing done **before** the test starts/runs
- Examples:
  - Modify HTML link
  - Execute scripts to load all environment variables
  - Data-driven testing preparation

### 5. Post-Processors

- **Purpose:** Processing done **after** execution is complete
- Examples:
  - Retrieve response data
  - Extract variables from response using:
    - Regular Expression
    - XPath

### 6. Assertions

- **Purpose:** Validation/verification after receiving a response
- Verify that correct values are displayed in responses
- Different types of assertions available

### 7. Listeners

- **Purpose:** Display test results
- Show:
  - How the test performed
  - Different performance metrics
  - What results look like
- **All result analysis** happens in Listeners

---

## JMeter Toolbar Overview

### File Operations

| Icon/Button | Function |
|-------------|----------|
| Save | Save the test |
| Save As | Save with a different name |
| Cut | Cut components |
| Copy | Copy components |
| Paste | Paste components |

### Execution Controls

| Icon/Button | Function |
|-------------|----------|
| **Start (Play)** | Run the test once it's ready |
| **Start without pauses** | Run without any delays |
| **Stop** | Stop the script mid-execution |
| **Shutdown** | Completely shut down the test |

### Monitoring During Execution

| Element | What it Shows |
|---------|---------------|
| **Timeline** | How much time the test has been running (e.g., 5 minutes) |
| **Progress Counter** | Tests completed out of total (e.g., 40/100) |
| **Failure Report** | If something failed, it reports here |

### Other Controls

| Icon/Button | Function |
|-------------|----------|
| **Clear All** | Clear all logs once generated (like a reset) |
| **Help/Search** | Explore JMeter queries if you need anything |

---

## Section 5: Record and Playback

### What is Record and Playback?

- **Concept:** Go and perform actions in the browser → JMeter records all the requests and responses automatically
- This creates your test script without manual coding
- To test, we need **requests and responses** (including GIFs, banners, etc.)

### Requirements for Recording

1. **JMeter** (the tool itself)
2. **Firefox Browser** (for proxy-based recording)

### HTTP vs HTTPS Recording

| Protocol | Requirement |
|----------|-------------|
| **HTTP** | Works fine directly — no extra setup needed |
| **HTTPS** | Requires importing JMeter's certificate into the browser |

### WorkBench's Role in Recording

- **[Important/Emphasized]:** The most important component in WorkBench is the **HTTP(S) Test Script Recorder**
- This recorder can record scripts directly from browser actions
- After recording, the tester can put load on those recorded scripts

### Method 1: Recording in JMeter Using Firefox with Proxy

- JMeter acts as a **proxy server**
- Configure Firefox to route traffic through JMeter's proxy
- All browser actions get captured as HTTP requests in JMeter
- Works for both HTTP and HTTPS (with certificate)

### Handling HTTPS Websites

- HTTPS websites require **JMeter certificate importing** into the browser
- The certificate must be imported before recording can work on HTTPS sites

### Method 2: Recording with Chrome Using BlazeMeter Plugin

- **BlazeMeter** is a Chrome extension for recording
- Install from Chrome Web Store:
  - URL: `https://chrome.google.com/webstore/detail/blazemeter-the-load-testi/mbopgmdnpcbohhpnfglgohlbhfongabi?hl=en`
- BlazeMeter records and initially exports as **`.jmx` files** (JMeter's native format)
- This allows Chrome users to record without configuring proxy settings

### Load Configuration Example

- Example scenario: **500 users for 5 times over 100 minutes**
- To put **1000 load on the user flow** — configure thread groups accordingly

---

## Key Concepts Summary Table

| Concept | Description |
|---------|-------------|
| Test Plan | Main folder where all test execution components reside |
| WorkBench | Temporary/scratch area — not part of execution; contains HTTP(S) Test Script Recorder |
| Threads | Apply load (users) to your test |
| Config Elements | Set up test configuration (cookies, headers, variables) |
| Timers | Wait time between requests |
| Pre-Processors | Actions before test execution |
| Post-Processors | Actions after execution (extract data from response) |
| Assertions | Validate responses |
| Listeners | View and analyze test results/metrics |

---

## Quick Revision

1. **Performance Testing** = Testing application under specific workload (not just functionality)
2. **Functional vs. Performance** = Functional tests one user flow; Performance tests same flow with thousands of users
3. **Types** = Load, Stress, Volume, Endurance — all under Performance Testing umbrella
4. **Why needed** = Servers crash under heavy load; costly failures during peak sales events
5. **Load Testing Tools** = Write headless scripts, apply various loads, measure server metrics
6. **Tools in market** = JMeter (free), LoadRunner (paid), NeoLoad (paid), LoadUI (paid)
7. **Why JMeter** = Open source, cross-platform (Java-based), no coding needed, user-friendly GUI, extensive docs
8. **Installation** = Download from Apache site (.zip for Windows, .tgz for Mac/Linux) + Install correct Java version + Run ApacheJMeter.bat from bin folder
9. **Versions** = Only UI and Java support change; core functionality stays same since v2.3
10. **Test Plan** = Main execution folder (one project per window)
11. **WorkBench** = Temporary storage/scratch area (not executed)
12. **Components** = Threads, Config Elements, Timers, Pre-Processors, Post-Processors, Assertions, Listeners
13. **Toolbar** = Start, Stop, Shutdown, Clear, Save, Timeline, Progress Counter
14. **Record & Playback** = Feature to auto-generate scripts without coding knowledge
15. **Recording Methods** = Firefox with JMeter proxy OR Chrome with BlazeMeter plugin
16. **HTTP vs HTTPS** = HTTP works directly; HTTPS needs JMeter certificate imported into browser
17. **BlazeMeter** = Chrome extension that records and exports `.jmx` files for JMeter
18. **HTTP(S) Test Script Recorder** = Key component in WorkBench for recording browser actions

---
---

# SECTION 2: Getting Started with JMeter — Recording, Proxy Setup & Practical Demo

---

## Tips for Best Learning Experience (Udemy Video Settings)

### [Important/Emphasized] Do NOT skip this section

### Video Resolution Settings

- If you see a **blurry/fuzzy screen** → your internet bandwidth may be low
- Udemy defaults to lowest pixel when bandwidth is low (to prevent buffering)
- **Fix:** Go to Settings → Select **1080p** or **720p** for best HD clarity
- Even after selecting, if screen becomes blurry again mid-video → go back to settings and re-select 720p
- If you choose "Auto" → it will direct to 1080p

### Playback Speed Options

- If you want to learn faster / complete course quickly:
  - Can increase speed to **1.25x** or **1.5x**
  - **Not recommended:** 1.75x (audio becomes unclear)
- Example: A 3-minute video at 1.5x speed → completes in ~1 minute 20 seconds
- Only use faster speed if you're comfortable with the language and speaking pace
- Otherwise, use normal speed

### Volume Settings

- If audio sounds low → check **two things:**
  1. Player volume (inside Udemy)
  2. System volume (your computer's volume)
- Make sure both are turned up for best audio experience

### Full Screen Viewing (Recommended)

- **[Important/Emphasized]:** Always watch videos in full-screen mode
- Two ways to go full screen:
  1. Click the **expand** button → gives wider view
  2. **Double-click** on the video → full screen mode
- Benefits: All terms, annotations, and on-screen text will be clearly visible

---

## Understanding Record and Playback — Concept

### The Baseline Process of Testing in JMeter

1. **Develop a test** (create the script)
2. **Put load** on that test (e.g., 200 or 300 users)
3. **Run the test** with that load
4. **Collect performance metrics** — how the test case behaves for that specific number of users

### How Do We Develop the Test?

- **Challenge:** How to create the test script in JMeter?
- **Solution:** JMeter provides a **Record and Playback** feature
- JMeter **automatically generates a test** based on your actions in the browser

### How Record and Playback Works

1. You decide what to test (e.g., go to a flight booking website, select departure, destination, choose a flight)
2. You perform those actions in the browser
3. **JMeter listens** to all your actions
4. Based on your actions, **JMeter itself generates a test**
5. Then you can put load on that generated test

### [Important/Emphasized] Important Limitation

- After recording, you **cannot always play directly**
- Basic test cases: can run directly after recording
- Complex scripts: may have **dynamic variables, cookies, session values, dynamic response values**
- After recording, you must make **necessary changes** (correlation, parameterization) before replaying
- The **base script** is provided by JMeter through recording — then you enhance it

---

## Setting Up HTTP(S) Test Script Recorder in JMeter

### Where to Find the Recorder

#### In Older Versions (with WorkBench):
- Right-click on **WorkBench** → Add → **Non-Test Elements** → **HTTP(S) Test Script Recorder**

#### In Newer Versions (without WorkBench):
- Right-click on **Test Plan** → Add → **Non-Test Elements** → **HTTP(S) Test Script Recorder**
- **[Important/Emphasized]:** In latest JMeter versions, WorkBench option is removed. Navigate directly from Test Plan itself.

### Why "Non-Test Elements"?

- Recording component is **NOT part of the test itself**
- It's a helper/utility — used only to record
- Once recorded, you **copy all actions back** to Test Plan (test elements)
- It's like an extra feature that helps create your test

### Recorder Configuration

#### 1. Port Number (Default: 8888)

- JMeter tells you: "Whatever you record on this port number, I will listen to it"
- If you record on a different port → JMeter cannot capture it
- You can change it (e.g., to 8080) if needed
- **[Important/Emphasized]:** Whatever port you provide here = the port where your browser actions must happen = JMeter listens on that port

#### 2. HTTPS Domains (Optional)

- Can leave blank
- JMeter captures domain name automatically

#### 3. "Test Plan Creation" Tab — Where to Store Recorded Actions

**Option A: Use Recording Controller**
- Creates a folder in Test Plan
- Captures all recorded actions directly in that folder
- Good for: people who want to record directly into Test Plan

**Option B: Record in HTTP(S) Test Script Recorder (under WorkBench)**
- All recorded actions come under the recorder itself
- Better for: complex scripts where you need to make changes before moving to Test Plan
- **[Important/Emphasized]:** For complex scripts (dynamic responses, session values, cookies), it's better to record here first, make changes, then move to Test Plan

#### 4. "Request Filtering" Tab

- When recording, a website loads many components: images, banners, text, ads, buttons, etc.
- **Not all components are needed** for performance testing
- You only need: **Requests and Responses**
- Extra items (GIFs, images, banners, UI actions) make your script **bloated and tedious**

**How to Filter:**
- Click **"Add Suggested Excludes"**
- Automatically adds exclusion patterns for:
  - `.png` (images)
  - `.gif` (images)
  - `.css` (stylesheets)
  - `.js` (JavaScript files)
  - And other unnecessary file types
- During recording, if these file types are encountered → they are **skipped**
- Result: Your script stays **tight and clean**

### Summary of Recorder Setup (3 Steps)

1. Give a name to the recorder
2. Set the port number JMeter will listen on
3. Choose where to store recorded actions
4. Add suggested excludes in Request Filtering

---

## Firefox Proxy Configuration for Recording

### Why Proxy Setup is Needed

- JMeter sits on a port number and listens to browser actions
- Browser must route all traffic through that same port
- This creates the **link between JMeter and the browser**

### Step-by-Step Firefox Proxy Setup

1. Open Firefox → go to **Options** (or Preferences)
2. Search for **"Network Proxy"**
3. Click **Settings**
4. Default setting: "Use system proxy settings"
5. Change to: **"Manual proxy configuration"**
6. Set:
   - **HTTP Proxy:** `localhost` (or your local IP address)
   - **Port:** `8888` (must match JMeter's port)
7. **Check the box:** "Use this proxy server for all protocols"
8. Click **OK**

### The Connection Logic

```
Browser (Port 8888) ←→ JMeter (Listening on Port 8888)
```

- Browser performs actions on port 8888
- JMeter is also listening on port 8888
- JMeter can track your actions and generate a test

### [Important/Emphasized] If Port Numbers Don't Match

- If browser is on port 8080 but JMeter is on 8888 → **JMeter cannot understand what's happening**
- Both ports MUST match

### [Important/Emphasized] Browser Behavior After Proxy Setup

- After setting proxy: **browser will NOT work normally**
- You'll see error messages when trying to browse
- Browser **ONLY works normally after JMeter recording is started**
- Once JMeter recording starts → browser works on the proxy
- If JMeter recording is NOT started → browser won't work on proxy

### Reverting Proxy Settings

- After finishing recording → **MUST reset proxy** back to "Use system proxy settings"
- Otherwise your browser won't work normally for regular browsing
- When you want to record again → switch back to manual proxy configuration

---

## Handling HTTPS Websites — Certificate Import

### Why Certificate is Needed

- **HTTP sites:** Work fine without any certificate — no extra setup
- **HTTPS sites:** Need a certificate to establish secure connection
- Without the certificate → HTTPS websites won't load → recording won't capture anything

### Where Does the Certificate Come From?

- **JMeter generates the certificate automatically**
- Generated when you click **"Start"** on the recorder for the first time
- Certificate is created in: **JMeter's `bin` directory**
- Certificate name: **"ApacheJMeterTemporaryRootCA"**

### Step-by-Step Certificate Import into Firefox

1. In JMeter, click **Start** on the HTTP(S) Test Script Recorder
2. You'll see a message: "Root CA certificate created in JMeter bin directory"
3. You can stop recording (just needed to generate the certificate)
4. Go to Firefox → **Options**
5. Search for **"certificate"** in the search box
6. Click **"View Certificates"**
7. Go to **"Authorities"** tab
8. Click **"Import"**
9. Navigate to your **Apache JMeter folder → bin directory**
10. Select the certificate file: **"ApacheJMeterTemporaryRootCA"**
11. Click **Open**
12. A popup asks if you want to use certificate for all websites → **Check ALL checkboxes**
13. Click **OK**

### After Import

- JMeter now has HTTPS trust to interact with all secure websites
- Browser recognizes the certificate provided by JMeter
- HTTPS websites work normally during recording

### [Important/Emphasized] If You Don't Import Certificate

- HTTPS websites will NOT work normally
- Recording will NOT capture HTTPS site actions

---

## Newer Version Alert: Transaction Controller Popup

- In latest JMeter versions, after clicking Start and OK (for certificate):
  - A **popup appears** about Transaction Controller
- **[Important/Emphasized]:** Just ignore this popup and leave it aside
- It will NOT interrupt your recording
- Transaction controllers will be explained in later sections
- Simply go to your browser and start recording your actions
- After recording is done → come back and click **Stop** to stop recording

---

## Practical Demo: Recording in Firefox

### Test Scenario

- Website: **blazedemo.com** (a dummy flight booking website for practice)
- Flow: Navigate to website → Select departure (Boston) → Select destination (London) → Find flights → Choose United Airlines flight

### Recording Steps

1. Ensure proxy is set in Firefox (localhost:8888)
2. In JMeter, click **Start** on the recorder → Click OK
3. Go to Firefox → type `blazedemo.com`
4. Select departure: **Boston**
5. Select destination: **London**
6. Click **Find Flights**
7. Choose: **United Airlines**
8. Go back to JMeter → **Stop recording**

### What Gets Captured

- JMeter captures the actions under HTTP(S) Test Script Recorder
- You will see **more than just 3 actions** — some are Firefox plugin/browser-related
- **How to identify real actions vs. browser noise:**
  - Check the **Server Name** field
  - If server name = `blazedemo.com` → it's a real action you need
  - If server name is something else (Firefox internal) → you can ignore/delete it

### The 3 Main Captured Requests

1. **blazedemo.com** — navigating to the website (GET request)
2. **/reserve.php** — selecting Boston to London (POST request)
3. **/purchase.php** — choosing United Airlines (POST request)

### Key Observations

- Each captured item shows: Server name, Port, Protocol, Method (GET/POST)
- **[Important/Emphasized]:** In JMeter, there is NO frontend UI. It's all about **Requests and Responses** only
- No UI elements visible — just request/response data during recording

### Cleaning Up After Recording

- Delete unnecessary items (Firefox plugin requests)
- Right-click → Remove unwanted entries
- Keep only the real actions needed for your test

### Moving to Test Plan for Playback

- Once recorded end-to-end → **copy all components** from recorder to **Test Plan**
- Then click **Start (Play button)** in toolbar
- JMeter will **replay the test** (without opening any UI)
- It's all about requests and responses being replayed

### [Important/Emphasized] After Recording — Reset Proxy

- Go back to Firefox Options → Network Proxy → Settings
- Change back to **"Use system proxy settings"**
- Browser won't work on proxy once JMeter recording is stopped
- Must reset every time you finish recording

---

## Recording with Chrome Using BlazeMeter Plugin

### What is BlazeMeter?

- BlazeMeter is a company in the **performance testing domain**
- They provide tools to run load test cases (similar to JMeter)
- They offer a **Chrome plugin** available in Chrome Web Store
- Plugin name: **"BlazeMeter - The Load Testing Cloud"**

### Advantage Over Firefox Method

- **No proxy setup needed**
- **No certificate import needed**
- Simply install plugin → login → start recording
- Much easier and cleaner

### Step-by-Step: Installing BlazeMeter Plugin

1. Go to Chrome Web Store
2. Search for "BlazeMeter" or use direct link:
   - `https://chrome.google.com/webstore/detail/blazemeter-the-load-testi/mbopgmdnpcbohhpnfglgohlbhfongabi?hl=en`
3. Click **"Add to Chrome"**
4. Confirmation: "Load Testing Cloud has been added to Chrome"
5. You'll see the BlazeMeter **icon** in your Chrome toolbar

### Step-by-Step: Setting Up BlazeMeter Account

1. Click the BlazeMeter icon in Chrome
2. You'll see Login/Sign Up options
3. Click **Sign Up** → goes to BlazeMeter website
4. Register with: First name, Last name, Email
5. After registration → **Log in** with username and password
6. Once logged in → plugin shows "Hello [Your Name]"
7. You're ready to use the plugin

### Step-by-Step: Recording with BlazeMeter

1. Click BlazeMeter icon
2. Give a **test name** (e.g., "demo")
3. Click **Start Recording**
4. Navigate to website (e.g., `blazedemo.com`)
5. Perform all actions (select departure, destination, find flights, choose airline)
6. Notice the **counter** in the plugin increases with each action
7. When done → click **Stop Recording**

### Exporting to JMeter (.jmx format)

- **[Important/Emphasized]:** JMeter only accepts `.jmx` extension files
- After stopping recording → click **"Export to JMeter"** button (with download icon)
- BlazeMeter converts your recording to `.jmx` format
- File downloads to your computer (e.g., `demo.jmx`)

### Importing .jmx File into JMeter

1. In JMeter → File → **Open**
2. Navigate to Downloads folder
3. Select the `.jmx` file (e.g., `demo.jmx`)
4. Click Open
5. Script is loaded into JMeter

### [Important/Emphasized] Saving Previous Work

- JMeter can only have **ONE project open** at a time
- Before opening a new file → **Save current work** first
- File → Save → give name (e.g., "Firefoxdemo")
- Saved as `.jmx` extension
- Default save location: JMeter's `bin` folder (can be changed)

---

## BlazeMeter vs. Firefox Recording — Comparison

| Aspect | Firefox + JMeter Proxy | Chrome + BlazeMeter |
|--------|----------------------|---------------------|
| Setup complexity | High (proxy + certificate) | Low (just install plugin) |
| Proxy required | Yes (manual configuration) | No |
| Certificate import | Yes (for HTTPS sites) | No |
| Unwanted requests captured | Yes (browser plugins, extras) | No (only real requests) |
| Cleanliness of recording | Needs manual cleanup | Clean — records only actual requests |
| Output | Directly in JMeter | `.jmx` file (import into JMeter) |
| Browser support | Firefox | Chrome |
| Account needed | No | Yes (free BlazeMeter account) |
| JMeter version dependency | Yes (recorder location changes) | No |

### [Important/Emphasized] BlazeMeter Advantage

- "They have taken great care in designing this plugin so that ONLY the real actual request is recorded"
- No need to worry about test script recorder or proxy settings
- Instructor personally likes BlazeMeter for its cleanliness

### Recording Produces Only 3 Clean Requests (BlazeMeter)

1. `blazedemo.com` — website homepage
2. `/reserve.php` — departure and destination selection
3. `/purchase.php` — flight selection

vs. Firefox which captured extra browser-related noise

---

## Understanding What JMeter Records

### [Important/Emphasized] Key Concept

- In JMeter, there is **NO UI/frontend**
- Everything is about **Requests and Responses** only
- When recording: you see server names, ports, protocols, methods — NOT visual page layouts

### How to Identify Correct Actions from Noise

- Look at the **"Server Name"** field in each recorded item
- If it matches your target website (e.g., `blazedemo.com`) → **Real action**
- If it shows something else (browser internal, plugins) → **Can be ignored/deleted**
- Even if you keep the noise, it doesn't break anything — but cleaner is better

---

## Two Ways to Create Test Scripts in JMeter

### Method 1: Record and Generate

- Use recording (Firefox proxy or BlazeMeter) to auto-generate the script
- Easier, faster, no coding needed
- Produces base script that may need enhancement

### Method 2: Write Script from Scratch

- Manually create HTTP requests in JMeter
- More control, but requires understanding of requests/responses
- Will be covered in upcoming sections

### The Overall Flow

1. Create user flow (via recording or manual scripting)
2. Use JMeter's components and tools to **put load** on that flow
3. Measure performance metrics

---

## Additional Learning Resources (Recommended)

### Books

- Website: **packtpub.com** — search for JMeter books
- Also available on: **Amazon Books**, **Safari Online**
- Having a JMeter book alongside video learning helps master the tool faster
- Watch videos + read book in **parallel** = master tool quickly

### Free Resources

- Instructor offers to share **PPT files and PDF files** related to JMeter
- These cover most of the information about the tool
- Available for students who cannot afford to buy books
- Contact: **rahulonlinetutor@gmail.com**

---

## Quick Revision — Section 2

1. **Video settings** = Use 1080p/720p, 1.25x-1.5x speed, full-screen mode for best experience
2. **Baseline testing process** = Develop test → Put load → Run → Collect metrics
3. **Record & Playback concept** = Perform actions in browser → JMeter listens → auto-generates test script
4. **Post-recording limitation** = May need changes for dynamic variables, cookies, session values before replaying
5. **HTTP(S) Test Script Recorder** = In older JMeter: under WorkBench; In newer JMeter: under Test Plan → Non-Test Elements
6. **Port number (8888)** = JMeter listens on this port; browser must route traffic through same port
7. **Request Filtering** = Add Suggested Excludes to skip .png, .gif, .css, .js during recording
8. **Firefox proxy setup** = Manual proxy config → localhost:8888 → check "Use for all protocols"
9. **Proxy logic** = Same port on browser and JMeter = connection works; different ports = JMeter can't capture
10. **Browser after proxy** = Won't work normally until JMeter recording starts; must reset proxy after recording
11. **HTTPS certificate** = Generated by JMeter in bin folder; must import into Firefox under Authorities
12. **Without certificate** = HTTPS sites won't work, recording won't capture
13. **BlazeMeter plugin** = Chrome extension, free account needed, no proxy/certificate setup required
14. **BlazeMeter recording** = Install → Login → Name test → Start recording → Do actions → Stop → Export to JMeter (.jmx)
15. **JMeter file format** = `.jmx` extension only
16. **BlazeMeter advantage** = Records only real requests (no noise/extras), no proxy headaches
17. **JMeter has no UI** = Everything is requests and responses only — no frontend visible
18. **Identify real actions** = Check Server Name field; if it matches your website = real; otherwise = noise
19. **Two scripting methods** = Record & generate OR write from scratch manually
20. **Additional resources** = packtpub.com books, Amazon, Safari Online, instructor's PPTs/PDFs

---
---

# SECTION 3: Thread Groups, Listeners & Performance Metrics

---

## What is a Thread Group?

### Definition

- **A Thread Group is a set of threads executing the same scenario**
- **Threads = Users** (in JMeter terminology)
- **[Important/Emphasized]:** Thread Group is the **heart of JMeter** — it plays a major role

### Purpose

- JMeter is used to load an application with N number of users
- Thread Group helps execute the flow with that N number of users
- You will be able to load the application with the help of Thread Group concept

### The Overall Workflow

1. Record/create a test script (user flow)
2. Use Thread Group to apply load (multiple users) on that script
3. Run and monitor results

---

## Recording a Complete Scenario (Demo)

### Test Scenario: Flight Booking (blazedemo.com)

**Full End-to-End Flow Recorded:**
1. Navigate to blazedemo.com (homepage)
2. Select departure city: **Boston**
3. Select destination city: **London**
4. Click **Find Flights**
5. Select **United Airlines**
6. Fill in purchase details:
   - Address: A
   - City: B
   - State: C
   - Zip Code: 123
   - Card Type: Visa
   - Credit Card Number: 123
   - Name: John Smith
7. Click **Purchase Flight**
8. Receive confirmation message

### Recording Steps (Recap)

1. Right-click Test Plan → Add → Non-Test Elements → HTTP(S) Test Script Recorder
2. Port: 8888
3. Target Controller: HTTP(S) Test Script Recorder
4. Request Filtering: Add Suggested Excludes
5. Ensure Firefox proxy is set to 8888
6. Click Start → OK (certificate) → dismiss Transaction Controller popup
7. Perform actions in browser
8. Come back to JMeter → Click Stop

### Cleaning Up Recorded Script

- Remove browser-related entries (e.g., `detectportal.firefox.com`)
- Keep only real actions related to `blazedemo.com`
- **4 important operations** remain after cleanup:
  1. Homepage (blazedemo.com)
  2. Reserve.php (Boston to London selection)
  3. Purchase.php (United Airlines, flight number, price)
  4. Confirmation.php (final confirmation page)

### Saving the Test

- File → Save → give name (e.g., "Thread Group")
- Saved as `.jmx` file

### Version Note

- **Newer versions:** Right-click Test Plan → Add → Non-Test Elements → HTTP(S) Test Script Recorder
- **Older versions:** Use WorkBench
- **[Important/Emphasized]:** Most companies still use older stable JMeter versions — need to know both approaches

---

## Creating a Thread Group

### How to Add Thread Group

1. Right-click on **Test Plan**
2. Select **Add → Threads → Thread Group**
3. Thread Group window opens

### [Important/Emphasized] Additional Thread Group Options

- You may see extra options (Concurrency Thread Group, Ultimate Thread Group, etc.)
- These require additional plugins (explained later)
- For now, use the basic **Thread Group**

---

## Thread Group Parameters (Detailed)

### Parameter 1: Number of Threads (Users)

- **What it means:** How many users you want to load
- Example: 50 = fifty users will click through and complete the flow
- Simple and self-explanatory

### Parameter 2: Ramp-Up Period (in seconds)

- **What it means:** How many seconds for ALL users to arrive at the server
- **[Important/Emphasized]:** This simulates real-world behavior — users don't all arrive at once

**Example: 50 users, 5 seconds ramp-up:**

| Second | Users on Server | New Users Added |
|--------|----------------|-----------------|
| 1st second | 10 | 10 |
| 2nd second | 20 | 10 |
| 3rd second | 30 | 10 |
| 4th second | 40 | 10 |
| 5th second | 50 | 10 |

- **Calculation:** 50 users ÷ 5 seconds = 10 users per second
- **Why needed:** In real-time, 1000 users don't all click simultaneously. They arrive gradually over seconds
- Ramp-up creates this real-time simulation

### Parameter 3: Loop Count

- **What it means:** How many times each user repeats the flow
- Example: Loop count = 5 → each of 50 users repeats flow 5 times
- **Total executions:** 50 users × 5 loops = **250 total executions** on the server

### Parameter 4: Forever Checkbox + Scheduler (Duration)

- **Forever checkbox:** Test keeps running indefinitely (loops continuously)
- **Must provide a stop condition** → use **Scheduler**
- **Duration field:** Run all loads for X seconds (e.g., 60 seconds)

**How Duration works:**
- 50 users might complete all operations in 10 seconds (loop 1 done)
- Since "Forever" is checked → they start loop 2
- After loop 2 → they start loop 3
- **Continues until duration (60 seconds) is reached**
- If it takes 10 loops to fill 60 seconds → 10 loops happen
- If it takes 1000 loops → 1000 loops happen

### Choosing Between Loop Count and Duration

| Option | When to Use |
|--------|-------------|
| **Specific loop count** (e.g., 5) | When you want exactly N repetitions then stop |
| **Forever + Duration** (e.g., 30 sec) | When you want to stress test for a specific time period |

- **[Important/Emphasized]:** The choice depends on your client's requirements
- Client provides all details about what they need
- You set up the Thread Group accordingly

### Parameter 5: Action to be Taken After a Sampler Error

**Options:**

| Option | What it Does |
|--------|-------------|
| **Continue** | Keep running remaining users even if one fails |
| **Start Next Thread Loop** | Stop current loop for all users, start next loop |
| **Stop Thread** | Stop only the specific user that failed |
| **Stop Test** | Stop the entire test regardless of remaining users |
| **Stop Test Now** | Immediately stop everything |

**[Important/Emphasized] Best Practice: Use "Continue"**

- Reason: If 5 out of 50 users fail, you still need to know performance of the other 45
- Don't stop the test just because one user failed
- You're applying load for 30 seconds — let it fail, but still observe how the application behaves
- **Exception:** If your application is very stable and even one failure is a red flag → use "Stop Test"
- **General practice:** People use "Continue"

---

## Moving Recorded Script into Thread Group

### Process

1. Recorded actions are under HTTP(S) Test Script Recorder
2. **Cut** all recorded operations (Ctrl+X)
3. **Paste** inside Thread Group (Ctrl+V)
4. Now Thread Group knows what to execute

### Why This Step is Necessary

- Thread Group needs to know WHAT to execute
- Parameters tell it HOW (users, ramp-up, loops)
- The recorded HTTP requests tell it WHAT (the actual flow)

---

## Listeners — Viewing Test Results

### What is a Listener?

- As the name says: it **listens to your execution**
- Tracks and listens to how JMeter executes
- Collects all results, load parameters, graphs
- Shows output in JMeter console
- **Without listeners:** You run the test but can't see any results → useless

### How to Add Listeners

- Right-click on **Thread Group** → Add → **Listener** → Select desired listener
- **[Important/Emphasized]:** Add listeners WITHIN Thread Group (not outside)

### The 3 Most Important Listeners

| Listener | Purpose |
|----------|---------|
| **View Results Tree** | See pass/fail status, request/response data for each action |
| **Aggregate Report** | See performance metrics (average, min, max, throughput, error%) |
| **Graph Results** | Visual graphs of performance (deviation, throughput, average) |

- Other listeners exist but these 3 provide the key parameters
- Since JMeter is open source, anyone can add jar files to create new listeners
- The remaining listeners offer additional views (different graph types, etc.)

---

## Listener 1: View Results Tree (Detailed)

### What it Shows

- **Green checkmark** = Request was successful
- **Red X mark** = Request failed
- First checkpoint to verify if your test is running correctly

### Information Available for Each Request

**Sampler Result Tab:**
- Start time
- Load time
- Response time (latency)
- Size in bytes (body size, header size)
- **Response Code:** 200 = success
- **Response Message:** OK = successful execution

### Request Tab

- Shows the data **sent TO the server**
- Example: Boston, London as parameters
- Shows: Host, Method (GET/POST), Parameters
- HTTP sub-tab shows additional details

### Response Tab

- Shows the data **received FROM the server**
- The actual response content (HTML/data returned by server)
- Example: United Airlines, Virgin America, Lufthansa listed in response

### [Important/Emphasized] JMeter Runs Everything Headless

- No UI/frontend visible during execution
- Everything is in request and response pattern only
- Similar to Selenium running on browser, JMeter runs behind screens in headless mode

### [Important/Emphasized] Critical Warning: Green 200 ≠ Always Correct

**The Problem:**
- Green checkmark + 200 status = Request reached server and got a response
- BUT the **response content might be WRONG**

**Example Scenario:**
1. Send request: "Add Employee (John)" → Response: "Employee added successfully" → 200 ✓
2. Send SAME request again: "Add Employee (John)" → Response: "Employee already exists" → **Still 200 ✓**

- Both show green checkmark and 200 status
- But second response is actually an error (employee wasn't added)
- JMeter reports success because HTTP status is 200

**Why This Happens:**
- Server returns 200 because it handled the request successfully (no server error)
- But the BUSINESS logic says it's a failure (employee wasn't actually added)
- JMeter only checks HTTP status code, not response content

**Solution:**
- **Always check response body** manually on first run
- In later sections: **Assertions** will automate this validation
- Script itself will check if correct response message exists

### [Important/Emphasized] Best Practice: Run with 1 User First

**Process:**
1. Create your JMeter script
2. Add View Results Tree listener
3. Set Thread Group to **1 user** (NOT multiple users yet)
4. Run the test
5. Check View Results Tree:
   - All green checkmarks?
   - Response bodies contain expected data?
6. **Only AFTER confirming success** → increase to multiple users and apply load

**Why:**
- If basic script has errors and you run 100 users for 50 minutes:
  - You get 1050+ results
  - Some pass, some fail
  - Very hard to identify where exactly the failure occurred
- With 1 user: easy to pinpoint issues
- Fix all issues first → then apply load → then calculate metrics

### How to Verify Response Content

1. Select a request in View Results Tree
2. Go to **Response Data** tab → **Response Body**
3. Look for expected content (e.g., "United Airlines" in flight results)
4. Use **Search/Find (Ctrl+F)** to search for specific text in response
5. If found → response is correct
6. If not found → something is wrong with your script

### [Important/Emphasized] Interview Question

- "What challenges did you face with JMeter?"
- Answer: "View Results Tree shows success (green 200), but actual response may be wrong. This leads to incorrect performance metrics being reported."

### Assertions (Preview)

- In upcoming lectures: **Assertions** concept
- Assertions automatically verify response content
- No need to manually check Ctrl+F each time
- Script itself validates if response is correct or not

---

## Listener 2: Aggregate Report (Detailed)

### What it Shows

A table with performance metrics for EACH request in your flow.

### Key Parameters Explained

#### 1. Samples

- **Definition:** Number of users that hit that specific request
- Example: 2136 samples = this request was hit 2136 times during the test
- In 30 seconds, this request was hit 2136 times on the server

#### 2. Average (milliseconds)

- **Definition:** Average time taken by ALL samples to execute a specific label/request
- **Formula:** Sum of all sample times ÷ Number of samples

**Calculation Example:**
- 3 users: User 1 = 12ms, User 2 = 15ms, User 3 = 30ms
- Average = (12 + 15 + 30) ÷ 3 = **19ms**

- In real scenario: 2136 samples, each takes some time
- Sum all times ÷ 2136 = 129ms average
- **Meaning:** On average, server needs 129ms to give response for this request when 2153 samples are hitting it

#### 3. Min (Minimum)

- **Definition:** Shortest time taken by any ONE sample to get a response
- Example: Out of 2125 samples, one got response in only **107ms** (fastest)
- Represents the **best case scenario**

#### 4. Max (Maximum)

- **Definition:** Longest time taken by any ONE sample to get a response
- Example: One sample took **347ms** (slowest)
- Represents the **worst case scenario**
- Management may ask: "What's the maximum time any user takes?" → Answer with Max value

#### 5. Error %

- **Definition:** Percentage of failed requests for that specific label
- Example: 0% = all requests passed successfully
- **Guidelines:**
  - 0% = Perfect
  - 3-4% = May be application inconsistency, can be ignored
  - **10-15%+ = Must investigate** — something is wrong

#### 6. Throughput (Requests per Second) — [Important/Emphasized] MOST IMPORTANT

- **Definition:** Number of requests processed per time unit (seconds/minutes/hours) by the server
- Example: 72.3/sec = server handles 72.3 requests per second for reserve.php
- **This represents the SERVER's CAPACITY**

**Key Points about Throughput:**
- **[Important/Emphasized]:** Larger throughput = BETTER
- When you increase users → throughput should also increase (server handling more)
- At some point, throughput **plateaus** (stops increasing) even if you add more users
  - That plateau = **maximum capacity** of your server
- If throughput **decreases** when adding users → server is overloaded

**Example with 50 users:** Throughput = 72.3 req/sec
**Example with 100 users:** Throughput = 123.7 req/sec (server still has capacity)

#### 7. Median

- **Definition:** Time in the middle of a set of sample results
- Indicates 50% of samples took no more than this time
- Not commonly used (Average is preferred)
- It's a mathematical middle value of all samples

#### 8. 90% Line (90th Percentile)

- **Definition:** 90% of samples took no more than this time
- Example: Out of 3699 samples, 90% (~3000) took no more than **176ms**
- Useful to understand: "What response time do MOST users experience?"

#### 9. 95% Line (95th Percentile)

- **Definition:** 95% of samples took no more than this time
- Example: 95% of users get response within **184ms**

#### 10. 99% Line (99th Percentile)

- **Definition:** 99% of samples took no more than this time
- Example: ~3650 out of 3699 requests took no more than **205ms**

### How to Report Results to Client

**Example Report Statement:**
> "With 100 users of load, throughput is 123.7 requests/second for reserve.php request"

**What happens next:**
1. Client reviews: "With 100 users, I expect at least 200 requests/sec"
2. You reported: Only 123 → there's a problem
3. Client sets benchmark: "With 100 users, I want 200 req/sec minimum"
4. Development team does **performance tuning**
5. After tuning → you run the test again
6. Check if throughput now reaches 200 benchmark
7. Report again to client

### [Important/Emphasized] Key Metrics for Reporting

For each request, report:
1. **Average** time
2. **Min** time
3. **Max** time
4. **Throughput** value

### Role Distribution in Performance Testing

| Role | Responsibility |
|------|---------------|
| **Tester** | Record/create script, run tests, generate reports, send to client |
| **Client/Business** | Provide benchmarks, number of users, decide if metrics are acceptable |
| **Developer** | Performance tuning if metrics don't meet benchmarks |

- **[Important/Emphasized]:** Performance testing job is comfortable — you don't need to worry about changing values
- Values/benchmarks come from business
- Fixing issues is done by developers
- You just: Record → Script → Add assertions → Generate report → Give to client

---

## Listener 3: Graph Results (Detailed)

### What it Shows

- Visual graph of how the test behaves over time
- Multiple data lines plotted on the graph

### Key Graph Lines

#### 1. Average (Black line)

- Average response time in milliseconds
- Shows how much time it takes to get response
- Example: 186ms average response time for all requests in the complete flow

#### 2. Deviation (Red line) — Standard Deviation

- **Definition:** Shows exceptional cases that deviated from the average value of sample response time
- **[Important/Emphasized]:** The LESSER this value, the MORE CONSISTENT the data

**Analogy (from instructor):**
- Driving straight on a road = Normal (expected behavior)
- Suddenly turning right into the forest = **Deviation** (not following correct path)
- "What a deviation!" = something is going wrong

**How to Read Deviation on Graph:**
- **Straight/flat line** = Tests are NOT deviating from average response time = GOOD
- **Line going up/peaks** = Some tests are deviating significantly = PROBLEM
- **Higher deviation value** = More inconsistency = More problems with server load

**Rule:** Standard deviation should be **less than or equal to HALF of the average time**

#### 3. Throughput (Green line)

- Number of requests served per second
- **[Important/Emphasized]:** Throughput graph should go UP (increasing)
- If it goes DOWN → server can't handle the load → number of requests served decreasing

### [Important/Emphasized] Ideal Graph Behavior Rules

| Metric | Ideal Behavior | Bad Sign |
|--------|---------------|----------|
| **Throughput** | Should INCREASE | Decreasing = server overloaded |
| **Deviation** | Should STAY LOW (below average) | Increasing = inconsistent responses |
| **Average** | Should remain stable | Increasing dramatically = server slowing down |

### The Golden Rule

> **"Throughput should NOT decrease, and Deviation should NOT increase"**

### [Important/Emphasized] Interview Question

- "What is the ideal throughput graph for a well-performing server?"
- Answer: "Throughput should always increase (server handling more requests). Deviation should stay low and below the average line (responses are consistent)."

### How to Interpret Graph Health

**Healthy Test:**
- Average: Stable line
- Deviation: Below average, flat
- Throughput: Increasing/stable at high level

**Unhealthy Test (Server Failing):**
- Average: Goes up (server getting slower)
- Deviation: Increases (responses becoming inconsistent)
- Throughput: Goes DOWN (server serving fewer requests per second)
- Conclusion: "Your server is unable to handle the load of all these users"

---

## Additional Plugins for Thread Groups

### Where to Download

- URL: `https://jmeter-plugins.org/wiki/PluginsManager/`
- Download the jar file and add to JMeter

### Additional Thread Group Types (Available After Plugin Install)

| Thread Group Type | Description |
|-------------------|-------------|
| **Concurrency Thread Group** | More control over concurrent users |
| **Ultimate Thread Group** | Advanced scheduling and ramping patterns |

- These provide more sophisticated load simulation options
- Will be explained in later sections

---

## Key Formulas and Calculations

### Average Calculation
```
Average = (Time_User1 + Time_User2 + ... + Time_UserN) / N
```

### Example:
```
3 users: 12ms + 15ms + 30ms = 57ms
Average = 57 / 3 = 19ms
Min = 12ms
Max = 30ms
```

### Throughput Interpretation
```
With 100 users load → Throughput = 123.7 req/sec for reserve.php
Meaning: Server can handle 123.7 requests per second for that endpoint
```

### Percentile Interpretation
```
90% Line = 176ms means:
90% of 3699 samples (~3329 requests) took ≤ 176ms
Only 10% took longer than 176ms
```

---

## Quick Revision — Section 3

1. **Thread Group** = Set of threads (users) executing the same scenario — heart of JMeter
2. **Threads = Users** in JMeter terminology
3. **Number of Threads** = How many virtual users to simulate
4. **Ramp-Up Period** = Time (seconds) for all users to arrive; simulates gradual real-world traffic
5. **Ramp-Up calculation** = Users ÷ Ramp-Up seconds = users arriving per second
6. **Loop Count** = How many times each user repeats the flow (total = users × loops)
7. **Forever + Duration** = Run indefinitely until time limit reached (e.g., 60 seconds)
8. **Action on Error** = Continue (recommended), Stop Thread, Stop Test, Start Next Loop
9. **Continue is best** = Don't stop test for one failure; observe remaining users' performance
10. **Move scripts to Thread Group** = Cut from recorder, paste into Thread Group before running
11. **Listeners** = Components that track execution and display results/reports
12. **3 key listeners** = View Results Tree, Aggregate Report, Graph Results
13. **View Results Tree** = Shows pass/fail (green/red), request data, response data for each action
14. **Green 200 ≠ always correct** = Response code 200 but body may contain error message
15. **Run with 1 user first** = Verify script correctness before applying load
16. **Aggregate Report** = Table of metrics: Samples, Average, Min, Max, Error%, Throughput, Percentiles
17. **Average** = Mean response time across all samples for a request
18. **Min/Max** = Best case / worst case response time
19. **Error%** = 0% ideal; 3-4% acceptable; 10%+ needs investigation
20. **Throughput** = Requests processed per second by server — LARGER IS BETTER
21. **Throughput plateau** = Maximum server capacity reached
22. **90%/95%/99% Line** = X% of samples took no more than this time (percentiles)
23. **Median** = Middle value (50th percentile) — not commonly focused on
24. **Graph Results** = Visual representation of Average, Deviation, Throughput over time
25. **Deviation** = How much responses deviate from average; LOWER = MORE CONSISTENT
26. **Deviation rule** = Should be less than or equal to half the average time
27. **Ideal graph** = Throughput UP, Deviation LOW (below average), Average STABLE
28. **Bad graph** = Throughput DOWN, Deviation UP, Average INCREASING
29. **Reporting to client** = Average, Min, Max, Throughput per request with user count
30. **Roles** = Tester reports metrics; Client sets benchmarks; Developer does performance tuning
31. **Additional plugins** = jmeter-plugins.org for Concurrency Thread Group, Ultimate Thread Group

---
---

# SECTION 4: Additional Plugins — Advanced Thread Groups for Real-Time Load Simulation

---

## Introduction: Why Additional Plugins?

- Until now: learned to load applications using basic **Thread Group** (set threads, ramp-up, loops, duration)
- **Limitation:** Basic Thread Group provides simple load configuration
- **Solution:** External plugins provide **advanced real-time load configurations**
- These plugins help simulate how users ACTUALLY behave in real-world scenarios

---

## Installing JMeter Plugins Manager

### Why Plugin Manager?

- There are many plugins available at jmeter-plugins.org
- Instead of downloading plugins one by one → install **Plugin Manager**
- Plugin Manager lets you download/install any plugin directly from within JMeter tool
- After installation: **Options menu** → Plugins Manager option appears

### Step-by-Step: Download Plugin Manager

1. Go to Google → search "JMeter plugins"
2. Go to official website: `https://jmeter-plugins.org/wiki/PluginsManager/`
3. Find the link: "Install Plugins Manager in your JMeter"
4. Click the link → redirects to download page
5. Download the **JAR file** for Plugins Manager

### Step-by-Step: Install Plugin Manager

1. Download the JAR file
2. Navigate to your **JMeter installation folder**
3. Go to: `lib/ext` folder (lib → ext subfolder)
4. **Place the downloaded JAR file** in this `lib/ext` folder
5. **Restart JMeter**
6. After restart: Go to **Options** menu → you'll see **"Plugins Manager"** option

### [Important/Emphasized] Key Points

- The JAR must go in `lib/ext` folder (not lib directly, not bin)
- You MUST restart JMeter after placing the JAR
- After restart, the Plugins Manager option appears under Options menu

---

## Installing Custom Thread Groups Plugin

### Using Plugins Manager

1. Open JMeter → **Options** → **Plugins Manager**
2. Go to **"Available Plugins"** tab
3. Search for: **"Custom Thread Groups"**
4. Select/check the checkbox for Custom Thread Groups
5. Click **"Apply Changes and Restart JMeter"** button
6. JMeter restarts automatically with the plugin installed
7. If it doesn't restart automatically → restart manually

### What You Get After Installation

After installing Custom Thread Groups, when you right-click Test Plan → Add → Threads, you'll see **NEW options:**

| Thread Group Type | Status |
|-------------------|--------|
| Thread Group (basic) | Already existed |
| **Concurrency Thread Group** | NEW — from plugin |
| **Ultimate Thread Group** | NEW — from plugin |
| Stepping Thread Group | Deprecated (not supported in latest versions) |

### [Important/Emphasized] Important Notes

- **Stepping Thread Group** has been deprecated — avoid it
- No point discussing something already deprecated
- Focus on: **Concurrency Thread Group** and **Ultimate Thread Group**
- Both have the same functionality but different configuration interfaces

---

## Concurrency Thread Group (Detailed)

### What it Is

- An advanced Thread Group for simulating real-time load
- Provides visual graph preview of how load will be applied
- Same functionality as basic Thread Group but with more control and visualization

### Parameters

#### 1. Target Concurrency (Number of Threads/Users)

- How many users you want to start
- Example: 60 users
- Same as "Number of Threads" in basic Thread Group

#### 2. Ramp-Up Time

- In how many seconds/minutes should all users arrive at the server
- **Unit selection:** Can choose seconds or minutes
- Example: 30 seconds = all 60 users will ramp up within 30 seconds
- **Real-world analogy:** Not all users arrive at second 1 — it takes time for people to enter

**Real-World Example:**
- Black Friday deal starts at 12:00 PM
- Not everyone arrives at exactly 12:00
- People join at 12:10, 12:20, 12:30
- By 12:30, maximum traffic on server
- Ramp-up = the period from 12:00 to 12:30
- In testing: 30 seconds represents 30 minutes of real-time gradual arrival

#### 3. Ramp-Up Steps Count

- **In how many steps/intervals** should the ramp-up happen within the ramp-up time
- Instead of adding users every second → add users in batches at intervals

**Example Calculation:**
- 60 users, 30 seconds ramp-up, 3 steps
- 60 ÷ 3 = **20 users per step**
- Step 1: 20 users arrive
- Step 2: 40 users total (20 more added)
- Step 3: 60 users total (20 more added)
- All within 30 seconds (10 seconds per step)

**Graph shows:** Staircase pattern — flat → jump → flat → jump → flat → jump

#### 4. Hold Target Rate Time

- After ramp-up is complete → how many seconds to **KEEP** all users on the server
- Example: 180 seconds = maintain 60 users on server for 180 seconds (3 minutes)
- Graph shows: Ramp-up staircase → then flat line at target for the hold duration

### Visual Graph Representation

```
Users
  60 |          ___________________________
     |         |                           |
  40 |    _____|                           |
     |   |                                 |
  20 |___|                                 |___
     |                                         
     |____|____|____|________________________|___> Time
     0   10   20   30                      210 (seconds)
     
     <-Ramp-up (30s)->  <-- Hold (180s) -->
       (3 steps)
```

### How to Use Concurrency Thread Group

1. Right-click Test Plan → Add → Threads → **Concurrency Thread Group**
2. Set all parameters (target concurrency, ramp-up time, steps, hold time)
3. **Move your test scripts** into this Thread Group (cut from recorder → paste here)
4. **Disable** other Thread Groups (right-click → Disable) so only this one runs
5. Run the test
6. View results in listeners

### Enabling/Disabling Thread Groups

- **Disable:** Right-click on Thread Group → Disable (won't run when test plan executes)
- **Enable:** Right-click → Enable (will be included in test plan runs)
- Useful when you have multiple Thread Groups but want to run only one

### Reporting with Concurrency Thread Group

- When sending benchmark results to client, include:
  - **Screenshot of the load strategy graph** showing how you applied load
  - Example: "Started at 30 users, ramped up in 30 seconds with 3 steps, held for 180 seconds"
  - Then attach the performance metrics/parameters

---

## Ultimate Thread Group (Detailed)

### What it Is

- Another advanced Thread Group from the Custom Thread Groups plugin
- Similar to Concurrency Thread Group but provides **additional parameters**
- Specifically includes: **Initial Delay** and **Shutdown Time**
- Better for simulating complete real-world user lifecycle

### Parameters

#### 1. Start Threads Count (Number of Users)

- How many threads/users to run
- Example: 50 users
- Must click **"Add Row"** first to add configuration

#### 2. Initial Delay (seconds)

- Delay before ANY user starts
- Example: 5 seconds delay = no users for first 5 seconds, then loading begins
- **Use case:** Simulating a scenario where the event hasn't started yet

**Graph behavior with 5s delay:**
```
Users
  50 |              _______________
     |             /               \
   0 |____________/                 \________
     |
     |____|____|________________________|___> Time
     0    5   35                       105
     <- delay ->
```

#### 3. Startup Time (Ramp-Up)

- Same concept as ramp-up: how many seconds to reach all users on server
- Example: 30 seconds startup time
- Starts AFTER the initial delay
- If delay = 5s and startup = 30s → all users on server by second 35 (5 + 30)

#### 4. Hold Load For (seconds)

- How long to keep all users on the server at full capacity
- Example: 60 seconds = maintain 50 users for 60 seconds after ramp-up completes

#### 5. Shutdown Time (Ramp-Down)

- **[Important/Emphasized]:** This is the UNIQUE feature of Ultimate Thread Group
- How many seconds to gradually remove all users from the server
- Example: 10 seconds = slowly reduce from 50 users to 0 over 10 seconds
- **If set to 0:** All users leave immediately (straight drop — not realistic)
- **If set to 10:** Gradual decrease over 10 seconds (realistic)

**Real-world analogy:**
- Deal closes at 12:00 AM
- Not everyone leaves at exactly 12:00
- Some leave at 11:30, 11:45, some stay until 11:59
- Shutdown time simulates this gradual departure

### Complete Graph for Ultimate Thread Group

```
Users
  50 |                    _______________
     |                   /               \
     |                  /                 \
   0 |_________________/                   \____
     |
     |____|___________|_______________|____|___> Time
     0    5          35              95   105
     
     <delay> <startup>  <hold 60s>  <shutdown>
      (5s)    (30s)                   (10s)
```

### Full Timeline Calculation

| Phase | Duration | Time Range | Users on Server |
|-------|----------|------------|-----------------|
| Initial Delay | 5 seconds | 0s → 5s | 0 users |
| Startup (Ramp-Up) | 30 seconds | 5s → 35s | 0 → 50 (gradual increase) |
| Hold Load | 60 seconds | 35s → 95s | 50 users (constant) |
| Shutdown (Ramp-Down) | 10 seconds | 95s → 105s | 50 → 0 (gradual decrease) |
| **Total Test Duration** | **105 seconds** | 0s → 105s | — |

### What Happens if All Values are Zero (Delay=0, Startup=0, Shutdown=0)

- All 50 users arrive at once (second 0)
- All stay for hold time
- All leave at once
- **This is NOT realistic** — not how real users behave
- Real-time simulation requires proper delay, startup, and shutdown values

### Action After Sampler Error

- Same options as basic Thread Group: Continue, Stop Thread, Stop Test
- **Recommended:** Continue (same reasoning — don't stop for one failure)

---

## Concurrency Thread Group vs. Ultimate Thread Group — Comparison

| Feature | Concurrency Thread Group | Ultimate Thread Group |
|---------|------------------------|---------------------|
| Target Users | ✓ | ✓ |
| Ramp-Up Time | ✓ | ✓ (called "Startup Time") |
| Ramp-Up Steps | ✓ (configurable steps) | ✗ (smooth ramp) |
| Hold Time | ✓ | ✓ |
| Initial Delay | ✗ | ✓ |
| Shutdown Time (Ramp-Down) | ✗ | ✓ |
| Graph Preview | ✓ | ✓ |
| Multiple Rows/Schedules | ✗ | ✓ (add multiple rows) |

### When to Use Which

| Scenario | Recommended |
|----------|-------------|
| Simple stepped ramp-up with hold | Concurrency Thread Group |
| Need initial delay before test | Ultimate Thread Group |
| Need gradual shutdown (ramp-down) | Ultimate Thread Group |
| Client requires complete lifecycle simulation | Ultimate Thread Group |
| Quick stepped load testing | Concurrency Thread Group |

---

## When to Use Plugin Thread Groups vs. Basic Thread Group

### Use Basic Thread Group When:
- Simple load testing (quick checks)
- Internal product testing
- Same company testing their own product
- No strict client requirements on load pattern

### Use Plugin Thread Groups When:
- Service-based companies working with product clients
- Client provides strict requirements on:
  - How users should behave
  - Ramp-up patterns
  - Hold durations
  - Shutdown patterns
- Need to attach load strategy graphs to reports
- Need to simulate real-world user arrival/departure patterns

### [Important/Emphasized] Key Insight

- **Service-based companies with external clients:** Will likely need plugin thread groups (clients impose strict requirements)
- **Companies testing their own product:** May not need these many parameters
- **Outsourcing to another client:** Client will definitely provide specific requirements → use these thread groups

### Course Going Forward

- From this point onward, the course will use **basic Thread Group** for simplicity
- These two plugins are available for you to use based on project requirements

---

## Summary: Plugin Installation Complete Flow

```
1. Google "JMeter plugins" → jmeter-plugins.org
2. Download Plugins Manager JAR
3. Place JAR in JMeter/lib/ext/ folder
4. Restart JMeter
5. Options → Plugins Manager → Available Plugins
6. Search "Custom Thread Groups" → Select → Apply Changes
7. JMeter restarts
8. Now available: Right-click Test Plan → Add → Threads → [New Options]
```

---

## Quick Revision — Section 4

1. **Why plugins** = Basic Thread Group is simple; plugins provide advanced real-time load configurations
2. **JMeter Plugins website** = jmeter-plugins.org — official source for all plugins
3. **Plugin Manager** = Download JAR → place in `lib/ext` folder → restart JMeter → appears in Options menu
4. **Custom Thread Groups plugin** = Provides Concurrency Thread Group and Ultimate Thread Group
5. **Stepping Thread Group** = Deprecated — avoid it; not supported in latest versions
6. **Concurrency Thread Group** = Target concurrency + Ramp-up time + Ramp-up steps + Hold time
7. **Ramp-Up Steps** = Divide users into batches arriving at intervals (staircase pattern)
8. **Hold Target Rate** = How long to keep all users on server after ramp-up completes
9. **Concurrency example** = 60 users, 30s ramp-up, 3 steps → 20 users per step every 10 seconds, then hold
10. **Ultimate Thread Group** = Start threads + Initial delay + Startup time + Hold load + Shutdown time
11. **Initial Delay** = Wait X seconds before any user starts (unique to Ultimate TG)
12. **Startup Time** = Ramp-up period (how long to reach all users)
13. **Hold Load For** = Duration to maintain full load on server
14. **Shutdown Time** = Gradual ramp-down (how long to remove all users) — simulates real departure
15. **If all zeros** = All users arrive/leave instantly — NOT realistic
16. **Real-time simulation** = Needs proper delay, startup, hold, and shutdown values
17. **Graph preview** = Both thread groups show visual graph of load strategy
18. **Reporting** = Include load strategy graph screenshot when sending results to client
19. **Disable/Enable** = Right-click Thread Group → Disable/Enable to control which runs
20. **When to use plugins** = Client has strict requirements on user behavior; service companies with external clients
21. **Basic TG for course** = Course continues with basic Thread Group; plugins available for real projects

---
---

# SECTION 5: HTTP Cookie Manager — Handling Session Cookies in JMeter

---

## Introduction: The Problem

### Scenario

- Website: `the-internet.herokuapp.com/login` (a practice application)
- Flow: Navigate to login page → Enter username & password → Login → See secure area → Logout
- Credentials: Username = `tomsmith`, Password = `SuperSecretPassword!`

### What Happens When You Record and Replay

1. Record the login flow in JMeter (using HTTP(S) Test Script Recorder)
2. Clean up Firefox-related entries (keep only real actions)
3. Move recordings to Thread Group
4. Add View Results Tree listener
5. Run with 1 user to verify script

### The Problem Discovered

- After running: **All requests show GREEN checkmark (200 status)**
- BUT when checking the **response body** of the authentication request:
  - **Expected:** "Welcome to the Secure Area" (login successful)
  - **Actual:** "This is where you can log in to the secure area" (still on login page!)
- **[Important/Emphasized]:** The login FAILED but JMeter shows SUCCESS (green tick)
- The script did NOT actually log in — it stayed on the login page

### Why This Happens

- The application uses **session cookies** for authentication
- When running from a **browser**: browser stores cookies automatically and attaches them to subsequent requests
- When running from **JMeter**: JMeter is NOT a browser — it does NOT store or manage cookies automatically
- Without cookies → server cannot identify the user → authentication fails silently

---

## What Are Session Cookies?

### Definition and Concept

- A **session cookie** is a unique identifier given by the server to identify a user's session
- It's stored by the browser and attached to every subsequent request

### How Cookies Work — Facebook Example

**Step 1: First Visit**
1. You open browser → hit `facebook.com`
2. Facebook responds with: login page + **one session cookie**
3. Browser **stores** this session cookie

**Step 2: After Login**
1. You enter username/password → click Login
2. You're logged in → navigate to profile, messages, etc.
3. Every time you click anything (e.g., open/Profile):
   - Browser **attaches the session cookie** to the request
   - Facebook uses this cookie to **uniquely identify YOU**
   - That's how it knows whose profile to show

**Step 3: Why Cookies Are Needed**
- HTTP is **stateless** — each request is independent; server doesn't remember previous requests
- Without cookies: If both you and another person click "Profile" → same request sent → server can't distinguish who is who
- Cookies solve this: Each user has a unique session cookie → server knows who made each request

**Step 4: Closing and Reopening Browser**
- Close browser → open again → hit `facebook.com`
- This time: **NOT asked to login again!** Directly goes to homepage
- Why? Cookie is still stored in browser → sent with the request → Facebook recognizes you

**Step 5: Cookie Expiration**
- Cookies have an **expiration time** (e.g., few months)
- After expiry → cookie is no longer valid → you see login page again
- Or: If you **manually delete cookies** from browser → next visit shows login page

### [Important/Emphasized] Key Takeaways About Cookies

- Cookies uniquely identify a user to the application
- Not all applications use cookies — mostly **secure applications** that require authentication
- Browser stores cookies automatically; JMeter does NOT (this is the problem)

---

## The Heroku App Example — Detailed Analysis

### Recording Steps

1. Open Firefox with proxy set to 8888
2. In JMeter: Add HTTP(S) Test Script Recorder → Set port 8888 → Add Suggested Excludes
3. Start recording
4. In Firefox: Navigate to `the-internet.herokuapp.com/login`
5. Enter: tomsmith / SuperSecretPassword!
6. Click Login → See "Welcome to the Secure Area"
7. Click Logout
8. Stop recording in JMeter

### After Cleanup — 5 Key Operations Recorded

| # | Action | What it Does |
|---|--------|-------------|
| 1 | GET /login | Navigate to the login page |
| 2 | POST /authenticate | Send username + password to server |
| 3 | GET /secure | Access the secure area (after login) |
| 4 | GET /logout | Logout from the application |
| 5 | GET /login | Return to login page after logout |

### Running Without Cookie Manager — Analysis

**Request 1 (GET /login):**
- Response body: "This is where you can log in to the secure area" ✓ (correct)
- Response headers: **Server sends a session cookie** in the response

**Request 2 (POST /authenticate):**
- Request tab: Sends username=tomsmith, password=SuperSecretPassword!
- Cookie data: **"No cookies"** ← THE PROBLEM
- Response code: 303 (redirect — not 200)
- Response body: Still shows "This is where you can log in" (NOT logged in)

### Why It Failed

1. When JMeter hit the login URL (Request 1) → server sent back a session cookie in response headers
2. In a browser: browser stores this cookie → attaches it to Request 2 (authenticate)
3. In JMeter: **Cookie was NOT stored** → Request 2 was sent WITHOUT the cookie
4. Server received authenticate request with NO cookie → cannot identify user → rejects silently
5. Response still shows login page = authentication failed

### [Important/Emphasized] JMeter is NOT a Browser

- JMeter doesn't store cookies like a browser does
- This is a fundamental difference between browser testing and JMeter testing
- Must explicitly tell JMeter to handle cookies

---

## Understanding Sampler Results, Requests, and Responses

### Three Tabs in View Results Tree (for each request)

| Tab | What it Shows |
|-----|---------------|
| **Sampler Result** | Overall result — response code, time, size |
| **Request** | What was SENT — URL, parameters, cookies, headers |
| **Response Data** | What was RECEIVED — response headers + response body |

### Main Sampler vs. Sub-Samplers

- A main request can contain **sub-samplers** (sub-requests)
- Main sampler: Shows overall request/response
- Sub-samplers: Show detailed breakdown of what happens within the main request
- You can expand a request to see its sub-samplers in the View Results Tree

### Response Data Sub-Tabs

| Sub-tab | Content |
|---------|---------|
| **Response Body** | The actual HTML/data content returned |
| **Response Headers** | HTTP headers (status code, cookies, content-type, etc.) |

---

## HTTP Cookie Manager — The Solution

### What it Does

- Acts as a **browser's cookie storage** for JMeter
- When server sends a cookie in response → Cookie Manager **stores** it
- For all subsequent requests → Cookie Manager **attaches** the stored cookie
- Works exactly like how a browser handles cookies

### How to Add HTTP Cookie Manager

1. Right-click on **Thread Group**
2. Add → **Config Element** → **HTTP Cookie Manager**
3. That's it — no configuration needed (just add it)

### [Important/Emphasized] Where to Place It

- Must be **within the Thread Group** (not outside)
- Place it at the Thread Group level (not under individual requests)
- It will apply to ALL requests within that Thread Group

### How It Works (Step by Step)

1. JMeter sends Request 1 (GET /login)
2. Server responds with a **session cookie** in response headers
3. **HTTP Cookie Manager captures and stores** this cookie
4. JMeter sends Request 2 (POST /authenticate)
5. Cookie Manager **automatically attaches** the stored cookie to this request
6. Server receives the request WITH the cookie → identifies the user → authentication succeeds
7. Response: "Welcome to the Secure Area" ✓

---

## Before vs. After Adding Cookie Manager — Comparison

### Without Cookie Manager (First Run)

| Aspect | Result |
|--------|--------|
| Response code (authenticate) | 303 (redirect) |
| Cookie in request | "No cookies" |
| Response body | "This is where you can log in" (still on login page) |
| Actual result | **FAILED** (not logged in) |
| View Results Tree | Shows GREEN ✓ (misleading!) |

### With Cookie Manager (Second Run)

| Aspect | Result |
|--------|--------|
| Response code (authenticate) | 200 (success) |
| Cookie in request | Session cookie present ✓ |
| Response body | "Welcome to the Secure Area" ✓ |
| Actual result | **SUCCESS** (logged in) |
| View Results Tree | Shows GREEN ✓ (correct this time) |

### Where the Cookie Came From

- Request 1 (GET /login) → response headers contained a Set-Cookie header
- Cookie Manager captured it
- Request 2 (POST /authenticate) → Cookie Manager attached it as "Cookie Data"
- This is visible in the Request tab under "Cookie Data" field

---

## How to Know When to Use HTTP Cookie Manager

### Method 1: Proactive (From Project Meetings)

- Attend project planning and requirements meetings
- If people discuss: **cookies, session storage, secure authentication** → note it
- When developing JMeter test → add HTTP Cookie Manager for those requests
- **[Important/Emphasized]:** In real-time projects, you'll participate in all meetings — if anyone talks about cookies, you know to use Cookie Manager

### Method 2: Reverse Engineering (Trial and Error)

1. **Don't add** Cookie Manager initially
2. Run the test
3. Test fails (like in our example — response shows login page instead of secure area)
4. Open each request → check Request tab
5. See **"No cookies"** where cookies are expected
6. **Add HTTP Cookie Manager** → run again
7. Now it works!

### [Important/Emphasized] Both Strategies Are Valid

- As a tester: Run first without Cookie Manager → if fails → investigate → add it
- This is NOT a big deal — just a trial-and-error approach
- You'll quickly learn when to use and when not to use

---

## [Important/Emphasized] Key Lesson Reinforced: Don't Trust Green Checkmarks

- This section provides a **real-world example** of green checkmark being misleading
- Authentication request showed 200/green → but response body was WRONG
- **Always verify response body content** — don't just rely on status codes
- In upcoming sections: **Assertions** will automate this verification
  - Instead of manually checking response body each time
  - Assertions will automatically validate if expected text exists in response

---

## Practice URL for This Section

- **URL:** `the-internet.herokuapp.com/login`
- **Username:** `tomsmith`
- **Password:** `SuperSecretPassword!`
- This site has many practice pages (also useful for Selenium learners)
- The login page specifically demonstrates cookie-based authentication

---

## Quick Revision — Section 5

1. **HTTP Cookie Manager** = Config element that makes JMeter store and forward cookies like a browser
2. **Session cookie** = Unique identifier given by server to track a user's session
3. **How cookies work** = Server sends cookie in response → browser stores → attaches to all future requests
4. **HTTP is stateless** = Each request is independent; cookies solve the identity problem
5. **Cookie expiration** = Cookies expire after set time; after expiry → must login again
6. **Delete cookies** = If you manually clear cookies → must login again
7. **Problem without Cookie Manager** = JMeter doesn't store cookies → subsequent requests fail silently
8. **Misleading green tick** = Authentication shows 200/green but response body still shows login page
9. **Response code 303** = Redirect (not success) — indicates something went wrong
10. **Main sampler vs. sub-samplers** = Main request can contain sub-requests visible by expanding
11. **Three tabs per request** = Sampler Result (overview), Request (what was sent), Response Data (what was received)
12. **How to add** = Right-click Thread Group → Add → Config Element → HTTP Cookie Manager
13. **No configuration needed** = Just add it; it automatically handles cookies for all requests in the Thread Group
14. **Cookie flow** = Request 1 response has Set-Cookie → Cookie Manager stores → Request 2 sends it as Cookie Data
15. **When to use (proactive)** = If project discussions mention cookies/sessions → add Cookie Manager
16. **When to use (reactive)** = Run test → fails → see "No cookies" in request tab → add Cookie Manager → re-run
17. **Not all apps need it** = Only secure/authenticated applications that use cookie-based sessions
18. **Practice URL** = the-internet.herokuapp.com/login (tomsmith / SuperSecretPassword!)
19. **Next topic** = Assertions — automate response validation instead of manual checking

---
---

# SECTION 6: Assertions — Automated Response Validation

---

## Why Assertions?

- Until now: Manually checking View Results Tree → opening each request → reading response body
- **Problem:** Manual checking is time-consuming and impractical for hundreds/thousands of requests
- **Solution:** Assertions automatically validate responses — report pass/fail without manual inspection
- Instead of you checking, assertions tell you if the response is correct or not

---

## Types of Assertions in JMeter

### Which Assertions Apply to Which Response Type

| Response Type | Applicable Assertions |
|--------------|----------------------|
| **HTML/Web responses** | Response Assertion, Size Assertion, Duration Assertion |
| **XML responses** | XPath Assertion, XML Assertion |
| **JSON responses (REST APIs)** | JSON Assertion |
| **Advanced scripting** | BeanShell Assertion (covered in later sections) |

### [Important/Emphasized] Three Most Important Assertions for Web Testing

1. **Response Assertion** — Validate response content/code/headers
2. **Size Assertion** — Validate response size in bytes
3. **Duration Assertion** — Validate response time

- For this course (web testing focus): These three are the key assertions
- JSON, XPath, BeanShell → covered in later specialized sections

---

## How to Add Assertions

- Right-click on **specific request** → Add → Assertions → [Select assertion type]
- **[Important/Emphasized]:** If you add assertion UNDER a specific request → applies ONLY to that request
- If you add assertion OUTSIDE (at Thread Group level) → applies to ALL requests

---

## Assertion 1: Response Assertion (Detailed)

### Purpose

- Validates that the response contains (or doesn't contain) expected text/values
- Most important assertion for verifying script correctness

### How to Add

1. Right-click on the request (e.g., "authenticate")
2. Add → Assertions → **Response Assertion**

### Configuration Fields

#### Field to Test (What to Validate)

| Option | What it Checks |
|--------|---------------|
| **Response Text (Body)** | The actual HTML/content returned by server |
| **Response Code** | HTTP status code (200, 404, 500, etc.) |
| **Response Message** | The text message associated with status code (OK, Not Found, etc.) |
| **Response Headers** | HTTP response headers (content-type, set-cookie, etc.) |
| **Request Headers** | HTTP headers sent with the request |
| **URL Sampled** | The URL that was actually hit (IP + path) |
| **Request Data** | Not commonly used for web testing |
| **Document (text)** | Not commonly applicable |

**[Important/Emphasized] Most Important Fields:**
- Response Text (Body) — verify page content
- Response Code — verify status code (200)
- Response Headers — verify header values

#### Apply To (Scope)

| Option | What it Means |
|--------|--------------|
| **Main sample only** | Validates only the parent/main request (default) |
| **Sub-samples only** | Validates only child/sub-requests within the main request |
| **Main sample and sub-samples** | Validates both parent and child requests |
| **JMeter Variable** | Validates a stored variable (covered later) |

#### Pattern Matching Rules

| Rule | Meaning |
|------|---------|
| **Contains** | Response should CONTAIN the specified text (anywhere in response) |
| **Matches** | Response should MATCH a regular expression pattern |
| **Equals** | Response must be EXACTLY equal to the specified text (full match) |
| **Substring** | Similar to Contains — text must exist as a substring |
| **Not** | NEGATE the check — assert that text is NOT present in response |
| **Or** | Not commonly applicable |

### Example 1: Validating Response Body Contains Expected Text

**Setup:**
1. Run test → View Results Tree → check response body of "authenticate" request
2. Expected text in response: "Welcome to the Secure Area"
3. Copy this text
4. Add Response Assertion to "authenticate" request
5. Field to test: **Text Response**
6. Pattern matching: **Contains**
7. Click **"Add from Clipboard"** (pastes the copied text)

**Behavior:**
- If response contains "Welcome to the Secure Area" → Assertion PASSES ✓
- If response does NOT contain it (e.g., still shows login page) → Assertion FAILS ✗

### Example 2: Validating Response Code

**Setup:**
1. Check Sampler Result → Response code = 200
2. Add another Response Assertion to "authenticate" request
3. Field to test: **Response Code**
4. Pattern matching: **Equals**
5. Type `200` directly (for numbers, you can type directly — no need for clipboard)

**Behavior:**
- If response code is 200 → PASSES ✓
- If response code is 303 or anything else → FAILS ✗

### Example 3: Negative Assertion (NOT)

**Purpose:** Assert that something should NOT be in the response

**Setup:**
- For authenticate request: If you STILL see "Login to the application" text → it means login failed
- Add Response Assertion with **"Not"** checkbox selected
- Add text: "Login" or "Enter username and password"
- This asserts that this text should NOT be present after authentication

**Behavior:**
- If "Login" text is NOT found in response → PASSES ✓ (correctly logged in)
- If "Login" text IS found → FAILS ✗ (still on login page = false alarm)

### [Important/Emphasized] Important Notes

- For text patterns: **Copy text** from response, then use **"Add from Clipboard"** button
- For response code: Can type numbers directly (e.g., 200)
- You can add **multiple assertions** to the same request (one for body, one for code, etc.)
- Each validation should have its own assertion

---

## Assertion 2: Size Assertion (Detailed)

### Purpose

- Validates that the response size in bytes meets expectations
- Important for ensuring full page content is returned under load

### Why Size Matters

- When a website is heavily loaded → server may return **incomplete responses**
- Incomplete response = not all page elements load (broken images, missing content)
- Users see: broken image icons, incomplete layouts, missing elements
- **Root cause:** Server couldn't return full byte size due to heavy load

**Real-world scenario:**
- Normal response: 3846 bytes (full page with all content)
- Under heavy load: May return only 2000 bytes (partial content)
- Size assertion catches this: "Expected > 3000 bytes, got 2000 → FAIL"

### How to Find Response Size

1. View Results Tree → Select request (e.g., "authenticate")
2. Click **Sampler Result** tab
3. Look for: **"Size in bytes: 3846"**
   - Header size in bytes: (e.g., 1870)
   - Body size in bytes: (e.g., 1976)
   - Total = Header + Body

### How to Configure Size Assertion

1. Right-click on request → Add → Assertions → **Size Assertion**
2. **Apply to:** Main Sample
3. **Response size field to test:** Full Response (or Response Headers, Response Body)
4. **Size in bytes:** Enter the threshold value (e.g., 3000)
5. **Type of comparison:** Select operator

### Comparison Operators

| Operator | Meaning | Use When |
|----------|---------|----------|
| **>** (Greater than) | Response must be LARGER than specified bytes | Want to ensure full response is returned |
| **<** (Less than) | Response must be SMALLER than specified bytes | Want to cap response size |
| **=** (Equal) | Response must be EXACTLY the specified bytes | Strict byte matching |
| **!=** (Not equal) | Response must NOT be exactly the specified bytes | Rarely used |
| **>=** (Greater or equal) | Response must be larger or equal | Similar to > with edge case |
| **<=** (Less or equal) | Response must be smaller or equal | Similar to < with edge case |

### [Important/Emphasized] Most Common Use: Greater Than (>)

- Set bytes to a reasonable minimum (e.g., 3000)
- If response returns 3846 → 3846 > 3000 → PASSES ✓
- If response returns 2990 under heavy load → 2990 > 3000 → FAILS ✗
- This catches incomplete responses

### Example

```
Requirement: Response should always be > 3000 bytes
Normal response: 3846 bytes → PASS (3846 > 3000)
Under heavy load: 2500 bytes → FAIL (2500 < 3000, incomplete page)
```

### When This is Useful

- Client asks: "Tell me the size in bytes that this request returns"
- Under heavy load: Number may drop (server can't return full content)
- Size assertion validates: Even with 100 users, full response (all bytes) is returned
- **Throughput connection:** If 100 users hit the server → server writes 100 × 3846 bytes/second
- If bytes drop → some users are getting incomplete pages

---

## Assertion 3: Duration Assertion (Detailed)

### Purpose

- Validates that a request completes within a maximum time limit
- Directly related to performance benchmarks

### How to Find Current Duration

1. View Results Tree → Select request → **Sampler Result** tab
2. Look for: **"Load time: 111"** (milliseconds)
3. This is the time taken by that request to get a response

### How to Configure Duration Assertion

1. Right-click on request → Add → Assertions → **Duration Assertion**
2. **Duration in milliseconds:** Enter maximum allowed time (e.g., 200)

### How It Works

- You specify the **MAXIMUM** time (in ms) a request should take
- If actual response time ≤ specified max → PASSES ✓
- If actual response time > specified max → FAILS ✗

### Example

```
Duration assertion: 200ms (maximum allowed)

Run 1: Response took 174ms → 174 ≤ 200 → PASS ✓
Run 2: Response took 196ms → 196 ≤ 200 → PASS ✓
Run 3: Response took 250ms → 250 > 200 → FAIL ✗
```

### Another Example (Strict benchmark)

```
Duration assertion: 30ms (strict requirement)

Actual response: 196ms → 196 > 30 → FAIL ✗
Report to client: "Maximum benchmark is 30ms, but response took 196ms"
```

### [Important/Emphasized] Where to Place Duration Assertion

- **Under specific request:** Applies only to that request
- **At Thread Group level:** Applies to ALL requests (every request must complete within X ms)
- Choose based on whether you have different benchmarks for different requests

### When This is Useful

- Client sets performance benchmark: "Response must come within 200ms"
- Under load: If server slows down → response takes 500ms → Duration assertion FAILS
- Report to developer: "Performance benchmark is 200ms but server took 500ms under load"

---

## Assertion Results Listener

### What it Is

- A special **listener** that shows all assertion pass/fail results in one place
- Instead of checking each request individually in View Results Tree

### How to Add

1. Right-click on Thread Group → Add → Listener → **Assertion Results**

### What it Shows

- Lists all requests with their assertion status
- **Passed:** Shows request name (no additional info needed)
- **Failed:** Shows request name + error message explaining what was expected vs. what was received
- Example failure message: "Expected to contain: Welcome to the Secure Area"

### Benefits

- All assertion results in **one tab** — quick overview
- No need to open each request individually
- Immediately see which assertions failed and why
- Replaces manual checking in View Results Tree

---

## The Correct Order of Testing (Best Practice)

### [Important/Emphasized] Step-by-Step Process

1. **First:** Create your JMeter script (recording or manual)
2. **Second:** Add **Response Assertions** to verify script correctness
   - Ensure you're getting correct responses
   - Run with 1 user → verify all assertions pass
3. **Third:** Only after responses are correct → add **Duration and Size assertions**
   - These are for performance metrics
4. **Fourth:** Apply load (increase Thread Group users)
5. **Fifth:** Monitor results via Aggregate Report + Graph Results

### [Important/Emphasized] Why This Order Matters

- If your responses are WRONG (e.g., script not actually logging in):
  - No point generating performance metrics on wrong responses
  - Duration/size metrics would be meaningless
- **First goal:** Correct responses (validated by Response Assertion)
- **Second goal:** Performance metrics (Duration, Size, Throughput)

### Summary of Assertion Purposes

| Assertion | Primary Purpose | When to Use |
|-----------|----------------|-------------|
| **Response Assertion** | Verify SCRIPT CORRECTNESS | Always — first priority |
| **Size Assertion** | Verify FULL CONTENT returned | Under load — check for incomplete responses |
| **Duration Assertion** | Verify PERFORMANCE BENCHMARK | Under load — check response time limits |

---

## Quick Revision — Section 6

1. **Assertions** = Automate response validation; no more manual checking in View Results Tree
2. **Three key assertions for web** = Response Assertion, Size Assertion, Duration Assertion
3. **Response Assertion** = Validates response body, code, headers, or message content
4. **Field to test** = Response Text (body), Response Code, Response Headers — most important
5. **Contains** = Check if response has the text anywhere; most common pattern rule
6. **Equals** = Exact match; good for response codes (200)
7. **Not (negate)** = Assert text is NOT present (e.g., "Login" should NOT appear after authentication)
8. **Add from Clipboard** = Copy expected text from response → paste into assertion via this button
9. **Multiple assertions per request** = Can add several (one for body, one for code, etc.)
10. **Apply to** = Main sample only (default), Sub-samples only, or both
11. **Size Assertion** = Validates response size in bytes meets minimum/maximum threshold
12. **Why size matters** = Under heavy load, server may return incomplete responses (fewer bytes)
13. **Size comparison** = Usually "greater than" — response must be > X bytes (ensures full content)
14. **Find size** = Sampler Result tab → "Size in bytes" field
15. **Duration Assertion** = Validates response completes within maximum milliseconds
16. **Duration = maximum** = Specify max allowed time; if actual > max → FAIL
17. **Find duration** = Sampler Result tab → "Load time" field (in milliseconds)
18. **Assertion placement** = Under specific request = applies to that only; at TG level = applies to all
19. **Assertion Results listener** = Shows all assertion pass/fail in one tab (Add → Listener → Assertion Results)
20. **Correct testing order** = Response assertions first (correctness) → then Duration/Size (performance) → then apply load
21. **No point in metrics on wrong responses** = First ensure correct responses, THEN measure performance
22. **Other assertions** = JSON (for APIs), XPath (for XML), BeanShell (scripting) — covered later
23. **This course focus** = Web testing only; Response/Size/Duration assertions are sufficient

---
---

# SECTION 7: HTTP Request Samplers, Controllers & Logic Controllers

---

## Web Tours Practice Application Setup

### What is Web Tours?

- A sample application provided by Microsoft for practicing performance testing
- Search Google: "Sample application for Web Tours"
- Website: `marketplace.microfocus.com`
- **Only works on Windows** (not Mac or Linux)

### Installation Steps

1. Download from the website (click "Get It") → downloads as `.zip` file
2. Extract the zip → see two files
3. **Step 1:** Double-click the `.msi` file → runs installer (wait 1-2 minutes)
4. **Step 2:** After installation, extract the `WebTours.zip` folder
5. Inside WebTours folder → find `StartServer.bat` (could be at folder level or in `bin` folder)
6. **Double-click `StartServer.bat`** → console shows "Starting webtours Apache server"

### Accessing the Application

- Application starts on **port 1080** by default
- URL format: `http://[YOUR_IP_ADDRESS]:1080/webTours`
- Find your IP: shown in the console when StartServer.bat runs, or check system settings
- The `/1080/webTours` part is common for everyone
- First time: Click "Sign Up Now" → create username and password
- Then login with created credentials

### Demo Credentials Used

- Username: `tomsmith`
- Password: `123456`

---

## Controllers — Overview

### What is a Controller?

- **Definition:** A container where you can store all your requests/samplers
- In layman's terms: a **folder** to organize your requests
- Groups related samplers into logical units

### Why Use Controllers?

- Organize requests by functionality (Login, Search, Booking, etc.)
- Get **transaction-level performance metrics** (time for entire module, not just individual requests)
- Reuse code/scripts without re-recording
- Apply logic (conditions, loops, random selection) to groups of requests

### Types of Controllers Used in JMeter

**[Important/Emphasized] Most Commonly Used (99% of the time):**

| Controller | Primary Use |
|------------|-------------|
| **Transaction Controller** | Group samplers as one transaction; get aggregate metrics |
| **Module Controller** | Reuse existing scripts/modules without duplicating |
| **Recording Controller** | Store recorded actions |
| **Simple Controller** | Just a folder (no special features) |

**Additional Controllers (rarely used but good to know):**

| Controller | Primary Use |
|------------|-------------|
| **Interleave Controller** | Execute one sampler per iteration (top-to-bottom order) |
| **Random Controller** | Execute one sampler per iteration (random selection) |
| **Random Order Controller** | Execute ALL samplers but in random order |
| **Runtime Controller** | Execute samplers for a specific duration (seconds) |
| **Loop Controller** | Repeat samplers a specific number of times |
| **If Controller** | Execute only if a condition is true |
| **While Controller** | Keep executing while condition remains true |

---

## Transaction Controller (Most Important)

### Purpose

- Groups multiple samplers into **one transaction**
- Provides **aggregate metrics** (average time, throughput) for the entire group as a single unit
- Client often asks: "How long does the LOGIN take?" or "How long does BOOKING take?" — Transaction Controller answers this

### How it Works

- All samplers inside a Transaction Controller are treated as **one transaction**
- JMeter reports combined metrics for the entire controller (total time, throughput)
- Individual sampler metrics are also available

### Real-World Example: Flight Booking

Three Transaction Controllers created:
1. **Login** (5 samplers): Navigate to URL → Enter credentials → Click Login → Redirect → Homepage
2. **Flight Search** (samplers): Select departure → Select destination → Number of passengers → Continue → Select flight → Continue
3. **Booking** (samplers): Enter passenger details → Enter credit card → Confirm booking

### How to Create

1. Right-click Thread Group → Add → Logic Controller → **Transaction Controller**
2. Name it (e.g., "Login")
3. Cut/paste related samplers inside this controller

### Reading the Aggregate Report with Transaction Controllers

**Example output:**

| Label | Samples | Average | Throughput |
|-------|---------|---------|-----------|
| /login (individual) | 1 | 91ms | — |
| /authenticate (individual) | 1 | 143ms | — |
| ... (more individual) | ... | ... | — |
| **Login** (transaction) | 1 | **667ms** | **1.5/sec** |
| **Flight Search** (transaction) | 1 | — | **1.5/sec** |
| **Booking** (transaction) | 1 | **140ms** | **7/sec** |

- **667ms** = total time to complete entire login functionality (all 5 samplers combined)
- **Throughput 1.5/sec** = server can complete 1.5 full login transactions per second

### "Generate Parent Sample" Checkbox

- When checked: **Only shows transaction-level results** (not individual samplers)
- Output becomes clean: Just "Login", "Flight Search", "Booking" with their aggregate metrics
- Very useful for client reporting — shows only module-level performance

### [Important/Emphasized] How Client Uses This

- Client says: "Tell me how long the Login module takes"
- You report: "Login takes 667ms average with 1 user"
- Client says: "Tell me throughput for Booking"
- You report: "Server can handle 7 booking transactions per second"

### Real-World Banking Example

- Transaction 1: "Credit Card Payment" = Enter card details + Enter minimum payment amount + Select payment date
- Transaction 2: "Payment Source" = Choose funding source + Create payment to card
- Transaction 3: "Confirmation" = Get confirmation page
- Client requests metrics at transaction level → you use Transaction Controllers

---

## Recording Controller

### Purpose

- A dedicated container for storing all recorded actions
- Alternative to recording into HTTP(S) Test Script Recorder directly

### How to Add

- Right-click Thread Group → Add → Logic Controller → **Recording Controller**
- In HTTP(S) Test Script Recorder → set Target Controller to this Recording Controller

### How it Differs from Test Script Recorder Storage

- Previously: Recorded into HTTP(S) Test Script Recorder itself
- Now: Can redirect all recordings into this dedicated controller within Thread Group
- After recording: move samplers from Recording Controller into Transaction Controllers

---

## Simple Controller

### Purpose

- **Just a folder** — organizes requests into groups
- **NO performance tracking** at module/transaction level
- Simply stores samplers in separate folders for readability

### Difference from Transaction Controller

| Feature | Transaction Controller | Simple Controller |
|---------|----------------------|-------------------|
| Groups samplers | ✓ | ✓ |
| Reports aggregate metrics | ✓ (average, throughput for group) | ✗ |
| Appears in Aggregate Report | ✓ (as separate line) | ✗ |
| Use case | Performance measurement per module | Just visual organization |

### When to Use

- When you just want to separate requests into folders for clarity
- No need for transaction-level metrics for that group

---

## Module Controller (Code Reuse)

### Purpose

- **Reuse existing scripts** without recording or copy-pasting again
- Like calling a function/module in programming — DRY principle (Don't Repeat Yourself)

### The Problem it Solves

- Scenario: Login → Search → Book → Logout → **Login AGAIN**
- Without Module Controller: Must record login again OR copy-paste all login samplers
- With Module Controller: Simply **reference** the existing Login transaction controller

### How to Add

1. Right-click Thread Group → Add → Logic Controller → **Module Controller**
2. In Module Controller properties: expand "Module to Run" dropdown
3. Select which existing controller to execute (e.g., "Login")

### How it Works

- Module Controller points to an existing Transaction Controller
- At runtime: executes all samplers within that referenced controller
- In Aggregate Report: the referenced module's sample count increases (executed multiple times)

### Example

```
Thread Group:
├── Login (Transaction Controller) ← 5 samplers
├── Flight Search (Transaction Controller)
├── Booking (Transaction Controller)
├── Logout (Simple Controller)
└── Module Controller → points to "Login" ← reuses Login!
```

**Result:** Login shows samples = 2 (executed twice: once at start, once via Module Controller)

### [Important/Emphasized] Key Advantage

- Main principle of automation frameworks: **reuse code instead of writing again**
- If login script changes → change only in one place → Module Controller automatically uses updated version
- Can reference ANY Transaction Controller in your test plan

---

## Interleave Controller

### Purpose

- Contains multiple samplers but executes **only ONE per iteration** (loop)
- Selection order: **Top to bottom** (sequential)
- After reaching the last one → cycles back to the first

### How it Works

| Iteration | Which Sampler Executes |
|-----------|----------------------|
| 1st | First sampler (top) |
| 2nd | Second sampler |
| 3rd | Third sampler |
| 4th | Back to first (cycles) |
| 5th | Second again |

### Real-World Use Case

- Flight Search with **multiple departure/destination combinations:**
  - Search 1: Frankfurt → Los Angeles
  - Search 2: Denver → Los Angeles
  - Search 3: Paris → London
  - ... (10 different searches)
- Put all inside Interleave Controller
- Each loop iteration picks a different search combination
- **Simulates real users:** Not everyone searches the same route!

### Practical Demo Result

- Thread Group loop count = 2
- Login: executed **2 times** (once per loop, not under interleave)
- Flight Search 1: executed **1 time** (picked in iteration 1)
- Flight Search 2: executed **1 time** (picked in iteration 2)
- Booking: executed **2 times** (not under interleave)

---

## Random Controller

### Purpose

- Same as Interleave but selection is **RANDOM** (not top-to-bottom)
- Executes **only ONE** sampler per iteration from its children
- You never know which one will be picked

### Difference from Interleave

| Aspect | Interleave | Random |
|--------|-----------|--------|
| Selection | Top-to-bottom (predictable) | Random (unpredictable) |
| Order | 1st, 2nd, 3rd, 1st, 2nd... | Could be 4th, 2nd, 7th, 1st... |
| Executes per iteration | One | One |

### Random Order Controller (Different!)

- **Random Controller:** Executes ONE child randomly per iteration
- **Random Order Controller:** Executes ALL children but in random order
- Example with 3 samplers:
  - Random: picks 1 of 3 per iteration
  - Random Order: executes all 3 but maybe in order 3, 1, 2

### Use Case: Credit Card App

- After login, user can: Make Payment, Check Statements, Redeem Rewards
- Each iteration randomly picks one of these actions
- Simulates real behavior (users don't always do the same thing)

---

## Runtime Controller

### Purpose

- Executes samplers within it for a **specific number of seconds**
- Keeps looping the contained samplers until time runs out
- Then moves to the next element in the test plan

### Configuration

- Set "Runtime (seconds)" value (e.g., 15 seconds)
- Samplers inside will keep executing repeatedly for that duration

### Example

- Runtime = 15 seconds, 2 samplers inside (each takes ~1 second)
- Result: ~30 samples executed (15 seconds × 2 requests/second)
- After 15 seconds → exits controller → continues to next element

### Use Case

- A specific module (e.g., Booking) crashes during peak times
- Want to stress-test ONLY that module for 5 minutes
- Put booking samplers in Runtime Controller → set 300 seconds
- Run with 100 threads → 5 minutes of strict load on booking only

---

## Loop Controller

### Purpose

- Repeats samplers a **specific number of times** (count-based, not time-based)
- Similar to Runtime but uses iteration count instead of seconds

### Configuration

- Set "Loop Count" value (e.g., 5)
- Samplers inside execute exactly 5 times

### Interaction with Thread Group Loop Count

- Thread Group loop = 2, Loop Controller = 5
- Samplers inside Loop Controller execute: 2 × 5 = **10 times**

### Difference from Runtime Controller

| Aspect | Runtime Controller | Loop Controller |
|--------|-------------------|-----------------|
| Based on | Time (seconds) | Count (iterations) |
| "Run for 15 seconds" | ✓ | ✗ |
| "Run exactly 5 times" | ✗ | ✓ |

---

## If Controller

### Purpose

- Executes child samplers **ONLY if a condition evaluates to TRUE**
- If condition is false → skips entirely

### Condition Format

- Condition must be written in **JavaScript format**
- Example: `"${store}" == "11"` (comparing variable value)
- Uses JMeter variables defined in Test Plan

### JMeter Variables (Introduction)

- Define variables in **Test Plan** → Add row → Name + Value
- Example: Variable name = `store`, Value = `11`
- Access anywhere in Thread Group using syntax: `${store}`
- At runtime: `${store}` is replaced with the actual value (11)

### Example

```
Test Plan: store = 11
If Controller condition: "${store}" == "11"
→ Condition TRUE → executes child samplers

Test Plan: store = 11  
If Controller condition: "${store}" == "2L"
→ Condition FALSE → skips child samplers
```

### Use Case

- Advanced scripting scenarios
- Data-driven testing where execution depends on variable values
- Not commonly used in basic web recording/playback

---

## While Controller

### Purpose

- Keeps executing child samplers **AS LONG AS condition remains TRUE**
- Stops only when condition becomes FALSE
- **Warning:** Can create infinite loops if condition never changes!

### Difference from If Controller

| Aspect | If Controller | While Controller |
|--------|--------------|------------------|
| Executes | Once (if true) | Repeatedly (until false) |
| Loop behavior | No loop | Continuous loop |
| Risk | None | Infinite loop if condition never changes |

### Use Case

- Heavy scripting scenarios where you need repeated execution based on dynamic conditions
- Not commonly needed for basic performance testing

---

## [Important/Emphasized] Which Controllers to Focus On

### Must Know (Used in Real-Time):
1. **Transaction Controller** — Most important; transaction-level metrics
2. **Module Controller** — Code reuse; avoid duplication

### Good to Know (Occasionally Used):
3. **Recording Controller** — Redirect recordings
4. **Simple Controller** — Just a folder
5. **Interleave Controller** — One per iteration, sequential
6. **Random Controller** — One per iteration, random
7. **Runtime Controller** — Execute for specific duration
8. **Loop Controller** — Execute specific number of times

### Rarely Used in Real-Time:
9. **If Controller** — Conditional execution (advanced scripting)
10. **While Controller** — Loop until condition false (advanced)
11. **Random Order Controller** — All executed, random sequence

---

## Quick Revision — Section 7

1. **Web Tours app** = Microsoft practice app; Windows only; port 1080; install .msi then run StartServer.bat
2. **Controller** = Container/folder to store and organize requests (samplers)
3. **Transaction Controller** = Groups samplers as one transaction; provides aggregate metrics (time + throughput)
4. **Generate Parent Sample** = Checkbox that shows ONLY transaction-level results (hides individual samplers)
5. **Client reporting** = Use Transaction Controller to report "Login takes 667ms" or "Booking throughput = 7/sec"
6. **Recording Controller** = Dedicated container for recorded actions; alternative to Test Script Recorder storage
7. **Simple Controller** = Just a folder; no aggregate metrics; only visual organization
8. **Module Controller** = Reuse existing Transaction Controllers without re-recording or copy-paste
9. **Module Controller usage** = Select which module to run from dropdown; executes referenced controller's samplers
10. **Interleave Controller** = Picks ONE sampler per iteration in top-to-bottom order
11. **Interleave use case** = Multiple search combinations; each iteration uses different source/destination
12. **Random Controller** = Picks ONE sampler per iteration randomly (unpredictable order)
13. **Random vs. Interleave** = Same concept but Random has no predictable sequence
14. **Random Order Controller** = Executes ALL samplers but in random sequence (different from Random Controller)
15. **Runtime Controller** = Execute samplers for specific seconds then move on; strict time-based load
16. **Loop Controller** = Execute samplers X number of times; count-based repetition
17. **Loop + Thread Group** = Total = Thread Group loops × Loop Controller count
18. **If Controller** = Execute only if JavaScript condition is true; uses JMeter variables
19. **JMeter Variables** = Defined in Test Plan; accessed with ${variableName} syntax
20. **While Controller** = Keeps executing until condition becomes false; risk of infinite loop
21. **Most important** = Transaction Controller (metrics) + Module Controller (reuse)
22. **Real-time rarely used** = Runtime, Interleave, Random, If, While — good to know but not essential

---
---

# SECTION 8: Timers in JMeter

---

## Why Timers Are Needed

### The Real-World Problem

- In real life, 50 users do NOT hit the same request at the exact same second
- Example: 50 users clicking "Customer Service" link
  - Over 1-2 minutes → realistic behavior
  - All 50 in 1 second → NOT realistic (rarely happens)
- However, some testers still use this aggressive approach to get load metrics (bytes returned, response time)

### When You NEED Timers

- **Database update latency:** After a purchase, database needs a few seconds to update inventory
  - Example: Product has 4 items → 1 user buys → DB takes a few seconds to update from 4 to 3
  - If 4 users access simultaneously → may get incorrect data (all see "4 items available")
  - Script may start failing because DB hasn't updated yet

### The Challenge

- You need a **gap/sleep** between threads so DB updates correctly before next thread starts
- Without timers: Thread 1 completes → Thread 2 starts IMMEDIATELY (no gap)
- With timers: Thread 1 completes → WAITS specified time → Thread 2 starts

### [Important/Emphasized] Practical Reality

- Timers are NOT used much in actual load testing
- People generally aggregate load together and get metrics
- But when application has dependencies (DB update delays), timers become necessary
- It depends entirely on application specifics and backend code behavior

---

## How to Observe Timer Behavior

### Setting Up the Test

1. Record a script (login → flight search → booking → confirmation)
2. Add Listener: **View Results in Table** (shows Start Time and Sample Time)
3. Run with loop count = 10 (single user, 10 iterations)

### Without Timer — Observing Gap

- Thread 1 starts at second 15:02
- Thread 1 completes at second 15:06 (took ~4 seconds)
- Thread 2 starts IMMEDIATELY at 15:06 (no gap!)
- Total gap between threads = only execution time (~4 seconds)

### With Timer — Observing Additional Delay

- Thread 1 completes at second :54
- Timer adds 300ms (≈3 seconds) wait
- Thread 2 starts at second :01 (total ~7 seconds between starts)
- Previously 4 seconds → now 7 seconds (4 sec execution + 3 sec timer delay)

---

## Types of Timers in JMeter

### How to Add a Timer

- Right-click on Thread Group (or sampler) → Add → Timer → Choose type

### Available Timer Types

| Timer | Description |
|-------|-------------|
| **Constant Timer** | Fixed delay (same every time) |
| **Gaussian Random Timer** | Fixed base + random deviation |
| **Poisson Random Timer** | Based on Poisson/Lambda formula |
| **Constant Throughput Timer** | Controls throughput rate (requests/minute) |
| Others | Various mathematical distribution-based timers |

---

## Constant Timer

### What it Does

- Adds a **fixed, constant delay** between thread executions
- Default value: 300 milliseconds (= 0.3 seconds)
- Every thread waits exactly the same amount of time

### Configuration

- **Thread Delay (in milliseconds):** e.g., 300 = 0.3 seconds, 3000 = 3 seconds

### Placement

- Place at the beginning or end of Thread Group
- Once a thread loop completes → control hits the timer → waits specified milliseconds → starts next execution

### Practical Demo

- Without timer: Gap between threads = ~4 seconds (just execution time)
- With 300ms Constant Timer: Gap = ~7 seconds (4 sec execution + 3 sec delay)
- Remove timer: Gap returns to ~4 seconds

### Use Case

- When you need a **predictable, consistent** delay between iterations
- Database needs exact known time to update

---

## Gaussian Random Timer

### What it Does

- Adds a **variable delay** = Fixed base + Random deviation
- Deviation value changes randomly for each thread
- More realistic than constant timer (real users don't wait exact same time)

### Configuration

- **Constant Delay Offset (ms):** Fixed base value (e.g., 300ms) — always added
- **Deviation (ms):** Random value added ON TOP of the constant (e.g., 100ms)

### How the Calculation Works

| Thread | Constant | Deviation (random 0-100) | Total Delay |
|--------|----------|--------------------------|-------------|
| Thread 1 | 300ms | +50ms | 350ms |
| Thread 2 | 300ms | +10ms | 310ms |
| Thread 3 | 300ms | +70ms | 370ms |
| Thread 4 | 300ms | +30ms | 330ms |

- Constant part: ALWAYS 300ms (never changes)
- Deviation: Changes randomly between 0 and specified value for each thread

### Use Case

- When you want random/variable sleep between threads (more realistic simulation)
- Instead of every thread waiting exactly 300ms, each waits a slightly different time

---

## Poisson Random Timer

### What it Does

- Similar concept to Gaussian but uses **Poisson/Lambda mathematical formula**
- Calculates delay using Poisson distribution
- Results in values like 323ms, 340ms, etc. based on the formula

### Configuration

- Based on Lambda calculation
- The formula determines the actual sleep time (300 + formula output)

### [Important/Emphasized] Note

- All timers (Constant, Gaussian, Poisson) ultimately serve the same purpose: adding delay between threads
- The difference is HOW the delay value is calculated (fixed vs. random vs. mathematical distribution)

---

## Constant Throughput Timer (Important Concept)

### Understanding Throughput — Petrol Bunk Analogy

**Setup:**
- 4 petrol bunks (pumps) at a petrol station
- Each pump can deliver 100 liters per minute
- **Total capacity (Maximum Throughput) = 400 liters/minute**

**Analogy Mapping:**
| Petrol Station | Application Server |
|---------------|-------------------|
| 4 petrol pumps | 4 servers |
| Each pump = 100 liters/min | Each server = 100 requests/min |
| Max capacity = 400 liters/min | Max throughput = 400 requests/min |

**Scenario 1: 2 cars arrive**
- 2 pumps active, 2 pumps idle
- Throughput = 200 liters/min (= 200 requests/min with 2 users)
- 200 liters idle capacity

**Scenario 2: 4 cars arrive**
- All 4 pumps active
- Throughput = 400 liters/min (= 400 requests/min with 4 users)
- Maximum capacity reached

**Scenario 3: 10 cars arrive**
- Only 4 pumps can serve simultaneously
- 6 cars must WAIT IN QUEUE
- Throughput still = 400 liters/min (capacity unchanged!)
- Extra cars don't increase throughput — they just queue up

### [Important/Emphasized] Key Throughput Insight

| Users | Throughput |
|-------|-----------|
| 2 users | 200 req/min |
| 3 users | 300 req/min |
| 4 users | 400 req/min (MAX) |
| 10 users | 400 req/min (still MAX) |
| 50 users | 400 req/min (still MAX) |

- Beyond server capacity: throughput stays the same, users just queue up

---

### What Constant Throughput Timer Does

- Controls the **target throughput** (requests per minute) that should be achieved
- Makes threads WAIT (hold/pause) if throughput exceeds the target
- Once current serving is complete → next thread enters execution

### How it Works

- You set: **Target Throughput = 200 samples/minute**
- Server CAN handle 400 samples/minute
- Timer limits to only 200 → remaining threads wait in "pass" mode
- When one thread finishes serving → next thread starts execution

### Configuration

- **Target Throughput (samples per minute):** The desired throughput limit
- **Calculate Throughput based on:** Dropdown options:
  - This thread only
  - All active threads
  - All active threads in current thread group
  - (Choose based on your testing needs)

### Petrol Station Analogy for Timer Behavior

- 4 pumps available, but owner says: "Serve only 200 liters/minute"
- So only 2 pumps active at a time
- 6 cars arrive → only 2 served → 4 cars WAIT (hold/pause)
- Once a pump finishes → next car enters
- **This is exactly what Constant Throughput Timer does**

### When to Use

- When database/backend needs time to update before next request
- When you want to control the rate of requests hitting the server
- When you want to simulate a specific throughput level (not maximum)
- Thousands of requests/minute → DB may need time to update → put threads on "pass"

### Difference from Constant Timer

| Aspect | Constant Timer | Constant Throughput Timer |
|--------|---------------|--------------------------|
| Controls | Fixed time delay (ms) | Target throughput (req/min) |
| Wait time | Always same (e.g., 300ms) | Varies based on throughput |
| Logic | "Wait 3 seconds then go" | "Wait until throughput allows" |
| Dynamic | No (always fixed) | Yes (adjusts based on current throughput) |

---

## Timer Placement in Test Plan

### Where to Place

- Can be placed at beginning or end of Thread Group
- Applied between thread iterations (loop completions)
- Once thread completes a loop → hits timer → waits → starts next loop

### Scope

- Timer applies to all samplers at the same level or below it in the test plan tree
- Place strategically based on where you need the delay

---

## [Important/Emphasized] Practical Usage Summary

### When to Use Timers (Real-Time)

1. **Database has update latency** — needs seconds before next thread accesses same data
2. **Simulating realistic behavior** — users don't all click at the exact same millisecond
3. **Controlling throughput** — want to limit requests to a target rate
4. **Avoiding data conflicts** — sequential access needed for data integrity

### When NOT to Use Timers

- General load testing where you want maximum concurrent load
- When you just want raw performance metrics without realistic pacing
- **90% of cases:** You may not need timers when writing scripts

### [Important/Emphasized] Instructor's Advice

- Timers are not used much in real load testing
- People generally combine load together and get metrics
- But when your application has dependencies (DB updates, backend processing), use timers
- It's application-specific — depends on backend code behavior

---

## Quick Revision — Section 8

1. **Why timers?** = Real users don't all hit requests simultaneously; need realistic gaps between threads
2. **Main use case** = Database needs time to update between user actions (e.g., inventory decrement)
3. **Without timer** = Next thread starts IMMEDIATELY after previous completes (no gap)
4. **With timer** = Adds sleep/delay between thread executions
5. **Constant Timer** = Fixed delay (e.g., 300ms every time); predictable and consistent
6. **Gaussian Random Timer** = Fixed base (300ms) + random deviation (0 to specified value); varies per thread
7. **Poisson Random Timer** = Uses Poisson/Lambda mathematical formula for delay calculation
8. **Constant Throughput Timer** = Controls target throughput (requests/minute); makes excess threads wait
9. **Throughput analogy** = 4 petrol pumps, each 100L/min = 400L/min max; more cars don't increase output
10. **Throughput with users** = 2 users=200, 4 users=400 (max), 50 users=still 400 (queue the rest)
11. **Target throughput** = Set desired rate; threads beyond that rate are held in "pass" mode
12. **Constant vs. Throughput timer** = Constant=fixed ms wait; Throughput=dynamic wait based on server rate
13. **Timer placement** = At thread group level; applies between loop iterations
14. **Practical reality** = 90% of cases you may not use timers; useful only with specific app dependencies
15. **All timers end goal** = Same purpose (add delay); differ only in HOW delay is calculated

---
---

# SECTION 9: Regular Expression Extractor (Correlation Basics)

---

## Practice Applications for JMeter

### [Important/Emphasized] Warning About Using Random Websites

- Do NOT use random websites for JMeter testing (unlike Selenium)
- In Selenium: single flow, doesn't affect any server
- In JMeter: loading multiple servers → they may **block your IP** if they detect automated traffic

### Recommended Practice Applications

| Application | URL/Location | Notes |
|-------------|-------------|-------|
| **Web Tours (HP LoadRunner)** | Local install | Windows only; on your local server, affects nobody |
| **BlazDemo** | `blazedemo.com` | Flight booking; good for load testing practice |
| **The Internet Herokuapp** | `the-internet.herokuapp.com` | Various test scenarios |
| **Mercury Web Tours** | `newtours.demoaut.com` | Same as local Web Tours but online |

- If Web Tours installation fails (20% users face issues due to firewall/antivirus/IP settings), use BlazDemo instead

---

## Why Regular Expression Extractor is Needed

### The Problem: Hard-Coded Values

- When recording, JMeter captures exact values (e.g., username = "tomsmith", password = "SuperSecretPassword")
- These values are **hard-coded** in the authentication request
- If the application changes these values tomorrow → script breaks!

### The Dynamic Value Scenario

- Application shows username and password on the login page itself
- These credentials change daily/dynamically
- JMeter script must READ from the response and USE in the next request
- Without dynamic handling: script always sends old hard-coded values even when page shows new ones

### The Solution: Regular Expression Extractor

- Reads the **response body** of one request
- **Extracts** specific values using regex patterns
- **Stores** extracted values in variables
- **Passes** those variables to the next request dynamically
- Also called **Correlation** (linking response data to subsequent requests)

---

## How Regular Expression Extractor Works — Step by Step

### The Flow

```
Request 1 (Login page) → Response contains username & password
        ↓
Regular Expression Extractor captures values from Response 1
        ↓
Stores in variables: ${username}, ${password}
        ↓
Request 2 (Authentication) → Uses ${username} and ${password} dynamically
```

### Adding Regular Expression Extractor

1. Right-click on the sampler whose RESPONSE you want to extract from
2. Select: **Add → Post Processors → Regular Expression Extractor**
3. "Post Processor" means: applied AFTER JMeter processes this request and gets the response

---

## Regular Expression Extractor — Configuration Fields

### Field: Apply To

- **Main sample only** (default): Extracts from the main sampler's response (no sub-samples)

### Field: Field to Check

| Option | When to Use |
|--------|-------------|
| **Body** (Response Body) | When data is in the HTML/text response (most common) |
| Response Headers | When data is in HTTP headers |
| Response Message | When data is in the status message |
| Response Code | When you need the HTTP status code |

### Field: Name of Created Variable

- The variable name where extracted value will be stored
- Example: `username`
- Access later using: `${username}`

### Field: Regular Expression

- The pattern to match in the response body
- Must include the **context** (surrounding text) + the **dynamic part**

### Field: Template

- `$1$` = Capture Group 1 (first set of parentheses)
- `$2$` = Capture Group 2 (second set of parentheses)
- `$0$` = Entire matched string (no specific group)

### Field: Match No.

- `1` = First match found (most common)
- `0` = Random match
- `-1` = All matches
- If the pattern appears multiple times in the response, this tells JMeter WHICH occurrence to pick

### Field: Default Value

- Value to use if regex finds NO match
- Example: `admin` (fallback username)
- Or check "Use empty default value" → passes empty string (test will fail, making the error visible)

---

## Regular Expression Syntax Basics

### Key Regex Characters

| Symbol | Meaning | Example |
|--------|---------|---------|
| `.` | Any single character | Matches `a`, `1`, `@`, etc. |
| `+` | One or more of preceding | `.+` = one or more of any character |
| `?` | Non-greedy (lazy) match | `.+?` = match as few characters as possible |
| `()` | Capture Group | `(.+?)` = capture the matched content |

### The Magic Pattern: `.+?`

- **`.`** = any character (letter, number, symbol)
- **`+`** = one or more characters (unknown length)
- **`?`** = non-greedy (stops at first match, doesn't grab everything)
- Combined: `.+?` matches **any text of any length** (dynamically)

### [Important/Emphasized] Recommended Resource

- Visit `rexegg.com` for complete regex reference
- All characters and logic for writing regular expressions are defined there

---

## Practical Example: Extracting Username

### Response Body Contains:

```html
Enter <em>tomsmith</em> for username
```

### Regular Expression Written:

```
Enter <em>(.+?)</em> for username
```

### Breakdown:

- `Enter <em>` → literal text (context before the value)
- `(.+?)` → **Capture Group 1** — matches "tomsmith" (or any name that appears here tomorrow)
- `</em> for username` → literal text (context after the value)

### Configuration:

| Field | Value |
|-------|-------|
| Name of variable | `username` |
| Regular Expression | `Enter <em>(.+?)</em> for username` |
| Template | `$1$` |
| Match No. | `1` |
| Default | (empty or `admin`) |

### Result:

- Variable `username` = `tomsmith`
- Tomorrow if response shows "rahul" → variable `username` = `rahul` (automatic!)
- Used in next request as: `${username}`

---

## Capture Groups Explained

### What Are Groups?

- Anything inside `()` parentheses is a **Capture Group**
- Multiple groups are numbered left to right: Group 1, Group 2, Group 3...

### Example with Two Groups:

```
Enter <em>(.+?)</em> for username and <em>(.+?)</em> for the password
```

- **Group 1** `(.+?)` → captures username (e.g., "tomsmith")
- **Group 2** `(.+?)` → captures password (e.g., "SuperSecretPassword")

### Template Values:

| Template | What it Returns |
|----------|----------------|
| `$0$` | Entire matched string: "Enter tomsmith for username and SuperSecretPassword for the password" |
| `$1$` | Group 1 only: "tomsmith" |
| `$2$` | Group 2 only: "SuperSecretPassword" |

---

## [Important/Emphasized] Multiple Values from Single Extractor (Interview Question)

### The Problem:

- One Regular Expression Extractor → one variable name
- But you need BOTH username AND password
- Creating separate extractors works, but there's a better way

### The Solution: Global Group Variables (`_g` concept)

- JMeter automatically creates **group index variables** for each capture group
- If your variable name is `username`:

| Auto-Created Variable | Contains |
|----------------------|----------|
| `${username}` | Same as `${username_g1}` (when template = `$1$`) |
| `${username_g0}` | Entire matched string (Group 0) |
| `${username_g1}` | Group 1 value (e.g., "tomsmith") |
| `${username_g2}` | Group 2 value (e.g., "SuperSecretPassword") |

### How to Use:

- In Username field: `${username_g1}` or just `${username}` (if template = `$1$`)
- In Password field: `${username_g2}` (Group 2 of the same extractor!)

### [Important/Emphasized] Interview Answer:

> "You don't need multiple Regular Expression Extractors. Use the `_g` (global group) concept with a single extractor. Access Group 1 with `${variableName_g1}`, Group 2 with `${variableName_g2}`, etc."

---

## Debug Sampler

### Purpose

- Shows ALL variable values at a specific point in test execution
- No need to manually check each request's parameters

### How to Add

- Right-click Thread Group → Add → Sampler → **Debug Sampler**
- Place it after the Post Processor

### What it Shows (in View Results Tree → Response tab)

- All JMeter variables and their current values
- Example output:
  ```
  username=tomsmith
  username_g0=Enter tomsmith for username and SuperSecretPassword for the password
  username_g1=tomsmith
  username_g2=SuperSecretPassword
  ```

### Use Case

- Instead of opening each request and checking passed values
- Debug Sampler shows everything in one place
- Essential for troubleshooting regex extractions

---

## Adding Response Assertion for Validation

### After Successful Dynamic Login:

1. Add Response Assertion to the Authentication request
2. Field to Test: **Text Response**
3. Pattern to match: `Welcome to the secure area`
4. If login succeeds → assertion passes
5. If login fails (wrong credentials extracted) → assertion fails

---

## Quick Revision — Section 9

1. **Don't use random websites** = JMeter load can get your IP blocked; use dedicated practice apps
2. **Practice apps** = Web Tours (local), BlazDemo, The Internet Herokuapp, Mercury Web Tours (online)
3. **Hard-coding problem** = Recorded values don't change; if app changes credentials, script breaks
4. **Regular Expression Extractor** = Post Processor that extracts dynamic values from responses
5. **Post Processor placement** = Under the request whose RESPONSE contains the data to extract
6. **Field to Check** = Usually "Body" (response body) where HTML/data resides
7. **Regex pattern `.+?`** = Any character, one or more, non-greedy (matches dynamic text)
8. **Capture Groups `()`** = Parentheses define what to extract; numbered left to right
9. **Template `$1$`** = Get Group 1; `$2$` = Get Group 2; `$0$` = Get entire match
10. **Match No. = 1** = Take first occurrence found in response
11. **Variable usage** = `${variableName}` in subsequent requests replaces with extracted value
12. **Multiple values, one extractor** = Use `${var_g1}`, `${var_g2}` for different capture groups
13. **Debug Sampler** = Shows all variable values; essential for troubleshooting
14. **Default value** = Fallback if regex finds nothing (e.g., "admin" or empty)
15. **Correlation** = The process of capturing dynamic response data and passing to next request
16. **rexegg.com** = Recommended resource for learning regex syntax

---
---

# SECTION 10: Creating HTTP Request Samplers Manually & CSV Data-Driven Testing

---

## Creating HTTP Requests Without Recording

### Why Manual Creation?

- Sometimes recording is not possible due to site restrictions
- Understanding HTTP requests/responses allows manual script creation
- By observing network traffic, you can replicate any action in JMeter

### [Important/Emphasized] Key Principle

- JMeter works purely on **HTTP Requests and Responses**
- JMeter never opens any UI/browser
- When recording: backend captures HTTP traffic → creates samplers automatically
- Manual creation: YOU observe the traffic → create samplers yourself

---

## Using Browser Developer Tools (Network Tab)

### Steps to Capture HTTP Details

1. Open the target page in browser
2. Right-click → **Inspect** → open **Network** tab
3. Select **"All"** tab to monitor all requests/responses
4. Perform the action (e.g., click "Continue" to register)
5. Observe the HTTP request that fires

### What to Look For

| Detail | Where to Find | Example |
|--------|---------------|---------|
| **Request URL** | Network tab → Headers | `http://IP:1080/cgi-bin/login.pl` |
| **Request Method** | Network tab → Headers | POST |
| **Form Data / Payload** | Network tab → Payload tab | username=rahul&password=123... |
| **Response** | Network tab → Response/Preview | "Thank you for registering..." |

---

## Building HTTP Request Sampler Manually

### Step-by-Step Configuration

1. **Add Thread Group** → Right-click → Add → Threads → Thread Group
2. **Add HTTP Request Sampler** → Right-click Thread Group → Add → Sampler → HTTP Request

### HTTP Request Fields

| Field | Value | How to Find |
|-------|-------|-------------|
| **Protocol** | `HTTP` or `HTTPS` | From the URL (http:// vs https://) |
| **Server Name or IP** | `192.168.x.x` (your IP) | From the request URL |
| **Port Number** | `1080` | From the URL (after the colon) |
| **Method** | `POST` | From Network tab → Request Method |
| **Path** | `/cgi-bin/login.pl` | Everything after IP:Port in the URL |

### Adding Form Parameters (POST Data)

**Shortcut Method:**
1. Copy all form data from browser's Network tab (Payload section)
2. In JMeter HTTP Request → go to **Parameters** tab
3. Click **"Add from Clipboard"**
4. All name-value pairs are automatically populated!

**Manual Method:**
- Click "Add" for each parameter
- Enter Name and Value for each form field (username, password, firstName, lastName, country, etc.)

### Optional Parameters

- If some fields are optional → uncheck the "Include" checkbox for those parameters
- Mandatory fields must all be included

---

## Verifying the Manual Script

### Add Listener

- Right-click Thread Group → Add → Listener → **View Results Tree**

### Run and Check

- Run with 1 thread (verify script correctness first)
- Check **Sample Result**: Response Code = 200 OK = Success
- Check **Response Data**: Should show expected content (e.g., "Thank you for registering")
- Check **Request tab**: Verify POST data was sent correctly

### View HTML Response

- In View Results Tree → Response Data → change dropdown to **"HTML"**
- See the rendered page as it would appear in browser

---

## Adding Response Assertion

### Configuration

1. Right-click on HTTP Request → Add → Assertions → **Response Assertion**
2. Field to Test: **Text Response**
3. Pattern: `Thank you` (text that appears on successful registration)

### Behavior

- If response contains "Thank you" → test PASSES (green)
- If response does NOT contain "Thank you" → test FAILS (red)
- Example failure: "Username already taken" → no "Thank you" in response → FAILS

### [Important/Emphasized] Why Assertions Matter

- Don't manually check responses every time
- Assertions automate pass/fail verification
- Immediately tells you if something went wrong

---

## CSV Data Set Config (Data-Driven Testing)

### The Problem

- Script has hard-coded registration data (username, password, country)
- Need to register **multiple users** (100, 500, 1000)
- Each user needs UNIQUE data (especially username)
- Business/Ops team provides data → need to feed it into JMeter

### The Solution: CSV Data Set Config

- Read test data from external CSV file
- Each thread picks one row of data
- Variables are populated from CSV columns automatically

---

## Creating the CSV File

### Steps

1. Open Excel
2. Create columns (NO headers needed in this example):
   - Column 1: Username (unique for each row)
   - Column 2: Password
   - Column 3: Country
3. Fill data rows:

| Username | Password | Country |
|----------|----------|---------|
| rahulshetty2 | rahul | India |
| rahulshetty3 | rahul | USA |
| rahulshetty4 | rahul | China |
| rahulshetty5 | rahul | China |
| rahulshetty6 | rahul | India |
| rahulshetty7 | rahul | USA |

4. Save as **CSV format** (e.g., `TestData.csv`)

### [Important/Emphasized] Data Rules

- Usernames MUST be unique (registration fails for duplicates)
- Passwords can be same or different
- In real-time: business team provides this data file
- Number of rows = number of threads you can run

---

## Configuring CSV Data Set Config

### How to Add

1. Right-click Thread Group → Add → Config Element → **CSV Data Set Config**
2. Move it ABOVE the HTTP Request sampler (executes first)

### Configuration Fields

| Field | Value | Explanation |
|-------|-------|-------------|
| **Filename** | `C:\path\to\TestData.csv` | Full path to your CSV file |
| **Variable Names** | `username,password,country` | Comma-separated variable names (mapped to columns in order) |
| **Delimiter** | `,` (default) | How columns are separated in CSV |
| **Recycle on EOF** | `False` | Don't restart from row 1 after last row |
| **Stop thread on EOF** | `True` | Stop thread if no more data rows available |

### How Variable Mapping Works

```
CSV Row 1: rahulshetty2, rahul, India
                ↓          ↓       ↓
Variables:  ${username}  ${password}  ${country}

CSV Row 2: rahulshetty3, rahul, USA
                ↓          ↓       ↓
Variables:  ${username}  ${password}  ${country}
```

- Column 1 → first variable name (`username`)
- Column 2 → second variable name (`password`)
- Column 3 → third variable name (`country`)
- Each thread picks the NEXT row sequentially

---

## Recycle on EOF Explained

### Scenario: 6 rows in CSV, but 10 threads requested

| Setting | Behavior |
|---------|----------|
| Recycle on EOF = **True** | Thread 7 reuses Row 1, Thread 8 reuses Row 2... |
| Recycle on EOF = **False** | Thread 7 has no data → stops |
| Stop thread on EOF = **True** | Thread stops gracefully when no data available |
| Stop thread on EOF = **False** | Thread continues with empty/null values |

### For Registration Scenario:

- **Recycle = False** (can't register same user twice!)
- **Stop thread = True** (no point running without data)
- Ensure: Number of threads ≤ Number of CSV rows

---

## Using CSV Variables in HTTP Request

### Replace Hard-Coded Values with Variables

| Parameter | Before (Hard-coded) | After (Dynamic) |
|-----------|-------------------|-----------------|
| username | `rahulshetty1` | `${username}` |
| password | `rahul` | `${password}` |
| confirmPassword | `rahul` | `${password}` |
| country | `India` | `${country}` |

### How JMeter Resolves Variables

1. JMeter sees `${username}` in HTTP Request
2. Looks for variable named `username` in the test plan
3. Finds it declared in CSV Data Set Config
4. Gets current value from CSV (based on current thread/row)
5. Substitutes value at runtime

---

## Running the Data-Driven Test

### Configuration

- Thread Group: **Number of Threads = 6** (matches 6 CSV rows)
- Loop Count: 1
- Ramp-up: 1 second

### Results

- 6 registrations completed in ~2 seconds
- All 6 show "Thank you" in response (assertion passes)
- Each used different username from CSV (rahulshetty2, 3, 4, 5, 6, 7)

### [Important/Emphasized] Real-World Use Case

- Business team says: "Register 1000 users in 2 minutes"
- Create CSV with 1000 unique user records
- Set Thread Group = 1000
- Run → all registered in seconds!
- Much faster than UI automation (Selenium would take hours)
- Simultaneously get performance metrics (response time, throughput)

---

## Recommendation: Recording vs Manual

| Approach | When to Use |
|----------|-------------|
| **Record & Playback** | Preferred; does all the work automatically; you focus on load/assertions/reports |
| **Manual Creation** | When recording is blocked; when you need precise control over requests |

### [Important/Emphasized] Instructor's Advice

- Use Record & Playback as your primary approach (it's the lifesaver)
- Manual creation is good to know but more time-consuming
- Focus efforts on: assertions, load configuration, reporting — not script building

---

## Quick Revision — Section 10

1. **Manual HTTP Request** = Created without recording; by observing browser Network tab
2. **Browser Network tab** = Right-click → Inspect → Network → shows all HTTP requests/responses
3. **Request details needed** = Protocol, Server/IP, Port, Method (GET/POST), Path, Parameters
4. **Add from Clipboard** = Shortcut to paste all form parameters from browser into JMeter
5. **POST method** = Used when sending form data (registration, login, etc.)
6. **Path** = URL portion after IP:Port (e.g., `/cgi-bin/login.pl`)
7. **Response Code 200** = Success; request processed correctly
8. **CSV Data Set Config** = Reads external CSV file and maps columns to JMeter variables
9. **Variable mapping** = Comma-separated names in order of CSV columns (username,password,country)
10. **${variableName}** = Syntax to use CSV variable in HTTP Request parameters
11. **Recycle on EOF = False** = Don't reuse data rows (important for unique data like usernames)
12. **Stop thread on EOF = True** = Stop gracefully when CSV data runs out
13. **Threads must match data** = 6 CSV rows → max 6 threads; 1000 rows → up to 1000 threads
14. **Real-world speed** = JMeter registers 6 users in 2 seconds (vs hours with UI automation)
15. **Recording preferred** = Saves time; manual creation for when recording is blocked
16. **Response Assertion** = Validates success; catches duplicate username errors automatically

---
---

# SECTION 11: BeanShell Scripting in JMeter

---

## What is BeanShell?

- A lightweight scripting/programming language similar to **Java**
- Almost identical Java syntax — if you know basic Java, BeanShell is easy
- Allows you to add **custom logic, conditions, and data manipulation** within JMeter
- Can modify variables, process data, add conditions, loops — anything code can do
- [Important/Emphasized] Not a deep dive in this course, but essential to know how to use it in JMeter

---

## Where BeanShell is Used in JMeter

### Two Main Placements:

| Processor Type | When it Runs | Use Case |
|---------------|-------------|----------|
| **BeanShell PreProcessor** | BEFORE the sampler executes | Modify input data, set conditions, process variables before request |
| **BeanShell PostProcessor** | AFTER the sampler executes | Check results, log information, validate responses, update variables |

### How to Add:

- **PreProcessor:** Right-click Sampler → Add → Pre Processors → BeanShell PreProcessor
- **PostProcessor:** Right-click Sampler → Add → Post Processors → BeanShell PostProcessor

---

## BeanShell Built-in Variables

### Key Variables Available in BeanShell Scripts:

| Variable | Purpose | Scope |
|----------|---------|-------|
| `vars` | Get/Set variables declared in Thread Group | Thread Group level only |
| `props` | Get/Set properties declared at Test Plan level | Shared across ALL Thread Groups |
| `ctx` | Access JMeterContext (thread metadata) | Current thread context |
| `prev` | Access previous sampler's result (PostProcessor only) | Previous HTTP response |
| `log` | Print messages to console/log | Output logging |

---

## `vars` — Thread Group Variables

### Get a Variable Value:

```java
String country = vars.get("country");
```

- Retrieves the value of the variable named "country"
- Works for CSV Data Set variables, User Defined Variables, etc.

### Set/Update a Variable Value:

```java
vars.put("username", newUsername);
```

- Updates the existing variable "username" with a new value
- The updated value is used by subsequent samplers in the SAME thread group

### [Important/Emphasized] Scope Limitation:

- `vars` can ONLY access variables declared within the same Thread Group
- Cannot access variables from other Thread Groups
- Cannot access Test Plan level variables

---

## `props` — Test Plan Level Properties

### When to Use:

- When you need variables shared across MULTIPLE Thread Groups
- Variables declared at **Test Plan level** (not inside any Thread Group)

### Get a Property:

```java
String result = props.get("result");
```

### Set a Property:

```java
props.put("result", "PASS");
```

### Example Scenario:

```
Test Plan:
├── Variable: result = "" (accessible by ALL thread groups)
├── Thread Group 1 (has username, password, country — local only)
└── Thread Group 2 (cannot access Thread Group 1's vars, but CAN access "result")
```

---

## `ctx` — JMeterContext

### What it Provides:

- Metadata about the current Thread Group execution
- Based on `JMeterContext` class (official JMeter documentation)

### Useful Methods:

| Method | Returns | Description |
|--------|---------|-------------|
| `ctx.getThreadNum()` | int | Current thread number (0-based) |
| `ctx.getVariables()` | JMeterVariables | All variables for current thread |
| `ctx.isRecording()` | boolean | Whether recording mode is active |
| `ctx.getPreviousResult()` | SampleResult | Previous sampler result |

### Example:

```java
int threadNum = ctx.getThreadNum();
log.info(threadNum + " is the thread number");
```

- Thread 1 → returns 0
- Thread 2 → returns 1
- Thread 3 → returns 2

---

## `prev` — Previous Sampler Result (PostProcessor Only)

### What it Contains:

- The complete result of the HTTP sampler that just executed
- Response code, response message, response data, thread name, etc.

### Useful Methods:

| Method | Returns | Description |
|--------|---------|-------------|
| `prev.getResponseCode()` | String | HTTP status code (e.g., "200") |
| `prev.getResponseMessage()` | String | HTTP status message (e.g., "OK") |
| `prev.getResponseDataAsString()` | String | Full response body |
| `prev.getThreadName()` | String | Name of the thread |

### Example — Check Response in PostProcessor:

```java
log.info(prev.getResponseCode().toString());

if(prev.getResponseMessage().contains("unauthorized"))
{
    log.info("Authentication issue");
}
else if(prev.getResponseMessage().contains("OK"))
{
    log.info("Test Passed");
    props.put("result", "PASS");
}
```

---

## `log` — Console Output

### Usage:

```java
log.info("This message prints to the console log");
log.info("Username is: " + vars.get("username"));
```

### How to View Logs:

- In JMeter GUI: go to **Options → Log Viewer** (or check the Log Viewer checkbox)
- All `log.info()` messages appear in the console output panel at the bottom

---

## Practical Example: BeanShell PreProcessor

### Scenario:

- CSV file has: username, password, country
- Requirement: If country = "china", append "china" to the username
- Also: append a unique prefix (thread number + constant) to ALL usernames

### The BeanShell PreProcessor Code:

```java
String newUsername;
log.info(vars.get("country"));
log.info(ctx.getThreadNum() + " is the thread number");

prefix = ctx.getThreadNum() + 35;

String country = vars.get("country");

if(country.equals("china"))
{
    newUsername = prefix.toString() + vars.get("username") + "china";
}
else
{
    newUsername = prefix.toString() + vars.get("username");
}

vars.put("username", newUsername);
log.info("New username is " + newUsername);
```

### How it Works Step by Step:

1. **Get country** from CSV variable
2. **Calculate prefix** = thread number (0, 1, 2...) + constant (35)
3. **Check condition:** Is country "china"?
   - YES: newUsername = prefix + username + "china"
   - NO: newUsername = prefix + username (no china suffix)
4. **Update variable:** `vars.put("username", newUsername)` replaces old value
5. **Log output:** Prints new username for verification

### Result (with constant = 35, 6 threads):

| Thread | Country | Original Username | New Username |
|--------|---------|-------------------|--------------|
| 0 | India | rahulshetty20 | 35rahulshetty20 |
| 1 | USA | rahulshetty30 | 36rahulshetty30 |
| 2 | China | rahulshetty40 | 37rahulshetty40china |
| 3 | China | rahulshetty50 | 38rahulshetty50china |
| 4 | India | rahulshetty60 | 39rahulshetty60 |
| 5 | USA | rahulshetty70 | 40rahulshetty70 |

### [Important/Emphasized] Benefit:

- No need to manually update CSV file for unique usernames
- Just change the constant (15 → 25 → 35) and run again
- All usernames become unique automatically!

---

## Practical Example: BeanShell PostProcessor

### Scenario:

- After registration request completes, check if it passed or failed
- Log appropriate messages for debugging
- Update Test Plan level property if test passed

### The BeanShell PostProcessor Code:

```java
log.info(prev.getResponseCode().toString());

if(prev.getResponseMessage().contains("unauthorized"))
{
    log.info("Authentication issue");
}
else if(prev.getResponseMessage().contains("OK"))
{
    log.info("Test Passed");
    props.put("result", "PASS");
}
```

### Use Case for PostProcessor:

- When a new team member joins → they can read logs to understand failures
- Instead of manually checking View Results Tree every time
- Automated logging: "Authentication issue" or "Test Passed" printed to console
- Update shared properties for cross-thread-group communication

---

## BeanShell Syntax Rules

### [Important/Emphasized] Key Rules:

1. **Semicolons required** at end of every statement (just like Java)
2. **Data types optional** — BeanShell infers type (unlike Java which requires explicit types)
   - Java: `int prefix = 15;` (required)
   - BeanShell: `prefix = 15;` (also valid — infers it's a number)
3. **Java syntax is fully valid** — any Java code works in BeanShell
4. **String concatenation** with `+` operator
5. **`.toString()`** needed when concatenating int with String
6. **`.equals()`** for String comparison (not `==`)
7. **`.contains()`** to check if string contains a substring

### Data Type Conversion:

```java
prefix = ctx.getThreadNum() + 35;  // integer
newUsername = prefix.toString() + vars.get("username") + "china";  // convert int to String
```

---

## Variable Scope Summary

### Test Plan Structure:

```
Test Plan (props — accessible everywhere)
├── Variable: "result" → props.get("result") / props.put("result", "PASS")
│
├── Thread Group 1 (vars — local only)
│   ├── CSV: username, password, country → vars.get("username")
│   └── BeanShell can use: vars, props, ctx, prev, log
│
└── Thread Group 2 (vars — separate scope)
    ├── Cannot access Thread Group 1's "username"
    └── CAN access Test Plan's "result" via props
```

---

## JMX File Structure (Reference)

From the attached `HTTP+Request1 (1).jmx` file, the test plan structure is:

```
Test Plan (with variable: result = "")
└── Thread Group (6 threads, 1 loop)
    ├── CSV Data Set Config (TestData.csv → username, password, country)
    ├── BeanShell PreProcessor (prefix logic + china append)
    ├── HTTP Request "Registration" (POST to cgi-bin/login.pl)
    │   └── Response Assertion (checks "Thank you")
    ├── View Results Tree
    └── BeanShell PostProcessor (response code check + logging)
```

---

## Quick Revision — Section 11

1. **BeanShell** = Lightweight Java-like scripting language; same Java syntax works
2. **PreProcessor** = Runs BEFORE sampler; modify input data, add conditions to variables
3. **PostProcessor** = Runs AFTER sampler; check results, log info, validate responses
4. **`vars.get("name")`** = Retrieve variable value from Thread Group scope
5. **`vars.put("name", value)`** = Update/set variable value within Thread Group
6. **`props.get("name")`** = Get Test Plan level property (shared across all Thread Groups)
7. **`props.put("name", value)`** = Set Test Plan level property
8. **`ctx.getThreadNum()`** = Get current thread number (0-based)
9. **`prev.getResponseCode()`** = Get HTTP response code (200, 401, etc.) — PostProcessor only
10. **`prev.getResponseMessage()`** = Get response message ("OK", "Unauthorized") — PostProcessor only
11. **`log.info("message")`** = Print to console log; view in Options → Log Viewer
12. **Semicolons required** = Every statement must end with `;` (like Java)
13. **Data types optional** = BeanShell infers types; explicit declaration not mandatory
14. **`.toString()`** = Convert int to String for concatenation
15. **`.equals()`** = Compare Strings (not `==`)
16. **Prefix trick** = Thread number + constant creates unique usernames without editing CSV
17. **vars scope** = Thread Group only; use `props` for cross-Thread-Group variables
18. **Real-world use** = Dynamic username generation, conditional logic, result logging, automated validation

---
---

# SECTION 12: Correlation in JMeter (Dynamic Session Handling)

---

## What is Correlation?

- **Definition:** The process of capturing dynamic values from a previous HTTP response and passing them to subsequent requests
- Values that change on every execution (session IDs, tokens, CSRF tokens) cannot be hard-coded
- Must be extracted dynamically at runtime from the response of a prior call
- [Important/Emphasized] One of the most frequently used concepts in real-time projects, especially for login scenarios

---

## The Problem: Dynamic Session Values

### Scenario: Web Tours Flight Booking

- When you login, the server generates a unique **userSession** value
- This session ID changes with EVERY login attempt
- Example: First login → session = `133659...VHHf`; Next login → session = `133659...Atcf`
- Hard-coded session value works ONCE but fails on every subsequent run

### The Error You Get:

> "You have reached this page incorrectly, perhaps a bad user session value"

- This means: the session ID you sent is expired/invalid
- The application expects the CURRENT session, not the old recorded one

---

## The Solution: 3-Step Correlation Process

### Step 1: Identify the Dynamic Variable

- Run the script → it fails
- Look at the error message to identify what's dynamic
- In this case: `userSession` parameter changes every run

### Step 2: Find Where the Dynamic Value is Generated

- Check previous HTTP request RESPONSES in the browser Network tab
- Look through `.pl` calls (functional calls), skip images/PNGs/GIFs
- Found: `nav.pl` (navigation call) returns `userSession` value in its response body:

```html
<input type="hidden" name="userSession" value="133659...0AA">
```

### Step 3: Extract and Inject Dynamically

- Add an HTTP Request for the call that generates the session
- Add Regular Expression Extractor to capture the value
- Store in a variable → use `${variableName}` in subsequent requests

---

## Building the End-to-End Script (Without Recording)

### Script Structure (from JMX file):

```
Thread Group (1 thread, 1 loop)
├── 1. Get Session (GET /cgi-bin/nav.pl?in=home)
│   └── Regular Expression Extractor → captures sessionId
├── 2. Login (POST /cgi-bin/login.pl)
│   └── Uses ${sessionId} in userSession parameter
├── 3. Select Destination (POST /cgi-bin/reservations.pl)
│   └── Departure, arrival, date, passengers, seat type
├── 4. Select Flight (POST /cgi-bin/reservations.pl)
│   └── Flight number, passengers, seat preferences
├── 5. Confirm Details (POST /cgi-bin/reservations.pl)
│   └── Personal info, credit card, final booking
└── View Results Tree
```

### Key Observation: Same URL, Different Payloads

- Steps 3, 4, and 5 all hit `/cgi-bin/reservations.pl`
- But each sends DIFFERENT form data (payload)
- The path is the same; the action changes based on parameters sent

---

## GET vs POST Parameters

### [Important/Emphasized] Critical Difference:

| Parameter Type | HTTP Method | Where They Go | Example |
|---------------|-------------|---------------|---------|
| **Query Parameters** | GET | Appended to URL after `?` | `/nav.pl?in=home` |
| **Form Parameters** | POST | In request body (Payload) | username=rahul&password=rahul |

### Rules:

- **GET calls:** Query parameters go directly in the URL path (after `?`), NOT in JMeter's Parameters tab
- **POST calls:** Form data MUST be added in JMeter's Parameters tab (cannot be in URL)
- If you see "Query String" in Network tab → it's part of the URL
- If you see "Form Data" in Network tab → add to Parameters section

---

## Regular Expression Extractor for Session Correlation

### Configuration:

| Field | Value | Explanation |
|-------|-------|-------------|
| Apply to | Main sample only | The Get Session sampler |
| Field to check | **Body** | Session value is in response body (HTML) |
| Name of variable | `sessionId` | Variable to store extracted value |
| Regular Expression | `name="userSession" value="(.+?)"` | Pattern to match |
| Template | `$1$` | Capture Group 1 |
| Match No. | `1` | First (and only) match |

### How the Regex Works:

```
Response contains: name="userSession" value="133659abc0AA"

Regex: name="userSession" value="(.+?)"
                                  ^^^^
                                  This captures: 133659abc0AA
```

- Everything before `(.+?)` is literal/constant text
- `(.+?)` = capture group — matches the dynamic session value
- Everything after is literal text (the closing `"`)
- The session value changes every run, but the surrounding HTML structure stays the same

---

## Using the Extracted Variable

### In Login Request Parameters:

| Parameter Name | Value |
|---------------|-------|
| userSession | `${sessionId}` |
| username | `rahul` |
| password | `rahul` |

- JMeter sees `${sessionId}` → recognizes it as a variable
- Looks for where `sessionId` is declared → finds it in the Regex Extractor
- Substitutes the dynamically extracted value at runtime

### Result:

- **Before correlation:** "Bad user session value" error
- **After correlation:** "Welcome to Web Tours booking page" success!

---

## Testing Regex with RegExp Tester

### How to Verify Your Regex Before Running:

1. Run the script once (even if it fails)
2. In View Results Tree → select the "Get Session" response
3. Click the **"RegExp Tester"** tab at the bottom
4. Paste your regex pattern
5. Click "Test" → see if it extracts the expected value
6. If successful → use the same regex in your Extractor

---

## Practical Debugging Tips

### Common Issues:

| Problem | Cause | Fix |
|---------|-------|-----|
| "URI does not specify a valid hostname" | Missing domain/port in HTTP Request | Fill in all connection details |
| "Bad user session value" | Hard-coded/expired session ID | Add correlation (extract dynamically) |
| Script passes but response shows error | No assertion added | Add Response Assertion to catch failures |
| Green status but wrong response | HTTP 200 doesn't mean functional success | Always check response body content |

### [Important/Emphasized] Important Tip:

- Without assertions, all requests show as "PASS" (green) because HTTP returns 200
- A 200 response does NOT mean the test functionally passed
- Always add Response Assertions to validate actual response content

---

## Network Tab Investigation Workflow

### What to Focus On:

- **`.pl` calls** (functional calls) → these carry your actual business logic
- **Ignore:** `.gif`, `.png`, `.html` → these are images/static resources

### How to Find Dynamic Values:

1. Clear Network tab
2. Refresh page and perform action (e.g., login)
3. Check each `.pl` call's **Response** tab
4. Search for the parameter name (e.g., "userSession")
5. The call whose response CONTAINS that value = the source

---

## JMX File Reference (from attached `gt (1).jmx`)

### Get Session Request:

```
Method: GET
Path: /cgi-bin/nav.pl?in=home
Domain: 43.225.54.30
Port: 1080
Protocol: http
```

### Regex Extractor on Get Session:

```
Reference Name: sessionId
Regex: name="userSession" value="(.+?)"
Template: $1$
Match No.: 1
```

### Login Request (uses correlation):

```
Method: POST
Path: /cgi-bin/login.pl
Parameters:
  - userSession = ${sessionId}  ← DYNAMIC (from correlation)
  - username = rahul
  - password = rahul
  - login.x = 40
  - login.y = 11
  - JSFormSubmit = off
```

---

## [Important/Emphasized] Correlation Summary — Key Steps

| Step | Action | Purpose |
|------|--------|---------|
| 1 | Run script → observe failure | Identify the dynamic parameter |
| 2 | Investigate Network tab responses | Find which call generates the dynamic value |
| 3 | Add HTTP Request for that call | Ensure the response is captured by JMeter |
| 4 | Add Regular Expression Extractor | Extract dynamic value into a variable |
| 5 | Use `${variable}` in subsequent requests | Replace hard-coded value with dynamic reference |
| 6 | Re-run and verify | Confirm the script passes with dynamic values |

---

## Quick Revision — Section 12

1. **Correlation** = Capturing dynamic values from responses and passing to subsequent requests
2. **Why needed** = Session IDs, tokens change every run; hard-coded values fail on re-execution
3. **userSession problem** = Each login generates unique session; old session = "bad session value" error
4. **Step 1** = Run script, observe failure, identify which parameter is dynamic
5. **Step 2** = Check Network tab responses to find WHERE the dynamic value is generated
6. **Step 3** = Add HTTP Request + Regex Extractor to capture it before the request that needs it
7. **GET vs POST params** = GET params go in URL (after ?); POST params go in Parameters tab
8. **Regex for session** = `name="userSession" value="(.+?)"` captures the session value
9. **Variable usage** = `${sessionId}` in subsequent request parameters
10. **RegExp Tester** = Built-in tool in View Results Tree to verify regex before running
11. **Focus on .pl calls** = Functional calls; ignore .gif/.png/static resources in Network tab
12. **Talk to developers** = If can't find source of dynamic value, ask which API generates it
13. **Always add assertions** = HTTP 200 doesn't mean functional success; validate response content
14. **Real-time frequency** = Correlation is used in almost every login scenario in real projects
15. **Script structure** = Get Session → Login (with session) → Business flow (destination, flight, confirm)

---
---

# SECTION 13: Non-GUI Mode & BlazeMeter Cloud Testing

---

## What is Non-GUI Mode?

- Running JMeter tests **without opening the JMeter GUI tool**
- Tests are executed via **command line/command prompt**
- The JMeter GUI itself consumes system resources (RAM, CPU)
- Non-GUI mode gives **more accurate results** because no resources are wasted on the tool's UI

### Why Use Non-GUI Mode?

| Reason | Explanation |
|--------|-------------|
| **Accuracy** | GUI tool open = some system resources consumed by the tool itself |
| **CI/CD Integration** | Jenkins needs commands, cannot open JMeter GUI on CI platform |
| **Resource savings** | Minor but real — especially for large load tests |
| **Automation** | Can be scripted and scheduled without human interaction |

### [Important/Emphasized] Primary Reason: CI/CD (Jenkins)

- Jenkins can only execute commands — cannot open desktop applications
- For CI/CD pipelines, Non-GUI mode is **strongly recommended**

---

## Running JMeter in Non-GUI Mode

### Prerequisites

1. Navigate to JMeter's **bin directory** in command prompt
2. Open command prompt as **Administrator**
3. Test file (.jmx) should be in bin directory OR provide full path

### The Command

```bash
jmeter -n -t CookieManager.jmx -l C:\results.jtl
```

### Command Arguments Explained

| Argument | Meaning | Description |
|----------|---------|-------------|
| `jmeter` | Activate JMeter | Starts JMeter engine |
| `-n` | Non-GUI mode | Run without opening the tool |
| `-t` | Test plan | Followed by the .jmx filename or full path |
| `-l` | Log/Results | Followed by output file path (.jtl extension) |

### File Extensions

| Extension | Purpose |
|-----------|---------|
| `.jmx` | JMeter test plan (script you create in JMeter) |
| `.jtl` | JMeter test log (results output file) |

### [Important/Emphasized] Key Points:

- Non-GUI mode is for **running** tests only — NOT for creating them
- Create tests in JMeter GUI → Save as .jmx → Run via command line
- Test executes with same configuration (threads, loops) as defined in the .jmx file
- If drive C has permission issues, use another drive (D:, E:) for results file

---

## Viewing Non-GUI Results (.jtl file)

### Method 1: Open in Excel

- Drag the `.jtl` file into Excel
- Contains columns: timestamp, label, response code, response message, thread name, data type, bytes, threads, URL, connect time, etc.
- Quick check: Search (Ctrl+F) for any `4xx` error codes to find failures
- `200` = success; anything starting with `4` = failure

### Method 2: Import back into JMeter

- Open JMeter → Add Listener → Browse and load the .jtl file
- See results in familiar JMeter format

### Method 3: Taurus Framework

- External tool that reads .jmx files
- Shows graphical results directly in command prompt
- Not widely used but available for exploration

### Limitations of .jtl Reports

- Raw format — not as user-friendly as JMeter GUI reports
- No graphical charts by default
- Sufficient for pass/fail verification (check response codes)
- For detailed graphical reports → use BlazeMeter

---

## BlazeMeter Cloud Testing

### What is BlazeMeter?

- Cloud-based performance testing platform
- Takes your JMeter script (.jmx) and runs it on their **high-performance servers**
- Provides detailed graphical reports (better than JMeter's built-in reports)
- Reports modeled after HP LoadRunner style (industry standard)

### Why Use BlazeMeter?

| Problem | BlazeMeter Solution |
|---------|-------------------|
| Laptop can't handle 5000 users | Run on BlazeMeter's powerful servers |
| Need detailed graphical reports | Beautiful charts, timelines, percentiles |
| No infrastructure for load testing | BlazeMeter provides dedicated servers |
| Client wants professional reports | Screenshots of BlazeMeter dashboards |

### [Important/Emphasized] When to Use BlazeMeter

- When you don't have heavy infrastructure to run thousands of users
- Running thousands of users from a laptop = inaccurate results (resources limited)
- BlazeMeter dedicates a server just for your test → accurate results
- Professional reports for client presentation

### How to Use BlazeMeter

1. Go to `blazemeter.com` → Register/Create account
2. Login → Click **"Create Test"**
3. Select "I have a JMeter test"
4. **Upload your .jmx file**
5. Configure: Number of users, ramp-up, duration, server location
6. Click **"Run Test"**
7. Wait 2-4 minutes → View detailed reports

### BlazeMeter Free Account Limitations

- Maximum **1 user** with free account
- Upgraded account: thousands of users available
- Duration and other configurations still adjustable

### BlazeMeter Reports Include:

- Throughput graphs
- Response time graphs
- 90th/95th percentile
- Bandwidth
- Timeline reports (how each user behaves)
- Per-request statistics
- Load statistics over time

### BlazeMeter Resources

- `blazedemo.com` — Practice website provided by BlazeMeter for load testing
- `blazemeter.com` blog — Excellent JMeter learning articles
- [Important/Emphasized] Instructor personally used BlazeMeter blog to learn JMeter

---

## Three Ways to Run Tests Without GUI

| Method | Description | Report Quality |
|--------|-------------|---------------|
| **Command Line + .jtl** | Basic; raw data in Excel format | Low (pass/fail check only) |
| **Taurus** | Framework with terminal graphs | Medium (graphical in terminal) |
| **BlazeMeter Cloud** | Upload .jmx, run on cloud servers | High (professional dashboards) |

---

## Quick Revision — Section 13

1. **Non-GUI Mode** = Run JMeter tests via command line without opening the tool
2. **Why** = More accurate results; required for CI/CD (Jenkins); saves resources
3. **Command** = `jmeter -n -t TestPlan.jmx -l results.jtl`
4. **-n** = Non-GUI mode; **-t** = Test plan file; **-l** = Results log file
5. **.jmx** = JMeter test plan extension; **.jtl** = JMeter test log (results)
6. **Run as Administrator** = Required for command prompt execution
7. **Navigate to bin directory** = Must be in JMeter's bin folder to run commands
8. **.jtl in Excel** = Drag file into Excel; check response codes (200=pass, 4xx=fail)
9. **BlazeMeter** = Cloud platform; upload .jmx; run on powerful servers; get professional reports
10. **Free account** = 1 user max; upgraded account = thousands of users
11. **BlazeMeter reports** = Throughput, response time, percentiles, bandwidth, timelines
12. **Taurus** = Alternative framework for terminal-based graphical reports
13. **Recommendation** = Use BlazeMeter for professional reports; .jtl for quick pass/fail checks
14. **CI/CD** = Non-GUI mode is mandatory for Jenkins integration

---
---

# SECTION 14: Distributed Mode (Master-Slave Architecture)

---

## Why Distributed Mode is Needed

### The Problem: Single Machine Limitations

- Running 5000+ users on one machine → **memory fills up**, heap overflow, inaccurate results
- Limited CPU, RAM, and heap configuration cannot handle thousands of threads
- Results become **wrong/unreliable** when system resources are exhausted
- No point running 5000 users if results are inaccurate

### The Real-World Need

- E-commerce sites (Amazon, Flipkart) get millions of users on sale days (Black Friday, Independence Day)
- Must test with 5000, 10000, 15000+ users
- Single laptop/machine CANNOT handle this realistically

---

## What is Distributed Mode?

- **Definition:** Distributing your JMeter test across multiple machines
- One **Master** machine controls the test
- Multiple **Slave** machines execute portions of the load
- All slaves hit the target application simultaneously
- Results are collected back at the Master

### Architecture Diagram:

```
                    ┌─── Slave 1 (1000 users) ───┐
                    │                              │
Master (JMeter) ───├─── Slave 2 (1000 users) ───├───→ Target Application
  (5000 users      │                              │      (e.g., Amazon)
   configured)     ├─── Slave 3 (1000 users) ───┤
                    │                              │
                    ├─── Slave 4 (1000 users) ───┤
                    │                              │
                    └─── Slave 5 (1000 users) ───┘
```

- 5000 users distributed across 5 machines = 1000 each
- Each machine easily handles 1000 users
- Combined load on target = 5000 users (accurate results!)
- Simulates real-world: different users come from different machines/locations

---

## Setting Up Distributed Mode

### Requirements:

- All machines (Master + Slaves) must have **same JMeter version**
- All machines must be on the **same network/subnet**
- Same or similar operating systems recommended
- No firewall/antivirus blocking connections between machines

---

### Step 1: Configure Slave Machine

1. Navigate to JMeter's **bin directory** on the Slave machine
2. Open `jmeter.properties` file
3. Find `server.rmi.ssl.disable` → set to **`true`** (uncomment the line, remove `#`)
4. Save the file
5. Run `jmeter-server.bat` (Windows) or `jmeter-server` (Mac/Linux) from bin directory
6. Wait for message: **"Created remote object endpoint"** → Server started successfully
7. **Note down the Slave's IP address** (shown in console or system settings)

### Step 2: Configure Master Machine

1. Navigate to JMeter's **bin directory** on the Master machine
2. Open `jmeter.properties` file
3. Find `server.rmi.ssl.disable` → set to **`true`** (same as Slave)
4. Find `remote_hosts` → replace `127.0.0.1` with **Slave's IP address**
   - For multiple slaves: `remote_hosts=192.168.1.10,192.168.1.11,192.168.1.12`
5. Save the file
6. Restart JMeter on the Master machine

### Step 3: Run Test on Slave(s)

1. Open JMeter on Master → Load your test plan (.jmx)
2. Go to **Run → Start Remote** → Select the Slave IP address
3. Test executes on the Slave machine (not on Master)
4. Slave console shows: "Starting test..." and later "Test completed"
5. Results appear back in Master's JMeter (View Results Tree, etc.)

---

## Key Configuration Details

### `jmeter.properties` Changes:

| Property | Default | Change To | Machine |
|----------|---------|-----------|---------|
| `server.rmi.ssl.disable` | `false` (commented) | `true` (uncommented) | Both Master & Slave |
| `remote_hosts` | `127.0.0.1` | Slave's IP address | Master only |

### Why Disable SSL?

- With SSL enabled: complex certificate configuration required for machine communication
- Disabling SSL simplifies the Master-Slave connection
- In real projects: SSL may be re-enabled with proper certificates

---

## Troubleshooting

### Common Issues:

| Problem | Cause | Solution |
|---------|-------|----------|
| Connection exception | Firewall/antivirus blocking | Disable firewall and antivirus |
| Cannot connect to slave | Different network/subnet | Connect both to same WiFi/network |
| Version mismatch error | Different JMeter versions | Install same version on both machines |
| Server won't start | SSL not disabled | Set `server.rmi.ssl.disable=true` |
| Test doesn't start on slave | Forgot to run jmeter-server | Start jmeter-server.bat on slave first |

### Tips:

- If test doesn't start after a few minutes → press Enter in Slave's terminal
- Port number not needed in `remote_hosts` (just IP address is sufficient)
- Slave's JMeter Server must be RUNNING before Master triggers the test

---

## Quick Revision — Section 14

1. **Distributed Mode** = Split load across multiple machines for accurate high-user testing
2. **Why needed** = Single machine can't handle 5000+ users; memory/CPU exhausted; wrong results
3. **Master** = Controls the test, sends commands, collects results
4. **Slave** = Executes the actual load on behalf of Master
5. **Architecture** = 5000 users ÷ 5 slaves = 1000 users each (all hit target simultaneously)
6. **Same JMeter version** = Mandatory on both Master and Slave machines
7. **Same network** = Both machines must be on same subnet/WiFi
8. **Slave setup** = Disable SSL in jmeter.properties → Run jmeter-server.bat → Note IP
9. **Master setup** = Disable SSL + Set remote_hosts = Slave's IP → Restart JMeter
10. **Run remotely** = Run → Start Remote → Select slave IP address
11. **Results** = Executed on Slave, displayed back on Master's JMeter
12. **Real-time use** = High-traffic websites (Amazon, Flipkart) on sale days
13. **Not always needed** = Only for very high user counts that exceed single machine capacity
14. **Firewall/Antivirus** = Must be disabled for successful connection between machines

---
---

# SECTION 15: Server Resource Monitoring (YourKit Java Profiler)

---

## Why Monitor Server Resources?

### Two Perspectives in Performance Testing:

| Perspective | What it Measures | Tools |
|-------------|-----------------|-------|
| **Application Performance** | Response time, throughput, error rate | JMeter Listeners (Aggregate Report, Graphs) |
| **Server Resource Performance** | CPU usage, memory/heap, garbage collection | YourKit Java Profiler, system monitors |

### The Concept:

- Every website runs on a **server** that handles all load
- When you hit a website → the server processes your request
- Server has limited CPU, RAM, heap memory
- If server resources are exhausted → application becomes slow
- **Application might be fast, but if your server resources are low → you see slowness**

### Two Monitoring Targets:

| Target | Meaning | Example |
|--------|---------|---------|
| **Host Server** | The server where the application is deployed | Google's servers, Amazon's servers |
| **Client Server** | Your machine that is generating the load | Your laptop running JMeter |

- Both need monitoring to understand complete performance picture
- Same monitoring parameters apply to both

---

## YourKit Java Profiler

### What is it?

- External tool for monitoring **Java-based application performance**
- Listens to all applications running on JVM (Java Virtual Machine)
- Shows: CPU usage, heap memory, non-heap memory, garbage collection, threads
- **Not included in JMeter** — separate download required

### Installation:

1. Download from YourKit website (choose your OS: Windows/Mac/Linux)
2. Install → located in Program Files (x86)
3. Navigate to `bin` folder → run the `.exe` file
4. Register with email → receive 15-day trial activation key
5. Paste activation key → tool opens

### What it Monitors:

- All applications running on **JVM** (Java Virtual Machine)
- JMeter runs on JVM → YourKit can monitor it
- Eclipse runs on JVM → YourKit can monitor it too
- Any Java application → visible in YourKit

---

## Key Server Metrics

### CPU Usage

- **Most important metric** for server monitoring
- Shows percentage of CPU being consumed
- < 50% = Good, normal operation
- 50-80% = Moderate, watch carefully
- \> 80% = **Critical** — system will become slow, scripts may show false failures
- Not available in JMeter's built-in listeners → need external tools

### Heap Memory

- **Dynamic memory** allocated by Java at runtime
- Objects created during execution stored in heap
- When task completes → Garbage Collector removes objects from heap
- If heap fills up → system slows down significantly
- Monitor: allocated vs. used (e.g., 500MB allocated, 65MB used = healthy)

### Non-Heap Memory

- **Static memory** — not dynamically created/destroyed
- Fixed allocations that persist throughout application lifecycle

### Garbage Collection

- Java's automatic memory cleanup process
- Removes unused objects from heap memory
- If garbage collection is too frequent → performance issue

---

## Using YourKit with JMeter

### Steps:

1. Open YourKit Java Profiler
2. See "Monitor Local Applications" section
3. **Apache JMeter** appears as a JVM process (ready to attach)
4. Click **"Attach to Application"** → connects to JMeter
5. Go to **"Performance Charts"** tab
6. Start your JMeter test script
7. Watch graphs change in real-time:
   - CPU usage rises from 0% to 40%+ during test execution
   - Heap memory increases as objects are created
   - Returns to normal after test completes

### Interpreting Results:

| CPU Usage | Status | Action |
|-----------|--------|--------|
| 0-40% | Normal | No concerns |
| 40-50% | Acceptable | Monitor closely |
| 50-80% | Warning | Investigate; possible optimization needed |
| 80%+ | Critical | System will be slow; report to team; possible code issue |

### Real-World Example:

- Running JMeter script → CPU jumps to 40% → Normal
- Eclipse with 2000 test scripts → CPU jumps to 50%+ → Expected (heavy IDE)
- Application causing 80%+ CPU → Report: "Possible dynamic object creation issue at runtime"

---

## [Important/Emphasized] Performance Testing = Application + Server

- Don't just test application response times
- Also monitor: How does the SERVER behave under load?
- Application may be fast, but if CPU is at 90% → users will experience slowness
- Client team needs BOTH reports:
  1. Application metrics (from JMeter Listeners)
  2. Server resource metrics (from YourKit or similar tools)

---

## Quick Revision — Section 15

1. **Server monitoring** = Track CPU, memory, heap alongside application performance metrics
2. **Two perspectives** = Host server (where app is deployed) + Client server (where load is generated)
3. **YourKit Java Profiler** = External tool for monitoring JVM-based applications
4. **CPU usage** = Most critical metric; >80% = system becomes slow
5. **Heap memory** = Dynamic memory; fills up during execution; freed by garbage collector
6. **Non-heap memory** = Static allocations that persist throughout lifecycle
7. **Garbage collection** = Java's auto-cleanup of unused objects from heap
8. **Attach to Application** = Must explicitly connect YourKit to JMeter's JVM process
9. **Performance Charts** = Shows real-time CPU, memory, threads as test runs
10. **< 50% CPU** = Healthy; **> 80% CPU** = Critical, report to team
11. **Not in JMeter** = CPU/heap monitoring requires external tools (YourKit, VisualVM, etc.)
12. **15-day trial** = YourKit offers free trial with email registration
13. **Real-time projects** = Monitor both app performance AND server resources for complete picture
14. **Eclipse example** = Heavy IDE consuming 50%+ CPU demonstrates why server monitoring matters
