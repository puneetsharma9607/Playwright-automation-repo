## Playwright Automation Framework - SauceDemo

This repository contains an end-to-end test automation framework built using Playwright, Cucumber (BDD), and TypeScript, implemented against the SauceDemo
 application.

The framework follows BDD principles, Page Object Model (POM) design, and supports clean separation of concerns for maintainable and scalable test automation.


## Table of Contents

- [Tech Stack](tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Writing Tests](#writing-tests)
- [Reporting](#reporting)

## Tech Stack
1. Playwright – Browser automation
2. Cucumber – BDD framework
3. TypeScript – Type safety and scalability
4. Chai – Assertions
5. Node.js / npm – Dependency management


## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)
- Git

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/puneetsharma9607/Playwright-automation-repo.git
cd Playwright-automation-repo
npm install
```

## Configuration

1. Copy the example environment file:

```sh
cp .env.example .env
```

2. Update .env with valid credentials:
(.env is gitignored and should never be committed)

```json
{
  "STANDARD_USER": "STANDARD_USER=standard_user",
  "password": "your_password"
}
```

## Project Structure

```
features/         # Gherkin feature files
steps/            # Step definitions
pages/            # Page Object Model files
support/          # Hooks and custom world
data/             # Test data (credentials, etc.)
playwright.config.ts  # Playwright configuration
cucumber.js       # Cucumber configuratioj
```

---

## Usage

To run all tests:

```sh
npm run test
```

To run a specific feature:

```sh
npx cucumber-js features/login.feature
```

---

## Writing Tests

- Add new scenarios to `.feature` files in the `features/` folder.
- Implement step definitions in `steps/`.
- Use or extend page objects in `pages/`.

---

## Reporting

- Test results are shown in the terminal.
- To generate an HTML report, add a script in `package.json`:

```json
"scripts": {
  "report": "cucumber-js --format html:cucumber-report.html"
}
```

Then run:

```sh
npm run report
```

---

Highlights

- BDD with Cucumber & Gherkin
- Page Object Model implementation
- Playwright browser lifecycle managed via hooks
- Clean and scalable project structure
- Ready for CI/CD integration


Author

Puneet Sharma
QA Engineer | Manual + Automation Testing
[LinkedIn](https://www.linkedin.com/in/puneetsharmaa/)
