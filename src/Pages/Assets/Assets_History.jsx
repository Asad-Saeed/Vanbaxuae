import React, { useState, useEffect } from "react";
import { API } from "../../API";
import Table from "../../Components/Table/Table";
import Table_Buttons from "../../Components/Table_Buttons/Table_Button";

function Assets_History() {
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [listPerpage, setlistPerpage] = useState(10);

  const Assets_Table_API = async () => {
    try {
      let res = await API.get(`/Assetexchange_Report?uid=${userId}`);
      console.log("Table_data=>", res.data.data);
      res = res.data.data;
      setData([]);

      let arr = [];
      res.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          Type: item.remark,
          amount: `$ ${item.amount}`,
          fromamount: `$ ${item.fromamount}`,
          fromrate: ` $ ${item.fromrate} `,
          edate: item.dd,
        });
      });

      setData(arr);
    } catch (e) {
      console.log("Something Erroe in Rable API");
    }
  };

  useEffect(() => {
    Assets_Table_API();
  }, []);

  const indexOfLastPost = currentPage * listPerpage;
  const indexOfFirstPage = indexOfLastPost - listPerpage;
  const currentPost = data.slice(indexOfFirstPage, indexOfLastPost);

  var [tableData, setTableData] = new useState({
    cols: [
      { Header: "S.No", accessor: "sr" },
      { Header: "Type", accessor: "Type" },
      { Header: "Amount", accessor: "amount" },
      { Header: "From Amount", accessor: "fromamount" },
      { Header: "From Rate", accessor: "fromrate" },
      { Header: "Time", accessor: "edate" },
      //   { Header: "Amount", accessor: "usdtamount" },
      //   { Header: "Executed", accessor: "transtype" },
      //   // { Header: 'Avg Price', accessor: 'tokenamount' },
      //   { Header: "Action", accessor: "remark" },
    ],
  });

  return (
    <div>
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
  );
}

export default Assets_History;
