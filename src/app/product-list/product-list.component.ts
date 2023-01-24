import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from '../models/product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  // products: IProduct[] = []
  // productSubscription?: Subscription
  products?: Observable<IProduct[]>;
  constructor(private productService: ProductService,
    // private cd: ChangeDetectorRef
  ) { }

  // productObserver = {
  //   next: (data: IProduct[]) => {
  //     this.products = data;
  //     // this.cd.markForCheck();
  //   },
  //   error: (error: any) => { console.log(error) },
  //   complete: () => { console.log('Product stream completed') }

  // }

  ngOnInit(): void {
    this.products = this.productService.Products$;
    // this.productSubscription = this.productService.Products$.subscribe(this.productObserver)
  }

  // ngOnDestroy(): void {
  //   if (this.productSubscription) {
  //     this.productSubscription.unsubscribe();
  //   }
  // }
}
