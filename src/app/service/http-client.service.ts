import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee {
  constructor(
    public employeeId: number,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public emailAddress: string,
    public salary: number,
    public addressLine1: string,
    public addressLine2: string,
    public street: string,
    public aptNumber: string,
    public city: string,
    public state: string,
    public zipcode: string,
    public userName: string,
    public password: string,
    public defaultPassword: string,
    public createdOn: String,
    public lastUpdate: String,
    public activeYN: boolean,
    public roleId: number
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {}

  getEmployees() {
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:8080/api/employees/all');
  }
}