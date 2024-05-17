import { CommunitySection as TCommunitySection } from "../api/communitySection/CommunitySection";

export const COMMUNITYSECTION_TITLE_FIELD = "id";

export const CommunitySectionTitle = (record: TCommunitySection): string => {
  return record.id?.toString() || String(record.id);
};
