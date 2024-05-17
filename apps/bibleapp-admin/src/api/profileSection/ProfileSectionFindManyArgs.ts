import { ProfileSectionWhereInput } from "./ProfileSectionWhereInput";
import { ProfileSectionOrderByInput } from "./ProfileSectionOrderByInput";

export type ProfileSectionFindManyArgs = {
  where?: ProfileSectionWhereInput;
  orderBy?: Array<ProfileSectionOrderByInput>;
  skip?: number;
  take?: number;
};
