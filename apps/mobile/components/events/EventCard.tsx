import { alignCenter, bgZinc900, fontBold, p4, roundedMd, textCenter, textWhite, textXl, textXs, textZinc400, w9_10, wFull } from "@/style";
import { EventCardProps } from "@/utils/interfaces/event-card-props";
import { Image, Text, View } from "react-native";

export default function EventCard(props: EventCardProps ) {
  return (
    <View style={[bgZinc900]} >
      <Image 
        source={{ uri: props.event.image }}
        style={[{height: 150}, wFull, roundedMd]}
      />
      <View style={[p4, alignCenter]} >
        <Text style={[textWhite, fontBold, textXl, textCenter]}>{props.event.name}</Text>
        <Text style={[textZinc400, textXs, textCenter, w9_10]} > {props.event.description} </Text>
      </View>
    </View>
  )
}