import { Category } from "@/types/Category.type";
import { Response } from "@/types/Response.type";
import { client } from "../index.api";
import { GetEventData, GetEventsData, SearchEventsData } from "./events.data";

const getEvents = async (params?: {
  page?: number;
  category?: string;
  orderBy?: "recent" | "popular";
  area?: string;
}) => {
  const url = "/events";
  const response = await client
    .get<Response<GetEventsData>>(url, {
      params,
    })
    .catch((e) => console.log(e));
  const results = (response as any).data;

  if (!results.success) throw new Error(results.error.message);

  const events = results.result.data.events;
  const totalCount = results.result.data.totalEventsCnt;

  return { events, totalCount };
};

const getEvent = async (eventId: number) => {
  const response = await client.get<Response<GetEventData>>(
    `/events/${eventId}`
  );
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const event = data.result.event;
  const avgRating = data.result.avgRating;

  return { event, avgRating };
};

const searchEvents = async (params: {
  keywords: string;
  page?: number;
  category?: string;
}) => {
  const url = "/events/search";
  const response = await client.get<Response<SearchEventsData>>(url, {
    params,
  });
  const results = response.data;

  if (!results.success) throw new Error(results.error.message);

  const events = results.result.data.events;
  const totalCount = results.result.data.totalEventsCnt;

  return { events, totalCount };
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

const getCategories = async () => {
  const url = "/events/category";
  const response = await client.get<Response<Omit<Category, "value">[]>>(url);
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const categories = data.result;

  return categories;
};

const eventsAPI = {
  getEvents,
  getEventsOnMap,
  getEvent,
  searchEvents,
  getCategories,
};

export default eventsAPI;
