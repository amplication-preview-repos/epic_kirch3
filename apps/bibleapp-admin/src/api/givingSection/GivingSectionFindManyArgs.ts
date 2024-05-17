import { GivingSectionWhereInput } from "./GivingSectionWhereInput";
import { GivingSectionOrderByInput } from "./GivingSectionOrderByInput";

export type GivingSectionFindManyArgs = {
  where?: GivingSectionWhereInput;
  orderBy?: Array<GivingSectionOrderByInput>;
  skip?: number;
  take?: number;
};
