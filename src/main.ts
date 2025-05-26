import { NestFactory } from '@nestjs/core'; // NestJSアプリを生成するための関数
import { AppModule } from './app.module'; // ルートモジュールがAppModuleにある

// bootstrap関数
async function bootstrap() {
  // AppModuleでアプリを作成
  const app = await NestFactory.create(AppModule);

  // CORSを有効化（フロント5173→APIサーバ3000、別オリジンでの通信を許可）
  app.enableCors();
  // 指定する場合
  // app.enableCors({ origin: 'http://localhost:5173' }) 

  // PORT設定があればそれを使用、なければ3000を使用
  await app.listen(process.env.PORT ?? 3000);
}
// アプリ立ち上げ
bootstrap();
