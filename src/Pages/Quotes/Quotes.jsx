import React from 'react'
import DashboardNavbar from '../../Components/Navbar/DashboardNavbar'
import Footer from '../../Components/Footer/Footer'

function Quotes() {
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
                                <li class="active"><a data-toggle="tab" href="#home">Spot Trading</a></li>
                                <li><a data-toggle="tab" href="#menu1">Futures</a></li>
                                
                            </ul>
                            <div class="tab-content">
                                <div id="home" class="tab-pane active">
                                    <div class="assets_table td_pd">
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Spot Trading</th>
                                                        <th>24H Low</th>
                                                        <th>24H High</th>
                                                        <th>Price</th>
                                                        <th>Change</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><img src="assets1/img/icon/1.png" class="btns" /> ETH/USDT</td>
                                                        <td>27355.3</td>
                                                        <td>27615</td>
                                                        <td>$27494.5</td>
                                                        <td class="Up_arrow"> -0.58%</td>
                                                        <td class="btms">
                                                            <h6><a href="">Buy</a></h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="assets1/img/icon/4.png" class="btns" /> LTX/USDT</td>
                                                        <td>99788.3</td>
                                                        <td>74854</td>
                                                        <td>$0235.5</td>
                                                        <td class="down_arrow"> -0.78%</td>
                                                        <td class="btms">
                                                            <h6><a href="">Buy</a></h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="assets1/img/icon/6.png" class="btns" /> TRX/USDT</td>
                                                        <td>35845.3</td>
                                                        <td>68588</td>
                                                        <td>$5846.5</td>
                                                        <td class="down_arrow"> -0.03%</td>
                                                        <td class="btms">
                                                            <h6><a href="">Buy</a></h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="assets1/img/icon/7.png" class="btns" /> DOT/USDT</td>
                                                        <td>27355.3</td>
                                                        <td>27615</td>
                                                        <td>$27494.5</td>
                                                        <td class="Up_arrow"> +0.88%</td>
                                                        <td class="btms">
                                                            <h6><a href="">Buy</a></h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="assets1/img/icon/8.png" class="btns" /> ADA/USDT</td>
                                                        <td>68958.3</td>
                                                        <td>85874</td>
                                                        <td>$9865.5</td>
                                                        <td class="down_arrow"> -0.58%</td>
                                                        <td class="btms">
                                                            <h6><a href="">Buy</a></h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="assets1/img/icon/9.png" class="btns" /> BNB/USDT</td>
                                                        <td>25468.3</td>
                                                        <td>78582</td>
                                                        <td>$98565.5</td>
                                                        <td class="Up_arrow"> +0.65%</td>
                                                        <td class="btms">
                                                            <h6><a href="">Buy</a></h6>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div id="menu1" class="tab-pane fade">
                                    <div class="assets_table">
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Futures</th>
                                                        <th>24H Low</th>
                                                        <th>24H High</th>
                                                        <th>Price</th>
                                                        <th>Change</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><img src="assets1/img/icon/1.png" class="btns" /> ETH/USDT</td>
                                                        <td>27355.3</td>
                                                        <td>27615</td>
                                                        <td>$27494.5</td>
                                                        <td class="Up_arrow"> -0.58%</td>
                                                        <td class="btms">
                                                            <h6><a href="">Buy</a></h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="assets1/img/icon/4.png" class="btns" /> LTX/USDT</td>
                                                        <td>99788.3</td>
                                                        <td>74854</td>
                                                        <td>$0235.5</td>
                                                        <td class="down_arrow"> -0.78%</td>
                                                        <td class="btms">
                                                            <h6><a href="">Buy</a></h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="assets1/img/icon/6.png" class="btns" /> TRX/USDT</td>
                                                        <td>35845.3</td>
                                                        <td>68588</td>
                                                        <td>$5846.5</td>
                                                        <td class="down_arrow"> -0.03%</td>
                                                        <td class="btms">
                                                            <h6><a href="">Buy</a></h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="assets1/img/icon/7.png" class="btns" /> DOT/USDT</td>
                                                        <td>27355.3</td>
                                                        <td>27615</td>
                                                        <td>$27494.5</td>
                                                        <td class="Up_arrow"> +0.88%</td>
                                                        <td class="btms">
                                                            <h6><a href="">Buy</a></h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="assets1/img/icon/8.png" class="btns" /> ADA/USDT</td>
                                                        <td>68958.3</td>
                                                        <td>85874</td>
                                                        <td>$9865.5</td>
                                                        <td class="down_arrow"> -0.58%</td>
                                                        <td class="btms">
                                                            <h6><a href="">Buy</a></h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="assets1/img/icon/9.png" class="btns" /> BNB/USDT</td>
                                                        <td>25468.3</td>
                                                        <td>78582</td>
                                                        <td>$98565.5</td>
                                                        <td class="Up_arrow"> +0.65%</td>
                                                        <td class="btms">
                                                            <h6><a href="">Buy</a></h6>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div id="menu2" class="tab-pane fade">
                                    <div class="assets_table">
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Currency</th>
                                                        <th>Balance</th>
                                                        <th>Frozen</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>2023-05-09 13:19</td>
                                                        <td>USDT</td>
                                                        <td class="balAct"><span class="green">+ 0.10</span> 0.34</td>
                                                        <td>0.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2023-05-09 13:19</td>
                                                        <td>USDT</td>
                                                        <td class="balAct"><span class="red">+ 0.10</span> 0.34</td>
                                                        <td>0.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2023-05-09 13:19</td>
                                                        <td>USDT</td>
                                                        <td class="balAct"><span class="red">+ 0.10</span> 0.34</td>
                                                        <td>0.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2023-05-09 13:19</td>
                                                        <td>USDT</td>
                                                        <td class="balAct"><span class="green">+ 0.10</span> 0.34</td>
                                                        <td>0.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2023-05-09 13:19</td>
                                                        <td>USDT</td>
                                                        <td class="balAct"><span class="green">+ 0.10</span> 0.34</td>
                                                        <td>0.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2023-05-09 13:19</td>
                                                        <td>USDT</td>
                                                        <td class="balAct"><span class="green">+ 0.10</span> 0.34</td>
                                                        <td>0.00</td>
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

export default Quotes