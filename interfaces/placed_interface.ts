import { ISPlaced } from "./iplaced_interface";
import { ISdata } from "./sdata_interface";

export interface IPlaced {
  map(arg0: IPlaced): import("react").ReactNode;
  _id: string;
    companyname:string;
    slug: {
        current: string;
      };
      sdatas?: ISdata[];
      splaced?: ISPlaced[];
      
 }