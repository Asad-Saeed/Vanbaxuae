import React from "react";
import Footer from "../../Components/Footer/Footer";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";
import ReactApexChart from "react-apexcharts";
import Trading_Data from "./Trading_Data";
import "./Sport_Treade.css";
import Tranding_Table_Data from "./Tranding_Table_Data";
import Trading_Data_new from "./Trading_Data_new";


function Sport_Trading(){
    return (
      <>
        <DashboardNavbar />
        <section class="section_bg">
          <div class="container-fluid">
            <div className="">
              <div className="container-fluid cols_pd_set">
                <div className="row">
                  <div className="custom_col_set">
                    <Trading_Data_new />
                  </div>
                  <br></br>
                  <div className="col-md-12">
                    <Tranding_Table_Data />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }


export default Sport_Trading;
