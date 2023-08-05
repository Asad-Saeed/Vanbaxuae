import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { SnippetsOutlined } from "@ant-design/icons";
import "./Canvas.css";

const Popup = (props) => {
  const payment = localStorage.getItem("payment");
  let ress = JSON.parse(payment);
  let pay_address = ress.pay_address;

  const amount = localStorage.getItem("amount");
  // console.log("Pay_Amount", amount);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const popupModalValue = localStorage.getItem("popupModal");
    if (!popupModalValue) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("popupModal", "1");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  function myFunction1() {
    var copyText = document.getElementById("myInput1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 600000); // 10 minutes in milliseconds

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts before the timeout
    };
  }, []);


  const [seconds, setSeconds] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };


  return (
    <div>
       {isOpen && (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div class="form-group">
              <br />
              <div
                class="imges_ex"
              >
                <h5 style={{ textAlign: "center" }}>You have to pay {amount} USDT for quick buy .</h5>
              </div>
              <h6 class="form-label">Wallet Address</h6>
              <div class="amount_rate">
                <h5 style={{ display: "flex" ,width: "145%"}}>
                  <input
                    type="text"
                    style={{ width: "100%" }}
                    id="myInput1"
                    class="form-control"
                    value={pay_address}
                    readOnly
                  />
                  <span
                    text="button"
                    style={{ width: "20%", marginLeft: "10px" }}
                    onClick={myFunction1}
                    class="btn btn-primary"
                  >
                    <SnippetsOutlined style={{ fontSize: "17px" }} />
                  </span>
                </h5>
                <h6>Remaining Payment Timer {formatTime(seconds)}</h6>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
      </Modal>
       )}
    </div>
  );
};

export default Popup;
