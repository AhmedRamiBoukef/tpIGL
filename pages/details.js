import Image from "next/image"
import { useState } from "react";
import { Carousel } from "../components/Carousel"
import image from "../images/Aboutus1.png"


export default function Details() {
    const detail = {
        title: "Modern Lifestyle & Perfect Location",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab doloribus recusandae est distinctio error ea fugit, neque voluptatem repellendus ipsum qui maiores culpa nemo, veniam reprehenderit dolores exercitationem eligendi. Eos?",
        category: "Rental",
        type: "House",
        surface: "100",
        price: "2000 million",
        pub_date: "17-02-2022",
        localisation: "El Harrach Alger",
        longitude: "",
        latitude: "",
        wilaya: "Alger",
        commune: "El Harrach",
        uploaded_photos: [
            image,
            image,
            image
        ]
    }
    const [showModal, setShowModal] = useState(false);
    const images = ['https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80', 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80']

  return (
    <div className="container mx-auto p-2 ">
        <div className="flex text-xl text-secondary gap-3 cursor-pointer font-semibold">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back
        </div>
        <div className="pt-4 pb-2 text-4xl font-bold flex justify-between items-center">
            <h1>{detail.title}</h1>
            <button className="text-xl hover:bg-blue-200 text-secondary font-semibold px-6 py-3 rounded-xl flex gap-3 items-center border-secondary border bg-blue-100"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>Favorite</button>
        </div>
        <p className="pb-4 text-2xl text-gray-500">{detail.localisation}</p>
        <div className="py-2 grid grid-cols-3 gap-6">
            <Image className="h-full col-span-2 rounded-xl" src={detail.uploaded_photos[0]} alt="" height="100%" width="100%" layout="responsive" objectFit="contain"/>
            <div className="flex flex-col justify-between items-center gap-6">
                <Image className="rounded-xl" src={detail.uploaded_photos[1]} alt="" height="100%" width="100%" layout="responsive" objectFit="contain"/>
                <div className="relative">
                    <Image className="rounded-xl" src={detail.uploaded_photos[2]} alt="" height="100%" width="100%" layout="responsive" objectFit="contain" />
                    <button onClick={() => setShowModal(true)} className="absolute bottom-3 right-3 bg-white text-xl font-semibold px-6 py-3 rounded-xl flex gap-3 items-center border-secondary border"><svg className="w-6 h-6 " stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>All Images</button>
                    
                </div>
            </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="col-span-2">
                <div>
                    <h1 className="text-3xl font-semibold py-3">Description</h1>
                    <p className="text-lg text-primary">{detail.description}</p>
                </div>
                <div className="py-4">
                    <hr />
                    <h1 className="text-3xl font-semibold pt-6 pb-3">Details</h1>
                    <div className="grid py-8 grid-cols-2 gap-x-10 gap-y-3">
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
                            <p className="text-xl font-semibold">{detail.surface} m&sup2;</p>
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
                        <Image className="w-12 h-12 rounded-full" src={image} alt="Rounded avatar"/>

                        <div className="flex-1 flex justify-between">
                            <div className="flex flex-col ">
                                <h1 className="font-semibold text-2xl">Rami Boukef</h1>
                                <h1 className="text-lg text-gray-500">El Harach Alger</h1>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() =>  navigator.clipboard.writeText('Email')} className="text-xl hover:bg-blue-200 text-secondary font-semibold px-6 py-3 rounded-xl flex gap-3 items-center border-secondary border bg-blue-100"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>Email</button>
                                <button onClick={() =>  navigator.clipboard.writeText('Phone')} className="text-xl hover:bg-blue-200 text-secondary font-semibold px-6 py-3 rounded-xl flex gap-3 items-center border-secondary border bg-blue-100"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>Phone</button>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
            <div >
                <div className="rounded-xl border p-4 flex flex-col gap-4">
                    <h1 className="text-xl text-gray-500">Price</h1>
                    <h1 className="text-2xl font-bold text-secondary">{detail.price} DA</h1>
                    <button className="text-white bg-secondary w-full rounded-lg py-4 flex gap-2 justify-center items-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
        {showModal ? (
            <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-5xl">
                <Carousel images={detail.uploaded_photos}setShowModal={setShowModal} />
              </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
          </>
      ) : null}
    </div>
  )
}
