export class InvalidParameterException extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "InvalidParameterException";

    // Para manter a stack trace correta em V8 (Chrome, Node.js)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidParameterException);
    }
  }
}
