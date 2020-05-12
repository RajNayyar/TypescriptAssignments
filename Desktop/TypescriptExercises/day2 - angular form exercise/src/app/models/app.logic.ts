import { Product } from './app.product';
import { Products } from './app.constants';

export class Logic {
    private products: Array<Product>;
    private prds = Products;
    constructor(){
      this.products = new Array<Product>();
      this.prds.forEach((p,i)=> {
         this.products.push(
           new Product(p.ProductId,p.ProductName,p.Price,p.Catgory)
         );
      });
    }

    getProducts(): Array<Product> {
      return this.products;
    }

    saveProducts(prd: Product): Array<Product> {
      this.products.push(prd);
      return this.products;
    }
    searchProducts(searchText: string): Array<Product>
    {
      let searchResults: Array<Product> = []
      this.products.forEach(element => {
        if(element.Category.toLowerCase().includes(searchText.toLowerCase()) || element.ProductName.toLowerCase().includes(searchText.toLowerCase()))
          {
            searchResults.push(element)
          }
      });
      return searchResults
    }
    fetchIndex(prd:Product): number
    {
      return this.products.findIndex(x => x.ProductId==prd.ProductId)
    }
    updateProduct(prd:Product): Array<Product>{
      let indexToUpdate = this.fetchIndex(prd)
      if(indexToUpdate == -1)
        {
          alert("Invalid product Id")
          return this.products
        }
      else
      {
        this.products.splice(indexToUpdate, 1, prd)
      }
      return this.products
    }
    deleteProducts(prd: Product): Array<Product>
    {
      let indexToDelete = this.fetchIndex(prd)
      this.products.splice(indexToDelete, 1)
      return this.products
    }
}