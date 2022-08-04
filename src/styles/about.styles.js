import styled from "styled-components";

export const ContentFlexBox = styled.div`
  border: solid 1px black;
  padding: 10px;
  width: auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    color: red;
  }
`;

export const ContentItemBox = styled.div`
  border: solid 1px black;
  padding: 10px;
  font-size: 20px;
  margin: 10px;
  margin-right: 20px;
`;
