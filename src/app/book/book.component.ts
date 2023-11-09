import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
bid: string ='';
bname: string='';
price: string='';
constructor(){}
onClickSubmit(book:any)
{
  this.bid =book.bid;
  this.bname =book.bname;
  this.price =book.price;
}
}
