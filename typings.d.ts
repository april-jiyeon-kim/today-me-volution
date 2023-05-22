type AdviceSlipResponse = {
  slip: {
    id: number;
    advice: string;
  };
};

type SlipType = {
  id: number;
  advice: string;
};

type QuoteType = {
  quote: string;
  author: string;
  category: string;
};
