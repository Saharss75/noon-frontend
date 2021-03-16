import { Categorycard, IProduct } from '../../../+shared/interfaces/Iproduct';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/+shared/services/product.service';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  dafualtQuantity:number=1;
  productAddedTocart:Categorycard[]=[];
  allTotal:number
  constructor(private cartService:ProductService) { }

  productList: IProduct[] = [];
  
  ngOnInit(): void { 
    

  
this.productAddedTocart.push( this.cartService.getProductFromCart())
 
this.cartService.removeAllProductFromCart();
  this.cartService.addProductToCart(this.productAddedTocart);
  this.calculteAllTotal(this.productAddedTocart);
  
  
  }


  calculteAllTotal(allItems: Categorycard[]) {
    let total = 0;
    for (let i in allItems) {
      total = total + (allItems[i].CategoryCard_Quantity * allItems[i].CategoryCard_Price_Unit);
    }
    this.allTotal = total;
  }

  onAddQuantity(product: Categorycard) {

    this.productAddedTocart = this.cartService.getProductFromCart();
    this.productAddedTocart.find(p => p.CategoryCard_ID == product.CategoryCard_ID).CategoryCard_Quantity = product.CategoryCard_Quantity + 1;
    this.cartService.removeAllProductFromCart();
    this.cartService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);


  }
  onRemoveQuantity(product: Categorycard) {
    this.productAddedTocart = this.cartService.getProductFromCart();
    this.productAddedTocart.find(p => p.CategoryCard_ID == product.CategoryCard_ID).CategoryCard_Quantity = product.CategoryCard_Quantity - 1;
    this.cartService.removeAllProductFromCart();
    this.cartService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);


  }

}