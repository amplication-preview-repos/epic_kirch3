import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CommunitySectionResolverBase } from "./base/communitySection.resolver.base";
import { CommunitySection } from "./base/CommunitySection";
import { CommunitySectionService } from "./communitySection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CommunitySection)
export class CommunitySectionResolver extends CommunitySectionResolverBase {
  constructor(
    protected readonly service: CommunitySectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
