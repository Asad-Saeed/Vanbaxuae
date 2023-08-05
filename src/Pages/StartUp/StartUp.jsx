import React from 'react'
import DashboardNavbar from '../../Components/Navbar/DashboardNavbar'
import Footer from '../../Components/Footer/Footer'

function StartUp() {
  return (
    <div>
<DashboardNavbar />
<section class="mt2">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="assets_page">
                        <div class="asset_tab">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#home">Coming Soon</a></li>
                                <li><a data-toggle="tab" href="#menu1">Ongoing</a></li>
                                <li><a data-toggle="tab" href="#menu2">Orders</a></li>
                            </ul>
                            <div class="tab-content">
                                <div id="home" class="tab-pane active">
                                    <div class="no_data_found">
                                        <img src="assets1/img/dashboard/file_icon.svg" />
                                        <p>No content is available now.</p>
                                    </div>
                                </div>
                                <div id="menu1" class="tab-pane fade">
                                    <div class="no_data_found">
                                        <img src="assets1/img/dashboard/file_icon.svg" />
                                        <p>No content is available now.</p>
                                    </div>
                                </div>
                                <div id="menu2" class="tab-pane fade">
                                    <div class="assets_table td_width">
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Project</th>
                                                        <th>Start Time</th>
                                                        <th>End Time</th>
                                                        <th>Offer Price</th>
                                                        <th># Raised</th>
                                                        <th>Granted</th>
                                                        <th>Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colspan="7">
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

export default StartUp