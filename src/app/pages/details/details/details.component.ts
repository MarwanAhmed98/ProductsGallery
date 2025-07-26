import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { IProduct } from '../../../shared/interfaces/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  ProductId: any;
  ProductDetails: IProduct = {} as IProduct;
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
        this.ProductId = res.get('id');
        console.log(this.ProductId);
        this.productsService.getSpecificProduct(this.ProductId).subscribe({
          next: (res) => {
            this.ProductDetails = res;
            console.log(this.ProductDetails);

          }
        })
      },
    })
  }

}
