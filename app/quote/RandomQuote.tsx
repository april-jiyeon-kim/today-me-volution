import Link from "next/link";
import React from "react";

type Props = { category: string };

const fetchAdviceSlip = async () => {
  const result = await fetch("https://api.adviceslip.com/advice");
  const advice: AdviceSlipResponse = await result.json();
  return advice.slip;
};

const fetchQuote = async (category: string) => {
  const options = {
    headers: {
      "X-Api-Key": process.env.NEXT_PUBLIC_NINJA_API_KEY || "",
    },
  };
  const api_url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  const result = await fetch(api_url, options);
  const quote: QuoteType[] = await result.json();
  return quote[0];
};

async function RandomQuote({ category }: Props) {
  const quote: QuoteType = await fetchQuote(category);
  return (
    <>
      <div>{quote.quote}</div>
      <div>{quote.author}</div>
      <div>{quote.category}</div>
    </>
  );
}

export default RandomQuote;
