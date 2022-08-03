import { Credentials } from "@aws-sdk/types";

// AWS
export type AWSCredentials = Credentials & {
  identityId?: string;
};

export class UnauthorisedError extends Error {
  constructor(msg: string) {
    super(msg);

    this.name = "UnauthorisedError";

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, UnauthorisedError.prototype);
  }
}
export class InvalidConfigurationError extends Error {
  constructor(msg: string) {
    super(msg);

    this.name = "InvalidConfigurationError";

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, InvalidConfigurationError.prototype);
  }
}

export type AwsRegion =
  | "us-east-1"
  | "us-east-2"
  | "us-west-1"
  | "us-west-2"
  | "af-south-1"
  | "ap-east-1"
  | "ap-southeast-3"
  | "ap-south-1"
  | "ap-northeast-3"
  | "ap-northeast-2"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ap-northeast-1"
  | "ca-central-1"
  | "eu-central-1"
  | "eu-west-1"
  | "eu-west-2";

// SSO
export type AwsSsoConfig = {
  alias: string;
  sso_start_url: string;
  sso_region: string;
  sso_account_id: string;
  sso_role_name: string;
  region?: string;
};

export type PermissionSet = {
  accountId: string;
  name: string;
};

export type Account = {
  accountId: string;
  name?: string;
  defaultRegion?: string;
  roles: string[];
};

export type SSOSession = {
  startUrl: string;
  region: string;
  accessToken: string;
  expiresAt: Date;
};

export type Access = {
  organisations: Organisation[];
};

export type Organisation = {
  logicallyDeleted?: boolean;
  ssoStartUrl: string;
  ssoRegion: string;
  nickname?: string; // added by user
  accounts: Account[];
  roles: string[];
  accountsSyncedAtIso?: string;
  authorisedUntil?: Date;
};

export type AccessPair = {
  accountId: string;
  permissionSet: string;
};

export type AccessCard = AccessPair & {
  region: AwsRegion;
};
