import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { BibleSectionModule } from "./bibleSection/bibleSection.module";
import { HomeScreenModule } from "./homeScreen/homeScreen.module";
import { PrayerSectionModule } from "./prayerSection/prayerSection.module";
import { WorshipSectionModule } from "./worshipSection/worshipSection.module";
import { FamilySectionModule } from "./familySection/familySection.module";
import { EvangelismSectionModule } from "./evangelismSection/evangelismSection.module";
import { HelpSupportSectionModule } from "./helpSupportSection/helpSupportSection.module";
import { GivingSectionModule } from "./givingSection/givingSection.module";
import { ProfileSectionModule } from "./profileSection/profileSection.module";
import { CommunitySectionModule } from "./communitySection/communitySection.module";
import { GrowthSectionModule } from "./growthSection/growthSection.module";
import { ServiceSectionModule } from "./serviceSection/serviceSection.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

import { LoggerModule } from "./logger/logger.module";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    LoggerModule,
    ACLModule,
    AuthModule,
    UserModule,
    BibleSectionModule,
    HomeScreenModule,
    PrayerSectionModule,
    WorshipSectionModule,
    FamilySectionModule,
    EvangelismSectionModule,
    HelpSupportSectionModule,
    GivingSectionModule,
    ProfileSectionModule,
    CommunitySectionModule,
    GrowthSectionModule,
    ServiceSectionModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
