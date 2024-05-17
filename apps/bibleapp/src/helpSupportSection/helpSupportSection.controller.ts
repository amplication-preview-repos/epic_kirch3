import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HelpSupportSectionService } from "./helpSupportSection.service";
import { HelpSupportSectionControllerBase } from "./base/helpSupportSection.controller.base";

@swagger.ApiTags("helpSupportSections")
@common.Controller("helpSupportSections")
export class HelpSupportSectionController extends HelpSupportSectionControllerBase {
  constructor(
    protected readonly service: HelpSupportSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
