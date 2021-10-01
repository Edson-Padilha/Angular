import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { PaginaComponent } from './pagina/pagina.component';
import { PropriedadesComponent } from './propriedades/propriedades.component';

const routes: Routes = [
  { path: 'pagina', component: PaginaComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'propriedades', component: PropriedadesComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
