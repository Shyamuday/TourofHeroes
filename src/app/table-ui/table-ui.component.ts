import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from '../models/ProductDetails.model';
import { ProductdetailsService } from '../productdetails.service';

@Component({
  selector: 'app-table-ui',
  templateUrl: './table-ui.component.html',
  styleUrls: ['./table-ui.component.css']
})
export class TableUiComponent {

  @Input() productDetail: any;

}
