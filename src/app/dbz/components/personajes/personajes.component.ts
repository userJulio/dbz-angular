import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicioPersonajesService } from '../../services/servicio-personajes.service';
import { Item } from '../../interface/dbz.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'dbz-personajes',
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {

  public listPersonageGeenral:Item[]=[];
  @ViewChild("modalTransformacion") modal!: ElementRef;

  constructor(private dbzservice:ServicioPersonajesService,private modalservice:NgbModal){
   //console.log(this.dbzservice.obtenerPersonajesDbz);  
   this.mostrarDatos();
  }

  get listarPersonajes(){
    
    let opcione=this.dbzservice.parametroOpciones;

    if(opcione==1){
      this.listPersonageGeenral=this.dbzservice.listaPersonajes;
    }
    else if(opcione==2){
      this.listPersonageGeenral=this.dbzservice.lisResultados;
    }
    return this.listPersonageGeenral;

  }

  mostrarDatos():void{
    this.dbzservice.obtenerPersonajesDbz();
  }

  mostrarModal():void{
    this.modalservice.open(this.modal);
  }
  

 


}
