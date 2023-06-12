const httpError = (status, message) => {
  console.log("Oops!");
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = httpError;
