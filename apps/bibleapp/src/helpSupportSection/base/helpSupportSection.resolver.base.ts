/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HelpSupportSection } from "./HelpSupportSection";
import { HelpSupportSectionCountArgs } from "./HelpSupportSectionCountArgs";
import { HelpSupportSectionFindManyArgs } from "./HelpSupportSectionFindManyArgs";
import { HelpSupportSectionFindUniqueArgs } from "./HelpSupportSectionFindUniqueArgs";
import { DeleteHelpSupportSectionArgs } from "./DeleteHelpSupportSectionArgs";
import { HelpSupportSectionService } from "../helpSupportSection.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HelpSupportSection)
export class HelpSupportSectionResolverBase {
  constructor(
    protected readonly service: HelpSupportSectionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "HelpSupportSection",
    action: "read",
    possession: "any",
  })
  async _helpSupportSectionsMeta(
    @graphql.Args() args: HelpSupportSectionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [HelpSupportSection])
  @nestAccessControl.UseRoles({
    resource: "HelpSupportSection",
    action: "read",
    possession: "any",
  })
  async helpSupportSections(
    @graphql.Args() args: HelpSupportSectionFindManyArgs
  ): Promise<HelpSupportSection[]> {
    return this.service.helpSupportSections(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => HelpSupportSection, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "HelpSupportSection",
    action: "read",
    possession: "own",
  })
  async helpSupportSection(
    @graphql.Args() args: HelpSupportSectionFindUniqueArgs
  ): Promise<HelpSupportSection | null> {
    const result = await this.service.helpSupportSection(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => HelpSupportSection)
  @nestAccessControl.UseRoles({
    resource: "HelpSupportSection",
    action: "delete",
    possession: "any",
  })
  async deleteHelpSupportSection(
    @graphql.Args() args: DeleteHelpSupportSectionArgs
  ): Promise<HelpSupportSection | null> {
    try {
      return await this.service.deleteHelpSupportSection(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
