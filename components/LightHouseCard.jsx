import { ArrowsPointingOutIcon, HomeModernIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

function LightHouseCard({ house }) {
  return (
    <li className="bg-white rounded-lg max-w-[350px] flex flex-col">
      <Image
        className="rounded-t-lg object-cover"
        src={"http://127.0.0.1:8000" + house.photos[0].photo}
        width="350"
        height="175"
        alt={house.title}
      />
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <p className="text-2xl text-secondary font-medium">
            {house.price} DA
          </p>          
        </div>
        <p className="font-semibold text-2xl capitalize">{house.title}</p>
        <p className="my-2 text-slate-500">{house.description}</p>
        <ul className="flex items-center justify-between flex-wrap gap-y-2 pt-4 mt-auto border-t-2 border-t-slate-100">
          <li className="flex items-center gap-1">
            <HomeModernIcon className="w-6 h-6 text-secondary" />
            <span className="text-slate-500 text-sm">{house.type}</span>
          </li>
          <li className="flex items-center gap-1">
            <MapPinIcon className="w-6 h-6 text-secondary" />
            <span className="text-slate-500 text-sm">{house.localisation}</span>
          </li>
          <li className="flex items-center gap-1">
            <ArrowsPointingOutIcon className="w-6 h-6 text-secondary" />
            <span className="text-slate-500 text-sm">{house.surface}m</span>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default LightHouseCard;
