import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EvangelismSectionServiceBase } from "./base/evangelismSection.service.base";

@Injectable()
export class EvangelismSectionService extends EvangelismSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
