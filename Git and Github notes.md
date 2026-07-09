The Ultimate Git Guide for Developers & Automation Testers
Deshmukhaniketpradip
Deshmukhaniketpradip
12 min read
·
Jun 10, 2026





Table of Contents
What is Git & Why It Matters
Git vs GitHub — The Core Distinction
Git Fundamentals — The Three States Workflow
Essential Local Commands (Everyday 80%)
Branching and Merging Mastery
Working with Remote Repositories (GitHub/GitLab)
Advanced Git — Undo, Recover, Rewrite History
Git for Automation Testing Engineers — Special Focus
8.1 Enforcing Quality with Git Hooks (Shift-Left Testing)
8.2 Test-Specific Branching Strategies
8.3 git bisect – Automated Bug Hunter
8.4 git cherry-pick – Selective Test Deployment
8.5 Managing Flaky Tests with git bisect --skip
8.6 Test Framework Versioning & CI/CD Integration
8.7 Protecting Tests with Git Attributes
8.8 Handling Large Test Data — Git LFS
8.9 .gitignore Patterns for Test Artifacts
8.10 Submodules for Shared Test Libraries
Best Practices & Professional Etiquette
Interview Prep — Git Questions for Test Automation Roles
Quick Revision Cheat Sheet (Poster-Ready)
1. What is Git & Why It Matters
Git is a Distributed Version Control System (DVCS). It tracks every change to your files, allows you to revert to any previous state, and enables seamless collaboration.

Why Git is the Industry Standard
✅ Collaboration — Many developers/testers work on the same project without overwriting.
✅ Safety — Full “time machine” capability; revert any mistake.
✅ Full history — Who changed what, when, and why (with commit messages).
✅ Branching & merging — Experiment in isolated branches, then merge safely.
Over 70% of developers use Git — it’s a non-negotiable skill for automation testers.

2. Git vs GitHub — The Core Distinction
🔹 Git
A distributed version control system
Runs locally on your computer
Installed as software (CLI or GUI tools)
Works completely offline (commit, branch, merge)
Tracks file changes and manages versions
Handles branching and merging of code
No built-in collaboration interface
Open-source tool created by Linus Torvalds
🔹 GitHub
A cloud-based hosting platform for Git repositories
Runs online (cloud servers)
Accessed via web browser, desktop apps, or Git commands
Requires internet for push, pull, and sync
Stores and backs up your repositories remotely
Adds collaboration features like:
Pull Requests (PRs)
Issues tracking
GitHub Actions (CI/CD)
Discussions
Helps teams collaborate and manage projects
Owned by Microsoft
🔑 Quick Difference
Git → Tool for version control
GitHub → Platform for collaboration using Git
Other Git hosts: GitLab, Bitbucket, Azure DevOps.

3. Git Fundamentals — The Three States Workflow
[Working Directory]   --git add-->   [Staging Area]   --git commit-->   [Repository (.git)]
      (Modified)                          (Staged)                           (Committed)
