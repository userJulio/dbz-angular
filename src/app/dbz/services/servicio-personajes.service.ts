import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Predicate } from '@angular/core';
import { DbzPersonaje, Item } from '../interface/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonajesService {

  private URL_listCaracteres:string='https://dragonball-api.com/api/characters';
 

  public listaPersonajes:Item[]=[];
  public lisResultados:Item[]=[];
  public parametroOpciones:number=1;

  constructor(private http:HttpClient) {
    
  
   }

  obtenerPersonajesDbz():void{
 
   

    const parametros=new HttpParams()
    .set('limit','100');

 this.http.get<DbzPersonaje>(`${this.URL_listCaracteres}`,{params:parametros})
        .subscribe((respuesta)=>{
         
          this.listaPersonajes=respuesta.items;
          console.log("ddatall",this.listaPersonajes);
        });
        this.parametroOpciones=1;
  }

  buscarPersonaje(nombre:string,raza:string):void{

    this.parametroOpciones=2;

    this.lisResultados=[];
   
    this.lisResultados=this.listaPersonajes.filter(p=>{
      if(nombre){
        return   p.name.toLowerCase().includes(nombre.toLowerCase());
      }
      return p;
    }).filter(p=>{
      if(raza){
        return  p.race.toLowerCase().includes(raza.toLowerCase());
      }
      return p;
    });

    console.log("busqueda", this.lisResultados);

  }







}
