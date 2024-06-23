import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {

  media:number = 19
  nomes:string[] = ['Yuliano', 'Laurindo', 'Bernardo', 'Isaura', 'Domingos', 'Acácio']

  linguagem:string = 'HTML'
}
