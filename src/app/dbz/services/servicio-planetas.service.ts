
import { HttpClient,HttpParams} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { dbzPlanetas, Planetas } from '../interface/planetas.interface';
import { viewModeldbzPlanetas, personajes } from '../interface/viewModelPlanetas.interface';


@Injectable({
  providedIn: 'root'
})
export class ServicioPlanetasService {

 
  public URL_PLANETAS='https://dragonball-api.com/api/planets';
  public listPlanetas:Planetas[]=[];
     
   public listviewModelPlanetas:viewModeldbzPlanetas[]=[];
   public listResultadoPlaneta:viewModeldbzPlanetas[]=[];
   public parametrosOpcion:number=1;

  constructor(private httpcliente:HttpClient){
    
  }


   async obtenerPlanetas():Promise<void>{

    this.parametrosOpcion=1;
    const parametros=new HttpParams()
      .set('limit','50');

    this.httpcliente.get<dbzPlanetas>(`${this.URL_PLANETAS}`,{params:parametros})
        .subscribe(async(datos)=>{
            this.listPlanetas=datos.items;
           let listaViewModel= await this.viewModelPlanetasxCharacter();
            this.listviewModelPlanetas=listaViewModel;
        });

      

  }



  async viewModelPlanetasxCharacter():Promise<viewModeldbzPlanetas[]>{
  let eletemoViewModelPlaneta:viewModeldbzPlanetas[]=[];

    for(let i=0;i< this.listPlanetas.length;i++){

    let listaPersonajes= await  this.detallePlaneta(this.listPlanetas[i].id);
 
      eletemoViewModelPlaneta.push({
        id : this.listPlanetas[i].id,
        name: this.listPlanetas[i].name,
        isDestroyed : this.listPlanetas[i].isDestroyed,
        description:this.listPlanetas[i].description,
        image: this.listPlanetas[i].image,
        deletedAt:this.listPlanetas[i].deletedAt,
        personajes:listaPersonajes
      });
    }

    return eletemoViewModelPlaneta;

  }
  
  async  detallePlaneta(idplaneta:number): Promise<personajes[]>  {

    //console.log("detalle planeta");
    const consulta= await fetch(`${this.URL_PLANETAS}/`+idplaneta);
    let datos=await consulta.json();
    return datos.characters;
  }

  buscarxPlaneta(nombre:string,raza:string):void{
    
    this.parametrosOpcion=2;

    this.listResultadoPlaneta=[];
    for(let i=0;i<this.listviewModelPlanetas.length;i++){
      let listPersonaje=[];
      listPersonaje= this.listviewModelPlanetas[i].personajes.filter(p=>{
        if(nombre){
          let habitante=p.name.toLowerCase().trim();
          let nombreParam=nombre.toLowerCase().trim();
          return  habitante.includes(nombreParam);
        }
        return p;
      }).filter(p=>{
        if(raza){
          let habitante=p.race.toLowerCase().trim();
          let razaParam=raza.toLowerCase().trim();
          return  habitante.includes(razaParam);
        }
        return p;
      });

       if(listPersonaje.length>0){
       
        this.listResultadoPlaneta.push(this.listviewModelPlanetas[i])
       }

    }

    console.log("planetasxpersonaje",this.listResultadoPlaneta);

  }

  }







