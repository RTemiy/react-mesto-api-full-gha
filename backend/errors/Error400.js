module.exports = class Error400 extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
};
