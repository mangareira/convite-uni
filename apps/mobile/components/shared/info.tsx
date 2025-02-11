import { border, borderZinc800, fontBold, gapY1, px4, py2, roundedLg, textLg, textWhite, textXl, textZinc400 } from "@/style"
import { InfoProps } from "@/utils/interfaces/info-props"
import { Text, View } from "react-native"

export const Info = (props: InfoProps) => {
  return (
    <View style={[px4, py2, gapY1, roundedLg, border, borderZinc800]} >
      <Text style={[textXl, fontBold, textWhite]} > {props.label} </Text>
      <Text style={[textLg, textZinc400]} > {props.children} </Text>
    </View>
  )
}
