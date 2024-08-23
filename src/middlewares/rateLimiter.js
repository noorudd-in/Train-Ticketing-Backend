const rateLimit = require('express-rate-limit');

const highRateLimit = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 2, // 40 request in 2 minutes i.e. 1 req/3 sec
  handler: (req, res) => {
    res.status(429).json({
      data: null,
      message: 'Too many requests, please try again later.',
      success: false,
      error: 'Rate limited.'
    });
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const lowRateLimit = rateLimit({
    windowMs: 2 * 60 * 1000, // 2 minutes
    max: 120, // 120 request in 2 minutes i.e. 1 req/sec
    handler: (req, res) => {
      res.status(429).json({
        data: null,
        message: 'Too many requests, please try again later.',
        success: false,
        error: 'Rate limited.'
      });
    },
    standardHeaders: true,
    legacyHeaders: false,
  });

module.exports = { highRateLimit, lowRateLimit };