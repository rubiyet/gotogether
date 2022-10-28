import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('books');
  }
}
