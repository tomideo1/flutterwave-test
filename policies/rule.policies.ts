import Joi from "joi"
import _ from "lodash";
class RulePolicies {
    vaidateRuleData = async (req: any, res: any, next: any) => {
        try
        {

            let Schema =  Joi.object({
                rule : Joi.object({
                    field : Joi.string().required().messages({
                        "any.required": "field field is missing from rule.",
                        "string.empty": "field field  cannot be empty.",
                    }),
                    condition : Joi.string().valid( "eq" ,"neq", "gt","gte","contains").messages({
                        "any.required": "field condition is missing from rule.",
                        "string.empty": "field condition  cannot be empty.",
                        "any.valid":
                            "The field condition field can eq ,neq, gt,gte,contains",
                    }),
                    condition_value : Joi.alternatives(
                        Joi.string(),
                        Joi.number()
                    ).required().messages({
                        "any.required": "field condition_value is missing from rule.",
                        "string.empty": "field condition_value  cannot be empty.",
                    }),
                }).required()
                    .messages({
                        "any.required": "rule is required.",
                        "string.empty": "rule field cannot be empty.",
                    }),

                data : Joi.alternatives(
                    Joi.object(),
                    Joi.string(),
                    Joi.array()
                )
                    .required().messages({
                        "any.required": "data field is required.",
                        "string.empty": "data field cannot be empty.",
                    }),
            });

            try {
                const options = {
                    errors: {
                        wrap: {
                            label: ''
                        }
                    }
                };
                const value = await Schema.validateAsync(req.body,options);
                next();
            } catch (err) {
                return  res.isBadRequest({ status: "error", message: err.details[0].message,data : null });
            }
        }catch(error)
        {
            return res.isServerError({
                message : "A Server Error Occured",
                status: "error",
                data: null
            })
        }

    };




}



export default RulePolicies;