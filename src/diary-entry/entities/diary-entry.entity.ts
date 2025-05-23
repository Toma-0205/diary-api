import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'; // EntityがDBテーブル、Primary〜は主キー・自動採番

@Entity() // 明示的にするなら('diary_entries')とか
export class DiaryEntry {
// ここまでで、キャメルからスネークに変換（TypeORMの仕様。diary_entryというテーブル名に。）
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  @Column()
  value: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
