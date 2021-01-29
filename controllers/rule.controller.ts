import RuleClass from "../classes/Rule.class"
class RuleController
{

    async fetch(req: any, res: any)
    {
        return new RuleClass().fetchDetails({ _req: req, res });
     }

    
    async validate(req: any, res: any) {
        return new RuleClass().validateRule({ req, res });
    }
}

export default RuleController