import { EntityState } from "@ngrx/entity";
import { IProducts } from "../../app.state";

export interface IProductEntity extends EntityState<IProducts>{
}