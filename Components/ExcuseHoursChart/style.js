import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      borderRadius: 12,
      width: 183,
      padding: 8,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      
    },
    barChartContainer: {overflow: 'hidden'},
  
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
    },
    legendContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    legendColor: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      marginRight: 6,
    },
  
  });
  export default styles;