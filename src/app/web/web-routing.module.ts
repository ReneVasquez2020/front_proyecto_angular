import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioComponent } from './servicio/servicio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path:'',
    component:WebComponent,
    children: [
      {path : '', component: InicioComponent},
      {path: 'servicio', component: ServicioComponent },
      {path: 'blog', component: BlogComponent},
      {path: 'contacto', component: ContactoComponent},
    ]  

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
