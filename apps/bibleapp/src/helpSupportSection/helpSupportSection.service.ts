import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HelpSupportSectionServiceBase } from "./base/helpSupportSection.service.base";

@Injectable()
export class HelpSupportSectionService extends HelpSupportSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
