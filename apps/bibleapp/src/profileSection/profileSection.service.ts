import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProfileSectionServiceBase } from "./base/profileSection.service.base";

@Injectable()
export class ProfileSectionService extends ProfileSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
