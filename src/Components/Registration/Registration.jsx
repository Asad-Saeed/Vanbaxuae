import React, { useState, useEffect } from "react";
import Select from "react-select";
import HomeNavbar from "../Navbar/HomeNavbar";
import { useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { API } from "../../API";
import swal from "sweetalert";

function Registration() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [sponser, setSponser] = useState(searchParams.get("sponserId"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setSelectedCountry] = useState({});
  const [countries, setCountries] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState({})

  const [sponserCheck, setSponserCheck] = useState("");
  const Check_Sponser = async (value) => {
    console.log("value",value)
    try {
      let res = await API.post(`/check_sponsorid`, {
        uid: value,
      });
      res = res.data.data.result;
      console.log("Check_Sponser",res);
      setSponserCheck(res);
    } catch (e) {
      console.log("Somthing Error in Sponser API");
    }
  };

  useEffect(() => {
    Check_Sponser();
  }, []);

  const Registration_API = async () => {
    try {
      let responce = await API.post(
        "https://vanbaxuae.nakshtech.info/registration",
        {
          sponser_id: sponser,
          name: name,
          email: email,
          mobile: mobile,
          password: password,
          // "countryid":"1"	,
          //   "countryname":"India"
          countrycode: country.value,
          countryname: country.label,
        }
      );
      responce = responce.data.data.result;
      if (responce == "Successfull") {
        Login_API();
      } else if (responce == "email Already EXISTS !!") {
        Login_API();
      } else {
        swal({
          title: "Login Error..!!",
          text: responce,
          icon: "error",
          button: "OK",
        });
      }

      console.log("res", responce);
    } catch (e) {
      console.log("Something Error", e);
    }
  };


  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
        // setcountryValue()
      });
  }, []);

  const handleInputChange = (event) => {
    const newValue = event.target.value.replace(/[^a-z] + [^ ]/gi, "");
    setName(newValue);
  };

  const [valid, setValid] = useState(true);
  const EmailValidation = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputValue);
    setValid(isValid);
  };

  const Mobile_Data = (event) => {
    const newValue = event.target.value.replace(/[^0-9]/gi, "");
    setMobile(newValue);
  };

  const [sponserValid, setSponserValid] = useState(true);
  console.log("sponserValid",sponserValid);
  const Sponser_Data = (event) => {
    const newValue = event.target.value.replace(/[^0-9]/gi, "");
    setSponser(newValue);
  };

  const Login_API = async () => {
    try {
      let responce = await API.post("/login", {
        email: email,
        password: password,
      });
      responce = responce.data.data;
      console.log("res", responce);

      if (responce.result == "Successfull") {
        swal({
          title: "Success..!",
          text: "You has been successfull!!",
          icon: "success",
          button: "OK",
        }).then((okay) => {
          if (okay) {
            localStorage.setItem("myData", JSON.stringify(responce));
            window.location.href = "./Dashboard";
          }
        });
      } else {
        swal({
          title: "Login Error..!!",
          text: responce.result,
          icon: "error",
          button: "OK",
        });
      }
    } catch (e) {
      console.log("Something Error", e);
    }
  };

  

  return (
    <div>
      {/* <HomeNavbar /> */}
      <section class="section_bg">
        <div class="container">
          <div class="welcome_section">
            <h1>Register</h1>
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
                      <h1>Register</h1>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Sponser Id</label>
                      <div class="d-flex">
                        <div class="flex-fill">
                          <input
                            name="Name"
                            type="text"
                            maxLength="6"
                            value={sponser}
                            placeholder="Enter Sponser Id"
                            onChange={(e)=>{Sponser_Data(e);Check_Sponser(e.target.value)}}
                            class="form-control phone text_inputcss"
                          />
                          {sponserCheck != "Valid Sponsor Id ." && (
                            <p className="" style={{ color: "red" }}>
                              Please enter a valid Sponser Id.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Name</label>
                      <div class="d-flex">
                        <div class="flex-fill">
                          <input
                            name="Name"
                            type="text"
                            maxLength="35"
                            value={name}
                            placeholder="Enter Name"
                            onChange={handleInputChange}
                            class="form-control phone text_inputcss"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="form-label">Email</label>
                      <div class="d-flex">
                        <div class="flex-fill">
                          <input
                            name="Name"
                            type="text"
                            placeholder="Enter Email"
                            maxLength="30"
                            // value={email}
                            onChange={EmailValidation}
                            class="form-control phone text_inputcss"
                          />
                          {!valid && (
                            <p className="" style={{ color: "red" }}>
                              Please enter a valid email address.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Mobile No</label>
                      <div class="d-flex">
                        <div class="flex-fill">
                          <input
                            name="Name"
                            type="text"
                            maxLength="10"
                            value={mobile}
                            placeholder="Enter Mobile No"
                            onChange={Mobile_Data}
                            class="form-control phone text_inputcss"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label">
                        Password (at least 6 characters)
                      </label>
                      <input
                        type="password"
                        placeholder="Password (at least 6 characters)"
                        onChange={(e) => setPassword(e.target.value)}
                        class="form-control text_inputcss"
                      />
                    </div>

                    <div class="form-group">
                      <label class="form-label">Country</label>
                      <Select
                        //   styles={{ width: '100%' }}
                        class="form-control text_inputcss"
                        id="countries"
                        options={countries}
                        value={country}
                        onChange={(selectedOption) =>
                          setSelectedCountry(selectedOption)
                        }
                      />
                      {/* <input type="password" placeholder="Referral Code" class="form-control text_inputcss" /> */}
                    </div>
                    <div class="form-group">
                      <button
                        // disabled
                        type="button"
                        onClick={() => Registration_API()}
                        class="btn-submits"
                      >
                        Register
                      </button>
                    </div>
                    {/* <div class="form-group"><button type="submit" class="btn-submits">Next Step</button></div> */}

                    <div class="login_flex">
                      <div class="">
                        <p>
                          <a href="/Login"> Login</a>
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

export default Registration;
