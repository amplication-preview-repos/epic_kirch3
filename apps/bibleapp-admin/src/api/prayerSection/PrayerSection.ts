import { JsonValue } from "type-fest";

export type PrayerSection = {
  createdAt: Date;
  dailyPrayerTheme: JsonValue;
  id: string;
  prayerCommitment: JsonValue;
  prayerEvent: JsonValue;
  prayerGroup: JsonValue;
  prayerRequest: JsonValue;
  testimony: JsonValue;
  updatedAt: Date;
};
