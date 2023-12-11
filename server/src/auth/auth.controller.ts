import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signIn(@Body() signInDto: LoginDto) {
    console.log('signInDto', signInDto);
    const { email, password } = signInDto;
    return this.authService.signIn(email, password);
  }
}
