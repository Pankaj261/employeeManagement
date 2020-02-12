import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSpinner, MatProgressSpinnerModule} from '@angular/material';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';
import { UpdateEmployeeComponent } from './home-employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './home-employee/delete-employee/delete-employee.component';
import { CreateEmployeeComponent } from './home-employee/create-employee/create-employee.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { fetchingData } from './config/config.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { mySpinnerClass } from './config/spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    CreateEmployeeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [fetchingData, mySpinnerClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
