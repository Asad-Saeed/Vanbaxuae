import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";
import Table from "../../Components/Table/Table";
import Table_Buttons from "../../Components/Table_Buttons/Table_Button";
import { API } from "../../API";
import { SnippetsOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Referral_status() {
  let navigate = useNavigate();
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;
  const [uId, setUId] = useState(userId);
  const [level, setLevel] = useState("");
  const [firends, setFriends] = useState("0");
  const [todayCommission, setTodayCommission] = useState("0");
  const [totalCommission, setTotalCommission] = useState("0");
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const Referral_API = async () => {
    try {
      const res = await API.get(
        `/level_income_details?uid=${uId}&level=${level}`
      );
      // console.log("Referral_API=>", res.data.data[0]);

      setFriends(res?.data?.data[0]?.Totaluid);
      setTodayCommission(res?.data?.data[0]?.Todayincome);
      setTotalCommission(res?.data?.data[0]?.Totalincome);
    } catch (e) {
      console.log("Error While calling Referral_status API", e);
    }
  };

  useEffect(() => {
    Referral_API();
  }, []);

  function myFunction1() {
    var copyText = document.getElementById("myInput1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }

  const Referral_Dateils_API = async () => {
    try {
      let res = await API.post(`/level_commission_report`, {
        uid: userId,
      });
      console.log("Table_data=>", res.data.data);
      res = res.data.data;
      setData([]);

      let arr = [];
      res.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          friends: item.friends,
          todaycommission: `$ ${item.todaycommission}`,
          // level: item.level,
          totalcommission: ` $ ${item.totalcommission} `,
          trans_type: item.trans_type,
          level:(
            <>
            <button  class="btn btn-primary"
            onClick={() => {
              navigate(
                `/LevelCommissionDetails?level=${item.level}&friend=${item.friends}&commision=${item.totalcommission}`
              );
            }}>View</button>
            </>
          )
        });
      });

      setData(arr);
    } catch (e) {
      console.log("Something Erroe in Rable API");
    }
  };

  useEffect(() => {
    Referral_Dateils_API();
  }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = data.slice(indexOfFirstPage, indexOfLastPost);

  var [tableData, setTableData] = new useState({
    cols: [
      { Header: "Level", accessor: "sr" },
      { Header: "Friends", accessor: "friends" },
      { Header: "Today's Commissions", accessor: "todaycommission" },
      { Header: "Total Commissions", accessor: "totalcommission" },
      {
        Header: "Details",
        accessor: "level",
        // Cell: ({ cell }) => (
        //   <button
        //     class="btn btn-primary"
        //     onClick={() => {
        //       navigate(
        //         `/LevelCommissionDetails?level=${cell.row.values.level}`
        //       );
        //     }}
        //   >
        //     View
        //   </button>
        // ),
      },
    ],
  });

  // console.log("data", data);

  return (
    <div>
      <DashboardNavbar />
      <section class="section_bg">
        <div class="container">
          <div class="welcome_section">
            <h1>Level Commission</h1>
          </div>
        </div>
      </section>
      <section class="mt2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="assets_page">
                <div class="referral__head">
                  <h2>Referral Link</h2>
                  {/* <p>Referral code</p>
                  <h5>
                    u389f <span style={{ color: "#0eb7d1" }}>Copy</span>
                  </h5> */}
                  {/* <p>Referral Link</p> */}
                  <h5 style={{ display: "flex" }}>
                    <input
                      type="text"
                      
                      id="myInput1"
                      class="form-control"
                      value={`http://localhost:3000/registration?sponserId=${uId}`}
                    />
                    <span
                      text="button"
                      style={{ width: "10%", marginLeft: "10px" }}
                      onClick={myFunction1}
                      class="btn btn-primary"
                    >
                      <SnippetsOutlined style={{ fontSize: "17px" }} />
                    </span>
                  </h5>
                </div>
                <div class="asset_tab">
                  {/* <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" href="#home">
                        Referral Stats
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu1">
                        1st level friends
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu2">
                        2nd level friends
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu3">
                        3rd level friends
                      </a>
                    </li>
                  </ul> */}
                  <div class="tab-content">
                    <div id="home" class="tab-pane active">
                      <div class="referral_status">
                        <ul>
                          <li>
                            <div class="buyItem">
                              <h4>{firends}</h4>
                              <h2># friends</h2>
                            </div>
                          </li>
                          {/* <li>
                            <div class="buyItem">
                              <h4>0</h4>
                              <h2># activated</h2>
                            </div>
                          </li> */}
                          <li>
                            <div class="buyItem">
                              <h4>{todayCommission}</h4>
                              <h2>Today's Commissions</h2>
                            </div>
                          </li>
                          <li>
                            <div class="buyItem">
                              <h4>{totalCommission}</h4>
                              <h2>Total Commissions</h2>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="assets_table">
                        <div class="table-responsive">
                          <Table
                            data={[...currentPost]}
                            columns={tableData.cols}
                          />
                          <br />
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
                    <div id="menu1" class="tab-pane fade">
                      <div class="referral_status">
                        <ul>
                          <li>
                            <div class="buyItem">
                              <h4>{firends}</h4>
                              <h2># friends</h2>
                            </div>
                          </li>
                          {/* <li>
                            <div class="buyItem">
                              <h4>0</h4>
                              <h2># activated</h2>
                            </div>
                          </li> */}
                          <li>
                            <div class="buyItem">
                              <h4>{todayCommission}</h4>
                              <h2>Today's Commissions</h2>
                            </div>
                          </li>
                          <li>
                            <div class="buyItem">
                              <h4>{totalCommission}</h4>
                              <h2>Total Commissions</h2>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="assets_table">
                        <div class="table-responsive">
                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th>Amount</th>
                                <th>Time Registered</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colspan="2" style={{ textAlign: "center" }}>
                                  No content is available now.
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div id="menu2" class="tab-pane fade">
                      <div class="referral_status">
                        <ul>
                          <li>
                            <div class="buyItem">
                              <h4>0</h4>
                              <h2># friends</h2>
                            </div>
                          </li>
                          <li>
                            <div class="buyItem">
                              <h4>0</h4>
                              <h2>Today's Commissions</h2>
                            </div>
                          </li>
                          <li>
                            <div class="buyItem">
                              <h4>0</h4>
                              <h2>Total Commissions</h2>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="assets_table">
                        <div class="table-responsive">
                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th>Amount</th>
                                <th>Time Registered</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colspan="2" style={{ textAlign: "center" }}>
                                  No content is available now.
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div id="menu3" class="tab-pane fade">
                      <div class="referral_status">
                        <ul>
                          <li>
                            <div class="buyItem">
                              <h4>0</h4>
                              <h2># friends</h2>
                            </div>
                          </li>
                          <li>
                            <div class="buyItem">
                              <h4>0</h4>
                              <h2>Today's Commissions</h2>
                            </div>
                          </li>
                          <li>
                            <div class="buyItem">
                              <h4>0</h4>
                              <h2>Total Commissions</h2>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="assets_table">
                        <div class="table-responsive">
                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th>Amount</th>
                                <th>Time Registered</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colspan="2" style={{ textAlign: "center" }}>
                                  No content is available now.
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
      <footer />
    </div>
  );
}

export default Referral_status;
