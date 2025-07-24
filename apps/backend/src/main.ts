import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ErroFilter from './error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      credentials: true,
    },
  });

  app.useGlobalFilters(new ErroFilter());

  const port = parseInt(process.env.PORT || '4000', 10);
  await app.listen(port);

  console.log(`🚀 Backend rodando em http://localhost:${port}`);
}
bootstrap();
