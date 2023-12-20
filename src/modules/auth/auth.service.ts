import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(): string {
    return 'Register user';
  }
  login(): string {
    return 'Login user';
  }
}
