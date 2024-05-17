import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GrowthSectionResolverBase } from "./base/growthSection.resolver.base";
import { GrowthSection } from "./base/GrowthSection";
import { GrowthSectionService } from "./growthSection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GrowthSection)
export class GrowthSectionResolver extends GrowthSectionResolverBase {
  constructor(
    protected readonly service: GrowthSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
