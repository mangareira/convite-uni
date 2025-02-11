import { useContext } from "react";
import ContextEvent from "../contexts/ContextEvent";

const useEvents = () => useContext(ContextEvent)
export default useEvents;