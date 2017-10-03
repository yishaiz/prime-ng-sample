import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Employee } from '../../app/employees/employee';

@Injectable()
export class CarService {

  constructor (private http : Http) {
  }

  getCarsMedium () {
    return {
      "data" : [
        { "brand" : "VW", "year" : 2012, "color" : "Orange", "vin" : "dsad231ff" },
        { "brand" : "Audi", "year" : 2011, "color" : "Black", "vin" : "gwregre345" },
        { "brand" : "Renault", "year" : 2005, "color" : "Gray", "vin" : "h354htr" },
        { "brand" : "BMW", "year" : 2003, "color" : "Blue", "vin" : "j6w54qgh" },
        { "brand" : "Mercedes", "year" : 1995, "color" : "Orange", "vin" : "hrtwy34" },
        { "brand" : "Volvo", "year" : 2005, "color" : "Black", "vin" : "jejtyj" },
        { "brand" : "Honda", "year" : 2012, "color" : "Yellow", "vin" : "g43gr" },
        { "brand" : "Jaguar", "year" : 2013, "color" : "Orange", "vin" : "greg34" },
        { "brand" : "Ford", "year" : 2000, "color" : "Black", "vin" : "h54hw5" },
        { "brand" : "Fiat", "year" : 2013, "color" : "Red", "vin" : "245t2s" }
      ]
    };
    // promise.defer(){
    // let arr=[];
    // for( let i=1;i<=400;i++){
    //   arr.push(new PrimeEmployee('name '+i,i,'city' + i));
    // }
    //
    // return arr;
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
