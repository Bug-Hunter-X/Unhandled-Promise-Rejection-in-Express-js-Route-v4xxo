const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    console.error('Error:', error); // Log the error
    // MISSING: Proper error handling for the response
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.5; // 50% chance of failure
      if (shouldFail) {
        reject(new Error('Simulated asynchronous error'));
      } else {
        resolve();
      }
    }, 1000);
  });
}