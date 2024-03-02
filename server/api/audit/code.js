const express = require('express');
const removeAnnotations = require('../../modules/audit/preprocess');
const { runAudit } = require('../../modules/audit/gpt_auditor');
const { run_critic } = require('../../modules/audit/gpt_critic');
const { run_rank } = require('../../modules/audit/gpt_rank');
const {supabase } = require('../../lib/utils');
const router = express.Router();

router.post('/code', async (req, res) => {
  try {
    const data = req.body;
    const sourceCode = data.source;
    const hash = data.hash;
    console.log(hash);
    await supabase.from("code_audit").update({status:"processing"}).eq('hash',hash)
    res.status(200)
    .json({ message: 'Auditing added to queu.', message: sup });
    const processedCode = removeAnnotations(sourceCode);
    const findings = await runAudit(processedCode, 'gpt-4', 0.7, 3, 1, true);
    if (findings.length === 0) {
      const sup = await supabase.from("code_audit").update({status:"completed",result:"No vulnerabilities found."}).eq('hash',hash)
    } else {
      const findingswithcritic = await run_critic(findings, 'gpt-4', 0, 2);
      console.log({ findingswithcritic });
      const findingswithrank = await run_rank(findingswithcritic);
      console.log(findingswithrank);
      const sup = await supabase.from("code_audit").update({status:"completed",result:findingswithrank}).eq('hash',hash)
    }
  } catch (err) {
    console.log(err);
    await supabase.from("code_audit").update({status:"failed",status_log:err}).eq('hash',hash)
    res.status(500).json({ error: err });
  }
});

module.exports = router;
