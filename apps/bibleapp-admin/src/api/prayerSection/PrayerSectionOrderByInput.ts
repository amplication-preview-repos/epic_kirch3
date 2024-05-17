import { SortOrder } from "../../util/SortOrder";

export type PrayerSectionOrderByInput = {
  createdAt?: SortOrder;
  dailyPrayerTheme?: SortOrder;
  id?: SortOrder;
  prayerCommitment?: SortOrder;
  prayerEvent?: SortOrder;
  prayerGroup?: SortOrder;
  prayerRequest?: SortOrder;
  testimony?: SortOrder;
  updatedAt?: SortOrder;
};
