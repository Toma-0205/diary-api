import { Injectable } from '@nestjs/common';  // デコレータ@Injectable()を使用するため、NestJSのDI対象であることを示すために使用する
import { InjectRepository } from '@nestjs/typeorm'; // TyepORMのリポジトリをNestJSのDIコンテナに注入。自動注入を伝達。
import { Repository } from 'typeorm'; // save(),find(),delete()などメソッドを使用。
import { DiaryEntry } from './entities/diary-entry.entity'; // SQLite対応のエンティティ（テーブル定義）
import { CreateDiaryEntryDto } from './dto/create-diary-entry.dto'; // POSTでJSONを受け取る。
import { UpdateDiaryEntryDto } from './dto/update-diary-entry.dto'; // PUTなど更新・編集機能用。

// ビジネスロジックはserviceで行う。（UI、btnやformなどの処理内容）
// ②ビジネスロジック

@Injectable() //DBAPIをDIで注入
// 外出し
export class DiaryEntryService {
  // リポジトリ注入
  constructor(
    @InjectRepository(DiaryEntry)
    // readonlyで書き換え禁止
    // DiaryEntryはEntity（設計図）だから、diaryRepoなど定義しないとDB操作はできない。
    private readonly diaryRepo: Repository<DiaryEntry>,
  ) {}
  // ここまででTypeORMがEntityをもとにリポジトリを生成している。操作するために
  
  // ③SQLiteの操作
  // TypeORMはPromiseベースのためasync
  async create(entryDto: CreateDiaryEntryDto): Promise<DiaryEntry> { //dtoはPOSTのBody, DairyEntryを返す。
    // dtoを基に作成
    // const entry = this.diaryRepo.create({
    //   key: dto.key,
    //   value: dto.value,
    // });
    const entry = this.diaryRepo.create(entryDto); // DTO全体を渡す
    // DBに保存
    return this.diaryRepo.save(entry);
  }

  async findAll(): Promise<DiaryEntry[]> {
    // 全て返す、SELECT * FROM diary_entry、新しい順
    // RepositoryがEntityを使って動く
    return this.diaryRepo.find({ // DiaryEntry というテーブルにSQL実行
      // select: ['id', 'key'], 返すフィールドを指定
      order: { createdAt: 'DESC' }
    });
  }

  async findOne(id: number): Promise<DiaryEntry | null> {
    return this.diaryRepo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateDiaryEntryDto): Promise<DiaryEntry> {
    // id=?のレコードを探してdtoで上書き。部分上書き。
    await this.diaryRepo.update(id, dto);
    // findOneByはレコードを1件だけ取得するTypeORMのメソッド。where句。
    return this.diaryRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.diaryRepo.delete(id);
  }
}
