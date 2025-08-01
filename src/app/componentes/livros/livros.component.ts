import { Component } from '@angular/core';

@Component({
  selector: 'app-livros',
  standalone: true,
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent {

  livro = {
    titulo: 'Angular: Up and Running',
    autoria: 'Shyam Seshadri',
    imagem: 'angular-book.jpg',
  }
  pessoa = {
    nome: 'João',
    idade: 30+'y',
    profissao: 'Desenvolvedor'
  }
}
