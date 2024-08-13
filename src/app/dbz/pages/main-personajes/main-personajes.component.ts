import { Component, Input } from '@angular/core';

@Component({
  selector: 'dbz-main-personajes',
  templateUrl: './main-personajes.component.html',
  styleUrl: './main-personajes.component.css'
})
export class MainPersonajesComponent {


  @Input()
  public auxPersonaje:number=1;

}
