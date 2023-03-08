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
       return this.shopingCartList;
  };

  addToShoppingCartList(newItem:Items, quantity:number):number{

    //check of item already on the list
    const index:number = this.findItem(newItem.id)
    if( index > -1){
      //update quantity
      this.shopingCartList[index].quantity = quantity;
      return 0;

    }
    else{
      this.shopingCartList.push({id:newItem.id,description:newItem.description,name:newItem.name,price:Number(newItem.price),url:newItem.url,quantity:quantity});
      return 1;
    }
  }
  clearShoppingCartList(){
    this.shopingCartList = [];
  };
  
  deleteShoppingCartItem(item:cartItems):cartItems[]{

   const index =   this.findItem(item.id)

    if( index > -1)
      this.shopingCartList.splice(index,1);

    return this.shopingCartList;
  };

  private findItem(id:number):number{
    const index:any = this.shopingCartList.findIndex( x=>{
       return x.id == id
    });
    return index;
  }
}

