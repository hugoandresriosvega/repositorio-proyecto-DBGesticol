import React from 'react';
import gesticol from "../gesticol.png";
import salud from "../Salud.png";
import Pension from "../Pension.png";
import ARL from "../ARL.png";
import CajaP from "../cajaP_1.png";

function HomePage() {
  return (
    <div className="bg-transparent flex h-[calc(100vh-100px)] items-center justify-center border border-white">
      <div className="border border-white">
        <img src={gesticol} className="w-full h-full object-cover rounded-md"/>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center p-4 mx-1 mt-1 ">
          <img src={salud} className="w-full h-40 object-cover rounded-md p-5"/>
        </div>

        <div className="flex flex-col items-center p-4 mx-1 mt-1">
          <img src={Pension} className="w-full h-40 object-cover rounded-md p-5"/>
        </div>

        <div className="flex flex-col items-center p-4 mx-1 mt-1">
          <img src={ARL} className="w-full h-40 object-cover rounded-md p-5"/>
        </div>

        <div className="flex flex-col items-center p-4 mx-1 mt-1">
          <img src={CajaP} className="w-full h-40 object-cover rounded-md p-5"/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;