import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appTitle:string = 'Store App';

  faShoppingCart = faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
