import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent  {
user : any;
constructor (){
this.user = {
  name:"Mouneesh",
  address:"914-Douglas St",
  phone:['989-546-9744','8143281016']
};
}
}
