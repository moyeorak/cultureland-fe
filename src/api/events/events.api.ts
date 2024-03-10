import { Response } from "@/types/Response.type";
import { client } from "../index.api";
import { getEventsData } from "./events.data";

const getAllEvents = async () => {
  const response = await client.get<Response<getEventsData>>("/events");
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const events = data.result;

  return events;
};

const eventsAPI = {
  getAllEvents,
};

export default eventsAPI;
