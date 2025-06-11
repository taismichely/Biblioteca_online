import { Livro } from "./Livro";

export class LivroTecnico extends Livro {
  private _edition: number

  constructor(number: number, title: string, author: string, type: number, edition: number) {
    super(number, title, author, type)
    this._edition = edition
  }

  public get edition() {
    return this._edition
  }
  public set edition(edition: number) {
    this._edition = edition
  }

  public visualizar(): void {
    super.visualizar()
    console.log(`Edição: ${this._edition}`)
  }
}