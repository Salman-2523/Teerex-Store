import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import NotFound from "./404";
import Products from "./Products";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
