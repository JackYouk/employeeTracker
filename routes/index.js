const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

app.use('/api', apiRoutes);

module.exports = router;