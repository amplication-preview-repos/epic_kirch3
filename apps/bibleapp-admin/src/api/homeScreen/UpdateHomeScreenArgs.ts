import { HomeScreenWhereUniqueInput } from "./HomeScreenWhereUniqueInput";
import { HomeScreenUpdateInput } from "./HomeScreenUpdateInput";

export type UpdateHomeScreenArgs = {
  where: HomeScreenWhereUniqueInput;
  data: HomeScreenUpdateInput;
};
