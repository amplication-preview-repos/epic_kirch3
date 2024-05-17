import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BibleSectionServiceBase } from "./base/bibleSection.service.base";

@Injectable()
export class BibleSectionService extends BibleSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
