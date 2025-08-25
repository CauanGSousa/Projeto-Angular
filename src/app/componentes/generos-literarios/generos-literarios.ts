import { Component } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { livros } from '../../mock-livro';

@Component({
  selector: 'app-generos-literarios',
  imports: [LivroComponent],
  templateUrl: './generos-literarios.html',
  styleUrl: './generos-literarios.scss'
})
export class GenerosLiterarios {
    resultlivro = livros[0]
}
