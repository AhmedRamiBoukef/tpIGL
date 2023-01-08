import { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowsPointingOutIcon,
  HeartIcon,
  HomeModernIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AuthContext } from "../context/authContext";

function HouseCard({ house }) {
  const queryClient = useQueryClient();
  const { token, user } = useContext(AuthContext)?.authState;
  const isLiked = () => data.some((rea) => rea.id === house.id);
  const { data } = useQuery("favs", async () => {
    const data = await fetch("http://127.0.0.1:8000/favs_of_user/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.json();
  });
  const mutation = useMutation(
    (method) => {
      fetch("http://127.0.0.1:8000/favs_of_user/", {
        method: method,
        body: JSON.stringify({
          rea_id: house.id,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    },
    {
      onSuccess: async () => {
        await queryClient.cancelQueries("favs");
        queryClient.setQueryData("favs", (old) => {
          if (isLiked()) {
            return old.filter((rea) => rea.id !== house.id);
          }
          return [...old, house];
        });
      },
    }
  );
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
          {user?.id !== house.owner ? (
            <button
              className={`rounded-full flex items-center justify-center border border-slate-200 text-secondary w-10 h-10 ${
                data && isLiked() && "border-secondary"
              }`}
              onClick={() => {
                isLiked() ? mutation.mutate("DELETE") : mutation.mutate("POST");
              }}
            >
              {data && isLiked() ? (
                <SolidHeartIcon className="w-5 h-5" />
              ) : (
                <HeartIcon className="w-5 h-5" />
              )}
            </button>
          ) : null}
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

export default HouseCard;
