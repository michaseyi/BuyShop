import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import GoToTop from "./components/GoToTop";
import { useSelector } from "react-redux";

function App() {

  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/register" element={user ? <Navigate to = "/"/> : <Register/>} />
        <Route path="/login" element={user ? <Navigate to = "/"/> : <Login/>} />
        <Route path="/" exact element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      {/* <GoToTop/> */}
    </Router>
  );
}

export default App;
