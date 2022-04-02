import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    TabsModule,
    TableModule,
    TreeModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [TabsetConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
