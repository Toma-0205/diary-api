import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiaryEntry } from './entities/diary-entry.entity';
import { DiaryEntryService } from './diary-entry.service';
import { DiaryEntryController } from './diary-entry.controller';
// DiaryEntryの全パーツ

@Module({
  // TypeORMでこのモジュールないからDiaryEntryのCRUD（リポジトリ）を有効に。
  imports: [TypeOrmModule.forFeature([DiaryEntry])],
  controllers: [DiaryEntryController],
  providers: [DiaryEntryService],
})
export class DiaryEntryModule {}
