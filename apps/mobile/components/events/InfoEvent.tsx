import { EventCardProps } from "@/utils/interfaces/event-card-props";
import { View } from "react-native";
import { Info } from "../shared/info";
import { gapY2 } from "@/style";

export default function InfoEvent(props: EventCardProps) {
  return (
    <View style={gapY2} >
      <Info label="Nome">
        {props.event.name}
      </Info>
      <Info label="Data">
        {new Date(props.event.date).toLocaleDateString()}
        {" às "}
        {new Date(props.event.date).toLocaleTimeString()}
      </Info>
      <Info label="Local" >
        {props.event.local}
      </Info>  
      <Info label="Descrição" >
        {props.event.description}
      </Info>  
    </View>
  )
}