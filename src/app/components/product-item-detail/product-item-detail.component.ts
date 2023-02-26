import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { Items } from 'src/models/items';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { isEmpty } from 'rxjs';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  itemId: any;
  item!:Items;
  constructor(private route:ActivatedRoute, private itemsService:ItemsService,private shoppingCartService:ShoppingCartService ) { }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get("id");
    this.itemsService.getItemById(Number(  this.itemId)).subscribe(item => {
       this.item = item!;   
       console.log("Product name: ",this.item?.name);
  });
  }
  addToCart(newItem:Items, quantity:string){
    console.log("clicked on :" ,newItem);
 
    this.shoppingCartService.addToShoppingCartList(newItem, Number(quantity));

  }

}
