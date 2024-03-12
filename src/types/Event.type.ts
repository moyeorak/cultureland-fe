import { Area } from "./Area.type";
import { Category } from "./Category.type";
import { Partner } from "./Partner";
import { Venue } from "./Venue.type";

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
  deletedAt: null | string;
  apiId: string;
  areaCode: number;
  categoryCode: number;
  venue: Venue;
  category: Category;
  area: Area;
  avgRating: number;
};

export type EventDetail = {
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
  area: Area;
  category: Category;
  eventDetail: EventDetail;
  venue: Venue;
  partner: Partner;
  _count: {
    reviews: number;
  };
  reviews: [];
};
