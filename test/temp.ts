import os from "os";
import open from "open";
import { makeAwsConfigManager } from "../src/adapters/awsConfigManager";
import { makeSsoAuthoriser } from "../src/adapters/ssoAuthoriser";

export const exec = async () => {
  const authoriser = makeSsoAuthoriser({
    configManager: makeAwsConfigManager({
      homeDir: os.homedir(),
    }),
    browser: {
      open: async (url) => {
        await open(url);
      },
    },
  });

  const sessions = await authoriser.init();

  const token = await authoriser.getFederatedAccessToken(
    "https://d-90677e2e6d.awsapps.com/start",
    "us-east-1"
  );

  await authoriser.getAccountAccessToken(sessions[0], {
    accountId: "532747402531",
    permissionSet: "AdministratorAccess",
  });
  await authoriser.getAccountAccessToken(sessions[0], {
    accountId: "532747402531",
    permissionSet: "AdministratorAccess",
  });
};

// exec();
