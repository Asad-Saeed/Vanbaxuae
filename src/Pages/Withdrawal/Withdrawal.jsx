import React, { useState } from 'react'
import DashboardNavbar from '../../Components/Navbar/DashboardNavbar'
import Footer from '../../Components/Footer/Footer'
import { API } from '../../API';
import { toast } from 'react-toastify';

function Withdrawal() {
    const user = localStorage.getItem("myData");
    let ress = JSON.parse(user);
    let userId = ress.uid_output;
const [amount ,setAmount] = useState("")
const [password ,setPassword] = useState("")


const BuySell = localStorage.getItem("buySell");
let sellRes = JSON.parse(BuySell);
let sellId = sellRes.NetBuyBalance;
// console.log("BuySell",sellId);

    const Withdrawal_API = async () => {
        try {
            if(amount != ""){
          let res = await API.post("/SaveWithdraw", {
            "uid":userId,
            "amount":amount,
            "txnPassword":password
        
          });
        //   console.log("res",res);
        res = res.data.data.RESULT
        if(res = "SUCCESSFUL"){
          toast.success("Withdrawal Successful Update");
        }
        else{
            toast(res)
        }
        }
        else{
            toast("Please Enter Amount !!")
        }
        //   console.log("res", res.data.data.RESULT);
        } catch (e) {
          console.log("Something Error in Reset API", e);
        }
      };

      const Amount_Data = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/gi, '');
        setAmount(newValue);
      };

  return (
    <div>
<DashboardNavbar />
<section class="mt2">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="assets_page withdrawal">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="trade_heading">Trade Wallet Balance</h2>
                                <div class="totalWdr">
                                    <div class="w_item">
                                        <i class="fa fa-money"></i><span>Total Balance</span>
                                    </div>
                                    <div class="w_item">
                                        <p>$ {sellId} USDT</p>
                                    </div>
                                </div>
                                {/* <div class="importFunds">
                                    <a href="#">Import Funds</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div class="assets_page withdrawal py2">
                        <div class="row">
                            <div class="col-md-8">
                                <h2 class="trade_heading">Funds Withdrawal</h2>
                                <div class="profileIcon">
                                    <img src="assets1/img/dashboard/avatar.svg" />
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label class="form-label">Request Amount</label>
                                        <div class="amount_rate">
                                            <div class="input-group">
                                                <input type="number" value={amount} onChange={Amount_Data} class="form-control text_inputcss" name="amount" placeholder="Enter Amount" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Transaction PIN</label>
                                        <div class="amount_rate">
                                            <div class="input-group">
                                                <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control text_inputcss" name="transctionPin" placeholder="Enter Transaction PIN" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </form>
                                <div class="wdrlBtn">
                                        <button type="button" onClick={()=>Withdrawal_API()} class="btn">Withdrawal Funds</button>
                                    </div>
                            </div>
                            <div class="wdrlBtn">
                                        <a type="button" href='/Withdrawal_History' class="btn btn-primary" style={{color:'#fff'}}>Withdrawal History</a>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<Footer />
    </div>
  )
}

export default Withdrawal