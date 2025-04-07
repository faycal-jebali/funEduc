import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FillTheBlanksComponent } from './shared/components/fill-the-blanks/fill-the-blanks.component';
import { FillTheBlanksByTypeComponent } from './shared/components/fill-the-blanks-by-type/fill-the-blanks-by-type.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServiceWorkerModule } from '@angular/service-worker';
import { JwtInterceptor, JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

export function tokenGetter() {
  return localStorage.getItem('access_token'); // ou autre mécanisme
}

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
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: [environment.apiUrl], // ou ton domaine d’API
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
