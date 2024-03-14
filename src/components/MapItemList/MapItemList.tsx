import { ComponentProps } from "react";
import MapItemCard from "../MapItemCard";

interface MapItemListProps {
  events: Array<ComponentProps<typeof MapItemCard>["event"]>;
}

export type MapEvent = {
  averagerating: string;
  category: {
    name: string;
  };
  id: number;
  distance: number;
  title: string;
  venue: {
    latitude: number;
    longitude: number;
    name: string;
  };
  venueId: number;
  _count: {
    reviews: number;
  };
};

function MapItemList({ events }: MapItemListProps) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-8">
      {events?.map((event) => (
        <li key={event.id} className="block">
          <MapItemCard event={event as MapEvent} />
        </li>
      ))}
    </ul>
  );
}

export default MapItemList;
