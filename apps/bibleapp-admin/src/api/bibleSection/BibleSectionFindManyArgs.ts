import { BibleSectionWhereInput } from "./BibleSectionWhereInput";
import { BibleSectionOrderByInput } from "./BibleSectionOrderByInput";

export type BibleSectionFindManyArgs = {
  where?: BibleSectionWhereInput;
  orderBy?: Array<BibleSectionOrderByInput>;
  skip?: number;
  take?: number;
};
