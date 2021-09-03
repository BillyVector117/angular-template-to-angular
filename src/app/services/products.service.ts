import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/products.interface';
import { ISingleProduct } from '../interfaces/singleProduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loading = true
  products: any = []
  singleProduct: ISingleProduct = {}
  filterProducts: any = []
  constructor(private http: HttpClient) {
    this.loadProlducts()
  }

  private loadProlducts() {
    // Fetching products Data (From Firebase)
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://roles-book-default-rtdb.firebaseio.com/products_idx.json")
        .subscribe((response: IProduct) => {
          console.log('Fetching products list: ', response)
          this.products = response;
          this.loading = false;
          resolve(); // At this point Promise is successfully resolved
        })

    })
  }
  getsingleProduct(id: string) {
    return this.http.get(`https://roles-book-default-rtdb.firebaseio.com/products/${id}.json`)

  }
  searchProduct(words: string) {

    // Filter products only if this.products is filled
    if (this.products.length === 0) {
      // Wait for load products
      this.loadProlducts().then(() => {
        // At this .then means loadProlducts() has resolved
        // Apply filter after getting products
        this.filterData(words)
      })
    } else {
      // Apply filter
      this.filterData(words)
    }
  }
  private filterData(words: string) {
    this.filterProducts = [];
    words = words.toLocaleLowerCase()
    this.products.filter((product: any) => {
      const lowerTitle = product.titulo.toLocaleLowerCase()
      if (product.categoria.indexOf(words) >= 0 || lowerTitle.indexOf(words) >= 0) {
        this.filterProducts.push(product)
      }
    })
    // console.log("filtered products: ", this.filterProducts)
  }
}
