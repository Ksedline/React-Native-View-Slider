import { Dimensions } from 'react-native';

function isPortrait() {
  const { height, width } = Dimensions.get('screen');

  return height >= width;
}

export { isPortrait };
