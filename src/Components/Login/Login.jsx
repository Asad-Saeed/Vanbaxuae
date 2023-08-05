import React, { useState } from "react";
import HomeNavbar from "../Navbar/HomeNavbar";
import Footer from "../Footer/Footer";
import { API } from "../../API";
import swal from 'sweetalert'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login_API = async () => {
    try {
      let responce = await API.post("/login", {
        email: email,
        password: password,
      });
      responce = responce.data.data;
      console.log("res", responce);

      if (responce.result == "Successfull" ) {
        swal({
          title: 'Success..!',
          text: 'You has been successfull!!',
          icon: 'success',
          button: 'OK',
        }).then((okay) => {
          if (okay) {
            localStorage.setItem('myData', JSON.stringify(responce));
            window.location.href = './Dashboard'
          }
        })
      }else {
        swal({
          title: "Login Error..!!",
          text: responce.result,
          icon: "error",
          button: "OK",
        })
      }
      
    } catch (e) {
      console.log("Something Error", e);
    }
  };

  const [valid, setValid] = useState(true);
  const EmailValidation = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputValue);
    setValid(isValid);
  };


  return (
    <div>
      {/* <HomeNavbar /> */}
      <section class="section_bg">
        <div class="container">
          <div class="welcome_section">
            <h1>Login</h1>
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
                      <h1>Login</h1>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Email</label>
                      <div class="d-flex">
                        <div class="flex-fill">
                          <input
                            name="Name"
                            type="text"
                            placeholder="Enter Email"
                            onChange={EmailValidation}
                            class="form-control phone text_inputcss"
                          />
                          {!valid && <p className="" style={{color:'red'}}>Please enter a valid email address.</p>}
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Password</label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        class="form-control text_inputcss"
                      />
                    </div>

                    <div class="form-group">
                      <button
                        // disabled
                        type="button"
                        onClick={() => Login_API()}
                        class="btn-submits"
                      >
                        Login
                      </button>
                    </div>

                    <div class="login_flex">
                      {/* <div class="">
                        <p>
                          <a href="/Reset"> Forgot password?</a>
                        </p>
                      </div> */}
                      <div class="">
                        <p>
                          <a href="/Registration"> Register an account</a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Login;
