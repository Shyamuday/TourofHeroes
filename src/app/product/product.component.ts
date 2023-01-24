import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) { }
  ngOnInit(): void {
    this.productForm = this.fb.group({
      Id: ["", Validators.required],
      Title: ["", Validators.required],
      Price: [],
      inStock: []
    })
  }

  addProduct() {
    if (this.productForm.valid) {
      this.productService.AddProducts(this.productForm.value)
    }
  }
}
