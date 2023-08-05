import React, { useState, useEffect } from "react";
import { API } from "../../API";

function DashboardNavbar() {
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;
  const [data, setData] = useState("");
  const Dashboard_API = async () => {
    try {
      let res = await API.get(`DashboardDetails?uid=${userId}`);
      res = res.data.data[0];
      setData(res);
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
      <header class="dark-bb">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="/Dashboard">
            <img src="assets1/img/logo-light.svg" alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#headerMenu"
            aria-controls="headerMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="icon ion-md-menu"></i>
          </button>

          <div class="collapse navbar-collapse" id="headerMenu">
            <ul class="navbar-nav mr-auto">
              {/* <!--  <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Buy Crypto
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="landing-page-dark.html">Landing One</a>
                  <a class="dropdown-item" href="landing-page-dark-two.html">Landing Two</a>
                </div>
              </li> --> */}

              <li class="nav-item">
                <a class="nav-link" href="/Buycripto" role="button">
                  Buy Crypto
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/Quotes" role="button">
                  Quotes
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="/Trading" role="button">
                  Spot Trading
                </a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="/Sport_Trading" role="button">
                  Spot Trading 
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/MissionReward" role="button">
                  VAN Commission
                </a>
              </li>

              {/* <li class="nav-item">
                <a class="nav-link" href="/Deposite_Treasure" role="button">
                  Deposite Treasure
                </a>
                
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/StartUp" role="button">
                  Startup
                </a>
                
              </li> */}

              <li class="nav-item">
                <a class="nav-link" href="/LevelCommission" role="button">
                  Level Commission
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Notice" role="button">
                  Notice
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <div class="dropdown">
                <li
                  class="nav-link dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="assets1/img/lock.png" width="20px" />
                </li>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <div class="profileIcon" style={{ textAlign: "center" }}>
                      <img src="assets1/img/dashboard/avatar.svg" />
                    </div>
                    {/* <br /> */}
                    <p style={{ textAlign: "center" }}>{data.name}</p>
                    <p style={{ textAlign: "center", padding: "0 10px" }}>
                      {data.email}
                    </p>
                  </li>
                  <hr style={{ background: "aliceblue" }} />
                  <li>
                    <a class="dropdown-item" href="/User_Profile">
                      Profile
                    </a>
                  </li>
                  {/* <li><a class="dropdown-item" href="#">{data.email}</a></li> */}
                  <li>
                    <a class="dropdown-item" href="/Assetspage">
                      Assets
                    </a>
                  </li>
                
                  {/* <li><a class="dropdown-item" href="#">Account &amp; Security</a></li> */}
                  {/* <li><a class="dropdown-item" href="#">Referral &amp; Earn</a></li> */}
                  <li>
                    <a class="dropdown-item" href="/">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default DashboardNavbar;
