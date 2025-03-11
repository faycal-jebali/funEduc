import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FillTheBlanksComponent } from './shared/components/fill-the-blanks/fill-the-blanks.component';
import { FillTheBlanksByTypeComponent } from './shared/components/fill-the-blanks-by-type/fill-the-blanks-by-type.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FillTheBlanksComponent,
    FillTheBlanksByTypeComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    SidebarComponent,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
