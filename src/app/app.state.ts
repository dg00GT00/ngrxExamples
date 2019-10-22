import { IProductEntity } from './products/entity/product.entity.interface';

/* It file store interfaces that represents the entire app state */
export interface ICountState {
    counter: number;
}

export interface IProducts {
    id: number;
    description: string;
};

// ------------This interfaces  is only valid when not employing the Entity code approach------------ //
// export interface IProductState {
//     products: IProducts[];
// }

// export interface IAppState {
//     counter: ICountState;
//     products: IProductState;
// }

// --------------------------------------------------------------------------------------------------- //

export interface IAppState {
    counter: ICountState;
    products: IProductEntity;
}