import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Employee } from '../../app/employees/employee';
import { PrimeEmployee } from "./PrimeEmployee";

@Injectable()
export class EmployeeService {

  constructor (private http : Http) {
  }

  getCarsMedium () {
    // return promise.defer(){
    let arr=[];
    for( let i=1;i<=400;i++){
      arr.push(new PrimeEmployee('name '+i,i,'city' + i));
    }

    return arr;
    //
    // return [
    //   { "name" : "javainuse1", "empId" : "J12", "city" : "city1" },
    //   { "name" : "javainuse2", "empId" : "J13", "city" : "city2" },
    //   { "name" : "javainuse3", "empId" : "J14", "city" : "city3" },
    //   { "name" : "javainuse4", "empId" : "J15", "city" : "city4" }
    // ];

    // };

    /*
        debugger;
        return this.http.get('app/employees-medium.json')
                   .toPromise()
                   // .then(res => <Employee[]> res.json().data)
                   .then(res => {
                     debugger;
                     return <Employee[]> res.json().data;
                   })
                   .then(data => {
                     return data;
                   });*/
  }
}
