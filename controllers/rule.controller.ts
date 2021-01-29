import RuleClass from "../classes/Rule.class"
class RuleController
{

    async fetch(req: any, res: any)
    {
        return new RuleClass().fetchDetails(req,res);
     }

//     async createWishlist(req:any,res:any)
//     {
//         return new WishlistClass().createWishList(req,res);
//     }

//     async editWishList(req:any,res:any)
//     {
//         return new WishlistClass().editWishList(req,res);
//     }

//     async deleteWishlist(req:any,res:any)
//     {
//         return new WishlistClass().deleteWishlist(req,res);
//     }
//     async fetchWishlists(req:any,res:any)
//      {
//             return new WishlistClass().fetchWishlists(req,res);
//     }
//     async addWishlistService(req:any,res:any)
//     {
//         return new Services().addServiceTowishList(req,res);
//     }

//     // async addWishlistServiceX(req:any,res:any)
//     // {
//     //     return new Services().addServiceTowishListX(req,res);
//     // }

//     async removeServiceFromWishList(req:any,res:any)
//     {
//         return new Services().removeServiceFromWishList(req,res);

//     }
//     async fetchWishlistServices(req:any,res:any)
//     {
//         return new WishlistClass().fetchWishlistServices(req,res);
//     }

//     async fetchPublicWishlist(req:any,res:any)
//     {
//         return new WishlistClass().fetchPublicWishlist(req,res);

//     }

//     async searchWishlist(req:any,res:any)
//     {
//         return new WishlistClass().searchWishlist(req,res);

//     }
//     async closeWishlist
//     (req:any,res:any)
//     {
//         return new WishlistClass().closeWishlist(req,res);

//     }

//     async claimServiceFromWishList
//     (req:any,res:any)
//     {
//         return new Services().claimServiceFromWishList(req,res);

//     }

//     async fetchMyClaimedWishes(req:any,res:any)
//     {
//         return new Services().fetchMyClaimedWishes(req,res);

//     }
}

export default RuleController