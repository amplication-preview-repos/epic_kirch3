import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EvangelismSectionModuleBase } from "./base/evangelismSection.module.base";
import { EvangelismSectionService } from "./evangelismSection.service";
import { EvangelismSectionController } from "./evangelismSection.controller";
import { EvangelismSectionResolver } from "./evangelismSection.resolver";

@Module({
  imports: [EvangelismSectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [EvangelismSectionController],
  providers: [EvangelismSectionService, EvangelismSectionResolver],
  exports: [EvangelismSectionService],
})
export class EvangelismSectionModule {}
