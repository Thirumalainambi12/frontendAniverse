import React, { useState, useEffect,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from "../Context.jsx/AppContext";
import "../css/Pay.css";

function Payment() {
  const [method, setMethod] = useState("");
  const [load, setLoad] = useState(false);
  const [done, setDone] = useState(false);
  const state = useContext(AppContext);

  const navigate = useNavigate("");

  useEffect(() => {
    if (load) {
      const timer = setTimeout(() => {
        setLoad(false);
        setDone(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [load]);

  const handlePay = () => {
    if (method === "") {
      alert("Please select a payment method!");
    } else {
      setLoad(true);
    }
  };

  const ok = () => {
    state.setIsAllow(true); 
    alert("✅ Premium Activated! You can now watch all animes.");
    navigate("/Home");      
  };


  return (
    <div className="pay-container">
      {/* Step 1 – Choose method */}
      {!load && !done && (
        <div className="pay-box">
          <h2 className="pay-title">Choose Payment Method</h2>

          <div className="pay-options">
            <label>
              <input
                type="radio"
                name="method"
                value="PayPal"
                onChange={(e) => setMethod(e.target.value)}
              />{" "}
              PayPal
            </label>
            <label>
              <input
                type="radio"
                name="method"
                value="UPI"
                onChange={(e) => setMethod(e.target.value)}
              />{" "}
              UPI
            </label>
            <label>
              <input
                type="radio"
                name="method"
                value="Card"
                onChange={(e) => setMethod(e.target.value)}
              />{" "}
              Card
            </label>
          </div>

          {method && <h3 className="pay-selected">You selected: {method}</h3>}
          <button className="pay-btn" onClick={handlePay}>Pay Now</button>
        </div>
      )}

      {/* Step 2 – Processing */}
      {load && (
        <div className="popup">
          <h3 className='pop-h3'>Processing {method} payment...</h3>
          <div className="loader"></div>
        </div>
      )}

      {/* Step 3 – Success */}
      {done && (
        <div className="popup success">
          <h2>✅ Payment Successful!</h2>
          <p>Paid via <strong>{method}</strong></p>
          <button className="ok-btn" onClick={ok}>Done</button>
        </div>
      )}
    </div>
  );
}

export default Payment;
