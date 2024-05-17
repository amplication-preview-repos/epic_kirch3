import { HomeScreenWhereInput } from "./HomeScreenWhereInput";
import { HomeScreenOrderByInput } from "./HomeScreenOrderByInput";

export type HomeScreenFindManyArgs = {
  where?: HomeScreenWhereInput;
  orderBy?: Array<HomeScreenOrderByInput>;
  skip?: number;
  take?: number;
};
