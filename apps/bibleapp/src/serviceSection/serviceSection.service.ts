import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceSectionServiceBase } from "./base/serviceSection.service.base";

@Injectable()
export class ServiceSectionService extends ServiceSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
