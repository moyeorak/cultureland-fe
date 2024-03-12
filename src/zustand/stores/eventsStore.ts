import api from "@/api/index.api";
import { EventData } from "@/types/Event.type";
import { create } from "zustand";

interface EventsStore {
  events: Array<EventData>;
  fetchEvents: () => Promise<void>;
}

const useEventsStore = create<EventsStore>((set) => ({
  events: [],
  fetchEvents: async () => {
    try {
      const events = await api.events.getAllEvents(1);
      set({ events });
    } catch (e) {
      console.error(e);
    }
  },
}));

export default useEventsStore;
