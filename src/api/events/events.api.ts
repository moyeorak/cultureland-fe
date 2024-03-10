import { Response } from "@/types/Response.type";
import { client } from "../index.api";
import { getEventData, getEventsData } from "./events.data";

const getAllEvents = async () => {
  const response = await client.get<Response<getEventsData>>("/events");
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const events = data.result;
  return events;
};

const getEvent = async (eventId: number) => {
  const response = await client.get<Response<getEventData>>(
    `/events/${eventId}`
  );
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
