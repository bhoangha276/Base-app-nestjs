import { PartialType } from '@nestjs/mapped-types'
import { LoginAccountDto } from './login-account.dto'

export class SignupAccountDto extends PartialType(LoginAccountDto) {
  role!: string
}
