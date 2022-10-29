import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('bye')
  sayBye(): string {
    return this.appService.sayBye();
  }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Get('auth/protected')
  async Check(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
