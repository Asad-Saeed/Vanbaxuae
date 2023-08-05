import React from 'react'
import DashboardNavbar from '../../Components/Navbar/DashboardNavbar'
import Footer from '../../Components/Footer/Footer'

function Financial_account() {
  return (
    <div>
<DashboardNavbar />
<section class="section_bg">
        <div class="container">
            <div class="welcome_section">
                <h1>Financial account</h1>
            </div>
        </div>
    </section>
    <section class="mt2">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="account_assets">
                        <h3>Holding assets</h3>
                        <p>= 0.0000 USDT</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="account_assets">
                        <h3>Holding assets</h3>
                        <p>= 0.0000 USDT</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="account_assets">
                        <h3>Holding assets</h3>
                        <p>= 0.0000 USDT</p>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="assets_page">
                        <div class="account_tab">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="Current-tab" data-toggle="tab" href="#Current" role="tab" aria-controls="Current" aria-selected="true">Current</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Regular-tab" data-toggle="tab" href="#Regular" role="tab" aria-controls="Regular" aria-selected="false">Regular</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Staking-tab" data-toggle="tab" href="#Staking" role="tab" aria-controls="Staking" aria-selected="false">Staking Investment</a>
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
                                                        <th>Lump Sum</th>
                                                        <th>Interest is accuring</th>
                                                        <th>Estimated annual interest rate</th>
                                                        <th>Cumulative income</th>
                                                        <th>Level eward</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colspan="7" style={{textAlign: "center"}}>No data found</td>
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
                                                        <th>Subcription date</th>
                                                        <th>Lump sum</th>
                                                        <th>Estimated annual interest rate</th>
                                                        <th>Cumulative income</th>
                                                        <th>Maturity redemption date</th>
                                                        <th>State</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colspan="8" style={{textAlign: "center"}}>No data found</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="Staking" role="tabpanel" aria-labelledby="contact-tab">
                                    <div class="assets_table td_width">
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Currency</th>
                                                        <th>Subcription date</th>
                                                        <th>Lump sum</th>
                                                        <th>Estimated annual interest rate</th>
                                                        <th>Cumulative income</th>
                                                        <th>Maturity redemption date</th>
                                                        <th>State</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colspan="8" style={{textAlign: "center"}}>No data found</td>
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

export default Financial_account