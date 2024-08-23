const express = require("express");
const checkAllServices = require("./utils/helper");
const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");
const { lowRateLimit, highRateLimit } = require('./middlewares/rateLimiter')
const { PORT, AUTH_SERVICE_URL, SEARCH_SERVICE_URL, BOOK_SERVICE_URL } = require("./config/constants");

const app = express();

app.use(morgan("dev"));
app.use(
  "/auth",
  highRateLimit,
  createProxyMiddleware({
    target: `${AUTH_SERVICE_URL}/auth`,
    changeOrigin: true,
  })
);
app.use(
  "/search",
  lowRateLimit,
  createProxyMiddleware({
    target: `${SEARCH_SERVICE_URL}/search`,
    changeOrigin: true,
  })
);
app.use(
    "/book",
    lowRateLimit,
    createProxyMiddleware({
      target: `${BOOK_SERVICE_URL}/book`,
      changeOrigin: true,
    })
  );

app.get("/ping", (req, res) => {
  res.status(200).json({ name: "API Gateway Service", status: "up" });
});

app.listen(PORT, async () => {
  console.log("Checking if all services are running...");
  checkAllServices();
});
