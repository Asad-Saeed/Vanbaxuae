import React from 'react'
import DashboardNavbar from '../../Components/Navbar/DashboardNavbar'
import Footer from '../../Components/Footer/Footer'

function Financial_History() {
  return (
    <div>
<DashboardNavbar />
<section class="section_bg">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="welcome_section">
                        <h1>Financial History</h1>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="welcome_section text-right">
                        <a href="Financial_account.html">Account</a>
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
                        <div class="assets_table td_width">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Currency</th>
                                            <th>Subscription date</th>
                                            <th>Lump sum</th>
                                            <th>Cumulative income</th>
                                            <th>Level reward</th>
                                            <th>State</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="7" style={{textAlign: "center"}}>
                                                <div class="no_data_found">
                                                    <img src="assets/img/dashboard/file_icon.svg" />
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
    </section>
<Footer />
    </div>
  )
}

export default Financial_History