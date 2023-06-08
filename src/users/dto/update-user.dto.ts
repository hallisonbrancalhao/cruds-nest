import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export abstract class UpdateUserDto extends PartialType(CreateUserDto) {}
