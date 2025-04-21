import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  checkboxContainer: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
  uncheckedBox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: '#0083B0',
    borderRadius: 3,
  },
  checkedBox: {
    height: 20,
    width: 20,
    backgroundColor: '#0083B0',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 12,
    height: 6,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'white',
    position: 'absolute',
    bottom: 7,
  },
});
export default styles;

