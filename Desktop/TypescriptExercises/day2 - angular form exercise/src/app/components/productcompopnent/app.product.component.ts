import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/app.product';
import { Logic } from '../../models/app.logic';
import { Categories } from '../../models/app.constants';
@Component({
  selector: 'app-product-component',
  templateUrl: './product.view.html'
})
export class ProductComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  searchText: string;
  private logic: Logic;
  cats = Categories;
  headers: Array<string>;
  constructor() {
      this.product = new Product(0, '', 0, '');
      this.products = new Array<Product>();
      this.logic = new Logic();
      this.headers  =new Array<string>();
  }

  // inoked after the ctor
  // write a performance internsicive code
  // whihc we cannot write in ctor
  ngOnInit(): void {
     this.products = this.logic.getProducts();
     // read product Scehma from Product class
     for(let p in this.product) {
       this.headers.push(p);
     }
  }
  clear(): void {
    this.product = new Product(0, '', 0, '');
  }
  save(): void {
    this.products = this.logic.saveProducts(this.product);
    console.log(JSON.stringify(this.products));
  }
  update(): void {
    this.products = this.logic.updateProduct(this.product)
  }
  delete(prd: Product): void {
    this.products = this.logic.deleteProducts(prd)
    console.log(JSON.stringify(this.products))
  }
  search(): void{
    debugger
    this.products = this.logic.searchProducts(this.searchText)
  }
  sortProducts(): void{
    this.products.sort(function(a,b){
      return a.ProductName.length - b.ProductName.length
  })
}
  reverseSortProducts(): void {
    this.products.sort(function(a,b){
      return b.ProductName.length - a.ProductName.length
  })}
  getSelectedProduct(p: Product): void {
      this.product = Object.assign({}, p);
  }
}