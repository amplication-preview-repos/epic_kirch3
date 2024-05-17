import { SortOrder } from "../../util/SortOrder";

export type HomeScreenOrderByInput = {
  createdAt?: SortOrder;
  dailyVerse?: SortOrder;
  id?: SortOrder;
  quickLinks?: SortOrder;
  updatedAt?: SortOrder;
  welcomeMessage?: SortOrder;
};
