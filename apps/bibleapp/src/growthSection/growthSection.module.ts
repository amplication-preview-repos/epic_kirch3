import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GrowthSectionModuleBase } from "./base/growthSection.module.base";
import { GrowthSectionService } from "./growthSection.service";
import { GrowthSectionController } from "./growthSection.controller";
import { GrowthSectionResolver } from "./growthSection.resolver";

@Module({
  imports: [GrowthSectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [GrowthSectionController],
  providers: [GrowthSectionService, GrowthSectionResolver],
  exports: [GrowthSectionService],
})
export class GrowthSectionModule {}
