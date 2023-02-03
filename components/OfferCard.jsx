import React, { useContext } from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import { AuthContext } from "../context/authContext";
import {
  ArrowsPointingOutIcon,
  HomeModernIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function OfferCard({ offer, sent }) {
  const { token, user } = useContext(AuthContext)?.authState;
  const { data } = useQuery(["details", offer.real_estate], async () => {
    const data = await fetch(
      `http://127.0.0.1:8000/rea_of_id/${offer.real_estate}/`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return await data.json();
  });
  return data ? (
    <div className="bg-white rounded-lg max-w-[350px] flex flex-col shadow">
      <Image
        className="rounded-t-lg object-cover"
        src={"http://127.0.0.1:8000" + data.photos[0].photo}
        width="350"
        height="175"
        alt={data.title}
      />
      <div className="p-4 flex flex-col flex-1">
        <p className="font-semibold text-2xl capitalize">{data.title}</p>
        <p className="my-2 text-slate-500">{offer.description}</p>
        <div className="flex justify-between items-center gap-2 mb-4">
          <p className="text-primary capitalize">
            {sent
              ? `to: ${data.owner.username}`
              : `from: ${offer.offerer.username}`}{" "}
            <br />
            Proposal: {offer.proposal} DA
          </p>
          <img
            className="rounded-full w-11 h-11"
            src={sent ? data.owner.picture : offer.offerer.picture}
          />
        </div>
      </div>
    </div>
  ) : null;
}

export default OfferCard;
