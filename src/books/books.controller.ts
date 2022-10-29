import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { addBookDto } from './dto/add-Book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('list')
  getBooks(): string {
    return this.booksService.getBooks();
  }
  @Get('list/:id')
  getBook(@Param() id: string): string {
    console.log(id);
    return this.booksService.getBook();
  }
  @Post('addBook')
  addBook(@Body() body: addBookDto) {
    // console.log(body);

    return this.booksService.addBook(body);
  }
}
