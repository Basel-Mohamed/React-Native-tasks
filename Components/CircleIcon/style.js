import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/Styles/scaling";

const styles = StyleSheet.create({

    circle: {
      width: horizontalScale(10),
      height: verticalScale(10),
      borderRadius: "50%",
    },
  });

  export default styles;