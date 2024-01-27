"use client";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { auth } from "./firebase/firebase-config";
import { useEffect, useState } from "react";
import { login } from "./redux/features/Login/loginSlice";
import { useDispatch } from "react-redux";
import Cards from "./components/Cards";
export default function Home() {
  const { isLogin } = useSelector((state) => state.login);
  const [isHidden, setIsHidden] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login());
      }
    });
  }, []);
  return (
    <div>
      <Navbar />
      <img
        className="m-auto w-[100%] h-[100%] px-10 py-6"
        src="images/Banner/Banner-1.png"
        alt="Banner-1.png"
      ></img>
      <div className="flex flex-row px-9 py-0 gap-8 ">
        <div className="flex flex-col px-4 py-3 gap-2 border-black border-2 rounded-lg font-bold max-h-14">
          <div className="flex flex-row w-28 h-7 px-3 pb-3 pt-0 gap-3">
            <img
              src="images/filter/filter.png"
              className="w-7 h-7"
              alt="filter.png"
            ></img>
            <button
              className="text-xl"
              onClick={() => {
                setIsHidden(!isHidden);
              }}
            >
              Filter
            </button>
          </div>
          {isHidden && (
            <div className="flex flex-col gap-2">
              <button>Subject</button>
              <button>Subject</button>
              <button>Subject</button>
              <button>Subject</button>
            </div>
          )}
        </div>

        <div className="w-[100%]">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Search your subject"
              className="w-[100%] rounded-l-lg px-4 py-2 focus:outline-none border-black border-2 border-r-0"
            ></input>
            <button className="bg-[#4470E2] border-2 border-[#4470E2] w-12 rounded-r-lg">
              <MagnifyingGlassIcon className="w-6 h-6 text-white m-auto" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-rows-1 mt-5 gap-20">
              <Cards title="FACULTY OF ENGINEERING" img="images/cards/engineering.png" link="/"/>
              <Cards title="FACULTY OF SCIENCES" img="images/cards/sciences.png" link="/"/>
              <Cards title="FACULTY OF MANAGEMENT" img="images/cards/management.png" link="/"/>
              <Cards title="FACULTY OF HUMANITIES" img="images/cards/humanities.png" link="/"/>
          </div>
        </div>

      </div>



    </div>
  );
}
