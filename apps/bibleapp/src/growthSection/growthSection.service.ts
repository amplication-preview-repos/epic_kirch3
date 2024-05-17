import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GrowthSectionServiceBase } from "./base/growthSection.service.base";

@Injectable()
export class GrowthSectionService extends GrowthSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
