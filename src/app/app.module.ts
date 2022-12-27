import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApListComponent } from './ap-list/ap-list.component';
import { SelectService } from './select.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LabComponent } from './lab/lab.component';
import { NgxPrintModule } from 'ngx-print';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UploadStudentComponent } from './upload-student/upload-student.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApListComponent,
    LabComponent,
    PagenotfoundComponent,
    UploadStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, 
    NgbModule,HttpClientModule,NgxPrintModule
  ],
  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
