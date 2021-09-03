import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISingleProduct } from 'src/app/interfaces/singleProduct.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  data: ISingleProduct = {};
  id: String = "";
  constructor(private route: ActivatedRoute, public singleProductService: ProductsService) { }

  ngOnInit(): void {
    // console.log(this.route.params)
    this.route.params.subscribe((params) => {
      // console.log(params['id'])}
      // Execute fetch service providing params ID 
      this.singleProductService.getsingleProduct(params['id'])
        .subscribe((product: ISingleProduct) => {
          console.log("fetching single product: ", product)
          this.id = params['id'];
          this.data = product; // Option 1
          this.singleProductService.singleProduct = product // Option 2
        })
    })
  }

}
