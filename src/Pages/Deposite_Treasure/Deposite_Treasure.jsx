import React from 'react'
import DashboardNavbar from '../../Components/Navbar/DashboardNavbar'
import Footer from '../../Components/Footer/Footer'

function Deposite_Treasure() {
  return (
    <div>
<DashboardNavbar />
<section class="section_bg">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="welcome_section">
                        <h1>Deposit treasure service</h1>
                        <p class="text-white">Flexible allocation of funds, enjoy daily income</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="holding_Assets">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="holding-col">
                                    <h3>Holding assets</h3>
                                    <p>= 0.0000 USDT</p>
                                    <a href="/Financial_account">Account</a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="holding-col mt_2">
                                    <h3>Holding assets</h3>
                                    <p>= 0.0000 USDT</p>
                                    <a href="/Financial_History">History</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="mt2">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="assets_page">
                        <div class="account_tab depositTennor">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="Current-tab" data-toggle="tab" href="#Current" role="tab" aria-controls="Current" aria-selected="true">Capital protected investment</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Regular-tab" data-toggle="tab" href="#Regular" role="tab" aria-controls="Regular" aria-selected="false">Staking Investment</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link bg_none" href="javascript:void(0);">Deposit assets to get stable income</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="Current" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="assets_table td_width">
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Currency</th>
                                                        <th>APR</th>
                                                        <th>Term (days)</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="usdImg">
                                                            <img src="assets1/img/dashboard/tether_icon.png" /><span>USDT</span>
                                                        </td>
                                                        <td class="green">102.6%</td>
                                                        <td><a href="#" class="Deposit_btn">Current</a></td>
                                                        <td class="text-right"><a href="javascript:(0);" onclick="OpenPopup()" class="btn_sub">Subscription</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="Regular" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="assets_table td_width">
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Currency</th>
                                                        <th>APR</th>
                                                        <th>Term (days)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colspan="3" style={{textAlign: "center"}}>
                                                            <div class="no_data_found">
                                                                <img src="assets1/img/dashboard/file_icon.svg" />
                                                                <p>No content is available now.</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
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
  )
}

export default Deposite_Treasure