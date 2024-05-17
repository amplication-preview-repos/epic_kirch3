import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProfileSectionResolverBase } from "./base/profileSection.resolver.base";
import { ProfileSection } from "./base/ProfileSection";
import { ProfileSectionService } from "./profileSection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProfileSection)
export class ProfileSectionResolver extends ProfileSectionResolverBase {
  constructor(
    protected readonly service: ProfileSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
