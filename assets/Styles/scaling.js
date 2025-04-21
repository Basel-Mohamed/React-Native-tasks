import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
const isSmall = width <= 375 && !DeviceInfo.hasNotch();
const isTablet = DeviceInfo.isTablet();

// base values
const guidelineBaseWidth = isTablet ? 768 : (isSmall ? 360 : 400);
const guidelineBaseHeight = isTablet ? 1024 : (isSmall ? 640 : 720);

// based on phone or tablet
const guidelineBaseFonts = isTablet ? 800 : 414; 

const horizontalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const scaleFontSize = size => Math.round((width / guidelineBaseFonts) * size);

export { verticalScale, horizontalScale, scaleFontSize };