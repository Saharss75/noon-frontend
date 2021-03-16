import { Component, OnInit } from '@angular/core';
//import {ProductService}from '../../+shared/services/product.service';
import { ProductService } from 'src/app/+shared/services/product.service';
@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit {

x={CategoryCard_ID :'hhhhh',
CategoryCard_image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bramjonline.com%2Fwallpaper-hd%2F&psig=AOvVaw1J4_StDZArKv1UQdWBAQPl&ust=1615961380467000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjylLOTtO8CFQAAAAAdAAAAABAI',
  CategoryCard_Name:'samsong',
  CategoryCard_Price_Unit :'ff',
  CategoryCard_Quantity :4
}

  constructor(private cartService:ProductService) { }
  Addtocard(){
    this.cartService.addProductToCart(this.x)
  }
  ngOnInit(): void {
  }

}