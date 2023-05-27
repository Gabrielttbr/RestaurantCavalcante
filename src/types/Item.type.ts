import { Category } from "./Category.type";

export interface Item {
    title: string,
    description: string,
    photo: string
    size: number,
    serving: number,
    price: number,
    id: number,
    category: Category
}

