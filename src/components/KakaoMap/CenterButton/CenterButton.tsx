import { ComponentProps, Dispatch, SetStateAction } from 'react';
import { useMap } from 'react-kakao-maps-sdk';

interface CenterButtonProps extends ComponentProps<'button'> {
  setCenter: Dispatch<SetStateAction<{ lat: number; lng: number }>>;
}

function CenterButton({ setCenter }: CenterButtonProps) {
  const map = useMap();

  const handleClickCenterButton = () => {
    setCenter({
      lat: Number(map.getCenter().getLat()),
      lng: Number(map.getCenter().getLng()),
    });

    console.log(
      `lat: ${Number(map.getCenter().getLat())}, lng: ${Number(
        map.getCenter().getLng()
      )}`
    );
  };
  return (
    <button
      onClick={handleClickCenterButton}
      className='bg-user-theme-60 text-white text-sm rounded-full px-5 py-3 hover:bg-user-theme-100 transition-all'
    >
      현재 위치에서 재탐색
    </button>
  );
}

export default CenterButton;
