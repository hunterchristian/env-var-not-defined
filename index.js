class EnvVarNotDefined extends Error {
  constructor(envVar) {
    super(`environment variable must be defined: ${ envVar }`);
    Error.captureStackTrace(this, EnvVarNotDefined);
  }
}

module.exports = (envVar) => {
  const MAYBE_ENV_VAR = process.env[envVar];
  if (!MAYBE_ENV_VAR) {
    throw new EnvVarNotDefined(envVar);
  }

  return MAYBE_ENV_VAR;
}
