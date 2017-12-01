import { Category } from './category';

export class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    quantityonhand: number;
    categoryId: Category;
    image: string;
}
