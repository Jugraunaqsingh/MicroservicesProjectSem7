const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  
  const MODE = process.env.MODE || 'standalone';
  const errorResponse = {
    error: err.message || 'Internal server error',
    metadata: {
      version: 'v2',
      mode: MODE,
      service: 'customer-service'
    }
  };
  
  res.status(err.status || 500).json(errorResponse);
};

module.exports = errorHandler;

