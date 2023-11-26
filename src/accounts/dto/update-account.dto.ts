import { Account } from '../interfaces/account.interface'

export interface UpdateAccountDto extends Account {
  employeeID: string
  userID: string

  role: string
  email: string
  password: string
}
