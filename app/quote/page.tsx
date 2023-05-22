import React from "react";
import RandomQuote from "./RandomQuote";

type Props = {};

function Quote({}: Props) {
  return (
    <div className="border-4 border-yellow-500 text-2xl text-yellow-400 p-2">
      This is Quote Page
      {/* @ts-ignore */}
      <RandomQuote category="happiness" />
    </div>
  );
}

export default Quote;
