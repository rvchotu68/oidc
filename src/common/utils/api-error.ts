class APIError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(statusCode: string, msg: string) {
    super(msg);
    this.statusCode = Number(statusCode);
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default APIError;
