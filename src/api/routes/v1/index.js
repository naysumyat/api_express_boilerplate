const express = require('express');
const employeeRoutes = require('./employee.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

/**
 * Application Routes
 */
router.use('/api/', employeeRoutes);


module.exports = router;
