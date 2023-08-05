import React, { useState, useEffect } from "react";
import { API } from "../../API";
import Table from "../../Components/Table/Table";
import Table_Buttons from "../../Components/Table_Buttons/Table_Button";
import { useNavigate } from "react-router-dom";

function Assets_Table() {
  let navigate = useNavigate();
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);
  const [dash,setdash]=useState('')

// console.log("dash",dash);

  const Dashboard_API = async () => {
    try {
      let res = await API.get(`DashboardDetails?uid=${userId}`);
      console.log("Dashboard_API", res.data.data[0]);
      res= res.data.data[0]
      setdash(res)
      console.log("Dashboard_API", res);
    } catch (e) {
      console.log("Something Error in Dashboard API", e);
    }
  };


  const Assets_Table_API = async () => {
    
    try {
      console.log("dash",dash);
      // let resRight = await API.get(`DashboardDetails?uid=${userId}`);
      // console.log("Dashboard_API", resRight.data.data[0]);
      // resRight= resRight.data.data[0]
      // setdash(resRight)

      let res = await API.get(`/GetAssetsReport?uid=665566`);
      console.log("Table_data=>", res.data.data);
      res = res.data.data;
      setData([]);

      let arr = [
        {
          coin_symbol: "Commissions",
          AvalableBalance: `$ ${dash.netIncome}`,
          Balance: `$  ${dash.netIncome}`,
          level: (
            <>
              <button
                class="btn btn-primary"
                style={{fontSize : "x-small" , borderRadius:'50px'}}
                onClick={() => {
                  navigate(`/Withdrawal`);
                }}
                disabled
              >
                Withdrawal
              </button>
            </>
          ),
          from: (
            <>
              <button
                class="btn btn-primary"
                style={{fontSize : "x-small" , borderRadius:'50px'}}
                onClick={() => {
                  navigate(`/Buycripto`);
                }}
                disabled
              >
                Deposit
              </button>
            </>
          ),
        },
        {
          coin_symbol: "Trading",
          AvalableBalance: `$ ${dash.TradeWallet}`,
          Balance: `$ ${dash.TradeWallet}`,
          level: (
            <>
              <button
                class="btn btn-primary"
                style={{fontSize : "x-small" , borderRadius:'50px'}}
                onClick={() => {
                  navigate(`/Withdrawal`);
                }}
              >
                Withdrawal
              </button>
            </>
          ),
          from: (
            <>
              <button
                class="btn btn-primary"
                style={{fontSize : "x-small" , borderRadius:'50px'}}
                onClick={() => {
                  navigate(`/Buycripto`);
                }}
              >
                Deposit
              </button>
            </>
          ),
        }
      ];

      res.forEach((item, index) => {
        arr.push({
          coin_symbol: item.coin_symbol,
          AvalableBalance: `$ ${item.AvalableBalance}`,
          Balance: `$ ${item.Balance}`,
          level: (
            <>
              <button
                class="btn btn-primary"
                style={{fontSize : "x-small" , borderRadius:'50px'}}
                onClick={() => {
                  navigate(`/Withdrawal`);
                }}
                disabled
              >
                Withdrawal
              </button>
            </>
          ),
          from: (
            <>
              <button
                class="btn btn-primary"
                style={{fontSize : "x-small" , borderRadius:'50px'}}
                onClick={() => {
                  navigate(`/Buycripto`);
                }}
                disabled
              >
                Deposit
              </button>
            </>
          ),
        });
      });
      console.log("arr", arr);
      setData(arr);
    } catch (e) {
      console.log("Something Erroe in Rable API");
    }
  };

  useEffect(() => {
    Dashboard_API();
    Assets_Table_API();
  }, [dash]);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = data.slice(indexOfFirstPage, indexOfLastPost);

  var [tableData, setTableData] = new useState({
    cols: [
      // { Header: "S.No", accessor: "sr" },
      { Header: "Account", accessor: "coin_symbol" },
      { Header: "Balance", accessor: "Balance" },
      { Header: "Available Balance", accessor: "AvalableBalance" },
      {
        Header: "",
        accessor: "from",
      },
      { Header: "", accessor: "level" },
      //   { Header: "Amount", accessor: "usdtamount" },
      //   { Header: "Executed", accessor: "transtype" },
      //   // { Header: 'Avg Price', accessor: 'tokenamount' },
      //   { Header: "Action", accessor: "remark" },
    ],
  });

  return (
    <div>
      <Table data={[...currentPost]} columns={tableData.cols} />
      {data.length == "0" ? (
        <h6 style={{ color: "red", textAlign: "center" }}>No Data Avilable</h6>
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
  );
}

export default Assets_Table;
