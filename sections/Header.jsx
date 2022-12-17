import Link from "next/link";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import axios from "axios";

const sections = ["home", "about", "team", "contact"];

function handleGoogleLoginSuccess(response) {
  const { family_name, given_name, email, picture } = jwtDecode(
    response.credential
  );
  axios.post(
    "API_URL",
    {
      family_name,
      given_name,
      email,
      picture,
    },
    {
      headers: {
        Authorization: response.credential,
        "Content-Type": "application/json",
      },
    }
  )
}
function handleGoogleLoginError() {}

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="container mx-auto p-2 flex items-center md:justify-between min-h-[5rem]">
      <Link href="/" className="text-secondary font-semibold text-xl ">
        Estato
      </Link>
      <ul
        className={`absolute z-50 transition-transform top-0 -left-[100vw] ${
          menuActive && "translate-x-[100vw]"
        } bg-white w-screen h-screen p-6 flex flex-col gap-6 text-lg text-primary capitalize md:static md:flex-row md:h-fit md:w-fit md:items-center md:text-base md:gap-12`}
      >
        <li className="ml-auto mb-8 md:hidden">
          <button onClick={() => setMenuActive(false)}>
            <XMarkIcon className="h-8 w-8 text-secondary" />
          </button>
        </li>
        {sections.map((section) => (
          <li
            key={section}
            className="relative before:content[''] before:w-0 before:h-[2px] hover:before:w-full before:absolute before:left-0 before:-bottom-1 before:bg-transparent md:before:bg-primary before:transition-all"
          >
            <Link href={`#${section}`}>{section}</Link>
          </li>
        ))}
        <li className="mt-8 md:hidden flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
        </li>
      </ul>
      <button className="hidden md:block">
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginError}
        />
      </button>
      <button
        className="flex flex-col items-end gap-2 w-8 ml-auto md:hidden"
        onClick={() => setMenuActive(true)}
      >
        <span className="h-[2px] w-full bg-secondary rounded-lg "></span>
        <span className="h-[2px] w-3/4 bg-secondary rounded-lg "></span>
        <span className="h-[2px] w-1/3 bg-secondary rounded-lg "></span>
      </button>
    </div>
  );
}

export default Header;
