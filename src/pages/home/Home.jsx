import axios from "axios";
import { useState, useEffect } from "react";
import { addtoCart } from "../../cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import BackendURL from "../../BackendURL";
import panimg from "../../images/pannnshopa.jpg";
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

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async () => {
    const api = `${BackendURL}/blinkitproduct/homedisplaydata`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const authCheck = async () => {
    let api = `${BackendURL}/user/authonchek`;
    let token = localStorage.getItem("taken");
    if (token) {
      try {
        const tokenResponse = await axios.post(api, null, {
          headers: { "x-auth-token": token },
        });

        if (tokenResponse.data) {
          localStorage.setItem("uservalid", true);
          localStorage.setItem("username", tokenResponse.data.name);
          localStorage.setItem("useremail", tokenResponse.data.email);
          localStorage.setItem("userid", tokenResponse.data._id);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      }
    }
  };

  useEffect(() => {
    loadData();
    authCheck();
  }, []);


  const pannavi = () => {
    navigate("/paanshop");
  }

  return (
    <div className="home">
      <img src={panimg} alt="" onClick={pannavi} />

      <div className="category-wrapper">
        <CandiesGums />
      </div>

      <div className="category-wrapper">
        {" "}
        <SnacksMunchies />{" "}
      </div>

      <div className="category-wrapper">
        <DairyBreadEggs />{" "}
      </div>

      <div className="category-wrapper">
        <ColdDrinksJuices />
      </div>

      <div className="category-wrapper">
        <ChickenMeatFish />{" "}
      </div>

      <div className="category-wrapper">
        <PetCare />{" "}
      </div>
      <div className="category-wrapper">
        <AttaRiceDal />{" "}
      </div>

      <div className="category-wrapper">
        <BabyCare />{" "}
      </div>

      <div className="category-wrapper">
        <BakeryBiscuits />{" "}
      </div>

      <div className="category-wrapper">
        <BeautyCosmetics />{" "}
      </div>

      <div className="category-wrapper">
        <CleaningEssentials />{" "}
      </div>

      <div className="category-wrapper">
        <DigitalGoods />{" "}
      </div>

      <div className="category-wrapper">
        <FrozenDessertsIceCream />{" "}
      </div>

      <div className="category-wrapper">
        <Magazines />{" "}
      </div>
      <div className="category-wrapper">
        <PersonalCare />{" "}
      </div>
      <div className="category-wrapper">
        <PharmaWellness />{" "}
      </div>
      <div className="category-wrapper">
        <SweetTooth />{" "}
      </div>

      <div className="category-wrapper">
        <ToysGames />{" "}
      </div>

      <div className="category-wrapper">
        <VegetablesFruits />{" "}
      </div>


       <div className="category-wrapper">
        <PaanShop />{" "}
      </div>

    </div>
  );
};

export default Home;
