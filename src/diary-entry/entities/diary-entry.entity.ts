import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'; // EntityがDBテーブル、Primary〜は主キー・自動採番

@Entity() // 明示的にするなら('diary_entries')とか
export class DiaryEntry {
// ここまでで、キャメルからスネークに変換（TypeORMの仕様。diary_entryというテーブル名に。）
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  wakeUpTime: string;

  @Column()
  sleepTime: string;

  @Column()
  breakfast: string;

  @Column()
  lunch: string;

  @Column()
  dinner: string;

  @Column()
  workout: string;

  @Column()
  study: string;

  @Column()
  reading: string;

  @Column()
  other: string;

  @CreateDateColumn()
  createdAt: Date;
  // @Column()›
  // key: string;

  // @Column()
  // value: string;

  // @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  // createdAt: Date;
}
