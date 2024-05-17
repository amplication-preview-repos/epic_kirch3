import { PrayerSection as TPrayerSection } from "../api/prayerSection/PrayerSection";

export const PRAYERSECTION_TITLE_FIELD = "id";

export const PrayerSectionTitle = (record: TPrayerSection): string => {
  return record.id?.toString() || String(record.id);
};
