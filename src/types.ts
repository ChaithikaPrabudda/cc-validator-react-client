import { ReactNode } from "react";

export type CreditCardRequestModel = {
  cardNumber: string;
};

export type CreditCardResponseModel = {
  numberText: string;
  numberFormatted: string;
  isValid: boolean;
  type: string;
};