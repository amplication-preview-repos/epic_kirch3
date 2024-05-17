import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorshipSectionServiceBase } from "./base/worshipSection.service.base";

@Injectable()
export class WorshipSectionService extends WorshipSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
