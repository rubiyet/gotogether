import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  getBooks(): string {
    return 'These are the books';
  }

  getBook(): string {
    return 'This is the book';
  }

  addBook(data) {
    // console.log('Data return', data);
    return data.name;
  }
}
