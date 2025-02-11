import { alignCenter, flexRow, text3Xl, textBlue500, textCenter, textWhite, textZinc400, w4_5 } from "@/style"
import { useFonts } from "expo-font"
import { Image, Text, View } from "react-native"

export default function Logo() {
  const [loaded] = useFonts({
    Righteous: require("@/assets/fonts/Righteous-Regular.ttf")
  })

  if(!loaded) return null

  const font = {fontFamily: "Righteous"}

  return (
    <View style={alignCenter}>
      <Image 
        source={require("@/assets/images/logo.png")}
        style={{ width: 80, height: 80 }}
      />
      <View style={flexRow}>
        <Text style={[text3Xl, textWhite, font]} >CONVIT</Text>
        <Text style={[text3Xl, textBlue500, font]} >3 </Text>
        <Text style={[text3Xl, textWhite, font]} >DIGITAL</Text>
      </View>
      <View style={w4_5}>
        <Text style={[textZinc400, textCenter]}>
          Crie e gerencie o convite do seu evento de forma rápida e fácil, sem complicações!
        </Text>
      </View>
    </View>
  )
}