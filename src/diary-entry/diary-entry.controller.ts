import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiaryEntryService } from './diary-entry.service';
import { CreateDiaryEntryDto } from './dto/create-diary-entry.dto';
import { UpdateDiaryEntryDto } from './dto/update-diary-entry.dto';

@Controller('diary-entry')
export class DiaryEntryController {
  constructor(private readonly diaryEntryService: DiaryEntryService) {}

  @Post()
  create(@Body() createDiaryEntryDto: CreateDiaryEntryDto) {
    return this.diaryEntryService.create(createDiaryEntryDto);
  }

  @Get()
  findAll() {
    return this.diaryEntryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diaryEntryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiaryEntryDto: UpdateDiaryEntryDto) {
    return this.diaryEntryService.update(+id, updateDiaryEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diaryEntryService.remove(+id);
  }
}
