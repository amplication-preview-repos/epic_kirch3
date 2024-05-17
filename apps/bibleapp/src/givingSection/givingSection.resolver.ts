import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GivingSectionResolverBase } from "./base/givingSection.resolver.base";
import { GivingSection } from "./base/GivingSection";
import { GivingSectionService } from "./givingSection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GivingSection)
export class GivingSectionResolver extends GivingSectionResolverBase {
  constructor(
    protected readonly service: GivingSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
