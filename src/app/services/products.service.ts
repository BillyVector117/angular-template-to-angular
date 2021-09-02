import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loading = true
  products: any = []

  constructor(private http: HttpClient) {
    this.loadProlducts()
  }

  private loadProlducts() {
    // Fetching products Data (From Firebase)
    this.http.get("https://roles-book-default-rtdb.firebaseio.com/products_idx.json")
      .subscribe((response: IProduct) => {
        console.log('Fetching products list: ', response)
        this.products = response;
        this.loading = false;
      })
  }

}
