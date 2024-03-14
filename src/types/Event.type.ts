import { Area } from "./Area.type";
import { Category } from "./Category.type";
import { Partner } from "./Partner";
import { Review } from "./Review.type";
import { Venue } from "./Venue.type";

export type ResponseData = {
  data: EventData;
};

export type EventData = {
  events: Events[];
  totalEventsCnt: number;
};

export type HomeEvents = {
  events: HomeEvent[];
};

export type HomeEvent = {
  id: number;
  partnerId: number;
  title: string;
  poster: string;
  startDate: string;
  endDate: string;
  venueId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  apiId: string;
  areaCode: number;
  categoryCode: number;
  venue: {
    id: number;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    apiId: string;
  };
  category: {
    code: number;
    value: string;
    name: string;
  };
  area: {
    code: number;
    name: string;
    value: string;
  };
  _count: {
    reviews: number;
    attendedUsers: number;
    interestedUsers: number;
  };
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
  venue: Venue;
  partner?: Partner;
  _count: {
    reviews: number;
  };
  reviews: Review[];
  avgRating?: string;
};

export type Events = {
  id: number;
  partnerId: number;
  title: string;
  poster: string;
  startDate: string;
  endDate: string;
  venueId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  apiId: string;
  areaCode: number;
  categoryCode: number;
  venue: Venue;
  category: Category;
  area: Area;
  avgRating: number;
};

interface EventDetail {
  eventId: number;
  description: string;
  price: string;
  runtime: string;
  timeInfo: string;
  targetAudience: string;
  eventStatusCode: number;
  bookingLinks: any[];
  description_images: DescriptionImage[];
  eventStatus: EventStatus;
}

interface DescriptionImage {
  id: number;
  eventId: number;
  imageUrl: string;
}

interface EventStatus {
  code: number;
  name: string;
  value: string;
}
