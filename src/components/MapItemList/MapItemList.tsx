import { ComponentProps } from "react";
import MapItemCard from "../MapItemCard";

interface MapItemListProps {
  events: Array<ComponentProps<typeof MapItemCard>["event"]>;
}

function MapItemList({ events }: MapItemListProps) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-1 py-2 gap-x-5 gap-y-8">
      {events?.map((event) => (
        <li key={event.id} className="block ml-2">
          <MapItemCard event={event} />
        </li>
      ))}
    </ul>
  );
}

export default MapItemList;
