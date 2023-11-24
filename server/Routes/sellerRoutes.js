import express from 'express'
import protectAuth from '../Middleware/protectAuth.js'

const router = express.Router()

router.route('/seller/register').post(protectAuth)
router.route('/seller/:sellerID').get(protectAuth)

export default router