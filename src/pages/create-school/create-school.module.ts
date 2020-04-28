import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateSchoolPage } from './create-school';

@NgModule({
  declarations: [
    CreateSchoolPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateSchoolPage),
  ],
})
export class CreateSchoolPageModule {}
