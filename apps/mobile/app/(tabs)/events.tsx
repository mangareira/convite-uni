import useEvents from "@/data/hooks/useEvents";
import EventCard from "@/components/events/EventCard";
import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, ScrollView } from "react-native";
import { bgBlack, flex1, gapY4, p4, py8 } from "@/style";
import { WhitoutEvent } from "@/components/events/WhitoutEvent";
import { NewEvent } from "@/components/events/newEvent";

export default function PageEvents() {
  const { events } = useEvents();  
  const router = useRouter()

  return (
    <SafeAreaView style={[flex1, bgBlack, p4]} >
      {events.length === 0 && <WhitoutEvent />}
      <ScrollView contentContainerStyle={[gapY4, py8]} >
        {events.map((e) => (
          <Pressable key={e.id} onPress={() => router.navigate(`/events/${e.id}`)}>
            <EventCard  event={e}/>
          </Pressable>
        ))}
        <NewEvent /> 
      </ScrollView>
    </SafeAreaView>
  );
}