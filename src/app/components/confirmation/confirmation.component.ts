import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
 fullName:string | null = "" ;
 address:string | null = "" ;

 creditCard:string | null = "" ;
 total:string | null ="";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.fullName =   this.route.snapshot.paramMap.get("fullName");
    this.address =   this.route.snapshot.paramMap.get("address");
    this.creditCard =   this.route.snapshot.paramMap.get("creditCard");
    this.total =   this.route.snapshot.paramMap.get("total");

  }

}
