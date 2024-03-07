import { Category } from "./Category.type";
import { Venue } from "./Venue.type";

export type Event = {
  eventId: number;
  partnerId: number;
  title: string;
  poster: string;
  startDate: string;
  endDate: string;
  venue: Venue;
  category: Category;
  rating: number;
};
