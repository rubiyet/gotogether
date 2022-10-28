import { IsString } from '@nestjs/class-validator';

export class addBookDto {
  @IsString()
  name: string;
}
