import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";
import Footer from "../../Components/Footer/Footer";
import { API } from "../../API";

function Dashboard() {
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;
    const [data,setData]=useState("")
  const Dashboard_API = async () => {
    try {
      let res = await API.get(`DashboardDetails?uid=${userId}`);
      res= res.data.data[0]
      setData(res)
      console.log("res", res);
    } catch (e) {
      console.log("Something Error in Dashboard API", e);
    }
  };

  useEffect(()=>{
    Dashboard_API()
  },[])

  return (
    <div>
      <DashboardNavbar />
      <section class="section_bg">
        <div class="container">
          <div class="welcome_section">
            <h1 class="active">Hi, {data.name}</h1>
          </div>
        </div>
      </section>
      <section class="mt2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="card_bg">
                <div class="row">
                  <div class="col-md-6">
                    <div class="membership_Heading">
                      <h2>
                        Your membership level is:<span>VAN {data.CurrentRank}</span>
                      </h2>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mission_button">
                      <a href="/MissionReward">Mission & Rewards</a>
                      {/* <a href="/RulesBenifits">Rules & Benefits</a> */}
                    </div>
                  </div>
                  <div class="hzLine">
                    <hr />
                  </div>
                  <div class="col-md-10">
                    <div class="reward_item">
                      <h3>
                        Accumulated rewards: <span>{data.rewardincome}</span>
                        <span>USDT</span>
                      </h3>
                      <p>
                        Daily check-in can get 0USDT reward, accumulated
                        check-in reaches the specified number of days to get
                        additional reward
                         {/* <a href="#">Details</a> */}
                      </p>
                    </div>
                  </div>
                  {/* <div class="col-md-2">
                    <div class="signedIn">
                      <a href="#">Signed In</a>
                    </div>
                  </div> */}
                  {/* <div class="col-md-12">
                    <div class="line_bottom">
                      <div class="line_hr"></div>
                      <div class="line_icon"></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="card_bg2">
                <div class="row">
                  <div class="col-md-12">
                    <div class="identity_Heading">
                      <h2>Identity Verification</h2>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="identity_item">
                      <p>
                        You are suggested to complete identity verification in
                        order to ensure financial security, raise withdraw
                        credit and enjoy trading privileges.
                      </p>
                      <div class="chk">
                        <input
                          type="checkbox"
                          name="Completed"
                          value="Completed"
                          checked
                        />
                        <label for="Completed">Completed</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="card_bg2">
                <div class="assets_list">
                  <ul>
                    <li>
                      <a href="/Assetspage">
                        <span>Assets</span>
                        <span>
                          <i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    {/* <li>
                                <a href="/Financial_account"><span>Financial account</span><span><i class="fa fa-angle-right"></i></span></a>
                              </li> */}
                    <li>
                      <a href="/Sport_Order">
                        <span>Spot Orders</span>
                        <span>
                          <i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/Notice">
                        <span>Notice</span>
                        <span>
                          <i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="card_bg3">
                <div class="row">
                  <div class="col-md-12">
                    <div class="identity_Heading">
                      <h2>Referral & Earn</h2>
                    </div>
                  </div>
                  {/* <div class="col-md-4">
                                <div class="refrell_item">
                                    <a href="/Referral_status">
                                        <img src="assets1/img/dashboard/referral_icon.png" />
                                        <h3>Referral Stats</h3>
                                    </a>
                                </div>
                            </div> */}
                  <div class="col-md-6">
                    <div class="refrell_item">
                      <a href="/LevelCommission">
                        <img src="assets1/img/dashboard/level_icon.png" />
                        <h3>Level Commission</h3>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="refrell_item br_none">
                      <a href="/MissionReward">
                        <img src="assets1/img/dashboard/level2.png" />
                        <h3>VAN Commission</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="card_bg2">
                <div class="identity_Heading">
                  <h2>Account Security</h2>
                </div>
                <div class="account_list">
                  <ul>
                    <li>
                      <a href="/Assetspage">
                        <span>Account</span>
                        <span>{data.email}</span>
                      </a>
                    </li>
                    {/* <li>
                                <a href="/LevelCommission"><span>Referral & Earn</span><span><i class="fa fa-angle-right"></i></span></a>
                              </li> */}
                    <li>
                      <a href="/Reset">
                        <span>Login Password</span>
                        <span>
                          <i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/WithdrawalPassward">
                        <span>Withdraw Password</span>
                        <span>
                          <i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    {/* <li>
                                <a href="/BankAccount"><span>Bank Account</span><span><i class="fa fa-angle-right"></i></span></a>
                              </li> */}
                    <li>
                      <a href="/">
                        <span>Logout</span>
                        <span>
                          <i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
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

export default Dashboard;
