const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const asyncHandler = require('express-async-handler');

const ay = authMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    if (req?.headers?.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        try {
            console.log(token)
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                const user = await User.findById(decoded?.id)
                req.user = user;
                next();
            }
        } catch (error) {
            console.log("222222")
            throw new Error('Not Auth token expired, Please Login again')
        }
    } else {
        throw new Error('There is no token attached to header')
    }
})

const isAdmin = asyncHandler(async (req, res, next) => {
    const {email} = req.user;
    const adminUser = await User.findOne({email});
    if (adminUser.role !== "admin") {
        throw new Error('Yiu are not admin')
    }else {
        next();
    }
})
module.exports = {authMiddleware, isAdmin};