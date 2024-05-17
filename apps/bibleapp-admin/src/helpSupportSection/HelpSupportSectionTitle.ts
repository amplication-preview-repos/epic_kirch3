import { HelpSupportSection as THelpSupportSection } from "../api/helpSupportSection/HelpSupportSection";

export const HELPSUPPORTSECTION_TITLE_FIELD = "id";

export const HelpSupportSectionTitle = (
  record: THelpSupportSection
): string => {
  return record.id?.toString() || String(record.id);
};
