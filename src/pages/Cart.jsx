import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Product from "../components/Product";
import { CartContext } from "../contexts/CartContext";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;
const ProductsContainer = styled.div``;
const Title = styled.h1`
  font-size: 42px;
  text-align: center;
  color: black;
`;
const AmountDetails = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 600px;
`;
const PriceTitle = styled.h1`
  padding: 8px 20px;
`;

const Container = styled.div``;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
`;
const Button = styled.button`
  width: 100%;
  padding: 8px 16px;
  font-family: "Poppins", "sans-serif";
  font-weight: 600;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
`;

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.itemQuantity,
    0
  );
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartTotal > 0) {
      alert("Your order has been successfully placed!");
      clearCart()
      navigate("/")
      
    }else{
        alert("You don't have any items to purchase")
        navigate("/")
    }
  };

  return (
    <>
      <Title>Cart Items</Title>
      <MainContainer>
        <ProductsContainer>
          {cart.length > 0 &&
            cart.map((product) => {
              if (product.itemQuantity) {
                return <Product key={product.id} product={product} />;
              }
            })}
        </ProductsContainer>
        <AmountDetails>
          <Container>
            <PriceTitle>PRICE DETAILS</PriceTitle>
            <hr />
            <Box>
              <p>Price </p>
              <p>Rs {cartTotal}</p>
            </Box>
            <hr />
            <Box>
              <p>Delivery Charges</p>
              <p>Free</p>
            </Box>
            <hr />

            <Box>
              <h2>Total Amount</h2>
              <h2>Rs {cartTotal}</h2>
            </Box>
          </Container>
          <Button onClick={handleCheckout}>Checkout Now</Button>
        </AmountDetails>
      </MainContainer>
    </>
  );
};

export default Cart;
