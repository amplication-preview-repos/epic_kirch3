import { PrayerSectionWhereInput } from "./PrayerSectionWhereInput";
import { PrayerSectionOrderByInput } from "./PrayerSectionOrderByInput";

export type PrayerSectionFindManyArgs = {
  where?: PrayerSectionWhereInput;
  orderBy?: Array<PrayerSectionOrderByInput>;
  skip?: number;
  take?: number;
};
