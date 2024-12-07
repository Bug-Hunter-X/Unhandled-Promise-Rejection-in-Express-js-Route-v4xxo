# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Node.js Express.js applications: improper error handling within asynchronous route handlers.  The `bug.js` file shows an example of an Express.js route that performs an asynchronous operation.  If the asynchronous operation fails, the error is logged to the console, but no error response is sent back to the client. This can lead to unexpected behavior and difficult debugging.

The `bugSolution.js` file provides a corrected version with proper error handling.  It demonstrates how to catch errors and send appropriate error responses to the client using Express.js's response object.

## How to Reproduce

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to start the server with the buggy code. 
5. Make requests to the `/` route.  Notice that when an error occurs, the server does not respond with an error to the client.  Only a console message appears on the server-side.
6.  Run `node bugSolution.js` to start the server with the corrected code.
7. Make requests to the `/` route. The server now handles errors gracefully, sending appropriate error responses to the client.