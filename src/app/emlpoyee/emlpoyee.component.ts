import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';

@Component({
  selector: 'app-emlpoyee',
  templateUrl: './emlpoyee.component.html',
  styleUrls: ['./emlpoyee.component.css']
})
export class EmlpoyeeComponent implements OnInit{

  employees: Employee[]=[];
   
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
     response =>{this.employees = response;}
    );
  }

}
