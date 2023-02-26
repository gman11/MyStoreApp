import { Component, OnInit } from '@angular/core';
import { Items } from 'src/models/items';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items: Items[] = [];
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {

   this.itemsService.getItems().subscribe((items)=> this.items = items);
    console.log("this");
    console.log(this.items);
  }

}
