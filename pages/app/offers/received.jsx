import React, { useContext } from "react";
import { useQuery } from "react-query";
import Nav from "../../../components/Nav";
import Tabs from "../../../components/Tabs";
import { AuthContext } from "../../../context/authContext";
import OfferCard from "../../../components/OfferCard";
import Link from "next/link";

function received() {
  const { token } = useContext(AuthContext)?.authState;
  const { data } = useQuery("receivedoffers", async () => {
    const data = await fetch("http://127.0.0.1:8000/offers_made_to_user/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await data.json();
  });
  return (
    <div>
      <Nav />
      <div className="container pb-12">
        <h2 className="mt-10 font-semibold text-primary text-4xl">Offers</h2>
        <Tabs current="received" />
        <div className="flex justify-center md:justify-between flex-wrap gap-4   mt-10">
          {data?.map((offer) => (
            <Link href={`/details/${offer.real_estate}`}>
              <OfferCard key={offer.real_estate} offer={offer} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default received;
