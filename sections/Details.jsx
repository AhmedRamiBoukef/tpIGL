import { useState, useContext } from "react";
import { Carousel } from "../components/Carousel";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import HouseCard from "../components/HouseCard";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { DetailsMap } from "../components/DetailsMap";
import { AuthContext } from "../context/authContext";

export default function Details({ id }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);
  const [index2, setIndex2] = useState(2);
  const [description, setDescription] = useState("");
  const [proposal, setProposal] = useState("");
  const { token, user } = useContext(AuthContext)?.authState;
  const {
    isLoading: load,
    isError,
    data: detail,
    error,
  } = useQuery(["details", id], async () => {
    const data = await fetch(`http://127.0.0.1:8000/rea_of_id/${id}/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.json();
  });
  const { data: last } = useQuery("last", async () => {
    const data = await fetch("http://127.0.0.1:8000/last/");
    return data.json();
  });
  const queryClient = useQueryClient();
  const isLiked = () => favs?.some((rea) => rea.id === detail.id);
  const { data: favs } = useQuery("favs", async () => {
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
          rea_id: detail.id,
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
            return old.filter((rea) => rea.id !== detail.id);
          }
          return [...old, detail];
        });
      },
    }
  );
  const handleApply = (e) => {
    e.preventDefault();
    if (description === "" || proposal === "") {
      toast.error("Description & Proposal must not be empty");
    } else {
      console.log("hi")
      fetch(`http://127.0.0.1:8000/posting_offer/${detail.id}/`, {
        method: "POST",
        body: JSON.stringify({
          description: description,
          proposal: proposal,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
    }
  };

  if (load)
    return (
      <p className="w-full h-[100vh] flex justify-center items-center">
        {" "}
        Loading...
      </p>
    );
  if (isError)
    return (
      <p className="w-full h-[100vh] flex justify-center items-center">
        {error.message}
      </p>
    );
  return (
    <div>
      <div className="container mb-14">
        <div
          className="flex items-center text-2xl text-secondary gap-3 cursor-pointer font-semibold"
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
        <div className="pt-4 pb-2 text-4xl font-bold flex justify-between items-center">
          <h1>{detail.title}</h1>
          {detail?.owner.id !== user?.id ? (
            <button
              onClick={() => {
                isLiked() ? mutation.mutate("DELETE") : mutation.mutate("POST");
              }}
              className="text-xl hover:bg-blue-200 text-secondary font-semibold py-2 px-3 sm:px-6 sm:py-3 rounded-xl flex gap-3 items-center border-secondary border bg-blue-100"
            >
              {favs && isLiked() ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              )}
              Favorite
            </button>
          ) : null}
        </div>
        <p className="pb-4 text-2xl text-gray-500">{detail.localisation}</p>
        <div className="py-2 lg:grid grid-cols-3 gap-6">
          <img
            className="h-full mb-6 lg:mb-0 col-span-2 rounded-xl"
            src={`http://127.0.0.1:8000${detail.photos[index].photo}`}
            alt=""
            height="100%"
            width="100%"
            layout="responsive"
            objectFit="contain"
          />
          {detail.photos[index1] && (
            <div className="flex mb-6 lg:mb-0 flex-col justify-between items-center gap-6">
              <img
                onClick={() => {
                  setIndex(index1);
                  setIndex1(index);
                }}
                className="rounded-xl"
                src={`http://127.0.0.1:8000${detail.photos[index1].photo}`}
                alt=""
                height="100%"
                width="100%"
                layout="responsive"
                objectFit="contain"
              />
              {detail.photos[index2] && (
                <div className="relative">
                  <img
                    onClick={() => {
                      setIndex(index2);
                      setIndex2(index);
                    }}
                    className="rounded-xl"
                    src={`http://127.0.0.1:8000${detail.photos[index2].photo}`}
                    alt=""
                    height="100%"
                    width="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                  {detail.photos[index2 + 1] && (
                    <button
                      onClick={() => setShowModal(true)}
                      className="absolute bottom-3 right-3 bg-white text-xl font-semibold px-6 py-3 rounded-xl flex gap-3 items-center"
                    >
                      <svg
                        className="w-6 h-6 "
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      All Images
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="mt-8 lg:grid grid-cols-3 gap-6">
          <div className="col-span-2 mb-6 lg:mb-0">
            <div>
              <h1 className="text-3xl font-semibold py-3">Description</h1>
              <p className="text-lg text-primary">{detail.description}</p>
            </div>
            <div className="py-4">
              <hr />
              <h1 className="text-3xl font-semibold pt-6 pb-3">Details</h1>
              <div className="md:grid py-8 grid-cols-2 gap-x-10 gap-y-3 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl text-gray-500">Listed On</h1>
                  <p className="text-xl font-semibold">{detail.pub_date}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-xl text-gray-500">Type</h1>
                  <p className="text-xl font-semibold">{detail.type}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-xl text-gray-500">Category</h1>
                  <p className="text-xl font-semibold">{detail.category}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-xl text-gray-500">Surface</h1>
                  <p className="text-xl font-semibold">
                    {detail.surface} m&sup2;
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-xl text-gray-500">Wilaya</h1>
                  <p className="text-xl font-semibold">{detail.wilaya}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-xl text-gray-500">Commune</h1>
                  <p className="text-xl font-semibold">{detail.commune}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-xl text-gray-500">Localisation</h1>
                  <p className="text-xl font-semibold">{detail.localisation}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="rounded-xl border p-4 flex flex-col gap-4">
              <h1 className="text-xl text-gray-500">Listed By</h1>
              <div className="flex gap-4 items-center">
                <img
                  className="w-12 h-12 rounded-full"
                  src={detail.owner.picture}
                  alt="Rounded avatar"
                />

                <div className="flex-1 sm:flex justify-between items-center">
                  <h1 className="font-semibold text-2xl">
                    {detail.owner.username}
                  </h1>
                  <div className="flex gap-4">
                    {detail.owner.email && (
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(detail.owner.email)
                        }
                        className="text-xl hover:bg-blue-200 text-secondary font-semibold px-6 py-3 rounded-xl flex gap-3 items-center border-secondary border bg-blue-100"
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
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                        Email
                      </button>
                    )}
                    {detail.owner.phone_num && (
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(detail.owner.phone_num)
                        }
                        className="text-xl hover:bg-blue-200 text-secondary font-semibold px-6 py-3 rounded-xl flex gap-3 items-center border-secondary border bg-blue-100"
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
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        Phone
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <DetailsMap
                longitude={detail.longitude}
                latitude={detail.latitude}
              />
            </div>
          </div>
          {detail?.owner.id !== user?.id ? (
            <div>
              <div className="rounded-xl border p-4 flex flex-col gap-4">
                <h1 className="text-xl text-gray-500">Price</h1>
                <h1 className="text-2xl font-bold text-secondary">
                  {detail.price} DA
                </h1>
                <p className="text-lg mt-6 font-semibold">Description</p>
                <textarea
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  required
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
                />
                <p className="text-lg font-semibold">Proposal</p>
                <div className="flex w-full justify-center items-center space-x-6">
                  <input
                    type="number"
                    id="proposal"
                    value={proposal}
                    onChange={(e) => setProposal(e.target.value)}
                    min="50"
                    max="400000000"
                    required
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                  />
                </div>
                <button
                  onClick={handleApply}
                  className="text-white bg-secondary w-full rounded-lg py-4 flex gap-2 justify-center items-center"
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Apply Now
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-5xl">
                <Carousel images={detail.photos} setShowModal={setShowModal} />
              </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <div>
          <h1 className="text-4xl font-semibold my-10">Latest</h1>
          <div className="flex justify-center md:justify-start gap-8 flex-wrap">
            {last
              ? last.map((house) => <HouseCard key={house.id} house={house} />)
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
