import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ZzInput } from './componentes/zzInput/zzInput';
import { ZzForm } from './componentes/formulario/formulario';
import { Slider } from './componentes/slider/slider';

export const ROUTES: Routes = [
  { path: '', component: ZzForm },
  { path: 'form1', component: ZzForm }
];

@NgModule({
  declarations: [
    AppComponent,
    ZzInput,
    ZzForm,
    Slider
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
