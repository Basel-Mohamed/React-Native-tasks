declare module '*.png' {
  import { ImageSourcePropType } from 'react-native';
  const content: ImageSourcePropType;
  export default content;
}

declare module '*.jpg' {
  import { ImageSourcePropType } from 'react-native';
  const content: ImageSourcePropType;
  export default content;
}

declare module '*.jpeg' {
  import { ImageSourcePropType } from 'react-native';
  const content: ImageSourcePropType;
  export default content;
}
declare module '*.svg' {
  import { ComponentType } from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: ComponentType<SvgProps>;
  export default content;
}