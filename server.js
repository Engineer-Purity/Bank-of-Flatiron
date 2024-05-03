const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy requests to local server
app.use('/Bank-of-Flatiron', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Proxy server listening on port ${PORT}`);
});
