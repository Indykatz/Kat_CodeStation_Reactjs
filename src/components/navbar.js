import { NavbarStyled, NavItemStyled, NavLink } from "../styles/navbar.styles";

const Navbar = ({ user, setter }) => {
  const navbarList = ["About", "Account", "Contact", "Feed"];
  return (
    <NavbarStyled>
      {/* {!user && <Navigate to="/" />} */}
      {navbarList.map((navbarItem, i) => {
        let path = "/" + navbarItem;
        return (
          <NavItemStyled key={i}>
            <NavLink to={path}>{navbarItem}</NavLink>
          </NavItemStyled>
        );
      })}
      <button
        onClick={() => {
          setter();
          localStorage.removeItem("myToken");
        }}
      >
        Log Out
      </button>
    </NavbarStyled>
  );
};

export default Navbar;
