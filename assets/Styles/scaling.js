import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');
const isSmall = width <= 375 && !DeviceInfo.hasNotch();
const guidLineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};
const guidLineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const horizontalScale = size => (width / guidLineBaseWidth()) * size;
const verticalScale = size => (height / guidLineBaseHeight()) * size;

const guidLineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const scaleFontSize = (size) => (Math.round((width / guidLineBaseFonts()) * size));

export {verticalScale, horizontalScale, scaleFontSize};
