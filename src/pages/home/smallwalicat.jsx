import "./smallwailcat.css";
import { useNavigate } from "react-router-dom";




const Smallwalicat = () => {
      const navigate = useNavigate();
  const pannavi = () => navigate("/paanshop");


  return (
    <div className="small-cat-container" onClick={pannavi}>

      <div className="smallcat">
        <img src="/pan1.jpg" alt="" />
        <p>paan corner</p>
      </div>

      <div className="smallcat">
        <img src="/im2.jpg" alt="" />
        <p>Dairy, Bread & Eggs</p>
      </div>

      <div className="smallcat">
        <img src="/im3.jpg" alt="" />
        <p>Fruits & Vegetables</p>
      </div>


      <div className="smallcat">
        <img src="/im4.jpg" alt="" />
        <p>Cold Drinks & Juices</p>
      </div>

      <div className="smallcat">
        <img src="/im5.jpg" alt="" />
        <p>Snacks & Munchies</p>
      </div>


      <div className="smallcat">
        <img src="/im6.jpg" alt="" />
        <p>Breakfast & Instant Food</p>
      </div>


      <div className="smallcat">
        <img src="/im7.jpg" alt="" />
        <p>Sweet Tooth</p>
      </div>


      <div className="smallcat">
        <img src="/im8.jpg" alt="" />
        <p>Bakery & Biscuits</p>
      </div>


      <div className="smallcat">
        <img src="/im9.jpg" alt="" />
        <p>Tea,Coffee & Milk Drinks</p>
      </div>


      <div className="smallcat">
        <img src="/im10.jpg" alt="" />
        <p>Atta, Rice & Dall</p>
      </div>



      <div className="smallcat">
        <img src="/im11.jpg" alt="" />
        <p>Massala, Oil & more</p>
      </div>



      <div className="smallcat">
        <img src="/im12.jpg" alt="" />
        <p>Cleaning Essentials</p>
      </div>


      <div className="smallcat">
        <img src="/im13.jpg" alt="" />
        <p>Sauces & Sprade</p>
      </div>


      <div className="smallcat">
        <img src="/im14.jpg" alt="" />
        <p>Chicken, Meat & Fish</p>
      </div>


      <div className="smallcat">
        <img src="/im15.jpg" alt="" />
        <p>Organice & Healthy Livings</p>
      </div>


      <div className="smallcat">
        <img src="/im16.jpg" alt="" />
        <p>Baby care</p>
      </div>
    </div>
  );
};

export default Smallwalicat;
