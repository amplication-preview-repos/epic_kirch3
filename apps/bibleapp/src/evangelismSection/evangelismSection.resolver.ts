import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EvangelismSectionResolverBase } from "./base/evangelismSection.resolver.base";
import { EvangelismSection } from "./base/EvangelismSection";
import { EvangelismSectionService } from "./evangelismSection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EvangelismSection)
export class EvangelismSectionResolver extends EvangelismSectionResolverBase {
  constructor(
    protected readonly service: EvangelismSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
