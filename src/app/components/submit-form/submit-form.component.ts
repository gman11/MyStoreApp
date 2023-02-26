import { Component, OnInit , Input} from '@angular/core';
import { cartItems } from 'src/models/cartItems';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {
  @Input() cartItem:cartItems[]=[] ;
  fullName:string = '';
  address:string ='';
  creditCard:string ='';
  total:number =0;

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit():void{

    console.log("onSubmit");

    this.cartItem.forEach( s => {
      this.total += s.price
    })
    const params = {
      fullName : this.fullName,
      address: this.address,
      total:this.total
    };

    this.router.navigate(['/confirmation',params]);
  }

  

}
