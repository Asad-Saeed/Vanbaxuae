import React, { useEffect, useState } from "react";
import { API } from "../../API";
import Table from "../../Components/Table/Table";
import Table_Buttons from "../../Components/Table_Buttons/Table_Button";
import DashboardNavbar from "../../Components/Navbar/DashboardNavbar";
import Footer from "../../Components/Footer/Footer";

function Quick_Buy_History() {
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;
  // console.log("user=>",userId);
  const [uId, setUId] = useState("0");
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const Withdrawal_History_API = async () => {
    try {
      let res = await API.get(`/quick_buy_trade_history?uid=${userId}`);
      console.log("Table_data=>", res.data.data);
      res = res.data.data;
      setData([]);

      let arr = [];
      res.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          edate: item.edate,
          trans_amount: `$ ${item.trans_amount}`,
          remark: item.status[1],
          transtype: item.transtype,
          amount: ` $ ${item.amount} `,
          currencytype: item.currencytype,
        });
      });

      setData(arr);
    } catch (e) {
      console.log("Something Erroe in Rable API");
    }
  };

  useEffect(() => {
    Withdrawal_History_API();
  }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = data.slice(indexOfFirstPage, indexOfLastPost);

  var [tableData, setTableData] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "Date & Time", accessor: "edate" },
      { Header: "Type", accessor: "currencytype" },
      { Header: "Transection Type", accessor: "transtype" },
      { Header: "Amount", accessor: "amount" },
      { Header: "Remark", accessor: "remark" },
    ],
  });

  // console.log("data",data);

  return (
    <div>
      <DashboardNavbar />
      <section class="section_bg">
        <div class="container-fluid">
          <div className="">
            <div className="container-fluid cols_pd_set">
              <div className="row">
                <div className="col-md-12">
                  <div className="assets_table trading_reports td_width">
                    <div class="table-responsive">
                      <Table data={[...currentPost]} columns={tableData.cols} />
                      {data.length == "0" ? (
                        <h6 style={{ color: "red", textAlign: "center" }}>
                          No Data Avilable
                        </h6>
                      ) : (
                        <></>
                      )}
                      <Table_Buttons
                        indexOfFirstPage={indexOfFirstPage}
                        indexOfLastPost={indexOfLastPost}
                        setcurrentPage={setcurrentPage}
                        currentPage={currentPage}
                        totalData={data.length}
                        listPerpage={listPerpage}
                      />
                    </div>
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

export default Quick_Buy_History;
