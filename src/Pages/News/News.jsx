import React, { useEffect , useState } from "react";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";
import Footer from "../../Components/Footer/Footer";
import { API } from "../../API";
import { useSearchParams } from "react-router-dom";

function News() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [id, setId] = useState(searchParams.get("rowId"));
    const [data , setData] = useState("")
  const News_API = async () => {
    try {
      let res = await API.get(`/GetNewsMessageDetail?rowid=${id}`);
      console.log("res", res.data.data[0]);
      setData(res.data.data[0])
    } catch (e) {
      console.log("Somthing error in News API", e);
    }
  };

  useEffect(() => {
    News_API();
  }, []);

  return (
    <div>
      <DashboardNavbar />
      <section class="mt2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="assets_page">
                <div class="news_page">
                  <div class="news_heading">
                    <h2>
                     {data.imgrank}
                    </h2>
                    <p>{data.edate}</p>
                  </div>
                  <div class="content">
                    <p>
                     {data.message}
                    </p>
                    
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

export default News;
