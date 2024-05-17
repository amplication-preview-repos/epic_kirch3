import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BibleSectionService } from "./bibleSection.service";
import { BibleSectionControllerBase } from "./base/bibleSection.controller.base";

@swagger.ApiTags("bibleSections")
@common.Controller("bibleSections")
export class BibleSectionController extends BibleSectionControllerBase {
  constructor(
    protected readonly service: BibleSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
