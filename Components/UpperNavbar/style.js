import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
  },
  container: {
    paddingTop: 65,
    height: 133,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  designationText: {
    color: 'white',
    fontSize: 12,
  },
  notificationContainer: {
    position: 'relative',
  },

  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 2,
    backgroundColor: 'red',
    width: 12,
    height: 12,
    borderRadius: '50%',
  },
  notificationArea: {
    padding: 12,
    borderRadius: '50%',
    backgroundColor: 'rgba(47, 169, 224, 0.35)',
  },
});

export default styles;
