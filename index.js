// index.js
const express = require('express');
const app = express();

// Endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server only if run directly
if (require.main === module) {
  app.listen(3000, () => console.log('App listening on port 3000'));
}

// Export app for testing
module.exports = app;

// If running tests, include them here
if (process.env.JEST_WORKER_ID !== undefined) {
  const request = require('supertest');

  describe('GET /', () => {
    it('responds with Hello World', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('Hello World');
    });
  });
}
