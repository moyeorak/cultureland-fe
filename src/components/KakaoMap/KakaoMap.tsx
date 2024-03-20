'use client';

import useQueryGetEventsOnMap from '@/react-query/reviews/useQueryGetEventsOnMap';
import { KakaoMapEvent } from '@/types/Event.type';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import MapItemList from '../MapItemList';
import StarRating from '../ReviewCard/_components/StarRating';
import CenterButton from './CenterButton/CenterButton';

function KakaoMap() {
  const [center, setCenter] = useState({ lat: 37.568683, lng: 126.980279 });
  const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});
  const { isLoading, data } = useQueryGetEventsOnMap(center, '연극');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const handleMouseOver = (id: number, lat?: number, lng?: number) => {
    setIsOpen((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseOut = (id: number) => {
    setIsOpen((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className='h-full flex overflow-hidden bg-user-theme-10 bg-opacity-25 shadow-lg backdrop-blur-15 webkit-backdrop-blur-15 border border-opacity-25'>
      <div className='w-[70%] h-full overflow-hidden relative'>
        <Map
          center={center}
          level={6}
          style={{ width: '100%', height: '100%' }}
        >
          {data?.map((event) => (
            <div key={event.id}>
              <MapMarker
                position={{
                  lat: event.venue?.latitude as number,
                  lng: event.venue?.longitude as number,
                }}
                infoWindowOptions={{
                  disableAutoPan: true,
                  removable: false,
                  zIndex: 20,
                }}
                onMouseOver={() => {
                  handleMouseOver(
                    event.id,
                    event.venue.latitude,
                    event.venue.longitude
                  );
                }}
                onMouseOut={() => handleMouseOut(event.id)}
              />
              <Link href={`/events/${event.id}`}>
                <CustomOverlayMap
                  position={{
                    lat: event.venue?.latitude as number,
                    lng: event.venue?.longitude as number,
                  }}
                  zIndex={100}
                >
                  {isOpen[event.id] && (
                    <div className='bg-white rounded-lg border border-opacity-25 text-center min-w-56 -translate-x-[50%] -translate-y-[170px] px-5 py-3'>
                      <span className='text-xl font-bold'>{event.title}</span>
                      <div className='my-3 flex justify-center'>
                        <StarRating rate={Number(event.averagerating)} />
                      </div>
                      <span className='text-sm block'>{event.venue.name}</span>
                    </div>
                  )}
                </CustomOverlayMap>
              </Link>
            </div>
          ))}
          <div className='absolute top-[5%] right-[35%] transform translate-x-[-50%] translate-y-[-50%] z-[500]'>
            <CenterButton setCenter={setCenter} />
          </div>
        </Map>
      </div>

      <div className='w-[30%] h-full overflow-x-scroll scrollbar-hide m-3 ml-0'>
        <MapItemList events={data as KakaoMapEvent[]} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default KakaoMap;
