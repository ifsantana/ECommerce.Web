import { Category } from './category';

export class Product {
    _id: number;
    title: string;
    description: string;
    price: number;
    quantityonhand: number;
    categoryId: Category;
    image: string;
}
