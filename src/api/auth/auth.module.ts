import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AccountsService } from '../accounts/accounts.service'

@Module({
  controllers: [AuthController],
  providers: [AuthService, AccountsService],
})
export class AuthModule {}
