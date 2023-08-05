import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";
import { API } from "../../API";
import "reactjs-popup/dist/index.css";
import Popup from "../Canvas/Canvas";

function Buycripto() {
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  localStorage.setItem('amount', (amount));

  const Quick_Buy_API = async () => {
    try {
      let res = await API.post("/QuickBuyTrade", {
        uid: userId,
        amount: amount,
        orderId: "12345",
      });
      alert(res.data.data.result);
    } catch (e) {
      console.log("Something Error in Reset API", e);
    }
  };

const [paymentResponse,setPaymentResponse] = useState("")

  const Payment_API = async () => {
    try {
      let order_id = Math.floor(Math.random() * 90000) + 10000;

      // Save Quick Buy Data
      let quickBuy_res = await API.post("/QuickBuyTrade", {
        uid: userId,
        amount: amount,
        orderId: `${order_id}`,
      });
      // console.log("quickBuy_res", quickBuy_res.data.data.result);

      quickBuy_res = quickBuy_res.data.data.result;

      if (quickBuy_res != "Quick Buy Trade Successfull") {
        alert(quickBuy_res);
        return;
      }

      ///  Payment Api //////////////////////////////////
      let bodydata = {
        price_amount: amount,
        price_currency: "usdttrc20",
        pay_currency: "usdttrc20",
        ipn_callback_url: "https://nowpayments.io",
        order_id: `${order_id}`,
        order_description: `Payment for user id : ${userId}`,
        is_fixed_rate: true,
        is_fee_paid_by_user: false,
      };

      // console.log("bodydata", bodydata);

      var options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Origin: "",
          Host: "nowpayments.io",
          "x-api-key": "QWFTBH1-VFV468V-QP9FY4R-VEANH36",
        },
        body: JSON.stringify(bodydata),
      };

      let res = await fetch("https://api.nowpayments.io/v1/payment", options);
      const PaymentApidata = await res.json();
      setAddress(PaymentApidata);
      localStorage.setItem('payment', JSON.stringify(PaymentApidata));
      // console.log("responseJson", PaymentApidata);
      // console.log("responseJson payment_id", PaymentApidata.payment_id);

      //  Save Payement Api Data
      let Payemnt_res = await API.post("/SavePaymentAPIData", {
        uid: userId,
        payment_id: PaymentApidata.payment_id,
        order_id: `${order_id}`,
        payment_status: PaymentApidata.payment_status,
        valid_until: PaymentApidata.valid_until,
        order_description: PaymentApidata.order_description,
        amount_received: PaymentApidata.amount_received,
        pay_amount: PaymentApidata.pay_amount,
        price_amount: PaymentApidata.price_amount,
        pay_address: PaymentApidata.pay_address,
      });

      // console.log("Payemnt_res", Payemnt_res);
setPaymentResponse(Payemnt_res.data.data.result)
    } catch (error) {
      console.log(error);
    }
  };


 


  return (
    <div>
      <DashboardNavbar />
      <section class="mt2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="assets_page">
                <div class="asset_tab tabss">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" href="#Quick">
                        Quick Buy
                      </a>
                    </li>
                    <li>
                      <a href="/Quick_Buy_History">Quick Buy History</a>
                    </li>
                    {/* <li>
                                    <a data-toggle="tab" href="#Orders">Orders</a>
                                </li> */}
                  </ul>
                  <div class="tab-content">
                    <div id="Quick" class="tab-pane active">
                      <div class="assets_table">
                        <div class="imges_ex">
                          <img src="assets1/img/exchange.png" /> &nbsp; Fill in
                          transaction information
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="form-label">Buy</label>
                              <div class="amount_rate">
                                <div class="input-group">
                                  <input
                                    type="text"
                                    class="form-control text_inputcss"
                                    onChange={(e) => setAmount(e.target.value)}
                                    name="amount"
                                    placeholder=""
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      class="btn btn-default btn_color"
                                      type="button"
                                    >
                                      {" "}
                                      <img
                                        src="assets1/img/usdt.png"
                                        width="23px"
                                      />{" "}
                                      &nbsp;USDT
                                    </button>
                                  </span>
                                </div>
                              </div>
                              <br />
                              <div class="col-md-12 text-center">
                                <button
                                  class=" btn btn-primary"
                                  onClick={() => {
                                    Payment_API();
                                  }}
                                  type="button"
                                >
                                  Confirm
                                </button>

                                {paymentResponse == "Wait For Payment Confirmation"?
                                <Popup />:<></>
                                }
                               
                              </div>
                              {/* <label class="form-label">Minimal 50 USDT</label> */}
                            </div>
                          </div>
                          {/* <div class="col-md-6">
                                              <div class="form-group">
                                                <label class="form-label">Pay</label>
                                                <div class="amount_rate">
                                                 <div class="input-group">
                                                    
                                                   <input type="text" class="form-control text_inputcss" name="email" placeholder="0.0" />
                                                   <span class="input-group-btn">
                                                        <button class="btn btn-default btn_color" type="button">INR</button>
                                                   </span>
                                                   </div>
                                                  </div>

                                                <label class="form-label">Market price 101 INR</label>
                                             </div>
                                         </div> */}
                        </div>
                      </div>
                    </div>
                    <div id="Sell" class="tab-pane fade">
                      <div class="assets_table">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="imges_ex">
                              <img
                                src="assets1/img/book.png"
                                class="imges_ex1"
                              />{" "}
                              &nbsp; Fill in transaction information
                            </div>
                            <br />
                            <div class="form-group">
                              <label class="form-label">Sell</label>
                              <div class="amount_rate">
                                <div class="input-group">
                                  <input
                                    type="text"
                                    class="form-control text_inputcss"
                                    name="email"
                                    placeholder=""
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      class="btn btn-default btn_color"
                                      type="button"
                                    >
                                      {" "}
                                      <img
                                        src="assets1/img/usdt.png"
                                        width="23px"
                                      />{" "}
                                      &nbsp;USDT
                                    </button>
                                  </span>
                                </div>
                              </div>
                              <div class="main_fl">
                                <label class="form-label">
                                  Minimal 10 USDT
                                </label>
                                <label class="form-label">
                                  Available 0.34473141 USDT
                                </label>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="form-label">Receive</label>
                              <div class="amount_rate">
                                <div class="input-group">
                                  <input
                                    type="text"
                                    class="form-control text_inputcss"
                                    name="email"
                                    placeholder="0.0"
                                  />
                                  <span class="input-group-btn">
                                    <button
                                      class="btn btn-default btn_color"
                                      type="button"
                                    >
                                      INR
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div class="form-group">
                              <label class="form-label">
                                Withdraw Password
                              </label>
                              <div class="amount_rate">
                                <div class="input-group">
                                  <input
                                    type="text"
                                    class="form-control text_inputcss"
                                    name="email"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="imges_ex">
                              <img
                                src="assets1/img/card.png"
                                class="imges_ex1"
                              />{" "}
                              &nbsp; Transaction details
                            </div>
                            <br />
                            <label class="form-label">
                              The payment will be transfered to the following
                              bank account:
                            </label>

                            <div class="back_atm">
                              <div class="main_atm">
                                <h6>SBIN0000328</h6>
                                <img src="assets1/img/chip.png" class="chips" />
                                <h5>389****9820</h5>
                                <h6>Bank Account No</h6>
                                <div class="">
                                  <h6>STATE BANK OF INDIA</h6>
                                  <h4>Bank Account</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="col-md-12 text-center">
                        <button class="btn_cnf" type="button">
                          Confirm
                        </button>
                      </div>
                    </div>
                    <div id="Orders" class="tab-pane fade">
                      <div>
                        <select name="cars" id="cars" class="sectors">
                          <option value="volvo">Processing</option>
                          <option value="saab">Complete</option>
                          <option value="opel">All</option>
                        </select>
                      </div>
                      <div class="assets_table">
                        <div class="table-responsive">
                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th>No.</th>
                                <th>Status</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Price</th>
                                <th>Time</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colspan="6" style={{ textAlign: "center" }}>
                                  <div class="no_data_found">
                                    <img src="assets1/img/dashboard/file_icon.svg" />
                                    <p>No content is available now.</p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Buycripto;
