import { WorshipSectionWhereInput } from "./WorshipSectionWhereInput";
import { WorshipSectionOrderByInput } from "./WorshipSectionOrderByInput";

export type WorshipSectionFindManyArgs = {
  where?: WorshipSectionWhereInput;
  orderBy?: Array<WorshipSectionOrderByInput>;
  skip?: number;
  take?: number;
};
