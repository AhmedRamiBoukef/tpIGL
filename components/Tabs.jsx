import Link from "next/link";
import React from "react";

function Tabs({ current }) {
  return (
    <ul class="mt-8 flex justify-center gap-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <li class="w-5/12">
        <Link
          href="/app/offers/sent"
          className={`block px-4 py-3 rounded-lg ${
            current === "sent"
              ? "text-white bg-secondary"
              : "hover:text-gray-900 hover:bg-gray-100"
          }  `}
        >
          Sent
        </Link>
      </li>
      <li class="w-5/12">
        <Link
          href="/app/offers/received"
          className={`block px-4 py-3 rounded-lg ${
            current === "received"
              ? "text-white bg-secondary"
              : "hover:text-gray-900 hover:bg-gray-100"
          }  `}
        >
          Received
        </Link>
      </li>
    </ul>
  );
}

export default Tabs;
