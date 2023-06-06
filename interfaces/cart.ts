import {SizesInterface} from '.'

export interface ProductCartInterface {
    _id: string;
    image: string;
    price: number;
    size?: SizesInterface;
    slug: string;
    title: string;
    gender: 'men'|'women'|'kid'|'unisex';
    quantity: number;
}

export interface CartSumary {
    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;
}
