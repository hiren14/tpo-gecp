import { IAuthor } from "./author_interface";
import { IComment } from "./comment_interface";

export interface IPost {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  dinter:string;
  dlast:string;
  companyname: string;
  description:string;
  vac:string;
  bond:any;
  inter:any;
  quali:string;
  sel:string;
  elig:string;
  package:string;
  gurl:string;
  loc:string;
  author: IAuthor;
  comments?: IComment[];
  mainImage: IImage;
  slug: {
    current: string;
  };
  job: any;
}

export interface IImage {
  assets: {
    url: string;
  };
}
