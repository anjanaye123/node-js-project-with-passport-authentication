// const express = require('express');
// const router = express.Router();

// // router.get('/', (req,res) => res.render('welcome'));
// // module.exports = router;
// router.get('/',(req,res)=>res.render('welcome'));

// module.exports = router;

// In your index.js route file
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Route hit: /');
    res.render('welcome');
});

module.exports = router;
