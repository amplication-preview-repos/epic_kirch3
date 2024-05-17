import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServiceSectionService } from "./serviceSection.service";
import { ServiceSectionControllerBase } from "./base/serviceSection.controller.base";

@swagger.ApiTags("serviceSections")
@common.Controller("serviceSections")
export class ServiceSectionController extends ServiceSectionControllerBase {
  constructor(
    protected readonly service: ServiceSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
