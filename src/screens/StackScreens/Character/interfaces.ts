export interface CharactersDetails {
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
interface Comics {
  available?: number;
  collectionURI?: string;
  items?: ComicsItem[];
  returned?: number;
}
interface ComicsItem {
  resourceURI?: string;
  name?: string;
}
interface Stories {
  available?: number;
  collectionURI?: string;
  items?: StoriesItem[];
  returned?: number;
}
interface Thumbnail {
  path?: string;
  extension?: string;
}

interface StoriesItem {
  resourceURI?: string;
  name?: string;
}
