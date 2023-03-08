import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { Items } from 'src/models/items';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject, debounceTime} from 'rxjs';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  itemId: any;
  item:Items = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  };

  private _success = new Subject<string>();
  successMessage = "";
  alertType = "success";

  @ViewChild('selfClosingAlert', { static: false })selfClosingAlert!: NgbAlert;

  constructor(private route:ActivatedRoute, private itemsService:ItemsService,private shoppingCartService:ShoppingCartService ) { }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get("id");
    
    this.itemsService.getItemById(Number(this.itemId)).subscribe(item => {this.item = item!;});  
  
    this._success.subscribe((message) => (this.successMessage = message));

    this._success.pipe(debounceTime(5000)).subscribe(() => {
		 	if (this.selfClosingAlert) {
		 		this.selfClosingAlert.close();
		 	}
		 });

  }
  addToCart(newItem:Items, quantity:string){ 
    const result = this.shoppingCartService.addToShoppingCartList(newItem, Number(quantity));
    this.changeSuccessMessage(newItem,result);
  }

  private changeSuccessMessage(item:Items, result:number) {
    if(result == 1){
      this.alertType = "success";
      this._success.next(`${item.name} -successfully added.`);
    }
    else if (result == 0){
      this.alertType = "warning";
      this._success.next(`${item.name} - was updated successfully.`);
    }
  }

}
