import { FamilySectionWhereInput } from "./FamilySectionWhereInput";
import { FamilySectionOrderByInput } from "./FamilySectionOrderByInput";

export type FamilySectionFindManyArgs = {
  where?: FamilySectionWhereInput;
  orderBy?: Array<FamilySectionOrderByInput>;
  skip?: number;
  take?: number;
};
