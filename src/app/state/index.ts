/* It file store interfaces that represents the entire app state */
export interface ICountState {
    counter: number;
}

export interface IProducts {
    id: number;
    description: string;
};

export interface IProductState {
    products: IProducts[];

}

export interface IAppState {
    counter: ICountState;
    products: IProductState;
}