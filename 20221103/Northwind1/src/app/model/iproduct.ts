import { ICategory } from "./icategory";

export interface IProduct {
  id: number;
  productName: string;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  category?: ICategory;
}
