import { EventData } from "@/types/Event.type";
import { Response } from "@/types/Response.type";
import { client } from "../index.api";
import { resData } from "./events.response";

const getAllEvents = async (page?: number) => {
  const response = await client.get<resData<EventData>>(`/events?page=${page}`);
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const eventsData = data.result.data.events;
  const totalEventsCnt = data.result.data.totalEventsCnt;

  return { eventsData, totalEventsCnt };
};

const getEvent = async (eventId: number) => {
  const response = await client.get<Response<Event>>(`/events/${eventId}`);
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const event = data.result;

  return event;
};

const eventsAPI = {
  getAllEvents,
  getEvent,
};

export default eventsAPI;
