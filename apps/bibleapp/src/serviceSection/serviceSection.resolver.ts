import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ServiceSectionResolverBase } from "./base/serviceSection.resolver.base";
import { ServiceSection } from "./base/ServiceSection";
import { ServiceSectionService } from "./serviceSection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ServiceSection)
export class ServiceSectionResolver extends ServiceSectionResolverBase {
  constructor(
    protected readonly service: ServiceSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
