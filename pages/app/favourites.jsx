import { useContext } from "react";
import { useQuery } from "react-query";
import Nav from "../../components/Nav";
import { AuthContext } from "../../context/authContext";
import HouseCard from "../../components/HouseCard";
import { useRouter } from "next/router";
import Pagefooter from "../../sections/Pagefooter";

function favourites() {
  const router = useRouter();
  const { token } = useContext(AuthContext)?.authState;
  const { data } = useQuery("favs", async () => {
    const data = await fetch("http://127.0.0.1:8000/favs_of_user/", {
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
      <div className="flex items-center text-2xl text-secondary gap-3 cursor-pointer font-semibold"
          onClick={() => router.push("/app")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </div>
        <h2 className="mt-10 font-semibold text-primary text-4xl">
          Your favourite real estates
        </h2>
        {data?.length ? (
          <div className="py-10 flex flex-wrap justify-center  gap-5">
            {data.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>
        ) : (
          <p className="py-10 text-primary text-center">Nothing found !</p>
        )}
      </div>
    </div>
  );
}

export default favourites;
