import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabelaAlunosComponent } from './tabela-alunos/tabela-alunos.component';
import { FormAlunosComponent } from './form-alunos/form-alunos.component';
import { CrudAlunosService } from './crud-alunos.service';
import { RouterModule, Routes } from '@angular/router';
import { TabelaProfessoresComponent } from './tabela-professores/tabela-professores.component';
import { FormProfessoresComponent } from './form-professores/form-professores.component';
import { CrudProfessoresService } from './crud-professores.service';
import { TabelaOrientadoresComponent } from './tabela-orientadores/tabela-orientadores.component';
import { FormOrientadoresComponent } from './form-orientadores/form-orientadores.component';
import { CrudOrientadoresService } from './crud-orientadores.service';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SemVagaPipe } from './sem-vaga.pipe';
import { OrientadosPipe } from './orientados.pipe';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'alunos/lista', pathMatch: 'full'},
  { path: '', component: IndexComponent},
  { path: 'alunos/lista', component: TabelaAlunosComponent},
  { path: 'alunos/novo', component: FormAlunosComponent},
  { path: 'alunos/edicao/:cod', component: FormAlunosComponent},
  { path: 'professores/lista', component: TabelaProfessoresComponent},
  { path: 'professores/novo', component: FormProfessoresComponent},
  { path: 'professores/edicao/:cod', component: FormProfessoresComponent},
  { path: 'orientadores/lista', component: TabelaOrientadoresComponent},
  { path: 'orientadores/novo', component: FormOrientadoresComponent},
  { path: 'orientadores/edicao/:cod', component: FormOrientadoresComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TabelaAlunosComponent,
    FormAlunosComponent,
    TabelaProfessoresComponent,
    FormProfessoresComponent,
    TabelaOrientadoresComponent,
    FormOrientadoresComponent,
    SemVagaPipe,
    OrientadosPipe,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [CrudAlunosService, CrudProfessoresService, CrudOrientadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
