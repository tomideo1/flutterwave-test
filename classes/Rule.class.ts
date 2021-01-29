// import Wishlist from "../models/Wishlist";
import _ from "lodash";
// import WishlistServices from "../models/WishlistServices";
// import WishlistServicesResource from "../resources/WishlistServicesResource";
// import WishlistResource from "../resources/WishlistResource";
// import Storage from "../services/file/Storage";
class RuleClass {

    async fetchDetails(req: any, res:any) {
        return res.isOk({
            message: "My Rule-Validation API",
            status: "success",
            
            data: {
            "name": "Aina Ayotomide",
            "github": "@tomideo1",
             "email":  "ayotomideaina@gmail.com",
             "mobile": "08179009377",
            "twitter": "@codehackblack"
             }
        }) 
    }


    async validateRule(req: any, res: any) {
        
    }
}

//     //create wishlist
//     async createWishList(req:any,res:any)
//     {
//         try{
//             const {title,event_date,access,can_receive_sms,accept_in_app_messages,can_receive_money} = req.body;
//             let cover = "";
//             if(req.files && req.files[0])
//             {
//                 //file is uploaded push to s3
//                 cover = await Storage.disk("s3").put(req.files[0]);
//             }
//             const wishlist = new Wishlist({
//                 user : req.user._id,
//                 title,
//                 event_date,
//                 access,
//                 can_receive_sms,
//                 accept_in_app_messages,
//                 can_receive_money,
//                 cover
//             });
    
//             await wishlist.save();
//             return res.isOk({
//                 status : "success",
//                 message : "Wishlist created successful",
//                 wishlist
//             })
//         }catch(error)
//         {
//             console.log(error)
//             return res.isServerError({
//                 status : "error",
//                 error
//             })
//         }
        
//     }
//     //edit wish list
//     async editWishList(req:any,res:any)
//     {

//         try {
//             let field = ["title","event_date","access","can_receive_sms","accept_in_app_messages","can_receive_money"];
//             const updateQuery =  _.pick(req.body,field);
//             const wishListId = req.params.wishlist;
    
//             const wishlist = await Wishlist.findOneAndUpdate({
//                 _id : wishListId
//             },updateQuery,{
//                 new : true
//             }).exec();
//             return res.isOk({
//                 status : "success",
//                 message : "Wishlist updated successfully",
//                 wishlist
//             })
//         }catch(error)
//         {
//             return res.isServerError({
//                 status : "error",
//                 message : "Unable to update wishlist",
//                 error
//             })
//         }
       
//     }
//     //delete wish list
//     async deleteWishlist(req:any,res:any)
//     {
//         const wishListId = req.params.wishlist;

//         const wishList = await Wishlist.findOneAndUpdate({
//             _id : wishListId,
//             user : req.user._id
//         },{
//             is_deleted : true
//         }).exec();
//         return res.isOk({
//             status : "success",
//             message : "Wishlist deleted successfully"
//         });
//     }

//     async fetchWishlists(req:any,res:any)
//     {

//         const wishlists = await Wishlist.find({user : req.user._id,is_deleted : false}).populate("user").sort({createdAt : -1}).exec();

//         return res.isOk({
//              status : "success",
//              message : "Fetch wishlist successfully",
//              wishlist : await WishlistResource.collection(wishlists)
//         })

//     }

//     async fetchWishlistServices(req:any,res:any)
//     {
//         try{
//             const wishListId = req.params.wishlist;
//             const  wishlists = await Wishlist.findOne({_id : wishListId,is_deleted : false}).populate("user").exec();
//             if(!wishlists)
//             {
//                 return res.isNotFound({
//                     status : "error",
//                     message : "Unable to find wishlist"
//                 })
//             }
//             const wishlistServices = await WishlistServices.find({wishlist : wishListId,is_deleted : false}).populate("vendor").sort({createdAt : -1}).exec();
        
//             return res.isOk({
//                  status : "success",
//                  message : "Fetch wishlist items successfully",
//                  wishlist : await new WishlistResource(wishlists).init(),
//                  wishlist_services : await WishlistServicesResource.collection(wishlistServices,req,res)
//             })
//         }catch(error)
//         {
//             return res.isServerError(
//                 {
//                     status : "error"
//                 }
//             )
//         }
//     }

//     async fetchPublicWishlist(req:any,res:any)
//     {
//         const page = req.query.page ? req.query.page : 1;

//         const wishlists = await Wishlist.find({access : "public",is_deleted : false,status : "active", user : { $ne: req.user._id } } ).populate("user").sort({createdAt : -1}).skip(( page - 1) * 20).limit(20).exec()


//         const wishlist_public_count = await Wishlist.find({access : "public" ,is_deleted : false,status : "active"}).countDocuments().exec();
//         let pagination :any = {}
//         if(wishlists.length > 0)
//         {
//             pagination = {
//                 total_wishes : wishlist_public_count,
//                 total_pages : Math.ceil(wishlist_public_count / 20),
//                 current_page : parseInt(page)
//             }
//         }else{
//             pagination = {
//                 total_wishes : 0,
//                 total_pages : 0,
//                 current_page : 0,
//             }
//         }

//         return res.isOk({
//             status : "success",
//             message : "Fetch public wishlist successfully",
//             wishlists : await WishlistResource.collection(wishlists),
//             pagination 
//         })
//     }

//     async searchWishlist(req:any,res:any)
//     {
//         const keyword = req.query.keyword ?req.query.keyword: "";
//         const page = req.query.page ? req.query.page : 1;

//         if(keyword == "")
//         {
//             return res.isOk({
//                   status : "success",
//                   message : "No wishlist fetched",
//                   wishlists : []
//             })
//         }

//         const wishlists = await Wishlist.find({ is_deleted : false, status : "active",$or : [{tag : keyword},  {title : { $regex: new RegExp(keyword, "i")}}]}).populate("user").sort({createdAt : -1}).skip(( page - 1) * 20).limit(20).exec()

//         const wishlist_public_count =  await Wishlist.find({is_deleted : false, status : "active",$or : [{tag : keyword},  {title : { $regex: new RegExp(keyword, "i")}}]}).countDocuments().exec();
//         return res.isOk({
//             status : "success",
//             message : `Search result  ${keyword} fetched successfully`,
//             wishlists : await WishlistResource.collection(wishlists),
//             pagination : {
//                 total_wishes : wishlist_public_count,
//                 total_pages : Math.ceil(wishlist_public_count / 20),
//                 current_page : parseInt(page)
//             }
//         })
//     }

//     async closeWishlist(req:any,res:any)
//     {
//         const wishListId = req.params.wishlist;
//         const  wishlist = await Wishlist.findOne({_id : wishListId,is_deleted : false, user : req.user._id}).exec();
//         if(!wishlist)
//         {
//             return res.isNotFound({
//                 status : "error",
//                 message : "Unable to find wishlist"
//             })
//         }

//         if(wishlist.status == "closed")
//         {
//             return res.isBadRequest({
//                 status : "error",
//                 message : "Wishlist already closed"
//             })
//         }
//         const wishList = await Wishlist.findOneAndUpdate({
//             _id : wishListId,
//             user : req.user._id
//         },{
//             status : "closed"
//         }).exec();
//         return res.isOk({
//             status : "success",
//             message : "Wishlist closed successfully"
//         });
//     }
  
   
// }

export default RuleClass;