import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type PrayerSectionWhereInput = {
  dailyPrayerTheme?: JsonFilter;
  id?: StringFilter;
  prayerCommitment?: JsonFilter;
  prayerEvent?: JsonFilter;
  prayerGroup?: JsonFilter;
  prayerRequest?: JsonFilter;
  testimony?: JsonFilter;
};
