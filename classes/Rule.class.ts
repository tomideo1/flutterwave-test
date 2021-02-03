import _ from "lodash";

class RuleClass {

    async fetchDetails({ _req, res }: { _req: any; res: any; }): Promise<any> {
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


    async validateRule({ req, res }: { req: any; res: any; }): Promise<any> {
        try {
            const { rule, data } = req.body;
            let field = rule.field
            const validationRule = RuleClass.handleValidation(field,data,rule);
            if(!validationRule.data_found){
                return res.isBadRequest(
                    {
                        "message": `field ${field} is missing from data.`,
                        "status": "error",
                        "data": null
                    }
                )
            }
            else{
                return res.isRuleResponse(
                    {
                        "message": `field ${field}  ${validationRule.validated ? 'successfully validated' : 'failed validation'}.`,
                        "status": ` ${validationRule.validated ? 'success' : 'error'}`,
                        "data": {
                            "validation": {
                                "error": `${validationRule.validated}`,
                                "field": `${field}`,
                                "field_value": validationRule.field_value,
                                "condition": `${rule.condition}`,
                                "condition_value": `${rule.condition_value}`
                            }
                        }
                    },
                    validationRule.validated ? 200: 400
                )
            }
        }
        catch (err) {
            return res.isServerError({
                message: "A Server Error Occured.",
                status : "error",
                data: err
            })
        }
    }

    private static  handleValidation(field: string, data: object, rule:any): any {
        if(_.isObject(data)){
            let found = RuleClass.getObjectByString(data,rule.field)
            if (typeof found  !== 'undefined'){
                return {
                    'data_found': true,
                    'validated': RuleClass.handleRuleCondition(rule.condition_value,found,rule),
                    'field_value': found,
                }
            }
            return {
                'data_found' : false,
                'validated': null
            }
        }
        else if (_.isArray(data)){
            let found = RuleClass.processStringData(data,rule.field)
            if (typeof found  !== 'undefined'){
                return {
                    'data_found': true,
                    'validated': RuleClass.handleRuleCondition(rule.condition_value,found,rule),
                    'field_value': found,
                }
            }
            return {
                'data_found' : false,
                'validated': null
            }
        }
        else if(_.isString(data)){
            let found = RuleClass.processStringData(data,rule.field)
            if (typeof found  !== 'undefined'){
                return {
                    'data_found': true,
                    'validated': RuleClass.handleRuleCondition(rule.condition_value,found,rule),
                    'field_value': found,
                }
            }
            return {
                'data_found' : false,
                'validated': null
            }
        }
    }

    private static handleRuleCondition(comparison: any, comparable: any, rule:any){
        let isValidated = false;
        switch (rule.condition) {
            case 'gte':
                if(comparable >= comparison){
                    isValidated = true;
                }
                break;
            case 'gt':
                if(comparable > comparison){
                    isValidated = true
                }
                break
            case 'eq':
                if(comparable === comparison){
                    isValidated = true
                }
                break;
            case 'neq':
                if(comparable !== comparison){
                    isValidated = true
                }
                break;
            case 'contains':
                if (typeof comparable === 'string' && comparable.includes(comparison)  ){
                    isValidated = true;
                }
                break;
            default:
                break
        }
        return isValidated;
    }
    private static getObjectByString(data:any, stringPath: string) {
        stringPath = stringPath.replace(/\[(\w+)\]/g, '.$1');
        stringPath = stringPath.replace(/^\./, '');
        let a = stringPath.split('.');
        for (let i = 0, n = a.length; i < n; ++i) {
            let k = a[i];
            if (k in data) {
                data = data[k];
            } else {
                return;
            }
        }
        return data;
    }
    private static processStringData(data:any, key: any){
        return data[key]
    }

}



export default RuleClass;
