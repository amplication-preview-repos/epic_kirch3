import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HomeScreenResolverBase } from "./base/homeScreen.resolver.base";
import { HomeScreen } from "./base/HomeScreen";
import { HomeScreenService } from "./homeScreen.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HomeScreen)
export class HomeScreenResolver extends HomeScreenResolverBase {
  constructor(
    protected readonly service: HomeScreenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
