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
}
