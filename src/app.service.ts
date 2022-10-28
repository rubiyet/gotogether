import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Adi!';
  }
  sayBye(): string {
    return 'Bye Adi!';
  }
}
