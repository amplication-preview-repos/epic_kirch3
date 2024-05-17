import { EvangelismSection as TEvangelismSection } from "../api/evangelismSection/EvangelismSection";

export const EVANGELISMSECTION_TITLE_FIELD = "id";

export const EvangelismSectionTitle = (record: TEvangelismSection): string => {
  return record.id?.toString() || String(record.id);
};
