import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { cartItems } from 'src/models/cartItems';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:cartItems[]= [];
  totalCost:number=0;
  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.cartItems = this.shoppingCartService.getShopingCartList();
    this.calculateTotalCost();
  
  }
  deleted(cartItem:cartItems):void{
    console.log("trying to delete cart item: ",cartItem);
    this.cartItems = this.shoppingCartService.deleteShoppingCartItem(cartItem);
    this.calculateTotalCost();
  
  }
  calculateTotalCost():void {
    this.totalCost = 0;
    this.cartItems.forEach(i => {
      this.totalCost += Number(i.price) * Number(i.quantity)
      });
  }  
}
