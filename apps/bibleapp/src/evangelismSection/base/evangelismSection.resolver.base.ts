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
import { EvangelismSection } from "./EvangelismSection";
import { EvangelismSectionCountArgs } from "./EvangelismSectionCountArgs";
import { EvangelismSectionFindManyArgs } from "./EvangelismSectionFindManyArgs";
import { EvangelismSectionFindUniqueArgs } from "./EvangelismSectionFindUniqueArgs";
import { DeleteEvangelismSectionArgs } from "./DeleteEvangelismSectionArgs";
import { EvangelismSectionService } from "../evangelismSection.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EvangelismSection)
export class EvangelismSectionResolverBase {
  constructor(
    protected readonly service: EvangelismSectionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "EvangelismSection",
    action: "read",
    possession: "any",
  })
  async _evangelismSectionsMeta(
    @graphql.Args() args: EvangelismSectionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [EvangelismSection])
  @nestAccessControl.UseRoles({
    resource: "EvangelismSection",
    action: "read",
    possession: "any",
  })
  async evangelismSections(
    @graphql.Args() args: EvangelismSectionFindManyArgs
  ): Promise<EvangelismSection[]> {
    return this.service.evangelismSections(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => EvangelismSection, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "EvangelismSection",
    action: "read",
    possession: "own",
  })
  async evangelismSection(
    @graphql.Args() args: EvangelismSectionFindUniqueArgs
  ): Promise<EvangelismSection | null> {
    const result = await this.service.evangelismSection(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EvangelismSection)
  @nestAccessControl.UseRoles({
    resource: "EvangelismSection",
    action: "delete",
    possession: "any",
  })
  async deleteEvangelismSection(
    @graphql.Args() args: DeleteEvangelismSectionArgs
  ): Promise<EvangelismSection | null> {
    try {
      return await this.service.deleteEvangelismSection(args);
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
