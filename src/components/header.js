import { HeaderStyled, HeaderLogo } from "../styles/header.styles";
import Logo from "../images/codeStationRectangleLogo.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <HeaderStyled>
      <motion.div
        initial={{
          x: -1985,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          delay: 1,
          duration: 10,
          type: "spring",
          stiffness: 100,          
        }}
      >
        <HeaderLogo src={Logo} alt="logo"  />
      </motion.div>
    </HeaderStyled>
  );
};

export default Header;