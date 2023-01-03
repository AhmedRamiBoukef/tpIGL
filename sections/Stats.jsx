import React from "react";
import {
  UserGroupIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";

function Stats() {
  return (
    <ul className="container py-16 flex flex-wrap items-center justify-around gap-8 text-center">
      <li className="flex flex-col items-center border-r-secondary">
        <UserGroupIcon className="h-16 w-16 text-secondary" />
        <p className="text-3xl font-bold text-primary my-1">8,714+</p>
        <p className="uppercase">Happy Customers</p>
      </li>
      <li className="flex flex-col items-center">
        <BuildingOffice2Icon className="h-16 w-16 text-secondary" />
        <p className="text-3xl font-bold text-primary my-1">8,714+</p>
        <p className="uppercase">Bought Houses</p>
      </li>
      <li className="flex flex-col items-center">
        <HomeModernIcon className="h-16 w-16 m-0 text-secondary" />
        <p className="text-3xl font-bold text-primary my-1">8,714+</p>
        <p className="uppercase">Available Houses</p>
      </li>
    </ul>
  );
}

export default Stats;
