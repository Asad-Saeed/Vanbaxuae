import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";
import Table from "../../Components/Table/Table";
import Table_Buttons from "../../Components/Table_Buttons/Table_Button";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { API } from "../../API";
import {ToastContainer,toast} from 'react-toastify'
import Assets_History from "./Assets_History";
import Assets_Table from "./Assets_Table";

function Assets() {
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;

  const [amount, setAmount] = useState("");
  const Assets_API = async () => {
    try {
      let res = await API.post(`/assetexchange`, {
        uid: "665566",
        commission: amount,
        usdt: amount,
        rate: "1",
      });
      console.log("res", res.data.data);
      res = res.data.data.result
      if(res = "SUCCESSFUL"){
      toast.success("Assets Exchange Successful Update");
      }
      else{
        toast(res)
      }
    } catch (e) {
      console.log("Something Error in Assets API", e);
    }
  };

  const Amount_Data = (event) => {
    const newValue = event.target.value.replace(/[^0-9]/gi, "");
    setAmount(newValue);
  };

  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const Assets_Table_API = async () => {
    try {
      let res = await API.get(`/Deposite_Withdrawl_Report?uid=${userId}`);
      console.log("Table_data=>", res.data.data);
      res = res.data.data;
      setData([]);

      let arr = [];
      res.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          Type: item.Type,
          amount: `$ ${item.amount}`,
          remark: item.remark,
          //   usdtamount: ` $ ${item.usdtamount} `,
          edate: item.edate,
          //   currencytype: item.currencytype,
          //   transtype: `${item.transtype}`,
          //   tokenamount: `${item.tokenamount} `,
        });
      });

      setData(arr);
    } catch (e) {
      console.log("Something Erroe in Rable API");
    }
  };

  useEffect(() => {
    Assets_Table_API();
  }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = data.slice(indexOfFirstPage, indexOfLastPost);

  var [tableData, setTableData] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "Type", accessor: "Type" },
      { Header: "Amount", accessor: "amount" },
      { Header: "Status", accessor: "remark" },
      // { Header: 'Side', accessor: 'date' },
      { Header: "Time", accessor: "edate" },
      //   { Header: "Amount", accessor: "usdtamount" },
      //   { Header: "Executed", accessor: "transtype" },
      //   // { Header: 'Avg Price', accessor: 'tokenamount' },
      //   { Header: "Action", accessor: "remark" },
    ],
  });

  const [commission, setCommission] = useState();
  const Dashboard_API = async () => {
    try {
      let res = await API.get(`DashboardDetails?uid=${userId}`);
      res = res.data.data[0];
      setCommission(res.netIncome);
      console.log("res", res);
    } catch (e) {
      console.log("Something Error in Dashboard API", e);
    }
  };

  useEffect(() => {
    Dashboard_API();
  }, []);

  return (
    <div>
      <DashboardNavbar />
      <section class="section_bg">
        <div class="container">
          <div class="welcome_section">
            <h1>Assets</h1>
          </div>
        </div>
      </section>
      <section class="mt2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="assets_page">
                <div class="asset_tab">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" href="#home">
                        Assets
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu1">
                        Deposit/Withdraw Orders
                      </a>
                    </li>
                    {/* <li>
                      <a data-toggle="tab" href="#menu2">
                        Balance History
                      </a>
                    </li> */}
                    <li>
                      {/* <a data-toggle="tab" href="javascript:void(0);" onclick="OpenPopup()">Asset Exchange</a> */}
                      <Popup
                        trigger={<a href="#"> Assets Exchange</a>}
                        position="down center"
                      >
                        <div id="">
                          {/* <div id="mainItem"> */}
                          {/* <a class="closebtn" onClick={()=>closePopup()}>&times;</a> */}
                          <div class="main_popup">
                            <h1> Assets Exchange</h1>
                            <div class="from-group">
                              <label>Commission</label>
                              <input
                                type="text"
                                class="form-control "
                                id="assets"
                                name="to"
                                value={`${commission}`}
                                readOnly
                              />
                            </div>
                            <div class="exchIcon">
                              <img src="assets1/img/dashboard/exchange-icon.png" />
                            </div>
                            <div class="from-group">
                              <label>To</label>
                              <input
                                type="text"
                                class="form-control"
                                id="assets"
                                name="to"
                                value="USDT"
                                readOnly
                              />
                            </div>

                            <div class="from-group mty1">
                              <label>Amount</label>
                              <div class="input-group">
                                <input
                                  type="text"
                                  id="assets"
                                  class="form-control"
                                  value={amount}
                                  placeholder="Enter Amount"
                                  onChange={Amount_Data}
                                />
                                <div class="input-group-append">
                                  {/* <button class="btn btn-dark" type="submit">
                                    All
                                  </button> */}
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              class="btn hts button btn-block bg-dark text-white"
                              onClick={() => Assets_API()}
                            >
                              Confirm
                            </button>
                            {/* <button
                              type="button"
                              onClick={() => closePopup()}
                              class="btn hts button btn-block bg-dark text-white"
                            >
                              Cancel
                            </button> */}
                          </div>
                        </div>
                        {/* </div> */}
                        {/* <button>Click here</button> */}
                      </Popup>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu3">
                        Assets Exchange History
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="home" class="tab-pane active">
                      <div class="assets_table td_pd">
                        <div class="table-responsive">
                        <Assets_Table />
                        </div>
                      </div>
                    </div>
                    <div id="menu1" class="tab-pane fade">
                      <div class="assets_table">
                        <div class="table-responsive">
                          <Table
                            data={[...currentPost]}
                            columns={tableData.cols}
                          />
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
                    <div id="menu2" class="tab-pane fade">
                      <div class="assets_table">
                        <div class="table-responsive">
                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th>Time</th>
                                <th>Currency</th>
                                <th>Balance</th>
                                <th>Frozen</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>2023-05-09 13:19</td>
                                <td>USDT</td>
                                <td class="balAct">
                                  <span class="green">+ 0.10</span> 0.34
                                </td>
                                <td>0.00</td>
                              </tr>
                              <tr>
                                <td>2023-05-09 13:19</td>
                                <td>USDT</td>
                                <td class="balAct">
                                  <span class="red">+ 0.10</span> 0.34
                                </td>
                                <td>0.00</td>
                              </tr>
                              <tr>
                                <td>2023-05-09 13:19</td>
                                <td>USDT</td>
                                <td class="balAct">
                                  <span class="red">+ 0.10</span> 0.34
                                </td>
                                <td>0.00</td>
                              </tr>
                              <tr>
                                <td>2023-05-09 13:19</td>
                                <td>USDT</td>
                                <td class="balAct">
                                  <span class="green">+ 0.10</span> 0.34
                                </td>
                                <td>0.00</td>
                              </tr>
                              <tr>
                                <td>2023-05-09 13:19</td>
                                <td>USDT</td>
                                <td class="balAct">
                                  <span class="green">+ 0.10</span> 0.34
                                </td>
                                <td>0.00</td>
                              </tr>
                              <tr>
                                <td>2023-05-09 13:19</td>
                                <td>USDT</td>
                                <td class="balAct">
                                  <span class="green">+ 0.10</span> 0.34
                                </td>
                                <td>0.00</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div id="menu3" class="tab-pane fade">
                      <div class="assets_table">
                        <Assets_History />
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

export default Assets;
