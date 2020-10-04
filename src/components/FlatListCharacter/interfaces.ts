import {
  Comics,
  Thumbnail,
  Stories,
} from "../../screens/StackScreens/CharacterDescription/interfaces";

// export interface Marvel {
//   results: Result[];
// }

export interface IThumbnail {
  path: string;
  extension: string;
}

export interface ResultMarvel {
  id: number;
  name: string;
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
