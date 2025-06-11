import {Livro} from '../model/Livro'

export interface LivroRepository {

  findNumber(number: number): void;
  listBooks(): void;
  register(book: Livro): void;
  update(book: Livro): void;

  removeBook(number: number): void;

  //Adicionar devolução
}