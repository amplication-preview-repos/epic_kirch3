import { GrowthSection as TGrowthSection } from "../api/growthSection/GrowthSection";

export const GROWTHSECTION_TITLE_FIELD = "id";

export const GrowthSectionTitle = (record: TGrowthSection): string => {
  return record.id?.toString() || String(record.id);
};
