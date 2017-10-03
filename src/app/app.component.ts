import { Component } from '@angular/core';
import { Employee } from './employees/employee';
import { EmployeeService } from './employees/employeeService';
import { PrimeEmployee } from './employees/PrimeEmployee';
import { CarService } from "./Car/CarService";
import { Car } from "./Car/Car";

@Component({
  selector : 'app-root',
  templateUrl : './app.component.html',
  styleUrls : [ './app.component.css' ],
  providers : [ CarService ]
})
export class AppComponent {

/*  displayDialog : boolean;

  employee : Employee = new PrimeEmployee();

  selectedEmployee : Employee;

  newEmployee : boolean;

  employees : Employee[];*/

  loading: boolean;

  cars: Car[];

  cols: any[];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      // this.carService.getCarsMedium().then(cars => this.cars = cars);
      this.cars =this.carService.getCarsMedium().data;//.then(cars => = cars);
      this.loading = false;
    }, 1000);

    this.cols = [
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
    ];
  }

 /* constructor (private employeeService : EmployeeService) {
  }*/

  /*ngOnInit () {
    // this.employeeService.getCarsMedium().then(employees => this.employees = employees);
    const  employees = this.employeeService.getCarsMedium();
    this.employees = employees;
  }

  showDialogToAdd () {
    this.newEmployee   = true;
    this.employee      = new PrimeEmployee();
    this.displayDialog = true;
  }

  save () {
    if (this.newEmployee) {
      this.employees.push(this.employee);
    }
    else {
      this.employees[ this.findSelectedCarIndex() ] = this.employee;
    }

    this.employee      = null;
    this.displayDialog = false;
  }

  delete () {
    this.employees.splice(this.findSelectedCarIndex(), 1);
    this.employee      = null;
    this.displayDialog = false;
  }

  onRowSelect (event) {
    this.newEmployee   = false;
    this.employee      = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar (c : Employee) : Employee {
    let employee = new PrimeEmployee();
    for (let prop in c) {
      employee[ prop ] = c[ prop ];
    }
    return employee;
  }

  findSelectedCarIndex () : number {
    return this.employees.indexOf(this.selectedEmployee);
  }*/
}
