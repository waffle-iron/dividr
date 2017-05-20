[![codecov](https://codecov.io/gh/Ashenmaster/dividr/branch/develop/graph/badge.svg)](https://codecov.io/gh/Ashenmaster/dividr)

[![CircleCI](https://circleci.com/gh/Ashenmaster/dividr.svg?style=svg)](https://circleci.com/gh/Ashenmaster/dividr)

Dividr
---
An app for working out portion sizes for meals

**To run locally**

- Clone the repository
- Run `npm Install`
- Ensuring you have mongodb running locally create a file in config called `config.json`
- In `config.json` add the following:

	- `{
  "test" : {
    "PORT": 3001,
    "MONGODB_URI" : URL of your locally running mongo instance,
    "SESSION_SECRET" : ADD_A_SECRET_TOKEN_HERE
  },
  "development" : {
    "PORT": 3000,
    "MONGODB_URI" : URL of your locally running mongo instance,
    "SESSION_SECRET" : ADD_A_SECRET_TOKEN_HERE
  }
}`
- Run `npm start`

Run Tests
---
Run `npm test`, to watch for changes run `npm test-watch`

To generate test coverage reports
---
Run `npm report-coverage`
