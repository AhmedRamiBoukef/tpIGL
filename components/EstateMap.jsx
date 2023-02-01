import { useEffect, useMemo, useRef, useState } from "react";
import Map, { Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export const EstateMap = ({position, setPosition}) => {

  // const markers = useMemo(() => emergencyList.map((emergency, index) => (
  //   <Marker key={index}
  //     longitude={emergency.location.coordinates[0]}
  //     latitude={emergency.location.coordinates[1]}>
  //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  //     </svg>

  //   </Marker>)
  // ), []);
  return (
    <div className="w-full my-6">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 25,
          latitude: 25,
          zoom: 14
        }}
        style={{width: "100%", aspectRatio: "1"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=e3MS7OaE6X5iOtnzNxL6"
        onClick={(e) => setPosition([e.lngLat.lng,e.lngLat.lat])}
      >
        <Marker key={1}
          longitude={position[0]}
          latitude={position[1]}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004AE2" className="w-8 h-8">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
       </Marker>
        {/* {markers} */}
      </Map>
    </div>


  )
}
