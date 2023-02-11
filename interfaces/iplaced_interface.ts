export interface ISPlaced {
    name: string;
    position:string;
    linkedln:string;
    companyname:string;
    year:string;
    package:string;
    simg: IImage;

    slug: {
        current: string;
      };
}
export interface IImage {
  assets: {
    url: string;
  };
}