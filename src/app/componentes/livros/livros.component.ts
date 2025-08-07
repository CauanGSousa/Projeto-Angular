import { Component } from '@angular/core';

@Component({
  selector: 'app-livros',
  standalone: true,
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent {

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }

  livro = {
    titulo: 'Angular: Up and Running',
    autoria: 'Shyam Seshadri',
    imagem: 'angular-book.jpg',
    favorito: false,
  }
  pessoa = {
    nome: 'João',
    idade: 30+'y',
    profissao: 'Desenvolvedor'
  }
}
