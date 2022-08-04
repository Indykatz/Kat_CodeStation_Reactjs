import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterStyled = styled.div`
  background-color: #0e6029;
  height: auto;
  width: 100%;
  padding: 10px;
  color: #e5ffee;
  text-align: center;
`;
export const FooterH4Styled = styled.h4`
  display: flex;
  justify-content: center;
  padding: 10px;
  font-weight: 500;
  font-size: 15px;
`;

export const FooterFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterHref = styled.a`
  color: #e5ffee;
  text-decoration: none;
`;

export const FooterLink = styled(Link)`
  color: #e5ffee;
  text-decoration: none;
`;
