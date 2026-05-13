# Playwright Automation Framework - SauceDemo

This repository contains an end-to-end automation framework for [SauceDemo](https://www.saucedemo.com/) using:
- Playwright
- Cucumber (BDD)
- TypeScript
- Page Object Model

The current test coverage includes:
- Login validations
- Product listing and cart validations
- Full checkout flow from cart to order confirmation

## Prerequisites

- Node.js v16+ installed
- npm installed
- Git

## Installation

```sh
git clone <repo-url>
cd playwright-automation-demo
npm install
```

## Configuration

Create a `.env` file in the project root and set the required credentials:

```sh
cp .env.example .env
```

Update `.env` with values such as:

```env
BASE_URL=https://www.saucedemo.com
STANDARD_USER=standard_user
PASSWORD=secret_sauce
INVALID_USER=locked_out_user
INVALID_PASSWORD=wrong_password
```

> The `.env` file is not committed.

## Project Structure

- `features/` — Gherkin `.feature` files
- `steps/` — Cucumber step definitions
- `pages/` — Page objects
- `support/` — hooks and custom world setup
- `reports/` — generated test reports
- `cucumber.js` — Cucumber configuration
- `playwright.config.ts` — Playwright configuration

## Usage

Run all tests:

```sh
npm run test
```

Run a specific feature:

```sh
npx cucumber-js features/checkout/checkout.feature
```

## Reporting

Generate the HTML report and open it automatically:

```sh
npm run test:report
```

This runs tests, generates an HTML report at `reports/html-report/index.html`, and opens it in the browser.

Individual report commands:

```sh
npm run test:html
npm run open:report
```

## Checkout Flow

The checkout workflow is implemented in `features/checkout/checkout.feature` and covers:
1. Add product to cart
2. Navigate to cart
3. Verify selected product in cart
4. Proceed to checkout
5. Enter customer details
6. Continue to payment overview
7. Finish order
8. Verify success message

## Writing Tests

- Add scenarios in `features/`
- Map steps in `steps/`
- Use page objects in `pages/`
- Keep step definitions reusable and page logic isolated

## Notes

- The project uses Cucumber configuration from `cucumber.js`
- Playwright browser lifecycle is managed through `support/world.ts`
- Checkout flow uses `CartPage`, `CheckoutPage1`, and `CheckoutPage2`

---

Author: Puneet Sharma
