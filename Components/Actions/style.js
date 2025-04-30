import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 28,
  },
  mainIconContainer: {
    flexDirection: 'row',
    gap: 30,
  },
  iconContainer:{
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
gap:22

  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    borderRadius: 50,
    backgroundColor: 'rgba(25, 120, 169, 1)',
  },
});
export default styles;
