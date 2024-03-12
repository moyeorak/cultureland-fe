import api from "@/api/index.api";
import { Events } from "@/types/Event.type";
import { create } from "zustand";

interface EventsStore {
  events: Array<Events>;
  fetchEvents: () => Promise<void>;
}

const useEventsStore = create<EventsStore>((set) => ({
  events: [],
  fetchEvents: async () => {
    try {
      const { eventsData } = await api.events.getAllEvents();
      set({ events: eventsData });
    } catch (e) {
      console.error("Failed to fetch:", e);
    }
  },
}));

export default useEventsStore;
