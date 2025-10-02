## Playwright Automation - SauceDemo

Automated end-to-end tests for [SauceDemo](https://www.saucedemo.com/) using Playwright and Cucumber (BDD).


## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Writing Tests](#writing-tests)
- [Reporting](#reporting)

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)

## Installation

```sh
git clone https://github.com/puneetsharma9607/Playwright-automation-repo.git
cd Playwright-automation-repo
npm install
```

## Configuration

- Copy `.env.example` to `.env` and update as needed.
- Add your credentials to `data/credentials.json` (this file is gitignored):

```json
{
  "username": "your_username",
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