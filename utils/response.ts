export default {
    handleResponse : async function (req:any,res:any,next:any){
     
            res['isOk']  =  async function(data : any,new_resource=false)
            {
                return res.status(new_resource? 201:200).json(data);
            }

            res['isBadRequest']  =  async function(data : any)
            {
                return res.status(400).json(data);
            }

            res['isRuleResponse']  =  async function(data : any,code:number)
            {
                return res.status(code).json(data);
            }

            res['isNotFound']  =  async function(data : any)
            {
                return res.status(404).json(data);
            }

            res['isUnAuthorized']  =  async function(data : any)
            {

                return res.status(403).json(data);
            }

            res['isServerError']  =  async function (data: any)
            {
                //log an error to error server

                return res.status(500).json(data);

            }

            res['isInvalidData']  =  async function(data : any)
            {
                let errorData = data.data && data.data.length > 0 ? data.data : [];
                
                let errorBag : any = {};

                for (const err of errorData) {                    
                    errorBag[`${err.context.key}`] = err.message
                    
                }
                data['data'] = errorBag;
                return res.status(422).json(data);

            }
           next();
    }
}