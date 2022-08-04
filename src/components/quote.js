import { useEffect, useState } from "react";
import { fetchQuotes } from "../utlis/index";
import { QuoteStyled } from "../styles/quote.styles";

const Quote = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetchQuotes(setQuote);
  }, []);
  return (
    <QuoteStyled>
      <p>
        "{quote.en}" <b>{quote.author}</b>
      </p>
    </QuoteStyled>
  );
};

export default Quote;
