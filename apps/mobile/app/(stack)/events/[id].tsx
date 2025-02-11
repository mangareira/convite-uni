import { EventNotFound } from "@/components/events/EventNotFound";
import InfoEvent from "@/components/events/InfoEvent";
import { ListGuests } from "@/components/events/ListGuests";
import { Statisct } from "@/components/shared/Statisct";
import { TitleSection } from "@/components/shared/TitleSection";
import useEvents from "@/data/hooks/useEvents";
import { bgBlack, bgRed500, button, flex1, flexRow, fontBold, gapX2, gapX4, gapY4, p4, py4, roundedLg, selfCenter, textWhite, w4_5, wFull } from "@/style";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function PageDetailsEvent() {
  const {event, selectEvent, deleteEvent} = useEvents()

  const params = useLocalSearchParams<{id: string}>()
  const router = useRouter()

  useEffect(() => {
    selectEvent(params.id)
  }, [params.id])

  const presents = event?.guests.filter((c) => c.confirmed) ?? []
  const absents = event?.guests.filter((c) => !c.confirmed) ?? []

  const totalGuests = presents.reduce((total, guest) => {
    return total + guest.qtdCompanion + 1
  }, 0)

  return event ? (
    <SafeAreaView style={[flex1, bgBlack, p4]} >
      <ScrollView contentContainerStyle={[gapY4, py4]} > 
        <Image 
          source={{ uri: event.image }}
          style={[{ height: 200 }, wFull, roundedLg]}
        />
        <InfoEvent event={event} />
        <View style={[flexRow, gapX2, { marginTop: 40}]} > 
          <Statisct text="Expectativa" value={event.expectedAudience} image={require("@/assets/images/convidados.png")}/> 
          <Statisct text="Confirmações" value={presents.length} image={require("@/assets/images/confirmados.png")}/> 
          <Statisct text="Total" value={totalGuests} image={require("@/assets/images/acompanhantes.png")}/> 
        </View>
        <TitleSection text="Presenças confirmadas" />
        <ListGuests guests={presents} />
        <TitleSection text="Ausências confirmadas" />
        <ListGuests guests={absents} />
        <Pressable style={[button, bgRed500, w4_5, selfCenter]} onPress={() => {
          deleteEvent(event.id)
          router.back()
        }} >
          <AntDesign name="delete" size={24} color={"white"} />
          <Text style={[fontBold, textWhite]} >Deletar evento</Text>
        </Pressable> 
      </ScrollView>
    </SafeAreaView>
  ) : (
    <EventNotFound />
  )
}