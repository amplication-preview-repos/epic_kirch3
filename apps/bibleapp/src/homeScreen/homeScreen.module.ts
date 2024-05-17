import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HomeScreenModuleBase } from "./base/homeScreen.module.base";
import { HomeScreenService } from "./homeScreen.service";
import { HomeScreenController } from "./homeScreen.controller";
import { HomeScreenResolver } from "./homeScreen.resolver";

@Module({
  imports: [HomeScreenModuleBase, forwardRef(() => AuthModule)],
  controllers: [HomeScreenController],
  providers: [HomeScreenService, HomeScreenResolver],
  exports: [HomeScreenService],
})
export class HomeScreenModule {}
