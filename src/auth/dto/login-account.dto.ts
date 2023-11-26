import { Account } from '../../accounts/interfaces/account.interface'

export interface LoginAccountDto extends Account {
  email: string
  password: string
}
