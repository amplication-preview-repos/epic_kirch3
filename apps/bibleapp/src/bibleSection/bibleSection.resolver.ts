import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BibleSectionResolverBase } from "./base/bibleSection.resolver.base";
import { BibleSection } from "./base/BibleSection";
import { BibleSectionService } from "./bibleSection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BibleSection)
export class BibleSectionResolver extends BibleSectionResolverBase {
  constructor(
    protected readonly service: BibleSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
