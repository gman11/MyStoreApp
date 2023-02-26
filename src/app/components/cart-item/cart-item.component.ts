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
  constructor() { }

  ngOnInit(): void {
  }

}
