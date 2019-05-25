import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [InfoComponent],
  exports: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    NgbProgressbarModule
  ]
})
export class HeaderModule { }
