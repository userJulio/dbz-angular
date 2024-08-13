
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ServicioPersonajesService } from '../../../dbz/services/servicio-personajes.service';
import { ServicioPlanetasService } from '../../../dbz/services/servicio-planetas.service';

@Component({
  selector: 'shared-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
 
 

  @Input()
  public auxbuscarPersonaje!:number;

  @ViewChild("txtPersonaje")
  public tagPersonaje!:ElementRef<HTMLInputElement>;

  @ViewChild("txtRaza")
  public tagtxtRaza!:ElementRef<HTMLInputElement>;

  

  constructor(private dbzPersonajeservice:ServicioPersonajesService,
        private  dbzserviceplaneta:ServicioPlanetasService){
 
  }

  Buscar():void{
    console.log("auxbuscador",this.auxbuscarPersonaje);
    const txtPersonaje=this.tagPersonaje.nativeElement.value;
    const txtRaza=this.tagtxtRaza.nativeElement.value;
    if(this.auxbuscarPersonaje==1){
    this.dbzPersonajeservice.buscarPersonaje(txtPersonaje,txtRaza);
    }
    if(this.auxbuscarPersonaje==2){
      this.dbzserviceplaneta.buscarxPlaneta(txtPersonaje,txtRaza);
    }

  }



 

}
