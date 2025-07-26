import { IProduct } from './../../../shared/interfaces/iproduct';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { SearchPipe } from '../../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { SortPipe } from '../../../shared/pipes/sort/sort.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [SearchPipe, FormsModule, SortPipe , RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  ProductList: IProduct[] = [];
  text: string = "";
  sortProperty: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';
  isNumberSort: boolean = false;

  selectTitleSortOption(order: 'asc' | 'desc') {
    this.sortProperty = 'title';
    this.sortOrder = order;
    this.isNumberSort = false;
  }

  selectPriceSortOption(order: 'asc' | 'desc') {
    this.sortProperty = 'price';
    this.sortOrder = order;
    this.isNumberSort = true;
  }
  getAllProductsData() {
    this.productsService.getAllProducts().subscribe({
      next: (res) => {
        this.ProductList = res;
        console.log(this.ProductList);
      }
    })
  }
  ngOnInit(): void {
    this.getAllProductsData()
  }
}
