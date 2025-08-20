import { Component, signal } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ListaLivros } from './componentes/lista-livros/lista-livros';


@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, RodapeComponent, ListaLivros],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Project');
}
