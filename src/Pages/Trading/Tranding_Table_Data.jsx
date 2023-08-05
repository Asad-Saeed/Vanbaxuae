import React, { useEffect, useState } from "react";
import { API } from "../../API";
import Table from "../../Components/Table/Table";
import Table_Buttons from "../../Components/Table_Buttons/Table_Button";

function Tranding_Table_Data() {
  const user = localStorage.getItem("myData");
  let ress = JSON.parse(user);
  let userId = ress.uid_output;
  // console.log("user=>",userId);
  const [uId, setUId] = useState("0");
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1)
  const [listPerpage, setlistPerpage] = useState(10)

  const Table_API = async () => {
    try {
      
      let res = await API.get(`/buy_trade_history?uid=${userId}`);
      // console.log("buy_trade_history===>", res.data.data);
      res=res.data.data
      setData([])
  
      let arr = []
      res.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          edate: item.edate,
          admincharge: ` ${(item.admincharge).toFixed(4)}`,
          remark: item.remark,
          usdtamount: `  ${item.usdtamount} `,
          price: ` ${item.price} `,
          orderid: item.orderid,
          currencytype: ` ${item.currencytype}/USDT `,
          markettype: item.markettype,
          // transtype: `${item.transtype}`,
          tokenamount: ` ${item.tokenamount} `  ,
          transtype: (
            <>
              <button
                className={`${
                  item?.transtype === "Sell" ? "btn-danger" : "btn-success"
                } btn`}
                style={{fontSize : "small" , borderRadius:'50px', padding: "3px 15px"}}
                // onClick={() => Status_active(item?.uid,item?.status)}
              >
                {item?.transtype}
              </button>
            </>
          )

          
        })
      })

      setData(arr)
    } catch (e) {
      console.log("Something Erroe in Rable API");
    }
  };

  useEffect(() => {
    Table_API();
  }, []);
  
  
  useEffect(()=>{
    setInterval(() => {
      Table_API();
    }, 30000);
  },[])
  

  const indexOfLastPost = currentPage * listPerpage
    const indexOfFirstPage = indexOfLastPost - listPerpage
    const currentPost = data.slice(indexOfFirstPage, indexOfLastPost)
  
    var [tableData, setTableData] = new useState({
      cols: [
        { Header: 'S.No', accessor: 'sr' },
        { Header: 'Order Date & Time', accessor: 'edate' },
        { Header: 'Order Type', accessor: 'transtype' },
        { Header: 'Order Id', accessor: 'orderid' },
        { Header: 'Coin', accessor: 'currencytype' },
        { Header: 'Quantity', accessor: 'usdtamount' },
        { Header: 'Price', accessor: 'price' },
        { Header: 'Fees', accessor: 'admincharge' },
        { Header: 'Total Amount', accessor: 'tokenamount' },
        { Header: 'Type', accessor: 'markettype' },
        { Header: 'Action', accessor: 'remark' }

      ]
    })


  return (
    <div>
      <div className="assets_table trading_reports td_width">
        <div class="table-responsive">
        <Table data={[...currentPost]} columns={tableData.cols} />
        {data.length == "0" ? <h6 style={{color:'red' , textAlign:'center'}}>No Data Avilable</h6>:<></>}
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
  );
}

export default Tranding_Table_Data;
