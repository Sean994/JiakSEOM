const errorHandler = async (err, req, res, next) => {
  console.log(`❌ ${err.statusCode}`);

  const { statusCode, name, message } = err;

  res.status(statusCode).json({
    name,
    message,
    statusCode,
  });
};

module.exports = errorHandler;
