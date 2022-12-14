const { typescript } = require("projen");

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: "main",
  name: "brianfoody-aws-sso-sdk-v3",
  releaseToNpm: true,
  majorVersion: 1,
  tsconfig: {
    compilerOptions: {
      strictPropertyInitialization: false,
      noUnusedLocals: false,
      lib: ["es2019", "dom"],
    },
  },
  eslintOptions: {
    prettier: true,
  },
  prettierOptions: {},
  jestOptions: {
    jestConfig: {},
  },
  scripts: {
    integration: "npx jest -c jest.integration.js --runInBand",
  },
  devDeps: ["@types/crypto-js", "@types/glob", "open"],
  deps: [
    "@aws-sdk/client-sso",
    "@aws-sdk/client-sso-oidc",
    "@aws-sdk/types",
    "aws-sdk",
    "crypto-js",
    "glob",
    "sha-1",
    "yaml",
  ],
});

project.synth();
