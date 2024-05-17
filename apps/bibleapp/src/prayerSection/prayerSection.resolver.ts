import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PrayerSectionResolverBase } from "./base/prayerSection.resolver.base";
import { PrayerSection } from "./base/PrayerSection";
import { PrayerSectionService } from "./prayerSection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PrayerSection)
export class PrayerSectionResolver extends PrayerSectionResolverBase {
  constructor(
    protected readonly service: PrayerSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
