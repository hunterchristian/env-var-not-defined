# env-var-not-defined
If an environment variable is not defined (i.e. process.env.MY_ENV_VAR is undefined), exits the process with an error message
## Install
`npm i @hunterhod/env-var-not-defined`
## Usage
```
const getEnvVarIfDefined = require('@hunterhod/env-var-not-defined');
const YOUR_ENVIRONMENT_VARIABLE = getEnvVarIfDefined('YOUR_ENVIRONMENT_VARIABLE');
```
