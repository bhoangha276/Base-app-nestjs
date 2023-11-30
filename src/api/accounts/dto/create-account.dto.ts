import { IsEmail, IsNotEmpty, IsEnum, MinLength } from 'class-validator'
import { Role } from './role.enum'

export class CreateAccountDto {
  @IsEnum(Role, { message: 'Valid role required!' })
  role!: 'admin' | 'employee' | 'customer'

  @IsEmail()
  email!: string

  @IsNotEmpty()
  @MinLength(5)
  password!: string
}
