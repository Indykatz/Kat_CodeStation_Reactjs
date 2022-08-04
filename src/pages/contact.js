import { Navigate } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Quote from "../components/quote";
import { AppStyles, ContentStyled, Header1Styled } from "../styles/app.styles";

const Contact = ({ user }) => {
  return (
    <AppStyles>
      {!user && <Navigate to="/" />}
      <Quote />
      <Navbar />
      <Header />
      <ContentStyled>
        <Header1Styled>Want to chat with us {user}?</Header1Styled>
      </ContentStyled>
    </AppStyles>
  );
};

export default Contact;
