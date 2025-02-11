import useEvents from "@/data/hooks/useEvents"
import { flex1 } from "@/style"
import { CameraView } from "expo-camera"
import { useRouter } from "expo-router"

export default function PageQrcode() {
  const { addEventInQrCode } = useEvents()
  const router = useRouter()

  return (
    <CameraView 
      facing="back"
      style={flex1}
      onBarcodeScanned={({ data }) => {
        addEventInQrCode(data)
        router.back()
      }}
    />
  )
}
