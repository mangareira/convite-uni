import { ImageSourcePropType } from "react-native"

export type StatistcProps<T> = {
  text: string
  value: T
  image: ImageSourcePropType
}