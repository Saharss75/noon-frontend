
export interface IProduct {
  name: string;
  image: string[];
  brand: string;
  description: string;
  countInStock: number;
  price: number;
  category: string;
  subCategeory:string;
}
export class Categorycard {

  CategoryCard_ID :string;
  CategoryCard_image:string;
  CategoryCard_Name:string;
  CategoryCard_Price_Unit :any;
  CategoryCard_Quantity :number;
}
