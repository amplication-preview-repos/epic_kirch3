import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorshipSectionService } from "./worshipSection.service";
import { WorshipSectionControllerBase } from "./base/worshipSection.controller.base";

@swagger.ApiTags("worshipSections")
@common.Controller("worshipSections")
export class WorshipSectionController extends WorshipSectionControllerBase {
  constructor(
    protected readonly service: WorshipSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
