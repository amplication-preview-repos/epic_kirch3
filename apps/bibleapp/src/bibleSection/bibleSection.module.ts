import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BibleSectionModuleBase } from "./base/bibleSection.module.base";
import { BibleSectionService } from "./bibleSection.service";
import { BibleSectionController } from "./bibleSection.controller";
import { BibleSectionResolver } from "./bibleSection.resolver";

@Module({
  imports: [BibleSectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [BibleSectionController],
  providers: [BibleSectionService, BibleSectionResolver],
  exports: [BibleSectionService],
})
export class BibleSectionModule {}
