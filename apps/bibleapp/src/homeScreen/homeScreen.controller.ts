import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HomeScreenService } from "./homeScreen.service";
import { HomeScreenControllerBase } from "./base/homeScreen.controller.base";

@swagger.ApiTags("homeScreens")
@common.Controller("homeScreens")
export class HomeScreenController extends HomeScreenControllerBase {
  constructor(
    protected readonly service: HomeScreenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
