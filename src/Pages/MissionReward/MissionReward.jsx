import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";
import { API } from "../../API";
import "./Mission.css";
import { toast } from "react-toastify";
import Mission from "./Mission_Table";

function MissionReward() {
  
  // const [uId, setUId] = useState("0");
  const [array, setPendingArr] = useState([]);
  const [likeList, setLikelist] = useState("");
  const [data, setData] = useState("");
  const [pending, setPending] = useState("");
  const [reward,setReward]=useState(0)

  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;

  // const Reward_API = async () => {
  //   try {
  //     const res = await API.get(`/getrewardincome?uid=${uId}`);
  //     console.log("Reward_API", res?.data?.data);
  //     res = res?.data?.data;
  //   } catch (e) {
  //     console.log("Error While calling Reward_API API", e);
  //   }
  // };

  const Dashboard_API = async () => {
    try {
      let res = await API.get(`DashboardDetails?uid=${userId}`);
      res = res.data.data[0];

      setData(res.CurrentRank);
      setReward(res.rewardincome)
      console.log("Dashboard_API", res);
    } catch (e) {
      console.log("Something Error in Dashboard API", e);
    }
  };

  const Pending_API = async () => {
    try {
      let res = await API.post(`/VipReward`, {
        uid: userId,
        rowid: "2",
        type: "1",
      });
      res = res.data.data.recordsets[0];
      setPendingArr(res);
      console.log("Pending_API", res);
      let arr = [];
      res.map((item) => {
        arr.push(item.rank);
      });

      setPending(arr);
    } catch (e) {
      console.log("Something Error in Dashboard API", e);
    }
  };

  const handleRank = (rank) => {
    if (pending.includes(rank)) {
      setLikelist(
        <button
          className={`prop${rank} likes__list`}
          onClick={() => handleClaim(rank)}
        >
          Claim
        </button>
      );
    }
  };

  const handleClaim = async (rank) => {
    let id = array.map((item) => {
      if (item.rank === rank) return item.id;
    });
    id = id.join();
    id=parseInt(id)
    try {
      console.log("id", typeof(id));
      let res = await API.post(`/VipReward`, {
        uid: userId,
        rowid: id,
        type: 2,
      });
      toast(res.data.data.output.result)
      res = res.data.data.output.result;
      window.location.reload();
      console.log("handleClaim", res);
      
    } catch (e) {
      console.log("Something Error in Dashboard API", e);
    }
  };

  useEffect(() => {
    // Reward_API();
    Dashboard_API();
    Pending_API();
  }, []);

  return (
    <div>
      <DashboardNavbar />
      <section class="section_bg">
        <div class="container">
          <div class="welcome_section">
            <h1>VAN tasks and rewards</h1>
            {/* <p class="text-white">
              After completing the VAN level upgrade, you can get VAN rights and
              additional upgrade rewards! Each level reward can only be claimed
              once. If the VAN level drops and you upgrade again, the reward you
              have already received cannot be claimed again.
            </p> */}
          </div>
        </div>
      </section>
      {/* active_dot line_actie */}
      <section class="mt2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="assets_page">
                <div class="vip_heading">
                  <h3>VAN tasks and rewards</h3>
                </div>
                <div class="vip_list">
                  <ul>
                    <li
                      class={`${data > "0" ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(1)}
                    >
                      VAN 1
                    </li>
                    <li
                      class={`${data > 1 ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(2)}
                    >
                      VAN 2
                    </li>
                    <li
                      class={`${data > 2 ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(3)}
                    >
                      VAN 3
                    </li>
                    <li
                      class={`${data > 3 ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(4)}
                    >
                      VAN 4
                    </li>
                    <li
                      class={`${data > 4 ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(5)}
                    >
                      VAN 5
                    </li>
                    <li
                      class={`${data > 5 ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(6)}
                    >
                      VAN 6
                    </li>
                    <li
                      class={`${data > 6 ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(7)}
                    >
                      VAN 7
                    </li>
                    <li
                      class={`${data > 7 ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(8)}
                    >
                      VAN 8
                    </li>
                    <li
                      class={`${data > 8 ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(9)}
                    >
                      VAN 9
                    </li>
                    <li
                      class={`${data > 9 ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(10)}
                    >
                      VAN 10
                    </li>
                    <li
                      class={`${data > 10 ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(11)}
                    >
                      VAN 11
                    </li>
                    <li
                      class={`${data > 11 ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(12)}
                    >
                      VAN 12
                    </li>
                    <li
                      class={`${data > 12 ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(13)}
                    >
                      VAN 13
                    </li>
                    <li
                      class={`${data > 13 ? "active_dot line_actie" : ""}`}
                      onClick={() => handleRank(14)}
                    >
                      VAN 14
                    </li>
                  </ul>
                  {likeList}
                </div>
                <br />
                <br />
                <div class="vip_contents">
                  {/* <p class="mrt_1">
                    As of yesterday, your eligible trading volume is {reward} USDT.
                  </p>
                  <p>VAN Rating Rules and Rights:</p>
                  <p>
                    At present, BORA will offer a series of special benefits to
                    each VAN user, which mainly includes three aspects:
                    transaction, reward and user value-added. The following is
                    the list of VAN benefits. You can see all the member
                    benefits currently provided here:
                    <br />
                    VAN Level Number of people activated Conditions Cumulative
                    transaction amount selling fee rate Daily check-in reward /U
                    savings wallet Additional VAN reward amount /U
                  </p> */}
                </div>
                <div class="assets_table td_width bdrtopnone">
                  <div class="table-responsive">
                    <Mission />
                  
                  </div>
                </div>
                <div class="vip_contents">
                  {/* <p class="mrt_1">
                    Users are required to participate in the transactions of the
                    platform or have a certain number of invitation activators.
                    For details, please refer to the above [Comparison Table of
                      VAN Levels and Rewards]. If they meet the requirements, they
                    will be upgraded to the corresponding level of VAN.What are
                    the VAN rights of BORA users?
                  </p>
                  <p>Interest in trading</p>
                  <p>
                    · The transaction fee of Bitcoins is reduced, up to 100% We
                    will waive up to 90% of the handling fee for all types of
                    BORA transactions for VAN users.
                    <br />
                    · Additional savings wallet financial benefits
                    <br />
                    VAN can enjoy regular high interest rate financial
                    management at the same time can enjoy additional returns, up
                    to 100%
                  </p>
                  <p>
                    · Exclusive rewards for VAN
                    <br />
                    If you reach the corresponding VAN level, you can get the
                    corresponding VAN reward amount
                    <br />
                    · VAN check-in reward
                    <br />
                    If you reach the corresponding VAN level, you can get
                    different reward amount by signing in every day
                    <br />
                    · Exclusive VAN trading activities
                    <br />
                    We will hold exclusive trading activities for VAN users from
                    time to time to enjoy customized gameplay and rewards.
                  </p>
                  <p>
                    Points to note:
                    <br />
                    In order to ensure the fairness of the activity, malicious
                    registration, brushing, countertapping, money laundering and
                    other violations are not allowed. If a user is found to
                    affect the normal operation of the activity, the platform
                    will immediately cancel the rights and interests of the user
                    and block the account. BORA reserves the right of final
                    interpretation of this activity.
                  </p> */}
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

export default MissionReward;
