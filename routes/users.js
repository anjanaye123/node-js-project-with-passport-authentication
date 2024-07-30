const express = require('express');
const router = express.Router();
//login page
router.get('/login', (req,res) => res.render('login'));
//Register 
router.get('/register', (req,res) => res.render('register'));

//Register handle
router.post('/register', (req, res) => {
    const{ name, email, password,password2 } = req.body;
    let errors = [];
    if(!name || !email || !password || !password2) {
        errors.push({ msg: 'please fill all fields not to leave any fields'})
    }

    //check password match 
 if(password !== password2){
    errors.push({msg: 'passwords donot match please be careful'});

 }

 // check pass length
 if(password.lenght < 6){
    errors.push({ msg: 'password  should be atleast 6 character'});
 }

 if(errors.length > 0){
  res.render('register',{
    errors,
    name,
    email,
    password,
    password2
  });
 }else{
    res.send('pass');
 }
    

});

module.exports = router;
