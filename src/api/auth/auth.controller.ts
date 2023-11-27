import { Body, Controller, Dependencies, Param, Post } from '@nestjs/common'
import { LoginAccountDto } from './dto/login-account.dto'
import { SignupAccountDto } from './dto/signup-account.dto'
import { AuthService } from './auth.service'

@Controller('auth')
@Dependencies(AuthService)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() signupAccountDto: SignupAccountDto): Promise<{ success: number }> {
    await this.authService.signUp(signupAccountDto)
    return { success: 1 }
  }

  @Post('/login')
  async login(@Body() loginAccountDto: LoginAccountDto): Promise<{ success: number }> {
    await this.authService.login(loginAccountDto)
    return { success: 1 }
  }

  @Post('/verify/:id/:token')
  async verify(@Param() param): Promise<{ success: number; message: string }> {
    await this.authService.verify(param.id, param.token)

    return {
      success: 1,
      message: 'Email verified sucessfully',
    }
  }
}
