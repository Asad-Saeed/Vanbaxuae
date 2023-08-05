import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";
import Table from "../../Components/Table/Table";
import Table_Buttons from "../../Components/Table_Buttons/Table_Button";
import { API } from "../../API";

function Sport_Order() {
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const Sport_Order_API = async () => {
    try {
      let res = await API.get(`/buy_trade_history?uid=${userId}`);
      // console.log("buy_trade_history===>", res.data.data);
      res = res.data.data;
      setData([]);

      let arr = [];
      res.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          edate: item.edate,
          admincharge: ` ${(item.admincharge).toFixed(4)}`,
          remark: item.remark,
          usdtamount: `  ${item.usdtamount} `,
          price: ` ${item.price} `,
          orderid: item.orderid,
          currencytype: ` ${item.currencytype}/USDT `,
          markettype: item.markettype,
          // transtype: `${item.transtype}`,
          tokenamount: ` ${(item.netusdtamount).toFixed(4)} `,
          transtype: (
            <>
              <button
                className={`${
                  item?.transtype === "Sell" ? "btn-danger" : "btn-success"
                } btn`}
                style={{ fontSize: "small", borderRadius: "50px",  padding: "3px 15px" }}
                // onClick={() => Status_active(item?.uid,item?.status)}
              >
                {item?.transtype}
              </button>
            </>
          ),
        });
      });

      setData(arr);
    } catch (e) {
      console.log("Something Erroe in Rable API");
    }
  };

  const [sportTrade, setSportTrade] = useState("");
  const Sport_Trade_Wallet_API = async () => {
    try {
      let res = await API.get(`Total_trade_wallet?uid=${userId}`);
      console.log("Sport_Trade_Wallet_API", res.data.data);
      res = res.data.data[0];
      setSportTrade(res);
    } catch (e) {
      console.log("Something error in Sport Trade API", e);
    }
  };

  useEffect(() => {
    Sport_Order_API();
    Sport_Trade_Wallet_API();
  }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = data.slice(indexOfFirstPage, indexOfLastPost);

  var [tableData, setTableData] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "Order Date & Time", accessor: "edate" },
      { Header: "Order Type", accessor: "transtype" },
      { Header: "Order Id", accessor: "orderid" },
      { Header: "Coin", accessor: "currencytype" },
      { Header: "Quantity", accessor: "usdtamount" },
      { Header: "Price", accessor: "price" },
      { Header: "Fees", accessor: "admincharge" },
      { Header: "Total Amount", accessor: "tokenamount" },
      { Header: "Type", accessor: "markettype" },
      { Header: "Action", accessor: "remark" },
    ],
  });

  return (
    <div>
      <DashboardNavbar />
      <section class="section_bg">
        <div class="container">
          <div class="welcome_section">
            <h1>Spot Orders</h1>
          </div>
        </div>
      </section>
      <section class="mt2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="assets_page">
                <div class="TotalSpot">
                  <ul>
                    <li>
                      <div class="buyItem">
                        <h4>Buy (Total)</h4>
                        <h2>{sportTrade.TotalBuy}</h2>
                      </div>
                    </li>
                    <li>
                      <div class="buyItem">
                        <h4>Sell (Total)</h4>
                        <h2>{sportTrade.TotalSell}</h2>
                      </div>
                    </li>
                    {/* <li>
                      <div class="buyItem">
                        <h4>Holding</h4>
                        <h2>00</h2>
                      </div>
                    </li> */}
                    {/* <li>
                      <div class="buyItem">
                        <h4>Estimated Profit</h4>
                        {sportTrade.TotalProfit>= "0"?
                        <h2 class="green">{sportTrade.TotalProfit}</h2>
                        :<h2 class="red">{sportTrade.TotalProfit}</h2>
                  }

                      </div>
                    </li> */}
                  </ul>
                </div>
                <div className="assets_table trading_reports td_width">
                  <div class="table-responsive">
                    <Table data={[...currentPost]} columns={tableData.cols} />
                    {data.length == "0" ? (
                      <h6 style={{ color: "red", textAlign: "center" }}>
                        No Data Avilable
                      </h6>
                    ) : (
                      <></>
                    )}
                    <Table_Buttons
                      indexOfFirstPage={indexOfFirstPage}
                      indexOfLastPost={indexOfLastPost}
                      setcurrentPage={setcurrentPage}
                      currentPage={currentPage}
                      totalData={data.length}
                      listPerpage={listPerpage}
                    />
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

export default Sport_Order;
