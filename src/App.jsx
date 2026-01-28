import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import UploadProduct from "./Admin/UploadProduct";
import CardData from "./cardData";
import ClieantLogin from "./pages/clientlogin/ClieantLogin";
import ClientRegi from "./pages/clientlogin/ClientRegi";
import CheckOut from "./pages/checkout/CheckOut";
import CostumerOderTrack from "./Admin/CostumerOderTrack";
import ProductDisplau from "./pages/ProductDisplau";
import PaanShopSpa from "./specialpage/PaanShopSpa";
import PetPage from "./specialpage/PetPage";
import BabyCareShopSpa from "./specialpage/BabyCareShopSpa";
import SearchPage from "./Navbar/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="clientlogin" element={<ClieantLogin />} />
          <Route path="clientregister" element={<ClientRegi />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="carddata" element={<CardData />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="productdispaly/:id" element={<ProductDisplau />} />
          <Route path="paanshop" element={<PaanShopSpa/>}/>
          <Route path="petpage" element={<PetPage/>}/>
          <Route path="babycarepage" element={<BabyCareShopSpa/>}/>
          <Route path="/search" element={<SearchPage/>} />

        </Route>

        {/* Admin Routes */}
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path="uploadproduct" element={<UploadProduct />} />
          <Route path="customerorder" element={<CostumerOderTrack/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
