import { Test, TestingModule } from '@nestjs/testing';
import { DiaryEntryController } from './diary-entry.controller';
import { DiaryEntryService } from './diary-entry.service';

describe('DiaryEntryController', () => {
  let controller: DiaryEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiaryEntryController],
      providers: [DiaryEntryService],
    }).compile();

    controller = module.get<DiaryEntryController>(DiaryEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
