import { Injectable } from '@nestjs/common'
import { AccountsService } from '../accounts/accounts.service'
import { SignupAccountDto } from './dto/signup-account.dto'
import { LoginAccountDto } from './dto/login-account.dto'

@Injectable()
export class AuthService {
  constructor(private accountsService: AccountsService) {}

  async validateAccount(email: string, pass: string): Promise<any> {
    const account = await this.accountsService.findByEmail(email)
    if (account && account.password === pass) {
      const { password, ...result } = account
      return result
    }
    return null
  }

  async signUp(account: SignupAccountDto) {}

  async login(account: LoginAccountDto) {}

  async verify(id: string, token: string) {}
}
