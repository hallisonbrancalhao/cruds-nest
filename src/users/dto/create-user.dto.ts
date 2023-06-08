import { IsString, IsNumber, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsNumber()
  age?: number;

  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(8, {
    message: 'A senha precisa conter no mínimo 8 caracteres',
  })
  password?: string;
}
