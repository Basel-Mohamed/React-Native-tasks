import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  page: {
    width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Indecitors Container
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 28,
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: '#D5EBF5',
    position: 'absolute',
    bottom: 30,
    left: (width - 80) / 2,
  },
  // Indicetor dots
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#82AEC6',
    marginHorizontal: 5,
  },
  // dots on focus
  paginationDotActive: {
    backgroundColor: '#067590',
    width: 32,
    height: 6,
  },
});

export default styles;
