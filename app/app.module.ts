import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import 'rxjs/add/operator/toPromise';
import { EmployeeService } from './employees/employeeservice';
import { InputTextModule, DataTableModule, ButtonModule, DialogModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations : [
    AppComponent
  ],
  imports : [ BrowserModule, FormsModule, HttpModule, InputTextModule, DataTableModule, ButtonModule, DialogModule ],
  // providers : [ EmployeeService ],
  bootstrap : [ AppComponent ]
})
export class AppModule {
}
