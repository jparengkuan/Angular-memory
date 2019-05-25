import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking/ranking.component';
import { SettingsComponent } from './settings/settings.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [RankingComponent, SettingsComponent],
  exports: [
    RankingComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule
  ]
})
export class SidebarModule { }
