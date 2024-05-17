import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HomeScreenWhereInput = {
  dailyVerse?: StringNullableFilter;
  id?: StringFilter;
  quickLinks?: StringNullableFilter;
  welcomeMessage?: StringNullableFilter;
};
