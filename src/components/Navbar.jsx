import styled from "styled-components";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 18px;
  background-color: teal;
  color: white;
  font-weight: 500;
`;
const UL = styled.ul`
  display: flex;
  gap: 30px;
`;
const LI = styled.li`
  list-style: none;
  cursor: pointer;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: teal;
  border: none;
  color: white;
`;

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <Nav>
      <UL>
        <LI>Teerex Store</LI>
      </UL>
      <Badge badgeContent={cart.length} color="primary">
        <Button onClick={() => navigate("/cart")}>
          <ShoppingCartOutlined />
        </Button>
      </Badge>
    </Nav>
  );
};

export default Navbar;
