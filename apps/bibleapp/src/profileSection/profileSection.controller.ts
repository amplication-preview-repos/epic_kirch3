import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProfileSectionService } from "./profileSection.service";
import { ProfileSectionControllerBase } from "./base/profileSection.controller.base";

@swagger.ApiTags("profileSections")
@common.Controller("profileSections")
export class ProfileSectionController extends ProfileSectionControllerBase {
  constructor(
    protected readonly service: ProfileSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
