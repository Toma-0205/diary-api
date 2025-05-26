import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiaryEntry } from './diary-entry/entities/diary-entry.entity';
import { DiaryEntryModule } from './diary-entry/diary-entry.module';

// デコレーター（@Module）でNestJSにモジュールであると宣言
@Module({
  // TypeORMを使用してSQLiteに接続
  imports: [
    TypeOrmModule.forRoot({
      // 使用するDB
      type: 'sqlite',
      // 作成するファイル名
      database: 'db.sqlite',
      // エンティティ
      entities: [DiaryEntry],
      synchronize: true, // 開発中のみtrueで自動生成。（本番はfalseにするよ！！！！）
    }),
    DiaryEntryModule,
  ],

  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
