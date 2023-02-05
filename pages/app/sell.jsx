import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { EstateMap } from "../../components/EstateMap";
import Nav from "../../components/Nav";
import { AuthContext } from "../../context/authContext";
import Pagefooter from "../../sections/Pagefooter";


export default function AddListing() {
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState([25,25])
  const [formData, setFormData] = useState({
    title:"",
    description:"",
    category:"sale",
    type:"",
    surface:0,
    price:0,
    localisation:"",
    wilaya:"",
    commune:"",
    uploaded_photos:{},
  });
  const {
    title,
    description,
    category,
    type,
    surface,
    price,
    localisation,
    wilaya,
    commune,
    uploaded_photos,
  } = formData;
  const { token, user } = useContext(AuthContext)?.authState;
  const router = useRouter()


  function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}


  let f = new FormData();
  function onChange(e) {
    // Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        uploaded_photos: e.target.files,
      }));
    }
    // Text/Number
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  }
  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (uploaded_photos.length > 6 || uploaded_photos.length < 3) {
      setLoading(false);
      toast.error("min 3 & max 6 images are allowed");
      return;
    }

    const formDataCopy = {
      ...formData,
      pub_date: dateToYMD(new Date()),
    };
    
    Object.keys(formDataCopy).forEach(function(key, index) {
      if (key === "uploaded_photos") {
        for (let index = 0; index < formDataCopy[key].length; index++) {
          f.append(key,formDataCopy[key][index])
          
        }
      } else {
        f.append(key,formDataCopy[key])
      }
      
    });
    f.append("longitude",position[0]);
    f.append("latitude", position[1]);
  
  fetch("http://127.0.0.1:8000/post_rea/", 
  {
    method: "POST",
    body: f,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(response => response.json())
  .then(result => {
    toast.success("Listing created");
    router.push(`/details/${result.id}`)
  })
  .catch(error => console.log('error', error));
  
  }
  

  if (loading) return (<p className="w-full h-[100vh] flex justify-center items-center"> Loading...</p>);

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="container md:max-w-xl">
        <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
        <form onSubmit={onSubmit}>
          
          <p className="mt-6 mb-2 font-semibold">Title</p>
          <input
            type="text"
            id="title"
            value={title}
            onChange={onChange}
            placeholder="Title"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />
          <p className="mt-6 mb-2 font-semibold">Description</p>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={onChange}
            placeholder="Description"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />
          <p className="mt-6 mb-2 font-semibold">Category</p>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              id="category"
              value="sale"
              onClick={onChange}
              className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                category !== "sale"
                  ? "bg-white text-black"
                  : "bg-blue-600 text-white"
              }`}
            >
              Sale
            </button>
            <button
              type="button"
              id="category"
              value="exchange"
              onClick={onChange}
              className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                category !== "exchange"
                  ? "bg-white text-black"
                  : "bg-blue-600 text-white"
              }`}
            >
              Exchange
            </button>
            <button
              type="button"
              id="category"
              value="rental"
              onClick={onChange}
              className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                category !== "rental"
                  ? "bg-white text-black"
                  : "bg-blue-600 text-white"
              }`}
            >
              Rental
            </button>
            <button
              type="button"
              id="category"
              value="Rental for holidays"
              onClick={onChange}
              className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                category !== "Rental for holidays"
                  ? "bg-white text-black"
                  : "bg-blue-600 text-white"
              }`}
            >
              Rental for holidays
            </button>
          </div>

          <p className="mt-6 mb-2 font-semibold">Type</p>
          <input
            type="text"
            id="type"
            value={type}
            onChange={onChange}
            placeholder="Type"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />

            <p className="mt-6 mb-2 font-semibold">Surface</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="surface"
                value={surface}
                onChange={onChange}
                min="50"
                max="400000000"
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
            </div>
          
          
          
          
          <div className="flex items-center mb-6">
            <div className="">
              <p className="mt-6 mb-2 font-semibold">Price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={onChange}
                  min="50"
                  max="400000000"
                  required
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                />
                <div className="">
                    <p className="text-md w-full whitespace-nowrap">DA</p>
                </div>
                
              </div>
            </div>
          </div>

          
          
          <p className="mt-6 mb-2 font-semibold">Address</p>
          <textarea
            type="text"
            id="localisation"
            value={localisation}
            onChange={onChange}
            placeholder="Address"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />


          <p className="mt-6 mb-2 font-semibold">Wilaya</p>
          <input
            type="text"
            id="wilaya"
            value={wilaya}
            onChange={onChange}
            placeholder="Wilaya"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />

        <p className="mt-6 mb-2 font-semibold">Commune</p>
          <input
            type="text"
            id="commune"
            value={commune}
            onChange={onChange}
            placeholder="Commune"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />

          
          <div className="mb-6">
            <p className="mt-6 mb-2 font-semibold">Images</p>
            <p className="text-gray-600">
              The first image will be the cover (min3 & max 6)
            </p>
            <input
              type="file"
              id="uploaded_photos"
              onChange={onChange}
              accept=".jpg,.png,.jpeg"
              multiple
              required
              className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-blue-600"
            />
          </div>
          <div>
            <p className="mt-6 mb-2 font-semibold">
              Choose the exact location on the map
            </p>
            <EstateMap position={position} setPosition={setPosition}/>
          </div>
          <button
            type="submit"
            id="create"
            className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Create Listing
          </button>
        </form>
      </main>
      <Pagefooter />
    </div>
    
  );
}