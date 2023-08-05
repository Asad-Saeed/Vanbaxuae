import React, { useEffect, useState, useRef } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { getPairsData } from "../../Redux/pairs/aciton";
import { useNavigate } from "react-router-dom";
import Table from "../../Components/Table/Table";
import { API } from "../../API";
import { toast } from "react-toastify";
import "./Sport_Treade.css";
import ReactApexChart from "react-apexcharts";
import { createChart } from "lightweight-charts";

function Trading_Data_new() {
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
  const [selectedPair, setSelectedPair] = useState("HF");
  const [LiveRateValue, setLiveRateValue] = useState("0");

  let DropdownValue = localStorage.getItem("SetDropdownValueBSC");
  // console.log("SetDropdownValueBSC", DropdownValue);

  // console.log("LiveRateValue", LiveRateValue);

  const Trading_Buy_API = async () => {
    try {
      let DropdownValue = localStorage.getItem("SetDropdownValueBSC");
      let responce = await API.post("/buy_trade", {
        uid: uId,
        currencytype: DropdownValue,
        markettype: marketData,
        price: LiveRateValue,
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
        currencytype: LiveRateValue,
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
      let DropdownValue = localStorage.getItem("SetDropdownValueBSC");
      let res = await API.get(
        `GetTradingOrderDetail?tokentype=${DropdownValue}&ratetype=LOW`
      );
      // console.log("Table_data High=>", res.data.data);
      res = res.data.data;
      setDataHigh([]);

      let arr = [];
      res.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          TotalAmount: `${item.TotalAmount.toFixed(4)}`,
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
        Cell: ({ cell }) => (
          <span class="text" style={{ color: "red" }}>
            {cell.row.values.Price}
          </span>
        ),
      },
      { Header: `Volume (${selectedPair})`, accessor: "Amount" },
      { Header: `Total (${selectedPair})`, accessor: "TotalAmount" },
    ],
  });

  const Low_Table_API = async () => {
    try {
      let DropdownValue = localStorage.getItem("SetDropdownValueBSC");
      let res = await API.get(
        `GetTradingOrderDetail?tokentype=${DropdownValue}&ratetype=HIGH`
      );
      // console.log("Table_dataLow=>", res.data.data);
      res = res.data.data;
      setDataLow([]);

      let arr = [];
      res.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          TotalAmount: `${item.TotalAmount.toFixed(4)}`,
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
    TradeWalletSell();
    Trading_Dash_API();
  }, []);

  var [tableDataLow, setTableData] = new useState({
    cols: [
      // { Header: 'S.No', accessor: 'sr' },535.4378	10	26771.8
      {
        accessor: "Price",
        Cell: ({ cell }) => (
          <span class="text" style={{ color: "green" }}>
            {cell.row.values.Price}
          </span>
        ),
      },
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

  let isAuthenticatin = false;
  if (sessionStorage.token) {
    isAuthenticatin = true;
  }
  const navigate = useNavigate();
  const { pairs } = useSelector((state) => state.pairs);
  let [pairSymbol, setPairSymbol] = useState({
    label: "HFUSDT",
    value: "HF",
  });

  const getPair = (e) => {
    // console.log("Select Dropdown", e);

    setSelectedPair(e.value);
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
    Trading_Dash_API();
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPairsData());
  }, []);
  function MarketValue(value) {
    setMarketData(value);
  }

  //******************** */
  function convertIntoJson(chartdata1String) {
    if (!chartdata1String) {
      // Handle case when chartdata1String is undefined or empty
      return [];
    }

    // Wrap the string in square brackets to create a valid JSON array
    const jsonArrayString = `[${chartdata1String}]`;

    // Replace the curly braces with double quotes to make it valid JSON format
    const validJsonArrayString = jsonArrayString.replace(
      /([{,])(\w+):/g,
      '$1"$2":'
    );

    // Parse the valid JSON array string into a JavaScript array
    const chartdataArray = JSON.parse(validJsonArrayString);

    // Refactor the chart data array
    console.log("Item", chartdataArray);
    const refactoredData = chartdataArray
      .map((item) => {
        if (!item.x || !item.y || item.y.length < 4) {
          // Handle case when 'x' or 'y' properties are missing or 'y' array length is less than 4

          return null;
        }
        const date = new Date(item.x); // Assuming that 'x' is a date string

        if (isNaN(date.getTime())) {
          // Handle case when 'x' is an invalid date string
          return null;
        }

        return {
          time:
            Math.floor(date.getTime() / 1000) - date.getTimezoneOffset() * 60, // Convert Date to Unix timestamp
          open: item.y[0],
          high: item.y[1],
          low: item.y[2],
          close: item.y[3],
        };
      })
      .filter((item) => item !== null); // Filter out null values from the array
    return refactoredData;
  }

  const generateData = () => {
    const data = [];
    const now = Math.floor(Date.now() / 1000);
    const dayInSeconds = 24 * 60 * 60;
    const fiveDaysInSeconds = 5 * dayInSeconds;
    const dataPointsPerDay = 5;

    for (let i = 0; i < dataPointsPerDay * 5; i++) {
      const timestamp =
        now - fiveDaysInSeconds + (i * dayInSeconds) / dataPointsPerDay;
      data.push({
        time: timestamp,
        open: Math.random() * 100,
        high: Math.random() * 100,
        low: Math.random() * 100,
        close: Math.random() * 100,
      });
    }
    return data;
  };

  const Chart_API = async () => {
    try {
      let DropdownValue = localStorage.getItem("SetDropdownValueBSC");
      //let res = await API.get(`/GetChartData?coin_name=${DropdownValue}`);

      let res = await API.post("/Pro_GetChartData", {
        coin_name: DropdownValue,
      });

      //console.log('res', res);
      let totaldata =
        res.data.data[0].chartdata1 +
        res.data.data[0].chartdata2 +
        res.data.data[0].chartdata3 +
        res.data.data[0].chartdata4 +
        res.data.data[0].chartdata5;

      let closeamount = res.data.data[0].closeamount;
      setLiveRateValue(closeamount);

      const chartdataArray = convertIntoJson(totaldata);
      console.log("chartdataArray", chartdataArray);
      return chartdataArray;
      //  console.log("SelectChartData",chartdataArray);
    } catch (e) {
      console.log("Something Error in Chart API", e);
    }
  };

  const [chartContainer, setChartContainer] = useState(null);
  const [chart, setChart] = useState(null);
  const [lineSeries, setLineSeries] = useState(null);

  useEffect(() => {
    // Inner function to use async/await
    const fetchData = async () => {
      // if chartContainer is null, return
      if (!chartContainer) return;

      // if chart already exists, return
      if (chart) return;

      const chartCreated = createChart(chartContainer, {
        width: 663,
        height: 585,
        layout: {
          background: { color: "#222" },
          textColor: "#DDD",
        },
        grid: {
          vertLines: { color: "#444" },
          horzLines: { color: "#444" },
        },
        barSpacing: 3, // Set the desired value for bar spacing
      });
      // Apply time scale options

      chartCreated.timeScale().applyOptions({
        borderColor: "#71649C",
        barSpacing: 8,
        rightOffset: 12,
        timeVisible: true,
        secondsVisible: true,
        timeFormat: "%Y-%m-%d %H:%M:%S", // Set the desired format for date and time
        timezone: "Asia", // Set the timezone to IS
      });
      chartCreated.timeScale().fitContent();

      setChart(chartCreated);

      let lineSeriesCreated = chartCreated.addCandlestickSeries();
      lineSeriesCreated.applyOptions({
        wickUpColor: "#28A745",
        upColor: "#28A745",
        wickDownColor: "#DC3545",
        downColor: "#DC3545",
        borderVisible: false,
      });
      setLineSeries(lineSeriesCreated);
      console.log("Line Series", lineSeriesCreated);
      const data = await Chart_API();
      //console.log('data', data);
      if (data) {
        lineSeriesCreated.setData(data);
      }
      // Add initial data
      const interval = setInterval(async () => {
        const data = await Chart_API();

        High_Table_API();
        Low_Table_API();
        //console.log('data', data);
        if (data) {
          lineSeriesCreated.setData(data);
        }
      }, 5000);
      return () => clearInterval(interval);
    };

    // Call the async function
    fetchData();
  }, [chartContainer]);

  const hendelChange = (event) => {
    if (parseFloat(event.target.value) > parseFloat(buySell.NetSellBalance)) {
      toast.error("Insufficiant Balance !!");
    } else {
      setSellAmount(event.target.value);
      setSellPrice(event.target.value);
    }
  };

  const hendelChange1 = (event) => {
    if (parseFloat(event.target.value) > parseFloat(buySell.NetBuyBalance)) {
      toast.error("Insufficiant Balance !!");
    } else {
      setBuyAmount(event.target.value);
      setBuyPrice(event.target.value);
    }
  };

  const [tradDash, setTradDash] = useState("");
  const Trading_Dash_API = async () => {
    try {
      let DropdownValue = localStorage.getItem("SetDropdownValueBSC");
      let responce = await API.get(
        `/getuserdashboard?coinname=${DropdownValue}`
      );
      responce = responce.data.data[0];
      setTradDash(responce);
      console.log("Trading_Dash_API", responce);
    } catch (e) {
      console.log("Something Error", e);
    }
  };

  return (
    <div className="van_dis">
      <div className="col-md-6 sport_trade">
        <div style={{ display: "flex" }}>
          <div>
            <p className="pp">{tradDash.closeamount}</p>
            <p className="pp">{tradDash.differenceamount} </p>
          </div>
          <div>
            <p className="pp">Change</p>
            <p className="pp">{tradDash.changepercente}</p>
          </div>
          <div>
            <p className="pp">24H High</p>
            <p className="pp">{tradDash.H24HIgh}</p>
          </div>
          <div>
            <p className="pp">24H Low</p>
            <p className="pp">{tradDash.H24LOW}</p>
          </div>
          <div>
            <p className="pp">24H Volume</p>
            <p className="pp">{tradDash.H24Volume}</p>
          </div>
        </div>
        <div className="trading_custom" ref={setChartContainer}></div>
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

export default Trading_Data_new;
