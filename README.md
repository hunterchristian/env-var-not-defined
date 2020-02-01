# env-var-not-defined
If an environment variable is not defined on `process.env`, exits the process with an error message
## Install
`npm i @hunterhod/env-var-not-defined`
## Usage
```
const getEnvVarIfDefined = require('@hunterhod/env-var-not-defined');
const YOUR_ENVIRONMENT_VARIABLE = getEnvVarIfDefined('YOUR_ENVIRONMENT_VARIABLE');

// ...some code that uses YOUR_ENVIRONMENT_VARIABLE
```
