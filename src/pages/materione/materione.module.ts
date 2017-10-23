import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaterionePage } from './materione';

@NgModule({
  declarations: [
    MaterionePage,
  ],
  imports: [
    IonicPageModule.forChild(MaterionePage),
  ],
})
export class MaterionePageModule {}
