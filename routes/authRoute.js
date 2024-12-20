const express = require('express')
const {
    createUser,
    loginUserController,
    getAllUser,
    getAUser,
    getAUserByEmail,
    deleteAUser,
    updateAUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    createOrder,
    getOrders,
    getCompare,
    getCart,
} = require("../controller/userController");
const {authMiddleware, isAdmin} = require("../midddlewares/authMiddleware");
const router = express.Router();

router.delete('/empty-cart',authMiddleware, emptyCart)
router.post('/register', createUser)
router.post('/cart/cash-order',authMiddleware, createOrder)
router.post('/forgot-password-token', forgotPasswordToken)
router.post('/cart',authMiddleware, userCart)
router.get('/get-orders',authMiddleware, getOrders)
router.put('/reset-password/:token', resetPassword)
router.put('/password', authMiddleware, updatePassword)
router.post('/login', loginUserController)
router.get('/all-users',authMiddleware, isAdmin, getAllUser)
router.get('/refresh', handleRefreshToken)
router.get('/wishlist',authMiddleware, getWishlist)
router.get('/compare',authMiddleware, getCompare)
router.get('/cart',authMiddleware, getCart)
router.get('/logout', logout)
router.get('/:id', authMiddleware, isAdmin, getAUser)
router.get('/get-by-email/:email', getAUserByEmail)
router.delete('/:id', deleteAUser)
router.put('/edit-user', authMiddleware, updateAUser)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser)
router.put('/save-address', authMiddleware,  saveAddress)
module.exports = router;