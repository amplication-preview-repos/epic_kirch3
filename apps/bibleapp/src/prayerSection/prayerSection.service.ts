import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrayerSectionServiceBase } from "./base/prayerSection.service.base";

@Injectable()
export class PrayerSectionService extends PrayerSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
