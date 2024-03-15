import { Partner } from "./Partner";
import { Review } from "./Review.type";
import { Venue } from "./Venue.type";

export type ResponseData = {
  data: EventData;
};

export type EventData = {
  events: Event[];
  totalEventsCnt: number;
};

export type Event = {
  id: number;
  partnerId: number;
  title: string;
  poster: string;
  startDate: string;
  endDate: string;
  venueId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  apiId: string;
  areaCode: number;
  categoryCode: number;
  area: Area;
  category: Category;
  eventDetail: EventDetail;
  venue?: Venue;
  partner?: Partner;
  _count?: {
    reviews: number;
  };
  reviews?: Review[];
  avgRating?: number;
};

interface Area {
  code: number;
  name: string;
  value: string;
}

interface Category {
  code: number;
  name: string;
  value: string;
}

interface EventDetail {
  eventId: number;
  description: string;
  price: string;
  runtime: string;
  timeInfo: string;
  targetAudience: string;
  eventStatusCode: number;
  bookingLinks: bookingLink[];
  description_images: DescriptionImage[];
  eventStatus: EventStatus;
}
export interface DescriptionImage {
  id: number;
  eventId: number;
  imageUrl: string;
}
export interface bookingLink {
  id: number;
  eventId: number;
  link: string;
  name: string;
}

interface EventStatus {
  code: number;
  name: string;
  value: string;
}
