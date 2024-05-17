import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ServiceSectionModuleBase } from "./base/serviceSection.module.base";
import { ServiceSectionService } from "./serviceSection.service";
import { ServiceSectionController } from "./serviceSection.controller";
import { ServiceSectionResolver } from "./serviceSection.resolver";

@Module({
  imports: [ServiceSectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ServiceSectionController],
  providers: [ServiceSectionService, ServiceSectionResolver],
  exports: [ServiceSectionService],
})
export class ServiceSectionModule {}
