import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 20%;
  margin-top: 1.8rem;
  padding: 25px 15px 20px 30px;
  height: 75vh;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-left: 1rem;
`;
const ColorFilters = styled.div`
  margin-bottom: 1.2rem;
`;
const GenderFilters = styled.div`
  margin-bottom: 1.2rem;
`;
const PriceFilters = styled.div`
  margin-bottom: 1.2rem;
`;
const TypesContainer = styled.div`
  margin-bottom: 1.2rem;
`;
const Label = styled.label``;
const Input = styled.input``;
const Br = styled.br``;

const Sidebar = ({ handleFilter }) => {
  //   console.log(handleFilter);

  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters({ ...selectedFilters, [name]: value });
    // handleFilter(selectedFilters)
    
  };
  useEffect(()=>{
     handleFilter(selectedFilters)
  },[selectedFilters])


  
  return (
    <Container>
      <ColorFilters className="color" onChange={handleFilterChange} name="color">
        <Label htmlFor="color">Color</Label> <br />
        <Input
          type="radio"
          name="color"
          id="color"
          value={"Black"}
        /> Black <Br />
        <Input type="radio" name="color" id="color" value={"Pink"} /> Pink{" "}
        <Br />
        <Input
          type="radio"
          name="color"
          id="color"
          value={"Green"}
        /> Green <Br />
        <Input type="radio" name="color" id="color" value={"Blue"} /> Blue
        <Br />
      </ColorFilters>

      <GenderFilters name="gender" onChange={handleFilterChange}>
        <Label htmlFor="gender">Gender</Label> <br />
        <Input type="radio" name="gender" id="gender" value={"Men"} /> Men
        <Br />
        <Input
          type="radio"
          name="gender"
          id="gender"
          value={"Women"}
        /> Women <Br />
      </GenderFilters>

    
      <TypesContainer name="type" onChange={handleFilterChange}>
        <Label htmlFor="type">Type</Label> <br />
        <Input type="radio" name="type" id="type" value={"Polo"} /> Polo <Br />
        <Input
          type="radio"
          name="type"
          id="type"
          value={"Hoodie"}
        /> Hoodie <Br />
        <Input type="radio" name="type" id="type" value={"Basic"} /> Basic{" "}
        <Br />
      </TypesContainer>
    </Container>
  );
};

export default Sidebar;
