import { ContextEventProps } from "@/utils/interfaces/props-context-event";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Event } from "core"
import useAPI from "../hooks/useAPI";
import useLocalStorage from "../hooks/useLocalStorage";

const ContextEvent = createContext<ContextEventProps>({
  addEventInQrCode: () => {},
  deleteEvent: () => {},
  event: null,
  events: [],
  selectEvent: () => {}
});

export function EventsProvider(props:{children: ReactNode}) {
  const { httpPost } = useAPI()
  const { saveItem, getItem } = useLocalStorage<Event[]>()
  const [event, setEvent] = useState<Event | null>(null)
  const [events, setEvents] = useState<Event[]>([])

  const selectEvent = async(id: string) => {
    const event = events.find((e) => e.id === id)
    
    if(!event?.password) return

    const loadedEvent = await loadEvent(id, event.password)

    setEvent(loadedEvent ?? null)
  }

  const addEventInQrCode = async (qrcode: string) => {
    
    try {
      const idAndPassword: {id: string, password: string} = JSON.parse(qrcode)
      const event = await loadEvent(idAndPassword.id, idAndPassword.password)
      if(!event) {
        return deleteEvent(idAndPassword.id)
      }
      const newEvents = events.filter((e) => e.id !== idAndPassword.id)
      newEvents.push(event)
      
      saveItem("events", newEvents)
      setEvents(newEvents)
    } catch (error) {
    }
  }

  const deleteEvent = (id: string) => {
    const newEvents = events.filter(e => e.id !== id)
    saveItem("events", newEvents)
    setEvents(newEvents)
  }

  const loadEvent = async(id: string, password: string) => {
    const event = await httpPost<Event, {id: string, password: string}>("events/access", {id, password})
    return event
  }

  const loadEvents = async () => {
    const events = await getItem("events")
    setEvents(events || [])
  }

  useEffect(() => {
    loadEvents()
  }, [])

  return (
    <ContextEvent.Provider value={{
      addEventInQrCode,
      deleteEvent,
      event,
      events,
      selectEvent
    }}>
      {props.children}
    </ContextEvent.Provider>
  )
}

export default ContextEvent