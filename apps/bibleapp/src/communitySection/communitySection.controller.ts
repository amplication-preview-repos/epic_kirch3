import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CommunitySectionService } from "./communitySection.service";
import { CommunitySectionControllerBase } from "./base/communitySection.controller.base";

@swagger.ApiTags("communitySections")
@common.Controller("communitySections")
export class CommunitySectionController extends CommunitySectionControllerBase {
  constructor(
    protected readonly service: CommunitySectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
