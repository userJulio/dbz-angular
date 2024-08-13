import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './dbz/components/personajes/personajes.component';
import { PlanetasComponent } from './dbz/components/planetas/planetas.component';
import { MainPersonajesComponent } from './dbz/pages/main-personajes/main-personajes.component';
import { MainPlanetasComponent } from './dbz/pages/main-planetas/main-planetas.component';

const routes: Routes = [
  {
    path:'home',
    component: MainPersonajesComponent
  },
  {
    path:'planetas',
    component: MainPlanetasComponent
  },
  {
    path:"**",
    redirectTo:"home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
