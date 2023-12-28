// Import the necessary modules
const axios = require('./index');
const assert = require('assert');

// Define the test suite
describe('Axios Caching Middleware', () => {
  // Define a test for the caching functionality
  it('should cache GET requests', async () => {
    // Make a GET request
    const firstResponse = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    // Make the same GET request again
    const secondResponse = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    // Assert that the two responses are equal
    assert.deepStrictEqual(firstResponse, secondResponse);
  });

  // Define a test for the cache invalidation functionality
  it('should not cache POST requests', async () => {
    // Make a POST request
    const firstResponse = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    });

    // Make the same POST request again
    const secondResponse = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    });

    // Assert that the two responses are not equal
    assert.notDeepStrictEqual(firstResponse, secondResponse);
  });
});
