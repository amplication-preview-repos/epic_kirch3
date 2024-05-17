import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GivingSectionServiceBase } from "./base/givingSection.service.base";

@Injectable()
export class GivingSectionService extends GivingSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
