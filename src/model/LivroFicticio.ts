import { Livro } from "./Livro";

export class LivroFicticio extends Livro {
  private _gender: string

  constructor(number: number, title: string, author: string, 
    type: number, gender: string) {
    super(number, title, author, type)
    this._gender = gender
  }

  public get gender() {
    return this._gender;
  }
  public set gender(gender: string) {
    this._gender = gender;
  }


  public visualizar(): void {
    //Puxa o metodo da classe mãe, adicionando algumas alterações
    super.visualizar()
    console.log(`Genero: ${this._gender}`)
  }
}