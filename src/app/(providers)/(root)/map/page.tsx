import KakaoMap from '@/components/KakaoMap';

function MapPage() {
  return (
    <div className='h-screen' style={{ height: 'calc(100vh - 64px)' }}>
      <KakaoMap />
    </div>
  );
}

export default MapPage;
