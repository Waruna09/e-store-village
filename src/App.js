import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
import ShopPage from "./pages/CustomerPage/ShopPage/ShopPage";
import EventPage from "./pages/CustomerPage/EventsPage/EventPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MyCart from "./pages/CustomerPage/MyCart/MyCart";
import MyOrders from "./pages/CustomerPage/MyOrders/MyOrders";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import AddReviewPage from "./pages/CustomerPage/AddReviewPage/AddReviewPage";
import MyShop from "./pages/SellerPages/MyShop/MyShop";
import DiscountPage from "./pages/SellerPages/DiscountPage/DiscountPage";
import ShopProfile from "./pages/SellerPages/ShopProfile/ShopProfile";
import SalesHistory from "./pages/SellerPages/SalesHistory/SalesHistory";
import LoginPage from "./pages/Auth/LoginPage/LoginPage";
import CreateAccount from "./pages/Auth/CreateAccount/CreateAccount";
function App() {
  // const isLogin = false;

  const router = useLocation();

  const isDashboard = router.pathname === "/" ? true : false;
  const isLogin = router.pathname.match(/login/);
  const isCreateAccount = router.pathname.match(/createAccount/);

  const check = () => {
    if (isDashboard || isLogin !== null || isCreateAccount !== null) {
      return true;
    } else {
      return false;
    }
  };

  const styles = {
    flexDirection: "row",
    display: "flex",
  };
  return (
    <div>
      {true === check() ? <Navbar /> : <SubNavbar />}

      <div style={false === check() ? styles : null}>
        {false === check() && <Sidebar />}

        <Routes>
          {/* default pages */}

          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/createAccount" element={<CreateAccount />} />

          {/* customer pages */}
          <Route exact path="/product" element={<CustomerPage />} />
          {/* <Route path="/product" element={<LandingPage />} /> */}
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/orders/addreview" element={<AddReviewPage />} />

          {/* seller pages */}
          <Route path="/myshop" element={<MyShop />} />
          <Route path="/discounts" element={<DiscountPage />} />
          <Route path="/shopProfile" element={<ShopProfile />} />
          <Route path="/salesHistory" element={<SalesHistory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
