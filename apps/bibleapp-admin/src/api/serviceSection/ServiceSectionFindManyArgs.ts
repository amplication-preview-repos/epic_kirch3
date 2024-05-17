import { ServiceSectionWhereInput } from "./ServiceSectionWhereInput";
import { ServiceSectionOrderByInput } from "./ServiceSectionOrderByInput";

export type ServiceSectionFindManyArgs = {
  where?: ServiceSectionWhereInput;
  orderBy?: Array<ServiceSectionOrderByInput>;
  skip?: number;
  take?: number;
};
