import React, { useEffect, useState } from "react";
import { API } from "../../API";
import Table from "../../Components/Table/Table";
import Table_Buttons from "../../Components/Table_Buttons/Table_Button";

function Mission() {
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
      
      let res = await API.get(`/User_Reward_status?uid=${userId}`);
      // console.log("buy_trade_history===>", res.data.data);
      res=res.data.data
      setData([])
  
      let arr = []
      res.forEach((item, index) => {
        arr.push({
          sr: index + 1,
          Title: item.Title,
          Reward: ` ${item.Reward}`,
          STATUS: item.STATUS,
          request: item.STATUS,
         

          
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

  

  const indexOfLastPost = currentPage * listPerpage
    const indexOfFirstPage = indexOfLastPost - listPerpage
    const currentPost = data.slice(indexOfFirstPage, indexOfLastPost)
  
    var [tableData, setTableData] = new useState({
      cols: [
        { Header: 'S.No', accessor: 'sr' },
        { Header: 'Rewrad', accessor: 'Title' },
        { Header: 'Self Wallet / Required', accessor: 'STATUS' },
        { Header: 'Team Wallet / Required', accessor: 'request' },
        { Header: 'Reward', accessor: 'Reward' },
       

      ]
    })

  return (
    <div>

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
  )
}

export default Mission