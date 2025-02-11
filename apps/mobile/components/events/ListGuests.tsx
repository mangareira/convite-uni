import { border, borderZinc800, px4, py2, roundedMd, textLg, textSm, textWhite, textZinc400 } from "@/style"
import { Guest } from "core"
import { Text, View } from "react-native"

export const ListGuests = (props: {guests: Guest[]}) => {
  return (
    <View>
      {props.guests && props.guests.length > 0 ? (
        <View>
          {props.guests.map((guest, index) => (
            <View key={guest.id} style={[border, borderZinc800, roundedMd, px4, py2]}>
              <Text style={[textWhite, textLg]} >{guest.name}</Text>
              <Text style={[textZinc400, textSm]} >{guest.email}</Text>
            </View>
          ))}          
        </View>
      ): (
        <Text style={[textWhite, textLg]} >Ninguém por aqui ainda...</Text>
      )}
    </View>
  )
}
