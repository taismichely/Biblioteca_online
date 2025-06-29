
export abstract class Livro {
  private _number: number
  private _title: string
  private _author: string
  private _type: number

  constructor(number: number, title: string, author: string, type: number) {
    this._number = number
    this._title = title
    this._author = author
    this._type = type
  }

  public get number() {
    return this._number;
  }
  public set number(number: number) {
    this._number = number;
  }

  public get title() {
    return this._title;
  }
  public set title(title: string) {
    this._title = title;
  }

  public get author() {
    return this._author;
  }
  public set author(author: string) {
    this._author = author;
  }

  public get type() {
    return this._type;
  }
  public set type(type: number) {
    this._type = type
  }

  public visualizar(): void {
    let type: string = "";

    switch(this._type) {
      case 1:
        type = "Ficcao";
        break;
      case 2: 
        type = "Tecnico";
        break;
    }

    console.log("\n*****************************************")
    console.log("Dados do Livro: ")
    console.log("\n*****************************************")
    console.log(`Número do livro: ${this._number}`)
    console.log(`Titulo: ${this._title}`)
    console.log(`Tipo de livro: ${type}`)
    console.log(`Autor: ${this._author}`)

  }

}
