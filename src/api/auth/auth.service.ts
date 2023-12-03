import { Injectable } from '@nestjs/common'
import { SignupAccountDto } from './dto/signup-account.dto'
import { LoginAccountDto } from './dto/login-account.dto'

@Injectable()
export class AuthService {
  constructor() {}

  async signUp(account: SignupAccountDto) {}

  async login(account: LoginAccountDto) {}

  async verify(id: string, token: string) {}
}
