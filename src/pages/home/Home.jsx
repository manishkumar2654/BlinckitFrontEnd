// src/pages/home/Home.jsx
import axios from "axios";
import { useState, useEffect } from "react";
import { addtoCart } from "../../cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import BackendURL from "../../BackendURL";

import CandiesGums from "../../category/CandiesGums";
import SnacksMunchies from "../../category/SnacksMunchies";
import DairyBreadEggs from "../../category/DairyBreadEggs";
import ColdDrinksJuices from "../../category/ColdDrinksJuices";
import ChickenMeatFish from "../../category/ChickenMeatFish";
import PetCare from "../../category/PetCare";
import AttaRiceDal from "../../category/AttaRiceDal";
import BabyCare from "../../category/BabyCare";
import BakeryBiscuits from "../../category/BakeryBiscuits";
import BeautyCosmetics from "../../category/BeautyCosmetics";
import CleaningEssentials from "../../category/CleaningEssentials";
import DigitalGoods from "../../category/DigitalGoods";
import FrozenDessertsIceCream from "../../category/FrozenDessertsIceCream";
import Magazines from "../../category/Magazines";
import PersonalCare from "../../category/PersonalCare";
import PharmaWellness from "../../category/PharmaWellness";
import SweetTooth from "../../category/SweetTooth";
import ToysGames from "../../category/ToysGames";
import VegetablesFruits from "../../category/VegetablesFruits";
import PaanShop from "../../category/PaanShop";
import Smallwalicat from "./smallwalicat";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pannavi = () => navigate("/paanshop");
  const petpage = () => navigate("/petpage");
  const babupage = () => navigate("/babycarepage");

  return (
    <div className="home">
      {/*  BANNER */}
     {/*  BANNER */}
<div className="home-banner" onClick={pannavi}>
  <picture>
    {/* Mobile image */}
    <source
      media="(max-width: 768px)"
      srcSet="/pansmallbanner.jpg"
    />

    {/* Desktop image */}
    <img src="/pannnshopa.jpg" alt="Paan Banner" />
  </picture>
</div>




    <div className="smallbanerdiv">
         <div className="home-banner-2" onClick={petpage}>
        <img src="/petpro.png" alt="Paan Banner" />
      </div>
      <div className="home-banner-2" onClick={babupage}>
        <img src="/babycare.png" alt="Paan Banner" />
      </div>
      <div className="home-banner-2" onClick={babupage}>
        <img src="/pro1.png" alt="Paan Banner" />
      </div>
    </div>
    


  
        <Smallwalicat/>
    



      {/*  CATEGORY SECTIONS */}
      <div className="category-wrapper">
        <CandiesGums />
      </div>
      <div className="category-wrapper">
        <SnacksMunchies />
      </div>
      <div className="category-wrapper">
        <DairyBreadEggs />
      </div>
      <div className="category-wrapper">
        <ColdDrinksJuices />
      </div>
      <div className="category-wrapper">
        <ChickenMeatFish />
      </div>
      <div className="category-wrapper">
        <PetCare />
      </div>
      {/* <div className="category-wrapper"><AttaRiceDal /></div> */}
      <div className="category-wrapper">
        <BabyCare />
      </div>
      {/* <div className="category-wrapper"><BakeryBiscuits /></div> */}
      <div className="category-wrapper">
        <BeautyCosmetics />
      </div>
      {/* <div className="category-wrapper"><CleaningEssentials /></div>
      <div className="category-wrapper"><DigitalGoods /></div>
      <div className="category-wrapper"><FrozenDessertsIceCream /></div> */}
      <div className="category-wrapper">
        <Magazines />
      </div>
      {/* <div className="category-wrapper"><PersonalCare /></div>
      <div className="category-wrapper"><PharmaWellness /></div>
      <div className="category-wrapper"><SweetTooth /></div> */}
      <div className="category-wrapper">
        <ToysGames />
      </div>
      {/* <div className="category-wrapper"><VegetablesFruits /></div> */}
      <div className="category-wrapper">
        <PaanShop />
      </div>
    </div>
  );
};

export default Home;