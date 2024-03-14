import { Event } from "@/types/Event.type";

export type GetEventsData = {
  data: { events: Required<Event>[]; totalEventsCnt: number };
};

export type SearchEventsData = {
  data: { events: Required<Event>[]; totalEventsCnt: number };
};

export type GetEventData = {
  event: Event;
  avgRating: string;
};
