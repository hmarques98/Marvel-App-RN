import {
  Comics,
  Thumbnail,
  Stories,
} from "../../screens/StackScreens/Character/interfaces";

export interface Marvel {
  results: Result[];
}
export interface Result {
  creators?: any;
  id: number;
  title?: string;
  description?: string;
  images: IImage[];
  series: { name: string };
}

export interface IImage {
  path: string;
  extension: string;
}

export interface ResultMarvel {
  id?: number;
  name?: string;
  description?: string;
  modified?: string;
  thumbnail?: Thumbnail;
  resourceURI?: string;
  comics?: Comics;
  series?: Comics;
  stories?: Stories;
  events?: Comics;
  urls?: URL[];
}
