class ElementNotFound extends Error {
  constructor(envVar) {
    super(`environment variable must be defined: ${ envVar }`);
    Error.captureStackTrace(this, ElementNotFound);
  }
}

module.exports = (envVar) => {
  const MAYBE_ENV_VAR = process.env[envVar];
  if (!MAYBE_ENV_VAR) {
    throw new ElementNotFound(envVar);
  }

  return MAYBE_ENV_VAR;
}
