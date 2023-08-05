import React, { useState } from "react";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";
import Footer from "../../Components/Footer/Footer";
import { API } from "../../API";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

function Reset() {
  const user = localStorage.getItem("myData");
    let ress = JSON.parse(user);
    let userId = ress.uid_output;
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const Reset_API = async () => {
    try {
        let res = await API.post("/Updatepass", {
            uid: userId,
            oldpassword: oldPassword,
            newpassword: newPassword,
          });
          console.log("res",res.data.data.result);
          res = res.data.data.result
          if(res ="Update Successfull"){
            toast.success("Reset Password Update Successfull")
          }
          else{
            toast(res)
          }
    // toast(res.data.data.result)
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
            <h1>Reset</h1>
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
                      <h1>Reset Password</h1>
                    </div>
                    
                    <div class="form-group">
                      <label class="form-label">Old Password</label>
                      <input
                        type="password"
                        placeholder="Old Password"
                        onChange={(e) => setOldPassword(e.target.value)}
                        class="form-control text_inputcss"
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-label">New Password</label>
                      <input
                        name="cpwd"
                        type="password"
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Confirmation Password "
                        class="form-control text_inputcss"
                      />
                    </div>
                   
                   
                  </form>
                  <div class="form-group">
                        <button className="btn btn-primary btn-submits" onClick={()=>Reset_API()}>Next Step</button>
                      
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

export default Reset;
