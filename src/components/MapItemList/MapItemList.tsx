import { ComponentProps, Dispatch, SetStateAction } from 'react';
import MapItemCard from '../MapItemCard';

interface MapItemListProps {
  events: Array<ComponentProps<typeof MapItemCard>['event']>;
  setIsOpen: Dispatch<SetStateAction<{ [key: number]: boolean }>>;
}

function MapItemList({ events, setIsOpen }: MapItemListProps) {
  return (
    <ul className='grid grid-cols-2 md:grid-cols-1 py-2 gap-x-3 gap-y-3'>
      {events?.map((event) => (
        <li key={event.id} className='block ml-2'>
          <MapItemCard event={event} setIsOpen={setIsOpen} />
        </li>
      ))}
    </ul>
  );
}

export default MapItemList;
