## Playwright Automation Framework - SauceDemo

This project contains an end-to-end test automation framework built using Playwright, Cucumber (BDD), and TypeScript, implemented against the [SauceDemo
 application](https://www.saucedemo.com/)

The goal of this project is to demonstrate:

1. Different user login scenarios and validations
2. Add to cart and product list validations
3. End to End order flow


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

This project uses a .env file to store environment values like username and password.

Step 1: Create .env file
```sh
cp .env.example .env
```
Step 2: Add credentials in .env
USERNAME=your_username
PASSWORD=your_password

Note:

- .env file is gitignored and not committed to the repository.
- For SauceDemo, the valid usernames and password are publicly available on the landing page of saucedemo.com.
- You can directly copy the credentials displayed there and use them in your .env file.

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
