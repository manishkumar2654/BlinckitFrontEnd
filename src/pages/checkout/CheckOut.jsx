import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackendURL from "../../BackendURL";

const CheckOut = () => {
    const navigate = useNavigate()
    const [mydata, setMydata] =useState({});
    const cardData = useSelector(state=>state.mycart.cart);

    const loadData = async () => {
          let api = `${BackendURL}/user/getuserdataforcheckout/?blinkiyusercheckoutid=${localStorage.getItem("userid")}`;
          const response = await axios.get(api);
          console.log(response.data);
          setMydata(response.data);
          
    }

    useEffect(()=>{
       if(! localStorage.getItem("username")){
        navigate("/clientlogin")
       }
       loadData()
    },[])



  let totalAmount = 0;
  let productName="";
  let proImage="";
  const ans = cardData.map((key,idx) => {
    totalAmount+=key.price*key.qnty;
  productName+=key.name+"";
proImage+=key.defaultImage;})





     const initPay = (data) => {
    const options = {
      key: "rzp_test_jJettYcGpVOWE9",
      amount: totalAmount,
      currency: data.currency,
      name: productName,
      description: "Test",
      image: proImage,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL = `${BackendURL}/api/payment/verify`;
          const { data } = await axios.post(verifyURL, response);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };







     const handilstripPay = async () => {
    try {
      const orderURL = `${BackendURL}/api/payment/orders`;
      const { data } = await axios.post(orderURL, {
        amount: totalAmount,
       products:productName,
        name:mydata.name,
        email:mydata.email,
        city:mydata.city,
        adders:mydata.adders,
        phone:mydata.phone
      });
      console.log(data);
      initPay(data.data);
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div>
      <h2>CheckOut</h2>
      <h3>net pay baele ammaount {totalAmount}</h3>
      <p>{mydata.name}</p>
      <button onClick={handilstripPay}>Strip Pay</button>
    </div>
  );
};

export default CheckOut;