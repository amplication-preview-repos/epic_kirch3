import { BibleSection as TBibleSection } from "../api/bibleSection/BibleSection";

export const BIBLESECTION_TITLE_FIELD = "id";

export const BibleSectionTitle = (record: TBibleSection): string => {
  return record.id?.toString() || String(record.id);
};
