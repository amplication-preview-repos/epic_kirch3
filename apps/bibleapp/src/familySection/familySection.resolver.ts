import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FamilySectionResolverBase } from "./base/familySection.resolver.base";
import { FamilySection } from "./base/FamilySection";
import { FamilySectionService } from "./familySection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FamilySection)
export class FamilySectionResolver extends FamilySectionResolverBase {
  constructor(
    protected readonly service: FamilySectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
