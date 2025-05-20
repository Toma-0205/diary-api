import { Injectable } from '@nestjs/common';
import { CreateDiaryEntryDto } from './dto/create-diary-entry.dto';
import { UpdateDiaryEntryDto } from './dto/update-diary-entry.dto';

type DiaryEntry = CreateDiaryEntryDto & { id: number; createdAt: Date };

@Injectable()
export class DiaryEntryService {
  private entries: DiaryEntry[] = [];
  private idCounter = 1;

  create(entryDto: CreateDiaryEntryDto): DiaryEntry {
    const newEntry: DiaryEntry = {
      id: this.idCounter++,
      key: entryDto.key,
      value: entryDto.value,
      createdAt: new Date(),
    };
    this.entries.push(newEntry);
    return newEntry;
  }

  findAll() {
    return this.entries;
  }

  findOne(id: number) {
    return `This action returns a #${id} diaryEntry`;
  }

  update(id: number, updateDiaryEntryDto: UpdateDiaryEntryDto) {
    return `This action updates a #${id} diaryEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} diaryEntry`;
  }
}
