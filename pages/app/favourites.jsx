import { useContext } from "react";
import { useQuery } from "react-query";
import Nav from "../../components/Nav";
import { AuthContext } from "../../context/authContext";
import HouseCard from "../../components/HouseCard";

function favourites() {
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
        <h2 className="mt-10 font-semibold text-primary text-4xl">
          Your favourite real estates
        </h2>
        {data?.length ? (
          <div className="py-10 flex flex-wrap justify-center lg:justify-between gap-5">
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
