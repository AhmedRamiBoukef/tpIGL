import { useState } from "react";
import { toast } from "react-toastify";


export default function AddListing() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title:"",
    description:"",
    category:"sale",
    type:"",
    surface:0,
    price:0,
    address:"",
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
    address,
    wilaya,
    commune,
    uploaded_photos,
  } = formData;


  function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '/' + (m<=9 ? '0' + m : m) + '/' + (d <= 9 ? '0' + d : d);
}


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
    if (images.length > 6 || images.length < 3) {
      setLoading(false);
      toast.error("min 3 & max 6 images are allowed");
      return;
    }

    const formDataCopy = {
      ...formData,
      pub_date: dateToYMD(new Date()),
    };
    setLoading(false);
    toast.success("Listing created");
    // navigate(`/category/${formDataCopy.type}/${docRef.id}`);
  }

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form onSubmit={onSubmit}>
        
        <p className="text-lg mt-6 font-semibold">Title</p>
        <input
          type="text"
          id="title"
          value={title}
          onChange={onChange}
          placeholder="Title"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg mt-6 font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg mt-6 font-semibold">Category</p>
        <div className="flex">
          <button
            type="button"
            id="category"
            value="sale"
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sale"
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
              type === "exchange"
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
              type === "rental"
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
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "Rental for holidays"
                ? "bg-white text-black"
                : "bg-blue-600 text-white"
            }`}
          >
            Rental for holidays
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Type</p>
        <input
          type="text"
          id="type"
          value={type}
          onChange={onChange}
          placeholder="Type"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />

          <p className="text-lg font-semibold">Surface</p>
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
            <p className="text-lg font-semibold">Price</p>
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

        
        
        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />


        <p className="text-lg mt-6 font-semibold">Wilaya</p>
        <input
          type="text"
          id="wilaya"
          value={wilaya}
          onChange={onChange}
          placeholder="Wilaya"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />

      <p className="text-lg mt-6 font-semibold">Commune</p>
        <input
          type="text"
          id="commune"
          value={commune}
          onChange={onChange}
          placeholder="Commune"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />

        
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
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
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}