import Quote from "../components/quote";
import Header from "../components/header";
import { AppStyles, ContentStyled, Header1Styled } from "../styles/app.styles";
import Navbar from "../components/navbar";
import { Navigate } from "react-router-dom";

const About = ({ user }) => {
  return (
    <AppStyles>
      {!user && <Navigate to="/" />}
      <Quote />
      <Navbar />
      <Header />

      <ContentStyled>
        <Header1Styled>Welcome {user}</Header1Styled>
      </ContentStyled>
    </AppStyles>
  );
};

export default About;
