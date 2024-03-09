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
  eventDetail?: EventDetail;
};

interface EventDetail {
  description: string;
  bookingLink: string;
  event_description_image: string[];
  runtime: string;
  targetAudience: string;
  price: string;
  genre: string;
  status: string;
  startTime: string;
  endTime: string;
}
