import { ProfileSection as TProfileSection } from "../api/profileSection/ProfileSection";

export const PROFILESECTION_TITLE_FIELD = "id";

export const ProfileSectionTitle = (record: TProfileSection): string => {
  return record.id?.toString() || String(record.id);
};
