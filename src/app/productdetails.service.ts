import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from './models/ProductDetails.model';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {
  Url = 'http://localhost:3000/productDetails'
  constructor(private _http: HttpClient) { }

  getProductDetails(): Observable<ProductDetails[]> {
    return this._http.get<ProductDetails[]>(this.Url)
  }
}
