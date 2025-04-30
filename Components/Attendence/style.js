import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  imageBackground: {
    padding: 16,
  },
  upperDateContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  clipboardContainer: {
    backgroundColor: 'rgba(41, 129, 179, 0.85)',
    padding: 5,
    borderRadius: '50%',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  shiftTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkInfoRow: {
    flexDirection: 'row',
    gap: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },

  gradientBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 71,
    height: 71,
    borderRadius: 35,
  },
  btnChecks: {
    borderWidth: 10,
    alignSelf: 'flex-start',
    borderRadius: '50%',
    borderColor: 'rgba(48, 169, 224, 0.31)',
  },
});

export default styles;
