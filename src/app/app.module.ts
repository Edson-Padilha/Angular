import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { PropriedadesComponent } from './propriedades/propriedades.component';
import { ContatoComponent } from './contato/contato.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    CurriculumComponent,
    PropriedadesComponent,
    ContatoComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
