import { Dimensions } from "react-native";
const SIZE_UNIT = 16;
const size = value => value * SIZE_UNIT;
export const colors = {
  white: "#ffffff",
  accent: "#00a5ff"
};

export default {
  main: {
    container: {
      width: "100%",
      flex: 1,
      padding: size(1),
      backgroundColor: colors.accent
    },
    inner: {
      width: "100%",
      height: "100%",
      flex: 1,
      padding: 0,
      marginBottom: size(2),
      maxHeight: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      fontSize: 18,
      lineHeight: 27,
      textAlign: "center",
      color: colors.white
    },
    inputWrapper: {
      marginTop: size(2)
    },
    input: {
      height: "100%",
      color: colors.white,
      borderBottomColor: colors.white
    },
    inputContainer: {
      width: "100%",
      minHeight: 120,
      maxHeight: Dimensions.get("window").height / 2,
      borderBottomWidth: 0
    },
    inputInputContainer: {
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 50,
      paddingBottom: 7,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderBottomColor: colors.white,
      borderBottomWidth: 1
    },
    resetButton: {
      width: 26,
      height: 26,
      margin: 10,
      padding: 3,
      borderRadius: 13,
      backgroundColor: colors.accent
    },
    resetButtonDisabled: {
      opacity: 0,
      backgroundColor: colors.accent
    },
    resetButtonIcon: {
      margin: 0,
      width: 17,
      lineHeight: 20
    },
    resetButtonContainer: {
      position: "absolute",
      right: 0,
      top: 0
    },
    button: {
      height: size(4),
      minWidth: size(15),
      margin: 0,
      flexShrink: 0,
      borderRadius: 8,
      backgroundColor: colors.white
    },
    buttonTitle: {
      fontWeight: "bold",
      color: colors.accent
    },
    buttonDisabled: {
      backgroundColor: "rgba(255, 255, 255, 0.6)"
    },
    buttonDisabledTitle: {
      color: colors.accent
    }
  },
  result: {
    container: {
      width: "100%",
      flex: 1,
      padding: size(1),
      backgroundColor: colors.accent
    },
    inner: {
      width: "100%",
      height: "100%",
      flex: 1,
      padding: 0,
      maxHeight: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      fontSize: 24,
      marginBottom: size(1),
      textAlign: "center",
      fontWeight: "bold",
      color: colors.white
    },
    detail: {
      fontSize: 12,
      marginBottom: size(1),
      textAlign: "center",
      color: colors.white
    },
    qr: {
      backgroundColor: colors.white,
      borderRadius: 8
    },
    button: {
      height: size(4),
      minWidth: size(15),
      margin: 0,
      flexShrink: 0,
      borderRadius: 8,
      backgroundColor: colors.white
    },
    buttonTitle: {
      fontWeight: "bold",
      color: colors.accent
    },
    buttonIcon: {
      marginRight: 4
    }
  }
};
