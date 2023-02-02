import { useEffect, useMemo, useRef, useState } from "react";
import Map, { Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export const DetailsMap = ({longitude, latitude}) => {
  return (
    <div className="w-full h-[70vh] my-6">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: 15
        }}
        style={{width: "100%", height: "100%"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=e3MS7OaE6X5iOtnzNxL6"
      >
        <Marker key={1}
          longitude={longitude}
          latitude={latitude}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004AE2" className="w-8 h-8">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
       </Marker>
      </Map>
    </div>


  )
}
