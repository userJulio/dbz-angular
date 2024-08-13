import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { SharedModule } from '../shared/shared.module';
import { MainPersonajesComponent } from './pages/main-personajes/main-personajes.component';
import { MainPlanetasComponent } from './pages/main-planetas/main-planetas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    PersonajesComponent,
    PlanetasComponent,
    MainPersonajesComponent,
    MainPlanetasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
  ],
  exports:[
    MainPersonajesComponent,
    MainPlanetasComponent,
  ]
})
export class DbzModule { }
