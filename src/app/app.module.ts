import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ThemeService } from './theme.service';
import { AppMaterialModule } from './app-material.module';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientSelectionComponent } from './client-selection/client-selection.component';
import { ClientHeaderComponent } from './client-header/client-header.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    ClientSelectionComponent,
    ClientHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  providers: [provideAnimationsAsync(), ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
