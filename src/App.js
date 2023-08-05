import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Assets from "./Pages/Assets/Assets";
import BankAccount from "./Pages/BankAccount/BankAccount";
import Financial_account from "./Pages/Financial_account/Financial_account";
import News from "./Pages/News/News";
import Notice from "./Pages/Notice/Notice";
import Referral_status from "./Pages/Referral_status/Referral_status";
import Reset from "./Pages/Reset/Reset";
import Sport_Order from "./Pages/Sport_Order/Sport_Order";
import WithdrawalPassward from "./Pages/WithdrawalPassward/WithdrawalPassward";
import Buycripto from "./Pages/Buycripto/Buycripto";
import Deposite_Treasure from "./Pages/Deposite_Treasure/Deposite_Treasure";
import Financial_History from "./Pages/Financial_History/Financial_History";
import StartUp from "./Pages/StartUp/StartUp";
import RulesBenifits from "./Pages/Rules&Benifits/Rules&Benifits";
import Quotes from "./Pages/Quotes/Quotes";
import MissionReward from "./Pages/MissionReward/MissionReward";
import Referral_Details from "./Pages/Referral_status/Referral_Details";
import Trading from "./Pages/Trading/Trading";
import Sport_Trading from "./Pages/Trading/Sport_Trading";
import Withdrawal from "./Pages/Withdrawal/Withdrawal";
import Withdrawal_History from "./Pages/Withdrawal/Withdrawal_History";
import Quick_Buy_History from "./Pages/Buycripto/Quick_Buy_History";
import User_Profile from "./Pages/User_Profile/Profile";
import User_KYC from "./Pages/User_Profile/KYC";
import User_Wallet_Address from "./Pages/User_Profile/Wallet_Address";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registration" element={<Registration />} />

          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/Assetspage" element={<Assets />} />
          <Route exact path="/BankAccount" element={<BankAccount />} />
          <Route
            exact
            path="/Financial_account"
            element={<Financial_account />}
          />
          <Route exact path="/News" element={<News />} />
          <Route exact path="/User_Profile" element={<User_Profile />} />
          <Route exact path="/User_KYC" element={<User_KYC />} />
          <Route exact path="/User_Wallet_Address" element={<User_Wallet_Address />} />
          <Route exact path="/Notice" element={<Notice />} />
          <Route exact path="/LevelCommission" element={<Referral_status />} />
          <Route
            exact
            path="/LevelCommissionDetails"
            element={<Referral_Details />}
          />
          <Route exact path="/Reset" element={<Reset />} />
          <Route exact path="/Sport_Order" element={<Sport_Order />} />
          <Route
            exact
            path="/WithdrawalPassward"
            element={<WithdrawalPassward />}
          />
          <Route exact path="/Buycripto" element={<Buycripto />} />
          <Route
            exact
            path="/Deposite_Treasure"
            element={<Deposite_Treasure />}
          />
          <Route
            exact
            path="/Financial_History"
            element={<Financial_History />}
          />
          <Route exact path="/StartUp" element={<StartUp />} />
          <Route exact path="/RulesBenifits" element={<RulesBenifits />} />
          <Route exact path="/Quotes" element={<Quotes />} />
          <Route exact path="/MissionReward" element={<MissionReward />} />
          <Route exact path="/Trading" element={<Trading />} />
          <Route exact path="/Sport_Trading" element={<Sport_Trading />} />
          <Route exact path="/Withdrawal" element={<Withdrawal />} />
          <Route
            exact
            path="/Withdrawal_History"
            element={<Withdrawal_History />}
          />
          <Route
            exact
            path="/Quick_Buy_History"
            element={<Quick_Buy_History />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
