import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import { CartContext } from "../contexts/CartContext";

const Container = styled.div``;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.4rem;
`;
const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 1.8rem;
  margin-right: 1.2rem;
  margin-bottom: 0.8rem;
`;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cart, addToCart } = useContext(CartContext);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      )
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((err) => console.log("Error in fetching", err));
    }
  }, []);

  //   console.log(products);

  const handleFilter = (filters) => {
    let filtered = searchActive ? [...filteredProducts] : [...products];
    // filter by gender
    if (filters.gender) {
      console.log("filter by gender");
      filtered = filtered.filter(
        (product) => product.gender === filters.gender
      );
    }
    // filter by color
    if (filters.color) {
      filtered = filtered.filter((product) => product.color === filters.color);
    }

    // filter by type
    if (filters.type) {
      filtered = filtered.filter((product) => product.type === filters.type);
    }
    setFilteredProducts(filtered);
  };

  const handleSearch = (query) => {
    setSearchActive(true);
    const filtered = products.filter((product) => {
      // check if query matches any of the product's name, color, or type
      return (
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.color.toLowerCase().includes(query.toLowerCase()) ||
        product.type.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredProducts(filtered);
  };
  //   console.log(cart);

  return (
    <Container>
      <Navbar />
      <Searchbar handleSearch={handleSearch} />
      <MainContainer>
        <Sidebar handleFilter={handleFilter} />
        <ProductsContainer>
          {!searchActive && filteredProducts.length > 0
            ? filteredProducts.map((product) => {
                return <Product product={product} key={product.id} />;
              })
            : searchActive
            ? filteredProducts.map((product) => {
                return <Product product={product} key={product.id} />;
              })
            : products.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
        </ProductsContainer>
      </MainContainer>
    </Container>
  );
};

export default Products;
