import { colors } from "@/style/colors";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { Href, Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons"

export default function TabsLayout() {
  type TabsProps = BottomTabNavigationOptions & {
      href?: Href | null;
  };
  const option = (label: string, icon: string | any): TabsProps | ((prop: {
    route: RouteProp<ParamListBase, string>;
    navigation: any;
}) => TabsProps)  => {
    return {
      tabBarLabel: label,
      tabBarActiveTintColor: colors.blue[500],
      tabBarLabelStyle: { fontSize: 12, fontWeight: "bold"},
      tabBarInactiveTintColor: colors.zinc[400],
      tabBarStyle: {
        backgroundColor: colors.zinc[950],
        borderTopWidth: 0
      },
      tabBarIcon: ({focused}: any) => (
        <AntDesign name={icon} size={24} color={focused ? colors.blue[500] : colors.zinc[400]} />
      ),
      headerShown: false
    }
  }

  return (
    <Tabs>
      <Tabs.Screen name="index" options={option("Inicio", "home")}/>
      <Tabs.Screen name="events" options={option("Eventos", "calendar")}/>
    </Tabs>
  )
}