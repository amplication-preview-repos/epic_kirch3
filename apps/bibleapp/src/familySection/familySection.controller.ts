import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FamilySectionService } from "./familySection.service";
import { FamilySectionControllerBase } from "./base/familySection.controller.base";

@swagger.ApiTags("familySections")
@common.Controller("familySections")
export class FamilySectionController extends FamilySectionControllerBase {
  constructor(
    protected readonly service: FamilySectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
