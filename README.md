# axios-caching-middleware

A middleware for axios that provides caching functionality.

## Installation

```bash
npm install axios-caching-middleware
```

## Usage

```javascript
// Import axios
const axios = require('axios');

// Import the caching middleware
const cachingMiddleware = require('axios-caching-middleware');

// Apply the caching middleware to axios
axios.interceptors.request.use(cachingMiddleware);

// Now you can use axios as usual
axios.get('https://api.example.com/data')
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

## Testing

This package uses Jest for testing. Run the tests with:

```bash
npm test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/axios-caching-middleware](https://github.com/yourusername/axios-caching-middleware)

## Acknowledgements

* [Axios](https://github.com/axios/axios)
* [NodeCache](https://www.npmjs.com/package/node-cache)
