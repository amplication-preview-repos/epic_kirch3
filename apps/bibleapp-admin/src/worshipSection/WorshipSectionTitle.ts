import { WorshipSection as TWorshipSection } from "../api/worshipSection/WorshipSection";

export const WORSHIPSECTION_TITLE_FIELD = "id";

export const WorshipSectionTitle = (record: TWorshipSection): string => {
  return record.id?.toString() || String(record.id);
};
