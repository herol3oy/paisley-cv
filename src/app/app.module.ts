import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CvFormComponent } from './components/cv-form/cv-form.component';
import { CvViewComponent } from './components/cv-view/cv-view.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CvFormComponent,
    CvViewComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