The Three States
🔹 Modified (Working Directory)
File is changed/edited
Git detects the change, but it is not saved in version history yet
Exists in your working directory
Example: You edit code in a file but haven’t staged it
🔹 Staged (Staging Area / Index)
File is marked to be included in the next commit
Changes are prepared and ready for versioning
Stored in the staging area (index)
Done using:
Shell
git add <file>
🔹 Committed (Repository / .git folder)
Changes are permanently saved in Git history
A snapshot of your project is created
Stored inside the .git repository
Done using:
Shell
git commit -m “message”
🔑 Simple Flow to Remember
Modified → Staged → Committed
👉 Edit → Add → Save permanently
The Four File Statuses
Untracked — Git sees the file but never tracked it (e.g., new file).
Tracked — Already added/committed; can be modified, staged, or unmodified.
Ignored — Listed in .gitignore – Git completely ignores it.
Staged — Added to staging area, ready for commit.
4. Essential Local Commands (Everyday 80%)
Configuration (first time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main   # Use 'main' instead of 'master'
Starting a Repository
git init                # Initialize empty repo in current folder
The Core Cycle
git status              # What’s changed? What’s staged?
git add <file>          # Stage a specific file
git add .               # Stage all changes in current directory
git add -p              # Interactively stage only parts of a file
git commit -m "feat: add login test"
git commit -am "fix: correct timeout"   # Stage & commit all tracked files (skip add)
Viewing History
git log                         # Full history
git log --oneline               # One line per commit (hash + message)
git log --oneline --graph       # Beautiful ASCII branch graph
git log -p                      # Show actual code changes (diff)
git diff                        # Unstaged changes
git diff --staged               # Staged changes (what will be committed)
5. Branching and Merging Mastery
What is a Branch?
A branch is a lightweight movable pointer to a commit. It lets you work on different features/tests in isolation.

Local Branch Commands
# List all local branches (current branch marked with *)
git branch

# Create a new branch (stay on current branch)
git branch <branch-name>

# Switch to an existing branch
git checkout <branch-name>

# Create and switch to a new branch
git checkout -b <branch-name>

# Delete a branch (only if merged)
git branch -d <branch-name>

# Force delete a branch (even if unmerged) ⚠️
git branch -D <branch-name>

Merging
git checkout main              # Switch to target branch
git merge feature/add-tests    # Merge feature branch into main
Merge vs Rebase (Two Integration Strategies)
# MERGE vs REBASE

# 🔹 MERGE
# — Combines branches by creating a new merge commit
# — Preserves the exact history (true timeline)
# — Results in a non-linear history (branching graph)
# — Safe and recommended for shared/public branches

git merge <branch>
git merge — no-ff <branch> # Always create a merge commit (even if fast-forward is possible)

# 🔹 REBASE
# — Moves (replays) your commits on top of another branch
# — No merge commit → cleaner, linear history
# — Changes commit hashes (rewrites history)
# — Risky for shared/public branches

git rebase main # Rebase current branch onto main

# 🔑 RULE OF THUMB
# — ✅ Rebase: for private feature branches (before merging)
# — ✅ Merge: for integrating into shared branches (like main)
# — ❌ Never rebase branches that others are using

# 🧠 SIMPLE MEMORY TIP
# Merge → “Combine history, keep everything”
# Rebase → “Clean history, rewrite commits”

6. Working with Remote Repositories (GitHub/GitLab)
Cloning (Get a copy from remote)
git clone <repo-url>                # Clone into folder named after repo
git clone <repo-url> my-folder      # Clone into a custom folder
Connecting Local to Remote
git remote add origin <repo-url>    # Add remote named 'origin'
git remote -v                       # List all remotes with URLs
Fetch, Pull, Push
git fetch origin                    # Download new data but do NOT merge
git pull origin main                # Fetch + merge into current branch
git pull --rebase                   # Fetch + rebase (cleaner)
git push -u origin main             # First push, set upstream
git push                            # Subsequent pushes
git push origin <branch-name>       # Push a specific branch
Important: Always git pull (or git pull --rebase) before pushing to avoid conflicts.

7. Advanced Git — Undo, Recover, Rewrite History
Undoing Changes (Local Only — Safe for Private Work)
✅ git revert HEAD

What it does:
Creates a new commit that undoes the last commit.

When to use:
On public/shared branches

Safest option (does not rewrite history)

✅ git reset --soft HEAD~1

What it does:
Removes the last commit
Keeps changes staged

When to use:
Want to re-commit with a different message
Want to adjust commit contents before recommitting

✅ git reset --mixed HEAD~1 (default)

What it does:
Removes the last commit
Keeps changes unstaged

When to use:

You want to rework or modify changes

Default reset behavior

✅ git reset --hard HEAD~1

What it does:

Deletes the last commit

Deletes all associated changes

⚠️ Warning:

This is destructive

Changes are lost permanently

When to use:

Only on local, unshared branches

✅ git commit --amend -m "new message"

What it does:
Replaces the last commit with a new one.

When to use:
Fix a commit message typo
Add a forgotten file to the last commit

💡 Quick Summary

Safe on shared repo → git revert
Edit last commit → --amend
Undo but keep changes → reset --soft / --mixed
Delete everything → reset --hard

Stashing — Temporary Shelf
git stash                  # Save uncommitted changes
git stash list             # View stashes
git stash pop              # Apply latest stash and remove it
git stash apply            # Apply but keep in stash list
git stash drop stash@{1}   # Delete a specific stash
Recovering Lost Commits (Git Reflog)
git reflog                 # Show all movements of HEAD
git reset --hard <commit-hash>  # Recover a lost commit (if you know its hash)
8. Git for Automation Testing Engineers — Special Focus
This section makes you a Git power user in QA/automation roles.

8.1 Enforcing Quality with Git Hooks (Shift-Left Testing)
Git hooks are scripts that run automatically at certain Git events. Place them in .git/hooks/ (remove .sample extension).

Write on Medium
HookWhen it runsTypical use for testerspre-commitBefore a commit is createdLint test code, check for secrets (e.g., hardcoded passwords), enforce formattingpre-pushBefore git pushRun unit/integration tests – block push if tests failcommit-msgAfter user enters commit messageValidate commit message format (Conventional Commits)post-checkoutAfter git checkoutAuto-install dependencies, set up env vars for test framework

Example pre-push script (simplified):

#!/bin/bash
echo "Running tests before push..."
pytest tests/ --maxfail=1
if [ $? -ne 0 ]; then
    echo "Tests failed. Push aborted."
    exit 1
fi
For team-wide hooks, use tools like pre-commit (Python) or husky (Node.js) to share hooks via the repository.

8.2 Test-Specific Branching Strategies
main → Stable, production-ready tests (always passing)
qa / test → QA environment, tests under validation
feature/* → New test cases, refactoring, test data updates
hotfix/* → Urgent fixes for broken tests in main
v1, v2 → Long-lived branches for different framework versions
✅ Keep main clean, use feature/* for work, and validate via qa before merging.

Recommended workflow for testers:

Create feature/TC-123-login-test from main.
Write/update tests, commit.
Push and create Pull Request (PR).
PR triggers CI to run tests automatically.
After review and CI passes, merge into main.
(Optional) Merge main into qa branch for deployment to QA environment.
8.3 git bisect – Automated Bug Hunter
git bisect performs a binary search to find the exact commit that introduced a bug. With a test script, it’s fully automatic.

Manual bisect:

git bisect start
git bisect bad                 # Current commit is broken
git bisect good v1.0           # Known good commit
# Git checks out a middle commit; you test, then mark:
git bisect good   # or
git bisect bad
# Repeat until Git identifies the first bad commit.
git bisect reset               # End bisect session
Automated bisect (powerful for testers):

git bisect start
git bisect bad
git bisect good v1.0
git bisect run pytest tests/test_bug.py   # Run your test script
Git will automatically check commits, run the test, and output the faulty commit.

8.4 git cherry-pick – Selective Test Deployment
Apply a specific commit from one branch to another without merging the whole branch.

git checkout qa
git cherry-pick <commit-hash>   # Bring just that test fix into qa
Use case: A critical test fix is needed on the release branch, but develop contains unstable tests – cherry-pick only the fix.

8.5 Managing Flaky Tests with git bisect --skip
If a test is flaky (sometimes passes, sometimes fails), git bisect can get confused. Use --skip:

git bisect start
git bisect bad
git bisect good v1.0
git bisect run --skip pytest tests/flaky_test.py
This tells Git to skip commits where the test result is ambiguous.

For tests whose flakiness increases over time, consider git bayesect (a Bayesian extension) to find the commit where flakiness was introduced.

8.6 Test Framework Versioning & CI/CD Integration
Use Git tags to version your test framework:

git tag -a v1.2.3 -m "Release test suite with new login flows"
git push origin v1.2.3
Automate versioning with semantic-release or GitVersion based on commit messages (Conventional Commits).

CI/CD integration (GitHub Actions example):

yaml

name: Run Tests on Push
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pip install -r requirements.txt
      - run: pytest tests/
8.7 Protecting Tests with Git Attributes
Create a .gitattributes file to define merge strategies for specific files. For example, to keep test-results.xml from the main branch during merges:

test-results.xml merge=ours
This prevents painful merge conflicts in generated test output files.

8.8 Handling Large Test Data — Git LFS
Git Large File Storage (LFS) replaces large files (test data, binaries, videos) with text pointers. Install Git LFS, then:

git lfs track "*.iso" "test-data/*.csv"
git add .gitattributes
git commit -m "track large test files with LFS"
Best for: Test data sets (>50MB), recorded UI test videos, browser binaries.

8.9 .gitignore Patterns for Test Artifacts
Always ignore generated files, secrets, and local configs.
gitignore

# Test artifacts
*.log
*.xml
*.trx
test-reports/
allure-results/
playwright-report/
# Secrets
.env
secrets.yml
*.pem
# Dependency caches
node_modules/
__pycache__/
*.pyc
# IDE files
.vscode/
.idea/
8.10 Submodules for Shared Test Libraries
If you have a common test utility repo used by multiple projects, add it as a submodule.

git submodule add https://github.com/your-org/common-test-lib.git libs/common
git submodule update --init --recursive   # Clone submodules after cloning parent
Note: Submodules stay at a specific commit; remember to update them when needed.

9. Best Practices & Professional Etiquette
Commit Messages (Conventional Commits)
<type>(<scope>): <short summary>
[optional body]
[optional footer(s)]
Types for testers: test (add/update test), fix (fix broken test), refactor (improve test code), chore (update dependencies), docs (test documentation)

Example:

test(login): add negative test cases for empty password
- Add 5 new scenarios using parameterization
- Update fixture to handle empty field validation
Closes #412
Branch Naming Conventions
Feature: feature/JIRA-123-login-tests
Bugfix: fix/broken-checkout-flow
Hotfix: hotfix/urgent-test-failure
Chore: chore/update-selenium-version
Pull Request Best Practices for Testers
Run tests locally before pushing.
Keep PRs small (1–5 test cases).
Include screenshots or logs for UI tests.
Request review from automation lead and at least one developer.
Use PR templates to standardize descriptions.
Do’s and Don’ts
✅ Do’s
Commit often, making small and logical changes
Write meaningful commit messages (avoid vague messages like “fix”, “update”, “test”)
Pull before pushing to stay up to date with the remote repository
Use .gitignore to exclude secrets and unnecessary files
Rebase private feature branches for a cleaner commit history
❌ Don’ts
Don’t commit large, unrelated changes together
Don’t use vague commit messages like “fix”, “test”, or “update” without context
Don’t force push to shared branches without proper communication
Don’t store passwords or API keys in Git
Don’t rebase main or shared branches
10. Interview Prep — Git Questions for Test Automation Roles
Conceptual Questions
What is the difference between git pull and git fetch?
fetch only downloads; pull downloads and merges.
Explain git reset --soft, --mixed, --hard.
--soft moves HEAD but keeps changes staged; --mixed keeps changes unstaged; --hard discards changes entirely.
What is a “detached HEAD” state?
You have checked out a specific commit (not a branch). New commits will not belong to any branch unless you create one.
How would you undo a public commit that broke the CI pipeline?
Use git revert <commit-hash> – it creates a new commit that undoes the changes safely.
What is git bisect and how can a tester use it?
A binary search tool to find the commit that introduced a bug. Testers can automate it with a test script.
Scenario-Based Questions (Test Automation Focus)
Q1: You accidentally committed a configuration file containing a test environment API key. What do you do?

Immediately revoke the key.
Use git reset --soft HEAD~1 to undo the commit, keep the file.
Add the file to .gitignore.
Recommit without the key.
Force push with git push --force-with-lease to overwrite remote history.
Notify the team to re-clone.
Q2: Your test suite takes 30 minutes to run. How do you avoid blocking developers during git push?

Use pre-push hook only for fast smoke tests (<2 min).
Run full suite in CI/CD triggered by push (not blocking the push).
Use parallel test execution and caching.
Q3: A flaky test fails nondeterministically. How do you find the real culprit commit?

Use git bisect run --skip <test-script> to skip ambiguous results.
Or isolate the test and run many times per commit (custom script).
Q4: Your team wants to share a common test data generation library across 5 microservice repos. How do you manage it with Git?

Create a separate repository for the library.
Use git submodule to include it in each service repo.
Or use a package manager (npm, pip) and version with tags.
11. Quick Revision Cheat Sheet (Poster-Ready)
🔧 Setup & Config
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
🚀 Start & Clone
git init
git clone <url>
git remote add origin <url>
📝 Daily Cycle (the 90%)
git status
git add .
git commit -m "test: add new TC-101"
git pull --rebase
git push
🌿 Branching
git checkout -b feature/my-tests
git branch
git checkout main
git merge feature/my-tests
git branch -d feature/my-tests
⏪ Undo & Fix
git revert <commit>       # Safe undo (public)
git reset --soft HEAD~1   # Uncommit, keep changes
git reset --hard HEAD~1   # 💀 DELETE last commit
git stash && git stash pop
git commit --amend -m "new msg"
🔎 Debug & Search
git log --oneline --graph
git diff
git blame <file>
git bisect start && git bisect run pytest test.py
🧪 Tester-Specific
git cherry-pick <hash>              # Apply test fix to another branch
git tag v1.0.0                      # Version test framework
git lfs track "*.csv"               # Track large test data
git submodule add <url> libs/common # Share test utilities
📁 .gitignore Minimum for Testers
*.log
*.xml
test-reports/
.env
__pycache__/
node_modules/
Final Word
This guide transforms you from a casual Git user into a testing-focused Git power user. By applying hooks, bisect, cherry-pick, and proper branching, you will:

Catch bugs earlier (shift-left)
Debug flaky tests scientifically
Collaborate cleanly with developers
Automate your quality gates
Remember: Git is your ally, not a burden. Practice these commands daily, and they will become second nature.

“Version control is the foundation of team-based quality assurance.” — Anonymous Test Architect

Now go forth and git commit with confidence! 🚀