import { Component } from '@angular/core';
import { ServicioPlanetasService } from '../../services/servicio-planetas.service';
import { viewModeldbzPlanetas } from '../../interface/viewModelPlanetas.interface';

@Component({
  selector: 'dbz-planetas',
  templateUrl: './planetas.component.html',
  styleUrl: './planetas.component.css'
})
export class PlanetasComponent {


  public listaPlanetas:viewModeldbzPlanetas[]=[];

    constructor(private dbzPlanetas:ServicioPlanetasService){
       this.obtenerPlanetas();
     
    }


    obtenerPlanetas():void{
      this.dbzPlanetas.obtenerPlanetas();
    }
 
    get mostrarViewModel(){

      this.listaPlanetas=[];
       if(this.dbzPlanetas.parametrosOpcion==1){
        this.listaPlanetas= this.dbzPlanetas.listviewModelPlanetas;
       }else if(this.dbzPlanetas.parametrosOpcion==2){
        this.listaPlanetas= this.dbzPlanetas.listResultadoPlaneta;
       }
        return this.listaPlanetas;
      
    }

 





}
