import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#067590',
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    direction:"ltr"

  },
  imageContainer: {
   position:"absolute",
   top: 230
  },
  image: {
    width: 280,
    height: 280,
  },
  CirclesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 100,
      position:"absolute",
      bottom:58,
      left: 155,
      gap:8,
  },
});

export default style;
