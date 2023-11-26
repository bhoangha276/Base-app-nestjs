import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AccountsModule } from './accounts/accounts.module'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AccountsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
