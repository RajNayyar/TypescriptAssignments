import { Component, OnInit } from '@angular/core';
import { Product } from '../models/app.product';
import { Logic } from '../models/app.logic';

@Component({
  selector: 'app-demo-lit-element-loader',
  templateUrl: './demo-lit-element-loader.component.html',
  styleUrls: ['./demo-lit-element-loader.component.css']
})
export class DemoLitElementComponent implements OnInit {
  products: Array<Product>
  logic: Logic
  jsonProducts: string
  constructor() {
    this.logic = new Logic
    this.products = this.logic.getProducts()
    this.jsonProducts=JSON.stringify(this.products)
   }

  ngOnInit(): void {
  }

}