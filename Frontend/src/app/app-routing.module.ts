import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './Components/index/index.component';
import { ContentComponent } from './Components/index/content/content.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterPetComponent } from './Components/index/register-pet/register-pet.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },{
    path: 'inicio',
    component: IndexComponent,
    children: [
      {
      path: 'contenido',
      component: ContentComponent
      },
      {
        path: 'registrar',
        component: RegisterPetComponent
      }
    ]
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
