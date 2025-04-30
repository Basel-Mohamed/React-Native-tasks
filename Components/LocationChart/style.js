import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 165,
    height: "140",
    backgroundColor: 'rgba(156, 113, 66, 0.61)',
    borderRadius: 12,
    paddingTop: 17,
    paddingHorizontal: 12,
    paddingBottom: 13,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 30,
    width: 142,
    height: 24,
  },
  // weather screen
  weatherHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:"center",
    width: 165,
    paddingBottom:6,
    paddingHorizontal:30,
    borderBottomWidth:0.3,
    borderColor:"rgba(255, 255, 255, 1)",
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  weatherDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;