import { Component, input } from '@angular/core';
import { Livro } from './livro.interface';

@Component({
  selector: 'app-livros',
  standalone: true,
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent {

livro = input.required<Livro>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }
}
