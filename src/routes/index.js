const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./views/index.html', { title: 'first webcite' });
});
router.get('/contact', (req, res) => {
    res.render('./views/contact.html', { title: 'contact page' });
});
module.exports = router