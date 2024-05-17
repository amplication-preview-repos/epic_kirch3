import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FamilySectionServiceBase } from "./base/familySection.service.base";

@Injectable()
export class FamilySectionService extends FamilySectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
