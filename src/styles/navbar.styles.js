import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarStyled = styled.div`
  font-family: "Inter", sans-serif;
  background-color: #0e6029;
  padding: 10px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const NavItemStyled = styled.div`
  /* border: solid 1px black; */
  padding: 10px;
  font-size: 20px;
  margin: 10px;
  margin-right: 20px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`;


