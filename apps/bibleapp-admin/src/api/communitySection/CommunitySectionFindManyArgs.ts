import { CommunitySectionWhereInput } from "./CommunitySectionWhereInput";
import { CommunitySectionOrderByInput } from "./CommunitySectionOrderByInput";

export type CommunitySectionFindManyArgs = {
  where?: CommunitySectionWhereInput;
  orderBy?: Array<CommunitySectionOrderByInput>;
  skip?: number;
  take?: number;
};
