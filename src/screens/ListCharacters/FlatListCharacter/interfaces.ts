import {
  Comics,
  Thumbnail,
  Stories,
} from "../../CharacterDescription/interfaces";

// export interface Marvel {
//   results: Result[];
// }

export interface IThumbnail {
  path: string;
  extension: string;
}

export interface ResultCharacters {
  id: number;
  name: string;
  title: string;
  description: string;
  modified?: string;
  thumbnail: Thumbnail;
  resourceURI?: string;
  comics?: Comics;
  series?: Comics;
  stories?: Stories;
  events?: Comics;
  urls?: URL[];
}
export interface ResultComics {
  id: number;
  title: string;
  description: string;
  modified?: string;
  thumbnail: Thumbnail;
  resourceURI?: string;
}
