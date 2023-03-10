import React from 'react';
import { Map } from 'react-kakao-maps-sdk';

const Maps = () => {
  return (
    <div>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '450px',
        }}
        level={6} // 지도의 확대 레벨
      />
    </div>
  );
};

export default Maps;
