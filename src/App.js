import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
import ShopPage from "./pages/CustomerPage/ShopPage/ShopPage";
import EventPage from "./pages/CustomerPage/EventsPage/EventPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MyCart from "./pages/CustomerPage/MyCart/MyCart";
import MyOrders from "./pages/CustomerPage/MyOrders/MyOrders";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import AddReviewPage from "./pages/CustomerPage/AddReviewPage/AddReviewPage";
function App() {
  return (
    <Router>
      <SubNavbar />

      <div style={{ flexDirection: "row", display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<CustomerPage />} />
          <Route path="/product" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/orders/addreview" element={<AddReviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
