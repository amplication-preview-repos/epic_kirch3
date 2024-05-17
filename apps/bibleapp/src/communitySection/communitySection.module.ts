import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommunitySectionModuleBase } from "./base/communitySection.module.base";
import { CommunitySectionService } from "./communitySection.service";
import { CommunitySectionController } from "./communitySection.controller";
import { CommunitySectionResolver } from "./communitySection.resolver";

@Module({
  imports: [CommunitySectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [CommunitySectionController],
  providers: [CommunitySectionService, CommunitySectionResolver],
  exports: [CommunitySectionService],
})
export class CommunitySectionModule {}
