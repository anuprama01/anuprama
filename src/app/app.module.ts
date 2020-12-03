import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './students/student-list.component';
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { StudentAddComponent } from './students/student-add.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'students', component:StudentListComponent},
      {path:'studentadd', component:StudentAddComponent}
     

    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
