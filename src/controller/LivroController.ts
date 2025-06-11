import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroController implements LivroRepository {

  private listBooksarr: Array<Livro> = new Array<Livro>();
  valueInc: number = 0;
  
  findNumber(number: number): void {
    let findBook = this.findInArray(number);
    if(findBook != null) {
      findBook.visualizar();
    } else {
      console.log(`A conta número ${number} não foi encontrada!`);
    }
  }
  listBooks(): void {
    for(let book of this.listBooksarr) {
      book.visualizar();
    }
  }
  register(book: Livro): void {
    this.listBooksarr.push(book);
    console.log(`O livro número ${book.number} foi criada com sucesso!`)
  }
  update(book: Livro): void {
    let findbook = this.findInArray(book.number);

    if(findbook != null) {
      this.listBooksarr[this.listBooksarr.indexOf(findbook)] = book;
      console.log(`Os dados do livro número ${book.number} foram atualizados`);
    } else {
      console.log(`O livro do número ${book.number} não foi encontrado!`);
    }
  }
  removeBook(number: number): void {
    let findBook = this.findInArray(number);

    if(findBook != null) {
      this.listBooksarr.splice(this.listBooksarr.indexOf(findBook), 1);
      console.log(`O livro do número ${number} foi retirado!`)
    } else {
      console.log(`A conta do número ${number} não foi encontrado!`);
    }
  }


  //Metodos auxiliares
  public generateNumber(): number {
    return ++ this.valueInc;
  }
  public findInArray(number: number) : Livro | null {
    for(let book of this.listBooksarr) {
      if(book.number === number) {
        return book;
      }
    }
    return null;
  }
}