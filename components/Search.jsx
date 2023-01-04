import { useContext, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../context/authContext";
import { useQuery } from "react-query";
import HouseCard from "./HouseCard";
function Search() {
  const [formData, setFormData] = useState({
    search_field: "",
    type: "",
    wilaya: "",
    commune: "",
    start_date: "",
    end_date: "",
  });
  const { token } = useContext(AuthContext).authState;
  const { data } = useQuery(["reas", formData], async () => {
    const data = await fetch("http://127.0.0.1:8000/search_for_reas/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return data.json();
  });
  return (
    <div className="container">
      <h2 className="mt-10 font-semibold text-primary text-4xl">
        Search for properties to buy
      </h2>
      <form className="">
        <div className="bg-white flex items-center mt-8 px-2 py-4 rounded-md">
          <input
            className="flex-1 focus:outline-none"
            type="text"
            onChange={(e) =>
              setFormData((old) => ({ ...old, search_field: e.target.value }))
            }
            placeholder="Search"
          />
          <button>
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-8 bg-white rounded-lg flex flex-wrap justify-between justify-items-start gap-6 p-6">
          <div className="w-full md:w-5/12 lg:w-1/6 border-b-2 lg:border-b-0  lg:border-r-2 border-gray-200">
            <label className="block text-slate-500 " htmlFor="type">
              Type
            </label>
            <input
              className="p-1 focus:outline-none w-full"
              type="text"
              onChange={(e) =>
                setFormData((old) => ({ ...old, type: e.target.value }))
              }
            />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/6 border-b-2 lg:border-b-0  lg:border-r-2 border-gray-200">
            <label className="block text-slate-500 " htmlFor="type">
              Wilaya
            </label>
            <input
              className="p-1 focus:outline-none w-full"
              type="text"
              onChange={(e) =>
                setFormData((old) => ({ ...old, wilaya: e.target.value }))
              }
            />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/6 border-b-2 lg:border-b-0  lg:border-r-2 border-gray-200">
            <label className="block text-slate-500 " htmlFor="type">
              Commune
            </label>
            <input
              className="p-1 focus:outline-none w-full"
              type="text"
              onChange={(e) =>
                setFormData((old) => ({ ...old, commune: e.target.value }))
              }
            />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/6 border-b-2 lg:border-b-0  lg:border-r-2 border-gray-200">
            <label className="block text-slate-500 " htmlFor="type">
              Start date
            </label>
            <input
              className="p-1 focus:outline-none w-full"
              type="date"
              onChange={(e) =>
                setFormData((old) => ({ ...old, start_date: e.target.value }))
              }
            />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/6 border-b-2 lg:border-b-0  border-gray-200">
            <label className="block text-slate-500 " htmlFor="type">
              End date
            </label>
            <input
              className="p-1 focus:outline-none w-full"
              type="date"
              onChange={(e) =>
                setFormData((old) => ({ ...old, end_date: e.target.value }))
              }
            />
          </div>
        </div>
      </form>
      <ul className="mt-10 flex flex-wrap justify-center gap-5">
        {data
          ? data.map((house) => <HouseCard key={house.id} house={house} />)
          : null}
      </ul>
    </div>
  );
}

export default Search;
