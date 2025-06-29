import read from 'readline-sync'
import {Livro} from './src/model/Livro'
import { LivroFicticio } from './src/model/LivroFicticio';
import { LivroTecnico } from './src/model/LivroTecnico';
import { LivroController } from './src/controller/LivroController';

export function main() {

  //instancia da Classe LivroController
  let bookData: LivroController = new LivroController();

  // const Livrofic: LivroFicticio = new LivroFicticio (1, 'Maria', 'Eduardo', 2, 'Romance')
  // // const LivroTec: LivroTecnico = new LivroTecnico(2,'Javascript', 'Diogo', 2, 4)
  // bookData.register(Livrofic);

  // bookData.listBooks();

  //Aux de variaveis
  let option, auxnumber, auxtype, auxedition: number;
  let auxtitle, auxauthor, auxgender: string

  const typesBook = ['Ficcao', 'Tecnico'];

  while (true) {
  
    console.log('*********************************************************')
    console.log('                                                         ')
    console.log('                    ESTANTE COLORIDA                     ')
    console.log('              Onde a literatura ganha vida               ')
    console.log('                                                         ')
    console.log('*********************************************************')
    console.log('                1 - Cadastrar um livro                   ')
    console.log('                2 - Listar todos os livros               ')
    console.log('                3 - Buscar livro por número              ')
    console.log('                4 - Atualizar dados do livro             ')
    console.log('                5 - Retirada                             ')
    console.log('                6 - Sair                                 ')
    console.log('                                                         ')
    console.log('*********************************************************')
    console.log('                                                         ')

    //Pergunta qual opcao deseja seguir
    console.log('Entre com a opção desejada: ')
    option = read.questionInt('')

    if(option === 6) {
      console.log('Aguardamos seu retorno!')
      sobre();
      process.exit(0);
    }

    switch(option) {
      case 1:
        console.log('Cadastro de Livro...')

        console.log("Digite o titulo do livro: ")
        auxtitle = read.question('');

        console.log("Digite o nome do autor(as): ")
        auxauthor = read.question('')

        console.log("Selecione o tipo do livro: ")
        auxtype = read.keyInSelect(typesBook, "", {cancel: false}) + 1;

        switch(auxtype) {
          case 1:
            console.log("Digite o genero do livro: ")
            auxgender = read.question('')
            bookData.register(new LivroFicticio(bookData.generateNumber(), auxtitle, auxauthor, 
            auxtype, auxgender));
            break;
          case 2:
            console.log("Digite o número de edição do livro: ")
            auxedition = read.questionInt('')
            bookData.register( new LivroTecnico(bookData.generateNumber(), auxtitle, auxauthor, auxtype,
            auxedition));
            break
        }

        keyPress()
        break
      case 2:
        console.log('Listar livros...')
        bookData.listBooks();
        keyPress()
        break
      case 3:
        console.log('Buscar livro pelo número...')
        console.log("Digite o número do livro: ")
        auxnumber = read.questionInt('');
        bookData.findNumber(auxnumber);

        keyPress()
        break
      case 4:
        console.log('Atualizar dados...')

        console.log("Digite o número do livro: ")
        auxnumber = read.questionInt('');

        let book = bookData.findInArray(auxnumber);

        if(book != null) {

          console.log("Digite o titulo do livro: ")
          auxtitle = read.question('');

          console.log("Digite o nome do autor(as): ")
          auxauthor = read.question('')

          auxtype = book.type;

          switch(auxtype) {
            case 1:
              console.log("Digite o genero do livro: ")
              auxgender = read.question('')
              bookData.register(new LivroFicticio(bookData.generateNumber(), auxtitle, auxauthor, 
              auxtype, auxgender));
              break;
            case 2:
              console.log("Digite o número de edição do livro: ")
              auxedition = read.questionInt('')
              bookData.register( new LivroTecnico(bookData.generateNumber(), auxtitle, auxauthor, auxtype,
              auxedition));
              break
          }
        } else {
          console.log(`O número do livro: ${auxnumber} não foi encontrado!`)
        }

        keyPress()
        break
      case 5:
        console.log('Retirada de livro...')

        console.log("Digite o número do livro: ")
        auxnumber = read.questionInt('');
        bookData.removeBook(auxnumber);

        keyPress()
        break
      default:
        console.log('Opção inválida!')
        break
    }
  }

  function sobre(): void {
      console.log('\n*****************************************************')
      console.log('Projeto desenvolvido por: Taís Michely')
      console.log('Generation Brasil - taise@genstudents.org')
      console.log('github.com/taismichely')
      console.log('**************************************************** **')
  }

  function keyPress(): void {
  console.log('Pressione enter para continuar...')
  read.prompt();
 }

}

main();