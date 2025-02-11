import { bgBlack, center_grow } from "@/style";
import { ImageBackground } from "react-native";
import Logo from "../../components/template/Logo";

export default function PageHome() {
  return (
    <ImageBackground 
      source={require("@/assets/images/background.png")} 
      resizeMode="cover" 
      style={[center_grow, bgBlack]}
    >
      <Logo/>
    </ImageBackground>
  );
}