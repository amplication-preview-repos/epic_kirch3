import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HelpSupportSectionModuleBase } from "./base/helpSupportSection.module.base";
import { HelpSupportSectionService } from "./helpSupportSection.service";
import { HelpSupportSectionController } from "./helpSupportSection.controller";
import { HelpSupportSectionResolver } from "./helpSupportSection.resolver";

@Module({
  imports: [HelpSupportSectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [HelpSupportSectionController],
  providers: [HelpSupportSectionService, HelpSupportSectionResolver],
  exports: [HelpSupportSectionService],
})
export class HelpSupportSectionModule {}
