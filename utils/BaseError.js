class BaseError extends Error {
  constructor(name, statusCode, message) {
    super(message);

    // Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode || 400;

    this.stack = new Error().stack;
    Error.captureStackTrace(this);
  }
}

module.exports = BaseError;
