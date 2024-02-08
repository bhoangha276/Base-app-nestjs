import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AccountsModule } from './api/accounts/accounts.module'
import { AuthModule } from './api/auth/auth.module'

import appConfig from './configs/app/default'
import databaseConfig from './configs/database/mongodb'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [appConfig, databaseConfig],
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configSecret: ConfigService) => ({
        uri: configSecret.get('uri'),
        dbName: configSecret.get('name'),
      }),
    }),
    AuthModule,
    AccountsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
