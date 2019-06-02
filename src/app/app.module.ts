import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {ContentModule} from './content/content.module';
import {RouterModule} from '@angular/router';
import { GuardsComponent } from './auth/guards/guards.component';
import { ContainersComponent } from './auth/containers/containers.component';
import { ModelsComponent } from './auth/models/models.component';
import { AuthservicesComponent } from './auth/authservices/authservices.component';
//import {AppRoutingModule} from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    GuardsComponent,
    ContainersComponent,
    ModelsComponent,
    AuthservicesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HeaderModule,
    SidebarModule,
    ContentModule,
    RouterModule,
   //AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
