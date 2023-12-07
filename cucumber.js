const common = [
    "e2e/tests/features/*.feature", // Specify our feature files
    "--require-module ts-node/register", // Load TypeScript module
    "--require e2e/tests/step_definitions/*.ts",
    "--format progress-bar", // Load custom formatter
    "--require testSetupI.ts"
  ].join(" ");
  
  module.exports = {
    default: common
  };


  