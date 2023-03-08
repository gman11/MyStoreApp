import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Items } from 'src/models/items';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  item!: Items;
  alertType ="success";

  constructor(private shoppingCartService:ShoppingCartService) { }
   private _success = new Subject<string>();

   successMessage = "";

   @ViewChild('selfClosingAlert', { static: false })selfClosingAlert!: NgbAlert;

  ngOnInit(): void {
    this._success.subscribe((message) => (this.successMessage = message));

    this._success.pipe(debounceTime(5000)).subscribe(() => {
			if (this.selfClosingAlert) {
				this.selfClosingAlert.close();
			}
		});
  
  }
  addToCart(newItem:Items, quantity:string){
 
    const result = this.shoppingCartService.addToShoppingCartList(newItem, Number(quantity));
  
    this.changeSuccessMessage(newItem, result)
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
