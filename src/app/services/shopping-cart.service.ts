import { Injectable } from '@angular/core';
import { Items } from 'src/models/items';
import { cartItems } from 'src/models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
 shopingCartList:cartItems[] = [];

 cartItem:cartItems|undefined = {
  id:0,
  description:"",
  name:"",
  price:0.0,
  url:"",
  quantity:0
  
 };

  constructor() { }

  getShopingCartList(){
   
    console.log("current cart item: ",this.shopingCartList);
    return this.shopingCartList;
  };

  addToShoppingCartList(newItem:Items, quantity:number){
    // add id to new item
    console.log("New Item: ", newItem);

    this.shopingCartList.push({id:newItem.id,description:newItem.description,name:newItem.name,price:Number(newItem.price),url:newItem.url,quantity:quantity});
    //return this.shopingCartList;
  }
  clearShoppingCartList(){
    this.shopingCartList = [];
  };
  
  deleteShoppingCartItem(id:cartItems):cartItems[]{
    console.log("inside delete shooping cart item. " , id);
    console.log("current cart items: ", this.shopingCartList);
    
    const index:any = this.shopingCartList.findIndex( x=>{
      console.log("x:  ",x);
      
       return x.id == id.id
        

    });
    
    console.log("index = ", index);

    if(index > -1)
      this.shopingCartList.splice(index,1);

    return this.shopingCartList;
  };
}

