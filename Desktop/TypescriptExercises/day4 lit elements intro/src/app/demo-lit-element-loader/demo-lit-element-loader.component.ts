import { Component, OnInit } from '@angular/core';
import { Product } from '../models/app.product';
import { Logic } from '../models/app.logic';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-demo-lit-element-loader',
  templateUrl: './demo-lit-element-loader.component.html',
  styleUrls: ['./demo-lit-element-loader.component.css']
})
export class DemoLitElementLoaderComponent implements OnInit {
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
