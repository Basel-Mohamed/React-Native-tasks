import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    position: 'relative',
    marginTop: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginHorizontal: 16,

  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    borderRadius: 8,
  },
  textContainer: {
    position: 'absolute',
    bottom: 17,
    left: 12,
    zIndex: 1,
  },
  descriptionContainer: {
    width: width * 0.85, 
    marginTop: 3,
  },
});

export default styles;
