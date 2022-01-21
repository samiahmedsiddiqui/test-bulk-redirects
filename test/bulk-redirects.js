const checkHttpStatus = require('check-http-status');

checkHttpStatus({
  'urls': [
    "https://www.yasglobal.com",
  ],
  'export': {
    'format': 'xlsx',
    /*
     * Report gets saved at the root of the project (Change the location
     * If you like to).
     */
    'location': './',
  },
  'options': {
    // ADD HTTP AUTH credentails if required otherwise remove it or leave it empty.
    'auth': {
      'password': 'ADD HTTP AUTH PASSWORD',
      'username': 'ADD HTTP AUTH USERNAME'
    }
  }
});
