import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HomeScreenServiceBase } from "./base/homeScreen.service.base";

@Injectable()
export class HomeScreenService extends HomeScreenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
