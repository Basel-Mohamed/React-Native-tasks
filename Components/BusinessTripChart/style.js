import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(0, 131, 176, 1)', 
      borderRadius: 12,
      paddingHorizontal: 8,
      width: 165,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    title:{marginTop:8},
  
    progressBarContainer: {
      height: 8,
      backgroundColor: '#D9D9D9', 
      borderRadius: 5,
      overflow: 'hidden', 
      marginVertical: 25,
      flexDirection: 'row',
    },
    progressBarUsed: {
      backgroundColor: 'rgba(248, 150, 30, 1)',
      height: '100%',
      borderRadius: 5,
    },
    progressBarAvailable: {
      backgroundColor: 'transparent', 
      height: '100%',
      flex: 1,
    },
    legendContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight:9
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    legendColor: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginRight: 6,
    },
    legendText: {
  
      marginRight: 4,
    },
    legendValue:{
      marginBottom:19
    }
  
  });

  export default styles