declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
