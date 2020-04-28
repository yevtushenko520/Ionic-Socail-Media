import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSettingPage } from './modal-setting';

@NgModule({
  declarations: [
    ModalSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalSettingPage),
  ],
})
export class ModalSettingPageModule {}
