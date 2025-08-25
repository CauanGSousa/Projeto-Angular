import { Component, input } from '@angular/core';
import { Livro } from './livro.interface';

@Component({
  selector: 'app-livro',
  standalone: true,
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {

livro = input.required<Livro>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }
}
