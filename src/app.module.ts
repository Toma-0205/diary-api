import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiaryEntry } from './diary-entry/entities/diary-entry.entity';
import { DiaryEntryModule } from './diary-entry/diary-entry.module';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';


@Module({
  imports: [
    // .env を読み込む
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // PostgreSQL 設定（環境変数ベース）
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService): TypeOrmModuleOptions => {
        const dbConfig: TypeOrmModuleOptions = {
          type: 'postgres',
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          username: config.get<string>('DB_USERNAME'),
          password: config.get<string>('DB_PASSWORD'),
          database: config.get<string>('DB_DATABASE'),
          entities: [DiaryEntry],
          synchronize: true,
          ssl: true,
          extra: {
            ssl: {
              rejectUnauthorized: false,
            },
          },
        };
      
        console.log('Connecting to DB:', dbConfig);
        return dbConfig;
      },      
    }),

    

    DiaryEntryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
