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
  imageBackgroundContainer: {
    flex: 1,
  },
  textContainer: {
    marginTop: 17,
    position: 'relative',
  },
  inputsContainer: {marginTop: 48, position: 'relative'},

  usernameInput: {
    borderBottomWidth: 1,
    borderColor: 'rgba(47, 169, 224, 0.20)',
    marginBottom: 49,
    fontFamily: setFontFamily('400'),
    fontSize: 16,
  },
  passwordContainer: {
    borderBottomWidth: 1,
    borderColor: 'rgba(47, 169, 224, 0.20)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between"
  
  },
  passwordInput: {
    borderColor: 'rgba(47, 169, 224, 0.20)',
    fontFamily: setFontFamily('400'),
    fontSize: 16,
    flex: 1,
    
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 27,
  },

  faceIconContainer: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 44,
  },
  languageIconContainer: {
    marginTop: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
