import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EvangelismSectionService } from "./evangelismSection.service";
import { EvangelismSectionControllerBase } from "./base/evangelismSection.controller.base";

@swagger.ApiTags("evangelismSections")
@common.Controller("evangelismSections")
export class EvangelismSectionController extends EvangelismSectionControllerBase {
  constructor(
    protected readonly service: EvangelismSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
