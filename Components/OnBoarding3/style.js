import {StyleSheet, Dimensions} from 'react-native';
import {setFontFamily} from '../../assets/fonts/Helper';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#E2EBEF',
    justifyContent: 'space-between',
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 32,
    marginTop: 91,
    alignItems: 'center',
  },
  textTitle: {
    textAlign: 'center',
    fontFamily: setFontFamily('700'),
    fontSize: 18,
    marginBottom: 16,
  },
  textBody: {
    textAlign: 'center',
    fontFamily: setFontFamily('400'),
    fontSize: 16,
  },
  imageContainer: {
    height: 550,
    position: 'relative',
  },
  image: {
    width: '100%',
  },
  btnContainer: {
    position: 'absolute',
    bottom: 49,
    left: (width - 343) / 2,
  },
});

export default styles;
