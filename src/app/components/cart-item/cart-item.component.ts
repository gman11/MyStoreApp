import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { cartItems } from 'src/models/cartItems';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {


 @Input() cartItem!:cartItems;
 @Output() deleted:EventEmitter<cartItems> = new EventEmitter();
 @Output() update:EventEmitter<cartItems> = new EventEmitter<cartItems>();

 test:number|undefined =0;
  constructor() { }
  
  ngOnInit(): void {
    this.test = this.cartItem.quantity;
  }

  nameChanged($event: any, item:cartItems) {

   //emmit number to parent cart
    const updatedCartItem:cartItems ={
      id: item.id,
      quantity: $event,
      name:item.name,
      price: item.price,
      url: item.url,
      description:item.description
    }
    this.test = $event;
    this.update.emit(updatedCartItem);
    }
}
