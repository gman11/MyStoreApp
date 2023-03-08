import { Component, OnInit,ViewChild } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { cartItems } from 'src/models/cartItems';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Subject, debounceTime } from 'rxjs';
import { Items } from 'src/models/items';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private _success = new Subject<string>();
  cartItems:cartItems[]= [];
  totalCost:number=0;

  successMessage = "";
  alertType ="success";


  @ViewChild('selfClosingAlert', { static: false })selfClosingAlert!: NgbAlert 
 
  constructor(private shoppingCartService:ShoppingCartService) { }
  

  ngOnInit(): void {
    this.cartItems = this.shoppingCartService.getShopingCartList();
    this.calculateTotalCost();

    this._success.subscribe((message) => (this.successMessage = message));
    this._success.pipe(debounceTime(5000)).subscribe(() => {
			if (this.selfClosingAlert) {
				this.selfClosingAlert.close();
			}
		});
  }
  updateCart(data:cartItems){
  
    const updateCartItem:Items ={
      id: data.id,
      name: data.name,
      price: data.price,
      url: data.url,
      description: data.description
    }
    const result = this.shoppingCartService.addToShoppingCartList(updateCartItem, Number(data.quantity));
    this.cartItems = this.shoppingCartService.getShopingCartList();
    this.calculateTotalCost();
    this.changeSuccessMessage(updateCartItem, result)
  }

  deleted(cartItem:cartItems):void{
    this.cartItems = this.shoppingCartService.deleteShoppingCartItem(cartItem);
    this.calculateTotalCost();
    this.changeDeleteMessage(cartItem);
  }

  //use onChange
  calculateTotalCost():void {

    this.totalCost = 0;
    this.cartItems.forEach(i => {
      this.totalCost += Number(i.price) * Number(i.quantity)
      });
  }  

  private changeDeleteMessage(item:cartItems) {
    this.alertType = "danger";
		this._success.next(`${item.name} -successfully deleted.`);
	}

  private changeSuccessMessage(item:Items, result:number) {
   
     if (result == 0){
      this.alertType = "success";
      this._success.next(`${item.name} - was updated successfully.`);
    }

	}
}
