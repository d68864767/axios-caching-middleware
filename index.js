// Import axios
const axios = require('axios');

// Import the caching middleware
const cachingMiddleware = require('./axios-caching-middleware');

// Apply the caching middleware to axios
axios.interceptors.request.use(cachingMiddleware);

// Export the configured axios instance
module.exports = axios;
