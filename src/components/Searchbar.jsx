import { Search } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  gap: 6px;
  margin-top: 2rem;
`;
const Input = styled.input`
  width: 30%;
  border: none;
  border-bottom: 1px solid black;
  font-family: "Poppins", "sans-serif";
  padding: 5px;
  font-weight: 500px;
`;
const Button = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

const Searchbar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");
  
  return (
    <Container>
      <Input
        type="text"
        placeholder="search products"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick = {()=>handleSearch(query)}>
        <Search />
      </Button>
    </Container>
  );
};

export default Searchbar;
