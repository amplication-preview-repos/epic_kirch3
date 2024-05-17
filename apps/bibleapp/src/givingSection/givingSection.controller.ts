import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GivingSectionService } from "./givingSection.service";
import { GivingSectionControllerBase } from "./base/givingSection.controller.base";

@swagger.ApiTags("givingSections")
@common.Controller("givingSections")
export class GivingSectionController extends GivingSectionControllerBase {
  constructor(
    protected readonly service: GivingSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
