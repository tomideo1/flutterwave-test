// import Joi from "joi"

// class WishlistPolicies
// {
//     async validateAddServiceToWishlist(req:any,res:any,next:any)
//     {
//         try
//         {
//             if("service_type" in req.body)
//             {
//                 if(req.body.service_type == "others")
//                 {
//                     WishlistPolicies.validateOthersWishlist(req,res,next);
//                 }
    
//                 if(req.body.service_type == "vendor")
//                 {
//                    WishlistPolicies.validateVendorWishlist(req,res,next);
//                 }
               
    
//             }else{
//                 return res.isInvalidData({ status: "error", message: "Bad data ",data : {
//                     service_type : "service_type is a required field"
//                 },code : 422 });
//             }
    
         
//         }catch(err)
//         {
//             return res.isInvalidData({ status: "error", message: "Bad data ",data : {
//                 service_type : "service_type is a required field"
//             },code : 422 });
//         }
       
//     }

//     static async validateOthersWishlist(req:any,res:any,next:any)
//     {
//         var schema = Joi.object({
//             gift_name: Joi.string()
             
//               .required()
//               .messages({
//                 "any.required": "The gift_name field is a required field",
//                 "string.empty": "The gift_name field cannot be empty",
               
//               }),
//             service_type : Joi.string()
//               .valid("vendor", "others")
//               .required()
//               .messages({
//                 "any.required": "The service_type field is a required field",
//                 "string.empty": "The service_type field cannot be empty",
//                 "any.valid":
//                   "The service_type field can either be vendor and others",
//              }), 
           

//               vendor_url : Joi.string()
//               .min(6)
//               .required()
//               .messages({
//                 "any.required": "The vendor_url field is a required field",
//                 "string.empty": "The vendor_url field cannot be empty",
//                 "string.min": `The vendor_url  cannot be less than {#limit}`
//             }),
//                 vendor_name : Joi.string()
               
//                 .required()
//                 .messages({
//                   "any.required": "The vendor_name field is a required field",
//                   "string.empty": "The vendor_name field cannot be empty",
//               }),
//               vendor_phone : Joi.string()
//               .min(11)
//               .required()
//               .messages({
//                 "any.required": "The vendor_phone field is a required field",
//                 "string.empty": "The vendor_phone field cannot be empty",
//                 "string.min": `The vendor_phone  cannot be less than {#limit}`
//             }),
//             vendor_price : Joi.string()
//               .required()
//               .messages({
//                 "any.required": "The vendor_price field is a required field",
//                 "string.empty": "The vendor_price field cannot be empty",
//             }),
//             comment : Joi.string()
//             .min(6)
//             .allow('').optional()
            

//           }).options({ abortEarly: false });
      
//           try {
//             const value = await schema.validateAsync(req.body);

//             next();
//           } catch (err) {
//             // err.details[0].type = err.details[0].context.key;
//             return res.isInvalidData({ status: "error", message: "Bad data ",data : err.details,code : 422 });
//           }
//     }

//     static  async validateVendorWishlist(req:any,res:any,next:any)
//     {
//         var schema = Joi.object({
//             gift_name: Joi.string()
//               .min(2)
//               .required()
//               .messages({
//                 "any.required": "The gift_name field is a required field",
//                 "string.empty": "The gift_name field cannot be empty",
//                 "string.min": `The  gift_name cannot be less than {#limit}`,
               
//               }),
//               service_type : Joi.string()
//               .valid("vendor", "others")
//               .required()
//               .messages({
//                 "any.required": "The service_type field is a required field",
//                 "string.empty": "The service_type field cannot be empty",
//                 "any.valid":
//                   "The service_type field can either be vendor and others",
//               }), 
            
//               vendor :  Joi.string()
//               .min(2)
//               .required()
//               .messages({
//                 "any.required": "The gift_name field is a required field",
//                 "string.empty": "The gift_name field cannot be empty",
//                 "string.min": `The  gift_name cannot be less than {#limit}`,
               
//               }),

//             comment : Joi.string()
//             .min(6)
//             .allow('').optional()
            

//           }).options({ abortEarly: false });
      
//           try {
//             const value = await schema.validateAsync(req.body);
//             next();
//           } catch (err) {
//             // err.details[0].type = err.details[0].context.key;
//             return res.isInvalidData({ status: "error", message: "Bad data ",data : err.details,code : 422 });
//           }
//     }

//     async validateCreateWishlist(req:any,res:any,next:any)
//     {
//         var schema = Joi.object({
//             title: Joi.string()
//               .min(2)
//               .required()
//               .messages({
//                 "any.required": "The title field is a required field",
//                 "string.empty": "The title field cannot be empty",
//                 "string.min": `The  title cannot be less than {#limit}`,
               
//               }),

//              event_date: Joi.date()
//              .required()
//              .messages({
//                "any.required": "The event date field is a required field",
//              }),

//             access: Joi.string()
//             .valid("public", "private")
//             .required()
//             .messages({
//               "any.required": "The access field is a required field",
//               "string.empty": "The access field cannot be empty",
//               "any.valid":
//                 "The access field can either be public,  and private",
//             }),

//             can_receive_sms: Joi.boolean().required(),
//             accept_in_app_messages: Joi.boolean().required(),
//             can_receive_money: Joi.boolean().required()

            
           
//         }).options({ abortEarly: false });

//         try {
//             const value = await schema.validateAsync(req.body);
//             next();
//           } catch (err) {
//             // err.details[0].type = err.details[0].context.key;
//             return res.isInvalidData({ status: "error", message: "Bad data ",data : err.details,code : 422 });
//           }
//     }
// }

// export default WishlistPolicies;