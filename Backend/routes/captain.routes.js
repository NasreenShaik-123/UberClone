const express= require('express');
const router= express.Router()
const {body}= require("express-validator")
const captainController= require('../controllers/captain.controller')
const authmiddelware= require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be atleast 6 characters'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be atleast 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be atleast 3 characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('capacity must be atleast 1 '),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("invalid vehicle type")
], captainController.registerCaptain,)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be atleast 6 characters'),
],captainController.loginCaptain)

router.get('/getProfile',authmiddelware.authCaptain,captainController.getCaptainProfile)
router.get('/logout',captainController.logoutCaptain)
module.exports = router;