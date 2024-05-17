import { FamilySection as TFamilySection } from "../api/familySection/FamilySection";

export const FAMILYSECTION_TITLE_FIELD = "id";

export const FamilySectionTitle = (record: TFamilySection): string => {
  return record.id?.toString() || String(record.id);
};
