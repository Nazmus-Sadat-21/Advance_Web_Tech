import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateCourse {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  instructor: string;

  @IsNumber()
  @Min(1)
  @Max(3)
  @Type(() => Number)
  credits: number;

  @IsString()
  @IsOptional()
  descriptio?: string;
}
