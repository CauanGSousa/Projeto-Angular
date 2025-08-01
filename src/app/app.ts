import { Component, signal } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { LivrosComponent } from './componentes/livros/livros.component';

@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, RodapeComponent, LivrosComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Project');
}
