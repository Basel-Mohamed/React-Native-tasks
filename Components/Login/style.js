import {StyleSheet} from 'react-native';
import {setFontFamily} from '../../assets/fonts/Helper';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginHorizontal: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 227,
    height: 113,
  },
  gradientContainer: {
    flex: 1,
  },
  textContainer: {
    marginTop: 17,
    position: 'relative',
  },
  text1: {
    color: '#0083B0',
    fontFamily: setFontFamily('400'),
    fontSize: 32,
  },
  text2: {
    color: '#196F9B',
    fontFamily: setFontFamily('700'),
    fontSize: 24,
  },
  inputsContainer: {marginTop: 48, position: 'relative'},

  usernameInput: {
    borderBottomWidth: 1,
    borderColor: 'rgba(47, 169, 224, 0.20)',
    marginBottom: 49,
    fontFamily: setFontFamily('400'),
    fontSize: 16,
  },
  passwordInput: {
    borderBottomWidth: 1,
    borderColor: 'rgba(47, 169, 224, 0.20)',
    fontFamily: setFontFamily('400'),
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
    borderBottomWidth: 1,
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    bottom: 9,
    zIndex: 99,
  },

  inputLabel: {
    color: '#0083B0',
    fontFamily: setFontFamily('700'),
    fontSize: 13,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 27,
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxText: {
    fontSize: 15,
    fontFamily: setFontFamily('400'),
    color: '#000000',
  },
  faceIconContainer: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 44,
  },
  faceIconText: {
    fontSize: 16,
    color: '#196F9B',
  },

  languageIconContainer: {
    marginTop:42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageIconText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
  },
  errorContainer: {
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    padding: 8,
    borderRadius: 4,
    marginTop: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    textAlign: 'right',
    fontFamily: setFontFamily('400'),
  },
});

export default styles;
