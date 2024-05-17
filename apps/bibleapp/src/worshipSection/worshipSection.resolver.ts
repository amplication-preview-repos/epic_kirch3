import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorshipSectionResolverBase } from "./base/worshipSection.resolver.base";
import { WorshipSection } from "./base/WorshipSection";
import { WorshipSectionService } from "./worshipSection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorshipSection)
export class WorshipSectionResolver extends WorshipSectionResolverBase {
  constructor(
    protected readonly service: WorshipSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
