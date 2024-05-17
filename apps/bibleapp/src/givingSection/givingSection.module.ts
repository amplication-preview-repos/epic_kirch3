import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GivingSectionModuleBase } from "./base/givingSection.module.base";
import { GivingSectionService } from "./givingSection.service";
import { GivingSectionController } from "./givingSection.controller";
import { GivingSectionResolver } from "./givingSection.resolver";

@Module({
  imports: [GivingSectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [GivingSectionController],
  providers: [GivingSectionService, GivingSectionResolver],
  exports: [GivingSectionService],
})
export class GivingSectionModule {}
