const express = require('express');
const router = express.Router();
import RuleController from '../controllers/rule.controller';
// import WishlistPolicies from "../policies/wishlist.policies";
// router
// .route('/create')
// .post([new WishlistPolicies().validateCreateWishlist],new WishlistController().createWishlist);


router
.route('')
.get(new RuleController().fetch);


// router
// .route('/:wishlist/create-wishlist-service')
// .post([new WishlistPolicies().validateAddServiceToWishlist],new WishlistController().addWishlistService);



export default router;
 