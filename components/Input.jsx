import React from "react";
function Input({ name, type, label, setFormData = () => {}, required }) {
  return (
    <div className="relative mb-4">
      <input
        required={required}
        name={name}
        type={type}
        id={`floating_outlined_${label}`}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
        placeholder="  "
        onChange={(event) =>
          setFormData((old) => ({
            ...old,
            [event.target.name]: event.target.value,
          }))
        }
      />
      <label
        htmlFor={`floating_outlined_${label}`}
        className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
