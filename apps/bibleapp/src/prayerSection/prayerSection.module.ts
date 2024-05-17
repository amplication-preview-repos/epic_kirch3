import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PrayerSectionModuleBase } from "./base/prayerSection.module.base";
import { PrayerSectionService } from "./prayerSection.service";
import { PrayerSectionController } from "./prayerSection.controller";
import { PrayerSectionResolver } from "./prayerSection.resolver";

@Module({
  imports: [PrayerSectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [PrayerSectionController],
  providers: [PrayerSectionService, PrayerSectionResolver],
  exports: [PrayerSectionService],
})
export class PrayerSectionModule {}
