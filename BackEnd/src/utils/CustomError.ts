export default class CustomError extends Error {
  public type: string;

  constructor(message: string, type: string) {
    super(message);
    this.type = type;
  }
}
