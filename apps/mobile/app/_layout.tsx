import {EventsProvider} from "@/data/contexts/ContextEvent"
import { colors } from "@/style/colors"
import { Stack } from "expo-router"

export default function RootLayout() {
  return (
    <EventsProvider>
      <Stack>
        <Stack.Screen 
          name="(tabs)"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="(stack)/qrcode"
          options={{
            title: "Leitor de QR Code",
            headerBackTitle: "Voltar",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.zinc[900]
            },
            headerShown: true
          }}
        />
        <Stack.Screen 
          name="(stack)/events/[id]"
          options={{
            title: "Detalhes do evento",
            headerBackTitle: "Voltar",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.zinc[900]
            },
            headerShown: true
          }}
        />
      </Stack>
    </EventsProvider>
  )
}
