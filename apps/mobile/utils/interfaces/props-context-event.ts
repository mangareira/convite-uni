import { Event } from "core"

export type ContextEventProps = {
  event: Event | null
  events: Event[]
  selectEvent: (id: string) => void
  deleteEvent: (id: string) => void
  addEventInQrCode: (qrcode: string) => void
}