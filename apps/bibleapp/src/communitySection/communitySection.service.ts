import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommunitySectionServiceBase } from "./base/communitySection.service.base";

@Injectable()
export class CommunitySectionService extends CommunitySectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
