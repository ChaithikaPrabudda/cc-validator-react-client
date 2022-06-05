import React from "react";
import "./style.css";

import { CreditCardApi } from "./api/cardApi";
import { CreditCardResponseModel, CreditCardRequestModel } from './types';

import 'bootstrap/dist/css/bootstrap.min.css';
const [creditCardIds, setCreditCardIds] = React.useState<string>("");
const [validatedCreditCards, setValidatedCreditCards] = React.useState<CreditCardResponseModel>();

class Card extends React.Component {

  
   submit = () => {
    if (creditCardIds !== "" && creditCardIds.length > 0) {
      let creditCards: CreditCardRequestModel = {
        cardNumber: creditCardIds
      }
      CreditCardApi.validateCreditCard(creditCards)
        .then((validatedCardList) => {
          setValidatedCreditCards(validatedCardList);
        })
        .catch((error) => {
          //handle errors
        });
    } else {
      // show error message
    }
  };
  render() {
  return (
    <div className="credit-card-box">
      <header className="credit-card-form">
        <div>
          <p>Please enter credit card number</p>
          <input
            autoFocus
            id="outlined-basic"
            type="text"
            value={creditCardIds}
            onChange={(e) => setCreditCardIds(e.target.value)}
            style={{ width: "100%" }}
          />

          <button
            style={{
              width: "50%",
              marginTop: "3%",
            }}
            key={1}
            onClick={() => this.submit()}
          >
            Submit
          </button>

          {(validatedCreditCards != null ) ? (
            <table className="table table-striped table-hover" style={{ textAlign: "left", marginTop: "3%" }}>
              <thead>
                <tr>
                  <th scope="col">
                    Credit Card Number
                  </th>
                  <th scope="col">
                    Credit Card Type
                  </th>
                  <th scope="col">
                    Validity
                  </th>
                </tr>
              </thead>
              <tbody>
                
                  <tr key={validatedCreditCards.numberFormatted}>
                    <td>{validatedCreditCards.numberText}</td>
                    <td>{validatedCreditCards.type}</td>
                    <td>{validatedCreditCards.isValid ? "Valid" : "Invalid"}</td>
                  </tr>
                
              </tbody>
            </table>
          ) : (<></>)}
        </div>
      </header>
    </div>
         ); }
}

export default Card;