import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'; //  Controllerはルートグループの指定
import { DiaryEntryService } from './diary-entry.service'; // Serviceクラス使用のため。リクエストを受け取ってServiceに処理を渡してレスポンスを返す。
import { CreateDiaryEntryDto } from './dto/create-diary-entry.dto';
import { UpdateDiaryEntryDto } from './dto/update-diary-entry.dto';

// ControllerはServiceに処理を渡す。
// http://localhost:3000/diary-entryへアクセスされた時のルートのグループ化
@Controller('diary-entry')
export class DiaryEntryController {
  constructor(private readonly diaryEntryService: DiaryEntryService) {}
  // ①コマンドを受け取る
  @Post()
  // リクエストボディのJSONをDTOに変換して受け取る
  create(@Body() dto: CreateDiaryEntryDto) {
    return this.diaryEntryService.create(dto);
  }

  @Get()
  findAll() {
    return this.diaryEntryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // stringからnumberに変換。+idはECMAScript（JSの仕様）
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
