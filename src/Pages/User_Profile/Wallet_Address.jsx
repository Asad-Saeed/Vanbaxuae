import React, { useEffect, useState } from 'react'
import DashboardNavbar from '../../Components/Navbar/DashboardNavbar'
import Footer from '../../Components/Footer/Footer'
import { API } from '../../API';
import { toast } from 'react-toastify';

function User_Wallet_Address() {
    const user = localStorage.getItem("myData");
    let ress = JSON.parse(user);
    let userId = ress.uid_output;
const [userName ,setUserName] = useState("")
const [email ,setEmail] = useState("")


// const BuySell = localStorage.getItem("buySell");
// let sellRes = JSON.parse(BuySell);
// let sellId = sellRes.NetBuyBalance;
// console.log("BuySell",sellId);
const [profile , setProfile] = useState("")
const [address , setAddress] = useState("")
const [password , setPassword] = useState("")

    const Profile_API = async () => {
        try {
            
          let res = await API.post(`/Update_Trade_wallet`,{
            "uid":userId,
            "useraddress":address,
            "trans_password":password
          });
          console.log("res",res.data.data);
        res = res.data.data.result
        if(res == "Update Successfull"){
            toast.success("Update Successfull")
        }
        else{
            toast.error(res)
        }
        // setProfile(res)
      
        } catch (e) {
          console.log("Something Error in Profile API", e);
        }
      };

    //   const User_Name = (event) => {
    //     const newValue = event.target.value.replace(/[^a-z]/gi, '');
    //     setUserName(newValue);
    //   };


useEffect(()=>{
// Profile_API()
},[])

  return (
    <div>
<DashboardNavbar />
<section class="mt2">
        <div class="container">
            <div class="row">
            <div class="col-md-12 col-lg-3 ">
          <div class="nav flex-column nav-pills settings-nav" id="v-pills-tab" >
            <a class="nav-link" id="settings-profile-tab"  href="/User_Profile" ><i class="icon ion-md-person"></i> Profile</a>
            <a class="nav-link" id="settings-wallet-tab"  href="/User_KYC" ><i class="icon ion-md-wallet"></i> User KYC</a>
            <a class="nav-link " id="settings-tab"  href="/User_Wallet_Address" ><i class="icon ion-md-settings"></i>Wallet Address</a>
          </div>
        </div>
                <div class="col-md-9 ">
                  
                    <div class="assets_page withdrawal py2">
                        <div class="row">

                            <div class="col-md-8">
                                <h2 class="trade_heading">Wallet Address</h2>
                                {/* <div class="profileIcon">
                                    <img src="assets1/img/dashboard/avatar.svg" />
                                </div> */}
                                <form>
                                    <div class="form-group">
                                        <label class="form-label">Wallet Address</label>
                                        <div class="amount_rate">
                                            <div class="input-group">
                                                <input type="text"
                                                //  value={profile.f_name} 
                                                onChange={(e)=>setAddress(e.target.value)} 
                                                class="form-control text_inputcss"  name="name" placeholder="Enter Wallet Address" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Transaction Password</label>
                                        <div class="amount_rate">
                                            <div class="input-group">
                                                <input type="password" 
                                                // value={profile.email}
                                                
                                                onChange={(e)=>setPassword(e.target.value)} 
                                                 class="form-control text_inputcss" name="email" placeholder="Enter Password" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="form-group">
                                        <label class="form-label">Profile Image</label>
                                        <div class="amount_rate">
                                            <div class="input-group">
                                                <input type="file"  class="form-control text_inputcss" name="file"  />
                                            </div>
                                        </div>
                                    </div> */}
                                    
                                </form>
                                <div class="wdrlBtn">
                                        <button type="button" onClick={()=>Profile_API()}  class="btn">Update Walet Address</button>
                                    </div>
                            </div>
                            {/* <div class="wdrlBtn">
                                        <a type="button" href='/Withdrawal_History' class="btn btn-primary" style={{color:'#fff'}}>Withdrawal History</a>
                                    </div> */}
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

export default User_Wallet_Address