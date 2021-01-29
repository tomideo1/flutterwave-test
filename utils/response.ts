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

            res['isNotFound']  =  async function(data : any)
            {
                return res.status(404).json(data);
            }

            res['isUnAuthorized']  =  async function(data : any)
            {

                return res.status(403).json(data);
            }

            res['isServerError']  =  async function(data : any,error : any)
            {
                //log an error to error server

                return res.status(500).json(data);

            }

            res['isInvalidData']  =  async function(data : any)
            {
                //log an error to error server
                // reprocess error
                // console.log(data.data);

                let errorData = data.data && data.data.length > 0 ? data.data : [];
                
                let errorBag : any = {};

                for (const err of errorData) {
                    // console.log(err)
                    
                    errorBag[`${err.context.key}`] = err.message
                    
                }
                // console.log(errorBag)
                data['error'] = errorBag;
                data['code'] = 422;
                errorBag = null;
                delete data['data'];
                
                return res.status(422).json(data);

            }
           next();
    }
}