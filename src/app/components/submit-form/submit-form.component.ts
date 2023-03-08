import { Component, OnInit , Input} from '@angular/core';
import { cartItems } from 'src/models/cartItems';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

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

  constructor(private router:Router, private http:HttpClient, private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
  }

  onSubmit():void{

    this.cartItem.forEach( s => {
      this.total += (s.price * s.quantity);
    })
    const params = {
      fullName : this.fullName,
      address: this.address,
      total:this.total
    };
    //clear shopping cart
    this.shoppingCartService.clearShoppingCartList();

    this.router.navigate(['/confirmation',params]);
  }
}
