import { Account } from '../../accounts/interfaces/account.interface'

export interface SignupAccountDto extends Account {
  employeeID: string
  userID: string

  role: string
  email: string
  password: string
}
