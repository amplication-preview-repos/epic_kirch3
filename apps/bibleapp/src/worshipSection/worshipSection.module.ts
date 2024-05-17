import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorshipSectionModuleBase } from "./base/worshipSection.module.base";
import { WorshipSectionService } from "./worshipSection.service";
import { WorshipSectionController } from "./worshipSection.controller";
import { WorshipSectionResolver } from "./worshipSection.resolver";

@Module({
  imports: [WorshipSectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorshipSectionController],
  providers: [WorshipSectionService, WorshipSectionResolver],
  exports: [WorshipSectionService],
})
export class WorshipSectionModule {}
