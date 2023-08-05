import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";
import { API } from "../../API";
import { useNavigate } from "react-router-dom";

function Notice() {
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  // console.log("data", data);
  const Notice_API = async () => {
    try {
      let res = await API.post(`/getNewsMessageAdminHistory`,{
        "uid":userId
      });
        // console.log("getNewsMessageAdminHistory", res.data.data);
      res = res.data.data;
      setData(res);
    } catch (e) {
      console.log("Somthing error in Notice API", e);
    }
  };

  useEffect(() => {
    Notice_API();
  });

  return (
    <div>
      <DashboardNavbar />
      <section class="section_bg">
        <div class="container">
          <div class="welcome_section">
            <h1>Notice</h1>
          </div>
        </div>
      </section>
      <section class="mt2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="assets_page">
                <div class="note_page">
                  <ul>
                    {data.map((item, index) => (
                      <li key={index}>
                        <a
                          href=""
                          onClick={() => {
                            navigate(`/News?rowId=${item.id}`);
                          }}
                        >
                          {item.imgrank}
                          <span> {item.edate}</span>
                        </a>
                      </li>
                    ))}
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

export default Notice;
