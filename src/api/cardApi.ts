import { appSettings } from "../appSettings";
import {
    CreditCardRequestModel,
    CreditCardResponseModel
} from "../types";
import { doRequest } from "../service/api";

const apiUrl = `${appSettings.CreditCardApiBaseUrl}`;

export const CreditCardApi = {
  validateCreditCard(validationRequestModel: CreditCardRequestModel): Promise<CreditCardResponseModel> {
    return doRequest(
      "POST",
       `${apiUrl}CC/Validate`,
      // `https://localhost:7163/api/CC/Validate`,
      validationRequestModel
    );
  },
};