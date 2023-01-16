import { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";

const CardContainer = styled.div`
  width: 320px;
  height: 340px;
  border: 1px solid black;
  margin-bottom: 12px;
`;
const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;
const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const Price = styled.h3``;
const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: teal;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  cursor: pointer;
`;

const Product = ({ product }) => {
  const { addToCart, deleteItem, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const { itemQuantity } = product;

  return (
    <CardContainer>
      <Image src={product.imageURL} alt={product.name} />
      <hr />
      <DetailsContainer>
        <Price>Rs {product.price}</Price>
        {itemQuantity  ? (
          ""
        ) : (
          <Button onClick={() => addToCart(product)}>Add To Cart</Button>
        )}

        {itemQuantity ? (
          <>
            <Button onClick={()=>increaseQuantity(product.id)}>+</Button>{" "}
            <Button onClick={()=>decreaseQuantity(product.id)}>-</Button>
          </>
        ) : (
          ""
        )}
        {itemQuantity ? (
          <Button>{`Q - ${itemQuantity}`}</Button>
        ) : (
          <Button>{product.type}</Button>
        )}
        {itemQuantity ? (
          <Button onClick={() => deleteItem(product.id)}>Remove</Button>
        ) : (
          ""
        )}
      </DetailsContainer>
    </CardContainer>
  );
};

export default Product;
