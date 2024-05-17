import { HomeScreen as THomeScreen } from "../api/homeScreen/HomeScreen";

export const HOMESCREEN_TITLE_FIELD = "dailyVerse";

export const HomeScreenTitle = (record: THomeScreen): string => {
  return record.dailyVerse?.toString() || String(record.id);
};
