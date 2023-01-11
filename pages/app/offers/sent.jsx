import React, { useContext } from "react";
import { useQuery } from "react-query";
import Nav from "../../../components/Nav";
import Tabs from "../../../components/Tabs";
import { AuthContext } from "../../../context/authContext";

function sent() {
  const { token } = useContext(AuthContext)?.authState;
  const { data } = useQuery("sentoffers", async () => {
    const data = await fetch("http://127.0.0.1:8000/offers_made_by_user/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.json();
  });
  return (
    <div>
      <Nav />
      <div className="container">
        <h2 className="mt-10 font-semibold text-primary text-4xl">Offers</h2>
        <Tabs current="sent" />
      </div>
    </div>
  );
}

export default sent;
