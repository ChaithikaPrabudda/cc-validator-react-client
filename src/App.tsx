import React from 'react';
import './App.css';
import { CreditCardApi } from "../src/api/cardApi";
import { CreditCardResponseModel, CreditCardRequestModel } from './types';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [creditCardIds, setCreditCardIds] = React.useState<string>("");
  const [validatedCreditCards, setValidatedCreditCards] = React.useState<CreditCardResponseModel>();
  const [ad, setAd] = React.useState<string>("");
  const submit = () => {
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

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Please enter credit card number</p>
          <input
            autoFocus
            id="outlined-basic"
            placeholder="Your Card Number"
            type="text"
            value={creditCardIds}
            onChange={(e) => setCreditCardIds(e.target.value)}
            style={{ width: "100%" }}
          />
<div className="form-actions">
          <button className="btn btn-primary btn-block"
            
            key={1}
            onClick={() => submit()}
          >
            Validate
          </button>
</div>
          {(validatedCreditCards != null ) ? (
            <table className="table" style={{ textAlign: "left", marginTop: "3%" }}>
              <thead>
                <tr>
                  <th >
                    Credit Card Number
                  </th>
                  <td key={validatedCreditCards.numberFormatted}>{validatedCreditCards.numberFormatted}</td>
                  </tr>
                  <tr>
                  <th >
                    Credit Card Type
                  </th>
                  <td>{validatedCreditCards.type}</td>
                  </tr>
                  <tr>
                  <th >
                    Validity
                  </th>
                  <td>{validatedCreditCards.isValid ? "Valid" : "Invalid"}</td>
                </tr>
              </thead>
              
            </table>
          ) : (<></>)}
        </div>
      </header>
    </div>
  );
}

export default App;
