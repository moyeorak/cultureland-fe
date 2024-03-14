import api from "@/api/index.api";
import { Event } from "@/types/Event.type";
import { create } from "zustand";

interface EventsStore {
  events: Array<Event>;
  fetchEvents: () => Promise<void>;
}

const useEventsStore = create<EventsStore>((set) => ({
  events: [],
  fetchEvents: async () => {
    try {
      const { events: eventsData } = await api.events.getEvents();
      set({ events: eventsData });
    } catch (e) {
      console.error("Failed to fetch:", e);
    }
  },
}));

export default useEventsStore;
