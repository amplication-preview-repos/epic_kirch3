import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FamilySectionModuleBase } from "./base/familySection.module.base";
import { FamilySectionService } from "./familySection.service";
import { FamilySectionController } from "./familySection.controller";
import { FamilySectionResolver } from "./familySection.resolver";

@Module({
  imports: [FamilySectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [FamilySectionController],
  providers: [FamilySectionService, FamilySectionResolver],
  exports: [FamilySectionService],
})
export class FamilySectionModule {}
