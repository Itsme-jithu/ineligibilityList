import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApListComponent } from './ap-list/ap-list.component';
import { LabComponent } from './lab/lab.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UploadStudentComponent } from './upload-student/upload-student.component';
const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'ap-list',component:ApListComponent},
{path:'lab',component:LabComponent},
{path:'upload',component:UploadStudentComponent},
{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
