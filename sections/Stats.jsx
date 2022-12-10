import React from "react";
import {
  UserGroupIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
function Stats() {
  return (
    <ul className="container mx-auto p-2 flex items-center justify-center gap-20 text-center">
      <li>
        <UserGroupIcon className="h-16 w-20 text-secondary" />
        <p>8,714+</p>
        <p>Happy Customers</p>
      </li>
      <li>
        <BuildingOffice2Icon className="h-20 w-20" />
        <p>8,714+</p>
        <p>Home Sold</p>
      </li>
      <li>
        <HomeModernIcon className="h-20 w-20" />
        <p>8,714+</p>
        <p>Home available</p>
      </li>
    </ul>
  );
}

export default Stats;
