const router = require('express').Router();
const trackerRoutes = require('./trackerRoutes');

app.use('/tracker', trackerRoutes);


module.exports = router;