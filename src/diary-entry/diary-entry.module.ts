import { Module } from '@nestjs/common';
import { DiaryEntryService } from './diary-entry.service';
import { DiaryEntryController } from './diary-entry.controller';

@Module({
  controllers: [DiaryEntryController],
  providers: [DiaryEntryService],
})
export class DiaryEntryModule {}
