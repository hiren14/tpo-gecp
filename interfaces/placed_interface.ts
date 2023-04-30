import { ISPlaced } from "./iplaced_interface";
import { ISdata } from "./sdata_interface";


export interface IPlaced {
  _id: string;
    companyname:string;
    slug: {
        current: string;
      };
      simg: IImage;
      sdatas?: ISdata[];
      splaced?: ISPlaced[];
      
 }
 export interface IImage {
  assets: {
    url: string;
  };
}
