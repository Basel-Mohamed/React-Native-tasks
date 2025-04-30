import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0083B0',
    height: 100,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 16,
    paddingHorizontal: 16,
  },

  icon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeText: {
    display: 'flex',
    position: 'relative',
    bottom: 30,
  },
  text: {
    display: 'none',
  },

  activeIconContainer: {
    backgroundColor: '#30A9E0',
    padding: 15,
    borderRadius: 50,
    position: 'relative',
    top: -37,
    zIndex: 1,
  },

});

export default styles;
