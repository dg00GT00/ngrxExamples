import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { IProducts } from "../../app.state";

export const adapterProduct: EntityAdapter<IProducts> = createEntityAdapter<IProducts>({sortComparer: false});