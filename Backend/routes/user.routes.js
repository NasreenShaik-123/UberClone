const express= require('express')
const router= express.Router();
const {body}= require("express-validator")
const userController= require('../controllers/user.controller')
const authmiddelware= require('../middlewares/auth.middleware')


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be atleast 6 characters')
],userController.registerUser)
router.post('/login', userController.loginUser)
router.get('/profile',authmiddelware.authUser,userController.getUserProfile)
router.get('/logout',authmiddelware.authUser,userController.logoutUser)
module.exports = router;