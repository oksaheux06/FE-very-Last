import React from "react";
import { CardSyariah } from "..";
import CardKonvensional from "../konvensional";
import CardSemua from "../semua";
import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init();

const TabList = () => {
  const [openTab, setOpenTab] = React.useState(2);
  return (
    <>
      <div className="flex justify-center md:m-8 rounded-lg h-auto">
        <div className="text-center ">
          <ul
            className="mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <div className="ml-11 w-3/4 justify-center md:ml-36 flex ">
              {/* Semua */}
              <li className=" mr-2 last:mr-0 flex-auto text-center md:w-28" >
                <p
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1 ? " bg-white" : " bg-orange-500")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                >
                  <img
                    src={require("./img/aboard-study.png")}
                    className="md:w-32 md:ml-7"
                    alt="aboard"
                  ></img>
                </p>
              </li>
              {/* Konvensional */}
              <li className="mr-2 last:mr-0 flex-auto text-center md:w-28" >
                <p
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2 ? " bg-white" : " bg-orange-500")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                >
                  <img
                    src={require("./img/day-pana.png")}
                    className="md:w-32 md:ml-7"
                    alt="pana"
                  ></img>
                </p>
              </li>
              {/* Syariah */}
              <li className="mr-2 last:mr-0 flex-auto text-center md:w-28" >
                <p
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3 ? " bg-white" : " bg-orange-500")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                >
                  <img
                    src={require("./img/Family-bro.png")}
                    className="md:w-32 md:ml-7"
                    alt="family"
                  ></img>
                </p>
              </li>
            </div>
          </ul>

          <div className="relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-lg rounded h-auto">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {/* Konvensional */}
                <div  className={openTab === 1 ? "block" : "hidden"}>
                  <p className="font-semibold text-xl mb-12 text-orange-600 shadow-xl rounded-lg">
                  Konvensional 
                  </p>
                  <div>
                  <CardKonvensional />
                  </div>
                </div>
                {/* Semua */}
                <div className={openTab === 2 ? "block" : "hidden"}>
                  <p className="font-semibold text-xl mb-12 shadow-xl text-orange-600 rounded-lg">
                    Tampilkan Seluruhnya
                  </p>
                  <div>
                  <CardSemua />
                  </div>
                </div>
                {/* Syariah*/}
                <div className={openTab === 3 ? "block" : "hidden"}>
                  <p className="font-semibold text-xl mb-12 shadow-xl text-orange-600 rounded-lg">
                    Syariah
                  </p>
                  <div>
                    <CardSyariah />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabList;
