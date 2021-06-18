
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteComponent } from './teste.component';
import { TesteService } from './teste.service';



@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TesteComponent
  ],
  providers: [ TesteService ]
})
export class TesteModule { }
