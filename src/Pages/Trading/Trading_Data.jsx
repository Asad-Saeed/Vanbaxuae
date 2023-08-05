import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { getPairsData } from "../../Redux/pairs/aciton";
import { useNavigate } from "react-router-dom";
import Table from "../../Components/Table/Table";
import { API } from "../../API";
import { toast } from "react-toastify";
import ReactApexChart from "react-apexcharts";

function Trading_Data() {
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;
  // console.log("user=>",userId);
  const [uId, setUId] = useState(userId);
  const [marketData, setMarketData] = useState("Market");
  const [buyPrice, setBuyPrice] = useState("");
  const [buyAmount, setBuyAmount] = useState("0");
  const [sellPrice, setSellPrice] = useState("");
  const [sellAmount, setSellAmount] = useState("0");

  let DropdownValue = localStorage.getItem("SetDropdownValueBSC");
  //  console.log("SetDropdownValueBSC",DropdownValue);

  const Trading_Buy_API = async () => {
    try {
      let DropdownValue = localStorage.getItem("SetDropdownValueBSC");
      let responce = await API.post("/buy_trade", {
        uid: uId,
        currencytype: DropdownValue,
        markettype: marketData,
        price: buyPrice,
        amount: buyAmount,
        tradetype: "LocalCoin",
      });
      responce = responce.data.data.result;
      if (responce == "Buy Trade Successfull") {
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
      let DropdownValue = localStorage.getItem("SetDropdownValueBSC");
      let responce = await API.post("/Sell_trade", {
        uid: uId,
        currencytype: DropdownValue,
        markettype: marketData,
        price: sellPrice,
        amount: sellAmount,
        tradetype: "LocalCoin",
      });
      responce = responce.data.data.result;
      if (responce == "Sell Trade Successfull") {
        toast.success("Sell Trade Update Successfull");
      } else {
        toast(responce);
      }
      // console.log("res", responce);
    } catch (e) {
      console.log("Something Error", e);
    }
  };

  const [dataHigh, setDataHigh] = useState([]);
  const [dataLow, setDataLow] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const High_Table_API = async () => {
    try {
      // console.log("pairSymbol",pairSymbol.value);
      let DropdownValue = localStorage.getItem("SetDropdownValueBSC");
      let res = await API.get(
        `GetTradingOrderDetail?tokentype=${DropdownValue}&ratetype=HIGH`
      );
      // console.log("Table_data High=>", res.data.data);
      res = res.data.data;
      setDataHigh([]);

      let arr = [];
      res.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          TotalAmount: item.TotalAmount,
          Price: `${item.Price}`,
          Amount: item.Amount,
        });
      });

      setDataHigh(arr);
    } catch (e) {
      console.log("Something Erroe in Rable API");
    }
  };

  var [tableDataHigh, setTableData] = new useState({
    cols: [
      // { Header: 'S.No', accessor: 'sr' },
      {
        Header: "Price (USDT)",
        accessor: "Price",
      },
      { Header: `Volume (${DropdownValue})`, accessor: "Amount" },
      { Header: `Total (${DropdownValue})`, accessor: "TotalAmount" },
    ],
  });

  const Low_Table_API = async () => {
    try {
      // console.log("pairSymbol Low",pairSymbol.value);
      let DropdownValue = localStorage.getItem("SetDropdownValueBSC");
      let res = await API.get(
        `GetTradingOrderDetail?tokentype=${DropdownValue}&ratetype=LOW`
      );
      // console.log("Table_dataLow=>", res.data.data);
      res = res.data.data;
      setDataLow([]);

      let arr = [];
      res.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          TotalAmount: item.TotalAmount,
          Price: `${item.Price}`,
          Amount: item.Amount,
        });
      });

      setDataLow(arr);
    } catch (e) {
      console.log("Something Erroe in Rable API");
    }
  };

  useEffect(() => {
    High_Table_API();
    Low_Table_API();
  }, []);

  var [tableDataLow, setTableData] = new useState({
    cols: [
      // { Header: 'S.No', accessor: 'sr' },535.4378	10	26771.8
      { accessor: "Price" },
      { accessor: "Amount" },
      { accessor: "TotalAmount" },
    ],
  });

  const [buySell, setBuySell] = useState("");

  const TradeWalletSell = async () => {
    try {
      let DropdownValue = localStorage.getItem("SetDropdownValueBSC");
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

  useEffect(() => {
    TradeWalletSell();
  }, []);

  let isAuthenticatin = false;
  if (sessionStorage.token) {
    isAuthenticatin = true;
  }
  const navigate = useNavigate();
  const { pairs } = useSelector((state) => state.pairs);
  let [pairSymbol, setPairSymbol] = useState({
    label: "HF/USDT",
    value: "HF",
  });

  const getPair = (e) => {
    // console.log("Select Dropdown", e);
    localStorage.setItem("SetDropdownValueBSC", e.value);
    if (e.remark == "live") {
      localStorage.setItem("setRemarkValue", e.remark);
      window.location.href = "/Trading";
    } else {
      setPairSymbol(e);
    }
    Chart_API();
    High_Table_API();
    Low_Table_API();
    TradeWalletSell();
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPairsData());
  }, []);

  function MarketValue(value) {
    setMarketData(value);
  }

  function convertIntoJson(chartdata1String) {
    // Wrap the string in square brackets to create a valid JSON array
    const jsonArrayString = `[${chartdata1String}]`;

    // Replace the curly braces with double quotes to make it valid JSON format
    const validJsonArrayString = jsonArrayString.replace(
      /([{,])(\w+):/g,
      '$1"$2":'
    );

    // Parse the valid JSON array string into a JavaScript array
    const chartdataArray = JSON.parse(validJsonArrayString);
    return chartdataArray;
  }

  const [chart, setChart] = useState();

  const Chart_API = async () => {
    try {
      let DropdownValue = localStorage.getItem("SetDropdownValueBSC");
      let res = await API.get(`/GetChartData?coin_name=${DropdownValue}`);
      //console.log("res",res);

      let totaldata =
        res.data.data[0].chartdata1 +
        res.data.data[0].chartdata2 +
        res.data.data[0].chartdata3 +
        res.data.data[0].chartdata4;

      const chartdataArray = convertIntoJson(totaldata);
      //  console.log("SelectChartData",chartdataArray);
      setChart(chartdataArray);
    } catch (e) {
      console.log("Something Error in Chart API", e);
    }
  };

  useEffect(() => {
    Chart_API();
  }, []);

  const hendelChange = (event) => {
    setSellAmount(event.target.value);
    setSellPrice(event.target.value);
  };

  const hendelChange1 = (event) => {
    setBuyAmount(event.target.value);
    setBuyPrice(event.target.value);
  };

  useEffect(() => {
    setInterval(() => {
      Chart_API();
    }, 30000);
  }, []);

  const series = [
    {
      data: chart,
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "CandleStick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="col-md-6 sport_trade">
        <ReactApexChart
          options={options}
          series={series}
          type="candlestick"
          height={500}
        />
      </div>

      <div className="trade_ing trade_data_1">
        <div className="col-md-5 fist_trade">
          <div className="assets_table trading_reports totalVolume td_width mt_inset">
            <div class="table-responsive">
              <Table data={[...dataHigh]} columns={tableDataHigh.cols} />
            </div>
          </div>
        </div>
        <div className="col-md-5 second_trad">
          <div className="assets_table trading_reports totalVolume td_width mt_inset">
            <div class="table-responsive">
              <Table data={[...dataLow]} columns={tableDataLow.cols} />
            </div>
          </div>
        </div>
        <div className="col-md-7">
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
                        value={buyPrice}
                        // onChange={(e) => setBuyPrice(e.target.value)}
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
                        value={sellPrice}
                        // onChange={(e) => setBuyPrice(e.target.value)}
                        placeholder="Price"
                      />
                      <span>USDT</span>
                    </div>
                    <div className="trading_field set_span">
                      <input
                        type="text"
                        className="form-control"
                        value={sellAmount}
                        // onChange={(e) => setBuyAmount(e.target.value)}
                        placeholder="Amount"
                      />
                      <span>{DropdownValue}</span>
                    </div>
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
                        value={buyPrice}
                        // onChange={(e) => setBuyAmount(e.target.value)}
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
                    <input
                      type="range"
                      step="0.0001"
                      value={buyAmount}
                      onChange={hendelChange1}
                      style={{ width: "100%" }}
                      min="0"
                      max=""
                    />
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
                        value={sellAmount}
                        className="form-control"
                        // onChange={(e) => setSellAmount(e.target.value)}
                        placeholder="Amount"
                      />
                      <span> {DropdownValue}</span>
                    </div>
                    {/* <div className="trading_field set_span"> */}
                    <input
                      type="range"
                      step="0.0001"
                      value={sellAmount}
                      onChange={hendelChange}
                      style={{ width: "100%" }}
                      min="0"
                      max=""
                    />
                    {/* </div> */}
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
    </div>
  );
}

export default Trading_Data;
