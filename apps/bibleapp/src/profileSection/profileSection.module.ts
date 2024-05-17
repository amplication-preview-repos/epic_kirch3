import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProfileSectionModuleBase } from "./base/profileSection.module.base";
import { ProfileSectionService } from "./profileSection.service";
import { ProfileSectionController } from "./profileSection.controller";
import { ProfileSectionResolver } from "./profileSection.resolver";

@Module({
  imports: [ProfileSectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProfileSectionController],
  providers: [ProfileSectionService, ProfileSectionResolver],
  exports: [ProfileSectionService],
})
export class ProfileSectionModule {}
