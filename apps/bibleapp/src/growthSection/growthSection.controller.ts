import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GrowthSectionService } from "./growthSection.service";
import { GrowthSectionControllerBase } from "./base/growthSection.controller.base";

@swagger.ApiTags("growthSections")
@common.Controller("growthSections")
export class GrowthSectionController extends GrowthSectionControllerBase {
  constructor(
    protected readonly service: GrowthSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
