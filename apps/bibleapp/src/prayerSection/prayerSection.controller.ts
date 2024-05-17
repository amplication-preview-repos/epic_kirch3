import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrayerSectionService } from "./prayerSection.service";
import { PrayerSectionControllerBase } from "./base/prayerSection.controller.base";

@swagger.ApiTags("prayerSections")
@common.Controller("prayerSections")
export class PrayerSectionController extends PrayerSectionControllerBase {
  constructor(
    protected readonly service: PrayerSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
