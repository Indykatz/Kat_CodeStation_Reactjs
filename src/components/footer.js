import {
  FooterStyled,
  FooterH4Styled,
  FooterLink,
  FooterHref,
  FooterFlex,
} from "../styles/footer.styles";

const Footer = () => {
  const developers = [
    { name: "alexbellairs", github: "https://github.com/alexbellairs" },
    { name: "garethhough", github: "https://github.com/garethhough" },
    { name: "harb0t", github: "https://github.com/harb0t" },
    { name: "Indykatz", github: "https://github.com/Indykatz" },
    { name: "jamlindsay97", github: "https://github.com/jamlindsay97" },
    { name: "Javabar", github: "https://github.com/Javabar" },
    { name: "jbridges373", github: "https://github.com/jbridges373" },
    { name: "KarlEvans70", github: "https://github.com/KarlEvans70" },
    { name: "Wren4Wren", github: "https://github.com/Wren4Wren" },
  ];
  return (
    <FooterStyled>
      <FooterH4Styled>2022 CodeNation M38 Group 2</FooterH4Styled>
      <FooterFlex>
        {developers.map((developer, i) => {
          return (
            <FooterHref
              key={i}
              href={developer.github}
              rel="noreferrer"
              target="_blank"
            >
              {developer.name}
            </FooterHref>
          );
        })}
      </FooterFlex>
      <p>
        <FooterLink to="/">Home</FooterLink>
      </p>
    </FooterStyled>
  );
};

export default Footer;
