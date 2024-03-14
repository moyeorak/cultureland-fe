import { EventData } from "@/types/Event.type";
import { Response } from "@/types/Response.type";
import { client } from "../index.api";
import { resData } from "./events.response";

const getAllEvents = async (page?: number) => {
  const response = await client.get<resData<EventData>>(`/events?page=${page}`);
  const results = response.data;

  if (!results.success) throw new Error(results.error.message);

  const eventsData = results.result.data.events;
  const totalEventsCnt = results.result.data.totalEventsCnt;

  return { eventsData, totalEventsCnt };
};

const getEvent = async (eventId: number) => {
  const response = await client.get<Response<Event>>(`/events/${eventId}`);
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const event = data.result;

  return event;
};

const getSearchedEvents = async (keywords: string, pageNumber?: string) => {
  if (!pageNumber) {
    const response = await client.get<resData<EventData>>(
      `/events/search?keywords=${encodeURIComponent(keywords)}`
    );
    const results = response.data;

    if (!results.success) throw new Error(results.error.message);

    const eventsData = results.result.data.events;
    const totalEventsCnt = results.result.data.totalEventsCnt;

    return { eventsData, totalEventsCnt };
  } else {
    const response = await client.get<resData<EventData>>(
      `/events/search?keywords=${encodeURIComponent(
        keywords
      )}&page=${encodeURIComponent(pageNumber)}`
    );
    const results = response.data;

    if (!results.success) throw new Error(results.error.message);

    const eventsData = results.result.data.events;
    const totalEventsCnt = results.result.data.totalEventsCnt;

    return { eventsData, totalEventsCnt };
  }
};
const getEventsOnMap = async (
  coordinate: { lat: number; lng: number },
  category?: string
) => {
  const response = await client.get<Response<Event>>(`/events/map`, {
    params: { la: coordinate.lat, lo: coordinate.lng, category },
  });
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const event = data.result;

  return event;
};

const eventsAPI = {
  getAllEvents,
  getEventsOnMap,
  getEvent,
  getSearchedEvents,
};

export default eventsAPI;
