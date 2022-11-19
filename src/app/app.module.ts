import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TopComponent } from './pages/top/top.component';
import { CustomInputComponent } from './shared/custom-input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectEmployeeComponent } from './pages/select-employee/select-employee.component';
import { ManageComponent } from './pages/manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopComponent,
    CustomInputComponent,
    AttendanceComponent,
    SelectEmployeeComponent,
    ManageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
  ],
  exports: [
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
