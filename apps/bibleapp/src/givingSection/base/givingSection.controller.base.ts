/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { GivingSectionService } from "../givingSection.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GivingSectionCreateInput } from "./GivingSectionCreateInput";
import { GivingSection } from "./GivingSection";
import { GivingSectionFindManyArgs } from "./GivingSectionFindManyArgs";
import { GivingSectionWhereUniqueInput } from "./GivingSectionWhereUniqueInput";
import { GivingSectionUpdateInput } from "./GivingSectionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GivingSectionControllerBase {
  constructor(
    protected readonly service: GivingSectionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GivingSection })
  @nestAccessControl.UseRoles({
    resource: "GivingSection",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createGivingSection(
    @common.Body() data: GivingSectionCreateInput
  ): Promise<GivingSection> {
    return await this.service.createGivingSection({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GivingSection] })
  @ApiNestedQuery(GivingSectionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GivingSection",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async givingSections(
    @common.Req() request: Request
  ): Promise<GivingSection[]> {
    const args = plainToClass(GivingSectionFindManyArgs, request.query);
    return this.service.givingSections({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GivingSection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GivingSection",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async givingSection(
    @common.Param() params: GivingSectionWhereUniqueInput
  ): Promise<GivingSection | null> {
    const result = await this.service.givingSection({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: GivingSection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GivingSection",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateGivingSection(
    @common.Param() params: GivingSectionWhereUniqueInput,
    @common.Body() data: GivingSectionUpdateInput
  ): Promise<GivingSection | null> {
    try {
      return await this.service.updateGivingSection({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: GivingSection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GivingSection",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGivingSection(
    @common.Param() params: GivingSectionWhereUniqueInput
  ): Promise<GivingSection | null> {
    try {
      return await this.service.deleteGivingSection({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
