import React, { useState } from "react";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";
import Footer from "../../Components/Footer/Footer";
import { API } from "../../API";
import { toast } from "react-toastify";

function WithdrawalPassward() {
  const user = localStorage.getItem("myData");
    let ress = JSON.parse(user);
    let userId = ress.uid_output;
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const Withdrawal_API = async () => {
    try {
      let res = await API.post("/Update_Tranpass", {
        uid: userId,
        old_trans_password: oldPassword,
        new_trans_password: newPassword,
      });
      console.log("res",res.data.data.result);
      res = res.data.data.result
      if(res = "Update Successfull"){
        toast.success("Password Update Successfull" );
      }
      else{
        toast(res)
      }
    } catch (e) {
      console.log("Something Error in Reset API", e);
    }
  };

  return (
    <div>
      <DashboardNavbar />
      <section class="section_bg">
        <div class="container">
          <div class="welcome_section">
            <h1>Withdrawal Passward</h1>
          </div>
        </div>
      </section>
      <section class="mt2">
        <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-5">
              <div class="assets_page">
                <div class="login-inner">
                  <form method="post" class="login-form">
                    <div class="Reset_login">
                      <h1>Withdrawal Password</h1>
                    </div>
                    {/* <div class="form-group">
                      <label class="form-label">User Id</label>
                      <input
                        type="text"
                        class="form-control text_inputcss"
                        onChange={(e)=>setUId(e.target.value)}
                        name="uid"
                        placeholder="Enter your user Id"
                      />
                    </div> */}
                    <div class="form-group">
                      <label class="form-label">Old withdraw password</label>
                      <div class="d-flex">
                        <div class="flex-fill">
                          <input
                            name="Name"
                            type="text"
                            onChange={(e)=>setOldPassword(e.target.value)}
                            placeholder="Old withdraw password"
                            class="form-control phone text_inputcss"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="form-label">New withdraw password</label>
                      <input
                        type="password"
                        placeholder="New withdraw password"
                        onChange={(e)=>setNewPassword(e.target.value)}
                        class="form-control text_inputcss"
                      />
                    </div>
                  </form>
                  <div class="form-group">
                    <button onClick={()=>Withdrawal_API()} class="btn-submits">Submit</button>
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

export default WithdrawalPassward;
