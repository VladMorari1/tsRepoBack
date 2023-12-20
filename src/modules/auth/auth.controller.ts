import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(): string {
    return this.authService.login();
  }

  @Post()
  login(): string {
    return this.authService.login();
  }
}
