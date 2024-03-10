import api from "@/api/index.api";
import { Event } from "@/types/Event.type";
import { create } from "zustand";

interface EventsStore {
  events: Event[];
  fetchEvents: () => Promise<void>;
}

const useEventsStore = create<EventsStore>((set) => ({
  events: [],
  fetchEvents: async () => {
    try {
      const events = await api.events.getAllEvents();
      set({ events });
    } catch (e) {
      console.error(e);
    }
  },
}));

export default useEventsStore;
