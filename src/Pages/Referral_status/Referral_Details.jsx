import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";
import { API } from "../../API";
import Table from "../../Components/Table/Table";
import Table_Buttons from "../../Components/Table_Buttons/Table_Button";
import { SnippetsOutlined } from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";

function Referral_Details() {
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;

  const [searchParams, setSearchParams] = useSearchParams();
  const [level, setLevel] = useState(searchParams.get("level"));
  const [uId, setUId] = useState(userId);
  const [friends, setFriends] = useState(searchParams.get("friend"));
  const [totalcommission, setTotalCommission] = useState(searchParams.get("commision"));
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);
  const [details, setDeatils] =useState("")
  const [data,setData] =useState([])

  const Table_API = async () => {
    try {
      let res = await API.post(`/level_commission_Details_report`,{
        uid: userId,
        level: level,
      });
      console.log("Table_data=>", res.data.data);
      res = res.data.data;
      setData([]);

      let arr = [];
      res.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          level: item.level,
          uid: item.lvluid,
          income: `$ ${item.totalcommission}`,
        });
      });

      setData(arr);
    } catch (e) {
      console.log("Something Erroe in Rable API");
    }
  };

  useEffect(() => {
    Table_API();
  }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = data.slice(indexOfFirstPage, indexOfLastPost);

  var [tableData, setTableData] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "Level", accessor: "level" },
      { Header: "Friends", accessor: "uid" },
      { Header: "Total Commissions", accessor: "income" },
    ],
  });

  function myFunction1() {
    var copyText = document.getElementById("myInput1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }

  // const Details_API = async () => {
  //   try {
  //     let res = await API.post(`/level_commission_Details_report`, {
  //       uid: "665566",
  //       level: level,
  //     });
  //     console.log("Details API", res.data.data);
  //     setDeatils(res.data.data);
  //   } catch (e) {
  //     console.log("Something error in Details API", e);
  //   }
  // };

  // useEffect(() => {
  //   Details_API();
  // }, []);

  return (
    <div>
      <DashboardNavbar />
      <section class="section_bg">
        <div class="container">
          <div class="welcome_section">
            <h1>Level Commission Details</h1>
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

                  {/* <p>Referral Link</p> */}
                  <h5 style={{ display: "flex" }}>
                    <input
                      type="text"
                     
                      id="myInput1"
                      class="form-control"
                      value={`http://localhost:3000/registration?sponserId=${userId}`}
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
                  <div class="tab-content">
                    <div id="home" class="tab-pane active">
                      <div class="referral_status">
                        <ul>
                          <li>
                            <div class="buyItem">
                              <h4>{friends}</h4>
                              <h2># friends</h2>
                            </div>
                          </li>

                          <li>
                            <div class="buyItem">
                              <h4>{totalcommission}</h4>
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
                          {data.length == "0" ? <h6 style={{color:'red' , textAlign:'center'}}>No Data Avilable</h6>:<></>}
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

                {/* <div class="refund_work">
                  <h2>How Referral Works</h2>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="work_items">
                        <div>
                          <h1>01</h1>
                        </div>
                        <div class="img12">
                          <img src="assets1/img/dashboard/level2.png" />
                        </div>
                      </div>
                      <div>
                        <h2>Refer Friends</h2>
                        <p>
                          Share your referral link or code with your friends and
                          social media.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="work_items">
                        <div>
                          <h1>02</h1>
                        </div>
                        <div class="img12">
                          <img src="assets1/img/dashboard/level2.png" />
                        </div>
                      </div>
                      <div>
                        <h2>Earn Crypto!</h2>
                        <p>
                          Earn up to 60% commission when your friends start
                          trading.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer />
    </div>
  );
}

export default Referral_Details;
