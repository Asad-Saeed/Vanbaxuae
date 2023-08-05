import Footer from "../../Components/Footer/Footer";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { getPairs, getPairsData } from "../../Redux/pairs/aciton";
import { useNavigate } from "react-router-dom";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

import GroupsIcon from "@mui/icons-material/Groups";
import { API } from "../../API";
import Tranding_Table_Data from "./Tranding_Table_Data";
import { toast } from "react-toastify";
import axios from "axios";

function Trading() {
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;

  const [uId , setUId] = useState(userId)
  const [marketData, setMarketData] = useState("Market");
  const [buyPrice, setBuyPrice] = useState("0");
  const [buyAmount, setBuyAmount] = useState("0");
  const [sellPrice, setSellPrice] = useState("0");
  const [sellAmount, setSellAmount] = useState("0");
  const [buySell, setBuySell] = useState("");
  const [LiveRateValue, setLiveRateValue] = useState("0");

  let DropdownRemark =localStorage.getItem("setRemarkValue")
 // let dropdownValue =localStorage.getItem("SetDropdownValueBSC")
  let DropdownValue=localStorage.getItem("SetDropdownValue");
  let DropdownLabel=localStorage.getItem("SetDropdownLabel");
   console.log("DropdownValue",DropdownValue,DropdownLabel);

  
  

  const Trading_Buy_API = async () => {
    try {

      let DropdownValue=localStorage.getItem("SetDropdownValue");
      let responce = await API.post("/buy_trade", {
        uid: uId,
        currencytype: DropdownValue,
        markettype: marketData,
        price: LiveRateValue,
        amount: buyAmount,
        tradetype:"LiveCoin"
      });
      responce = responce.data.data.result;
      if ((responce == "Buy Trade Successfull")) {
        toast.success("Buy Trade Update Successfull");
      } else {
        toast(responce);
      }
      // console.log("res", responce);
    } catch (e) {
      console.log("Something Error", e);
    }
  };

  const Trading_Sell_API = async () => {
    try {
      let DropdownValue=localStorage.getItem("SetDropdownValue");
      let responce = await API.post("/Sell_trade", {
        uid: uId,
        currencytype: DropdownValue,
        markettype: marketData,
        price: LiveRateValue,
        amount: sellAmount,
        tradetype:"LiveCoin"
      });
      responce = responce.data.data.result;
      if ((responce== "Sell Trade Successfull")) {
        toast.success("Sell Trade Update Successfull");
      } else {
        toast(responce);
      }
      // console.log("res", responce);
    } catch (e) {
      console.log("Something Error", e);
    }
  };

  



  const TradeWalletSell = async () => {
    try {
      let DropdownValue=localStorage.getItem("SetDropdownValue");
      let res = await API.get(
        `Get_TradeWallet_Balance?uid=${userId}&tokentype=${DropdownValue}`
      );
      // console.log("TradeWalletSell=>", res.data.data);
      res = res.data.data[0];
      //localStorage.setItem("buySell", JSON.stringify(res));
      setBuySell(res);
    } catch (e) {
      console.log("Something Erroe in Rable API");
    }
  };

  let isAuthenticatin = false;
  if (sessionStorage.token) {
    isAuthenticatin = true;
  }
  
  // const navigate = useNavigate();
  // const { pairs } = useSelector((state) => state.pairs);
  // let [pairSymbol, setPairSymbol] = useState({
  //   label: "BTCUSDT",
  //   value: "BTC",
  // });
  
  const getPrice = async (pair) => {
		try {
			const response = await axios.get(
				`https://api.binance.com/api/v3/ticker/price?symbol=${pair}`
			);

			if (response && response.data && response.data.price) {
				const price = response.data.price;
				console.log(`Current  Price: ${price}`);

        setLiveRateValue(price);
			}
		} catch (error) {
			console.error('Error fetching BTC price:', error);
		}
	};

  const { pairs } = useSelector((state) => state.pairs);
  let [pairSymbol, setPairSymbol] = useState({
    label: "BTCUSDT",
    value: "BTC",
  });

  const getPair = (e) => {
     console.log("Select Dropdown", e);
    //localStorage.setItem("SetDropdownValueBSC",e.value)
    if(e.remark == "local"){
      localStorage.setItem("setRemarkValue",e.remark)
      window.location.href = '/Sport_Trading'
    }
    else{
    setPairSymbol(e);
    localStorage.setItem("SetDropdownValue",e.value)
    localStorage.getItem("SetDropdownLabel",e.label);
     getPrice(e.label);
    }
    // Chart_API();
    // High_Table_API();
    // Low_Table_API();
    TradeWalletSell();
  };

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getPairsData());
  // }, []);

  // const getPair = (e) => {
  //   setPairSymbol(e);
  //   console.log("selected pair",e.value, e.label);
  //   localStorage.setItem("SetDropdownValue",e.value)
  //   localStorage.getItem("SetDropdownLabel",e.label);

  //   TradeWalletSell();
  //   getPrice(e.label);
  // };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPairsData());
    TradeWalletSell();
    getPrice("BTCUSDT");
   
  }, []);

  function MarketValue(value) {
    setMarketData(value);
  }

  const hendelChange = (event) => {
    if(parseFloat(event.target.value)> parseFloat(buySell.NetSellBalance))
    {
    toast.error("Insufficiant Balance !!");
    }else {
      setSellAmount(event.target.value);
      setSellPrice(event.target.value);
    }
  
  };

  const hendelChange1 = (event) => {
    if(parseFloat(event.target.value)> parseFloat(buySell.NetBuyBalance))
    {
    toast.error("Insufficiant Balance !!");
    }else {
    setBuyAmount(event.target.value);
    setBuyPrice(event.target.value);
    }
  };

  return (
    <div>
      <DashboardNavbar />
      <section class="section_bg">
        <div class="container-fluid">
          <div className="">
            <div className="container-fluid cols_pd_set">
              <div className="row">
                <div className="custom_col_set">
                  <div className="col_60">
                    {/* <div className="graph_size"> */}

                    <TradingViewWidget
                      symbol={pairSymbol.label}
                      theme={Themes.DARK}
                      interval="D"
                      locale="en"
                      timezone="America/New York"
                      hideSideToolbar={true}
                      details
                      news={["headlines"]}
                      className=""
                    />
                  </div>
                  {/* <div className="col_18">
                    <div className="assets_table trading_reports totalVolume td_width mt_inset">
                      <div class="table-responsive">
                        <table className="table table-striped td_md_width">
                          <thead>
                            <tr>
                              <th>Price (USDT)</th>
                              <th>Volume (BTC)</th>
                              <th>Total (BTC)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="red">25252.40</td>
                              <td>0.12121</td>
                              <td>1.252525</td>
                            </tr>
                            <tr>
                              <td className="red">25252.40</td>
                              <td>0.12121</td>
                              <td>1.252525</td>
                            </tr>
                            <tr>
                              <td className="red">25252.40</td>
                              <td>0.12121</td>
                              <td>1.252525</td>
                            </tr>
                            <tr>
                              <td className="red">25252.40</td>
                              <td>0.12121</td>
                              <td>1.252525</td>
                            </tr>
                            <tr>
                              <td className="green">25252.40</td>
                              <td>0.12121</td>
                              <td>1.252525</td>
                            </tr>
                            <tr>
                              <td className="green">25252.40</td>
                              <td>0.12121</td>
                              <td>1.252525</td>
                            </tr>
                            <tr>
                              <td className="green">25252.40</td>
                              <td>0.12121</td>
                              <td>1.252525</td>
                            </tr>
                            <tr>
                              <td className="green">25252.40</td>
                              <td>0.12121</td>
                              <td>1.252525</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div> */}
                  <div className="col_20">
                    <div className="PairBTc">
                      <h6 className="fw-bold">Pair</h6>
                      <Select
                        className="basic-single text-dark"
                        classNamePrefix="select"
                        defaultValue={pairSymbol}
                        options={pairs}
                        isSearchable={true}
                        onChange={getPair}
                      />
                    </div>

                   
          <div class="assets_page trading_tab">
            <div class="asset_tab">
              <ul class="nav nav-tabs">
                {/* <li>
                  <a
                    data-toggle="tab"
                    onClick={() => MarketValue("Limited")}
                    href="#home"
                  >
                    Limited
                  </a>
                </li> */}
                <li>
                  <a
                    data-toggle="tab"
                    onClick={() => MarketValue("Market")}
                    href="#menu1"
                    class="active"
                  >
                    Market
                  </a>
                </li>
                {/* <li>
                  <a
                    data-toggle="tab"
                    onClick={() => MarketValue("Deposit")}
                    href="#"
                  >
                    Deposit
                  </a>
                </li> */}
              </ul>
              <div class="tab-content">
                <div id="home" class="tab-pane fade">
                  <div className="trading_item">
                    <h2>Buy {DropdownValue}</h2>
                    <p>{buySell.NetBuyBalance} USDT</p>
                    <div className="trading_field set_span">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setBuyPrice(e.target.value)}
                        placeholder="Price"
                        
                      />
                      <span>USDT</span>
                    </div>
                    <div className="trading_field set_span">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setBuyAmount(e.target.value)}
                        placeholder="Amount"
                      />
                      <span>USDT</span>
                    </div>
                    <div className="trading_bal">
                      <label>Total</label>
                      <label>{buyAmount} USDT</label>
                    </div>
                    <button
                      type="button"
                      className="btn btn-success btn-block"
                      onClick={() => Trading_Buy_API()}
                    >
                      Buy {DropdownValue} 
                    </button>
                  </div>
                  <br />
                  <div className="trading_item">
                    <h2>Sell {DropdownValue}</h2>
                    <p>
                      {buySell.NetSellBalance} {DropdownValue} (Available)
                    </p>
                    <div className="trading_field set_span">
                      <input
                        type="text"
                        className="form-control"
                        // onChange={(e) => setBuyPrice(e.target.value)}
                        value={buyPrice}
                        placeholder="Price"
                      />
                      <span>USDT</span>
                    </div>
                    <div className="trading_field set_span">
                      <input
                        type="text"
                        className="form-control"
                        value={buyAmount}
                        // onChange={(e) => setBuyAmount(e.target.value)}
                        placeholder="Amount"
                      />
                      <span>{DropdownValue}</span>
                    </div>
                    <input type="range" step="0.0001" value={buyAmount} onChange={hendelChange1} style={{width:'100%'}} min="0" max=""  />
                    <div className="trading_bal">
                      <label>Total</label>
                      <label>
                        {sellAmount} {DropdownValue}
                      </label>
                    </div>
                    <button
                      type="button"
                      className="btn btn-danger btn-block"
                      onClick={() => Trading_Sell_API()}
                    >
                      Sell {DropdownValue}
                    </button>
                  </div>
                </div>
                <div id="menu1" class="tab-pane active">
                  <div className="trading_item">
                    <h2>Buy {DropdownValue}</h2>
                    <p>{buySell.NetBuyBalance} USDT</p>
                    <div className="trading_field">
                      <input
                        type="text"
                        className="form-control"
                        // onChange={(e) => setBuyAmount(e.target.value)}
                      value={buyPrice}
                        placeholder="Price"
                        readOnly={true}
                      />
                      <span>Market</span>
                      <span>USDT</span>
                    </div>
                    <div className="trading_field set_span">
                      <input
                        type="text"
                        className="form-control"
                        value={buyAmount}
                        // onChange={(e) => setBuyAmount(e.target.value)}
                        placeholder="Amount"
                      />
                      <span>USDT</span>
                    </div>
                    <input type="range" step="0.0001" value={buyAmount} onChange={hendelChange1} style={{width:'100%'}} min="0" max=""  />
                    {/* <div className="trading_bal">
                                <label>Total</label>
                                <label>{buyAmount} USDT</label>
                              </div> */}
                    <button
                      type="button"
                      onClick={() => Trading_Buy_API()}
                      className="btn btn-success btn-block"
                    >
                      Buy {DropdownValue} 
                    </button>
                  </div>
                  <br />
                  <div className="trading_item">
                    <h2>Sell {DropdownValue}</h2>
                    <p>
                      {buySell.NetSellBalance} {DropdownValue} (Available)
                    </p>
                    <div className="trading_field">
                      <input
                        type="text"
                        className="form-control"
                        value={sellPrice}
                        // onChange={(e) => setSellPrice(e.target.value)}
                        placeholder="Price"
                        readOnly={true}
                      />
                      <span>Market</span>
                      <span>USDT</span>
                    </div>
                    <div className="trading_field set_span">
                      <input
                        type="text"
                        className="form-control"
                        value={sellAmount}
                        // onChange={(e) => setSellAmount(e.target.value)}
                        placeholder="Amount"
                      />
                      <span> {DropdownValue}</span>
                    </div>
                    <input type="range" step="0.0001" value={sellAmount} onChange={hendelChange} style={{width:'100%'}} min="0" max=""  />
                    {/* <div className="trading_bal">
                                <label>Total</label>
                                <label>{sellAmount}  {pairSymbol.value}</label>
                              </div> */}
                    <button
                      type="button"
                      className="btn btn-danger btn-block"
                      onClick={() => Trading_Sell_API()}
                    >
                      Sell {DropdownValue}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
                    
                  </div>
                </div>
                <br></br>
                <div className="col-md-12">
                <Tranding_Table_Data />
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

export default Trading;
