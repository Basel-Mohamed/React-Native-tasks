import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    indicatorsWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    indicator: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: '#D9D9D9',
      marginHorizontal: 3,
      borderWidth: 0.2,
      borderColor: 'rgba(40, 103, 137, 0.63)',
    },
    activeIndicator: {
      backgroundColor: '#2F80ED',
      width: 32,
      height: 6,
      borderRadius: 3,
    },
  });

  export default styles;