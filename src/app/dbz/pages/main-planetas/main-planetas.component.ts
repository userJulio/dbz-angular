import { Component } from '@angular/core';
import { ServicioPlanetasService } from '../../services/servicio-planetas.service';

@Component({
  selector: 'dbz-main-planetas',
  templateUrl: './main-planetas.component.html',
  styleUrl: './main-planetas.component.css'
})
export class MainPlanetasComponent {

  constructor(private dbzplaneta:ServicioPlanetasService){

  }

  get listarPlanetas(){
    return this.dbzplaneta.listResultadoPlaneta;
  }

}
