import {StyleSheet} from 'react-native';
import {setFontFamily} from '../../assets/fonts/Helper';

const styles = StyleSheet.create({
  btnText: {
    fontFamily: setFontFamily('500'),
    color: '#FFFFFF',
    fontSize: 20,
  },
  btn: {
    backgroundColor: '#0083B0',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 343,
    height: 56,
    borderRadius: 58,

  },
});

export default styles;
