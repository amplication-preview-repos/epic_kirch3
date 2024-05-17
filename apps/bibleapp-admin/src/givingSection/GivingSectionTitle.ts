import { GivingSection as TGivingSection } from "../api/givingSection/GivingSection";

export const GIVINGSECTION_TITLE_FIELD = "id";

export const GivingSectionTitle = (record: TGivingSection): string => {
  return record.id?.toString() || String(record.id);
};
