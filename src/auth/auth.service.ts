import { Injectable } from '@nestjs/common'
import { AccountsService } from '../accounts/accounts.service'
import { Account } from '../accounts/interfaces/account.interface'

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

  async signUp(account: Account) {}

  async login(account: Account) {}

  async verify(id: string, token: string) {}
}
