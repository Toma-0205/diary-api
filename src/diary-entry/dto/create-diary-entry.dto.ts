export class CreateDiaryEntryDto {
    // key: string;    // 例: "sleepTime"
    // value: string;  // 例: "23:30"
    date: string;
    wakeUpTime: string;
    sleepTime: string;
    breakfast: string;
    lunch: string;
    dinner: string;
    workout: string;
    study: string;
    reading: string;
    other: string;
}
