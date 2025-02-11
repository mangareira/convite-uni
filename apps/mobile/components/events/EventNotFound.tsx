import { bgBlack, flex1, textWhite } from "@/style"
import { Text, View } from "react-native"

export const EventNotFound = () => {
  return (
    <View style={[flex1, bgBlack]} >
      <Text style={[textWhite]} >
        evento não encontrado
      </Text>
    </View>
  )
}
