import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDiaryEntryDto {
    // IsNotEmptyは必須項目
  @IsNotEmpty()
  @IsString()
  date: string;

  @IsNotEmpty()
  @IsString()
  sleepTime: string;

  @IsNotEmpty()
  @IsString()
  wakeUpTime: string;

  @IsNotEmpty()
  @IsString()
  workout: string;

  @IsNotEmpty()
  @IsString()
  study: string;

  @IsNotEmpty()
  @IsString()
  reading: string;

  breakfast: string;
  lunch: string;
  dinner: string;
  other: string;

  customFields?: { key: string; value: string }[];
}
