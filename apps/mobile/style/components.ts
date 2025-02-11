import { StyleSheet } from "react-native";
import { bgBlue600, bgRed500, flexRow, gapX2, justifyCenter, px4, py2, roundedMd } from "./util";

const styles = StyleSheet.create({
  center_grow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    columnGap: gapX2.columnGap,
    flexDirection: flexRow.flexDirection,
    justifyContent: justifyCenter.justifyContent,
    paddingHorizontal: px4.paddingHorizontal,
    paddingVertical: py2.paddingVertical,
    borderRadius: roundedMd.borderRadius,
    backgroundColor: bgBlue600.backgroundColor
  }
})

export const {button, center_grow} = styles;