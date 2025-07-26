import { Component, signal } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { HelloworldComponent } from './componentes/helloworld.component/helloworld.component';

@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, HelloworldComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Project');
}
