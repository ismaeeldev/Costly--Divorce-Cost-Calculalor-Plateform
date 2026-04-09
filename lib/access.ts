export interface UserAccessClaims {
  accessType?: string | null;
  hasFullAccess?: boolean | null;
  entryPurchased?: boolean | null;
  subscriptionStatus?: string | null;
  hasAIAdvisor?: boolean | null;
  canUseSubscription?: boolean | null;
  addons?: {
    assetSplit?: boolean;
    retirementImpact?: boolean;
    vaDisability?: boolean;
    housingScenario?: boolean;
  };
}

export function requireEntryAccess(user: UserAccessClaims | null): boolean {
  if (!user) return false;
  return user.entryPurchased === true || user.hasFullAccess === true || user.accessType === "ENTRY" || user.accessType === "CORE";
}

export function requireCoreAccess(user: UserAccessClaims | null): boolean {
  if (!user) return false;
  return user.hasFullAccess === true || user.accessType === "CORE";
}

export function requireSubscription(user: UserAccessClaims | null): boolean {
  if (!user) return false;
  return user.subscriptionStatus === "active";
}

export function requireAddon(user: UserAccessClaims | null, type: "ASSET_SPLIT" | "RETIREMENT" | "VA_DISABILITY" | "HOUSING"): boolean {
  if (!user || !user.addons) return false;
  switch (type) {
    case "ASSET_SPLIT": return user.addons.assetSplit === true;
    case "RETIREMENT": return user.addons.retirementImpact === true;
    case "VA_DISABILITY": return user.addons.vaDisability === true;
    case "HOUSING": return user.addons.housingScenario === true;
    default: return false;
  }
}
