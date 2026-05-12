module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['steps/**/*.ts', 'support/**/*.ts'],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],
    paths: ['features/**/*.feature'],
    publishQuiet: true
  }
};
