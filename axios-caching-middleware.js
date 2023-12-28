// Import the necessary modules
const axios = require('axios');
const NodeCache = require('node-cache');
const myCache = new NodeCache();

// Define the caching middleware
const cachingMiddleware = async (config) => {
  // Generate a unique key for each request
  const key = JSON.stringify(config);

  // Check if the response for this request is in cache
  const cachedResponse = myCache.get(key);

  if (cachedResponse) {
    // If it is, resolve the promise with the cached response
    return Promise.resolve(cachedResponse);
  } else {
    // If it's not, make the request
    const response = await axios(config);

    // Then store the response in cache
    myCache.set(key, response);

    // And resolve the promise with the response
    return Promise.resolve(response);
  }
};

// Export the caching middleware
module.exports = cachingMiddleware;
