import {
  XMarkIcon,
  ArrowLeftOnRectangleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
const sections = ["sell", "favourites", "offers", "listings"];
function Nav() {
  const [menuActive, setMenuActive] = useState(false);
  const { setAuthState } = useContext(AuthContext);
  const router = useRouter();
  const handleLogout = useCallback(() => {
    setAuthState({ token: null });
    router.replace("/");
  }, []);
  return (
    <div className="bg-white">
      <div className="container flex items-center md:justify-between min-h-[5rem]">
        <Link href="/app" className="text-secondary font-semibold text-xl ">
          Estato
        </Link>
        <ul
          className={`fixed z-50 transition-transform top-0 -left-[100vw] ${
            menuActive && "translate-x-[100vw]"
          } bg-white w-screen h-screen p-6 flex flex-col gap-6 text-lg text-primary capitalize md:p-0 md:static md:flex-row md:h-fit md:w-fit md:items-center md:text-base md:gap-12`}
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
              <Link
                href={
                  section !== "offers" ? `/app/${section}` : "/app/offers/sent"
                }
              >
                {section}
              </Link>
            </li>
          ))}
          <li className="self-center">
            <button
              className="flex items-center gap-2  text-secondary p-2 rounded-md border border-gray-300"
              onClick={handleLogout}
            >
              <ArrowLeftOnRectangleIcon className="w-6 h-6" />
              Logout
            </button>
          </li>
        </ul>
        <button
          className="flex flex-col items-end gap-2 w-8 ml-auto md:hidden"
          onClick={() => setMenuActive(true)}
        >
          <span className="h-[2px] w-full bg-secondary rounded-lg "></span>
          <span className="h-[2px] w-3/4 bg-secondary rounded-lg "></span>
          <span className="h-[2px] w-1/3 bg-secondary rounded-lg "></span>
        </button>
      </div>
    </div>
  );
}

export default Nav;
