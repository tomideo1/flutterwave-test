const express = require('express');
const router = express.Router();
import RuleController from '../controllers/rule.controller';
import RulePolicies from "../policies/rule.policies";




router
.route('')
    .get(new RuleController().fetch);

router
.route('/validate-rule')
.post([new RulePolicies().vaidateRuleData],new RuleController().validate);





export default router;
 