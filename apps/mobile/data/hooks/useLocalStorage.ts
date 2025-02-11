import AsyncStorage from "@react-native-async-storage/async-storage"
import { useCallback } from "react"

export default function useLocalStorage<T>() {
  const saveItem = useCallback(async (key: string, value: T) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  }, [])
  
  const getItem = useCallback(async (key:string) => {
    const value = await AsyncStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }, [])

  const removeItem = useCallback(async (key:string) => {
    await AsyncStorage.removeItem(key)
  }, [])

  return {
    saveItem, 
    getItem, 
    removeItem
  }
}