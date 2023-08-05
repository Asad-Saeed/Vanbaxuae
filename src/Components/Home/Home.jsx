import React from "react";
import HomeNavbar from "../Navbar/HomeNavbar";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      {/* <body > */}

      <HomeNavbar />
      <div class="landing-hero">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2>A trusted and secure cryptocurrency exchange.</h2>
              <p>
                Crypo is the most advanced UI kit for making the Blockchain
                platform. This kit comes with 4 different exchange page, market,
                wallet and many more
              </p>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Your Email"
                  aria-label="Enter Your Email"
                  aria-describedby="button-addon2"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div class="offset-md-1 col-md-5">
              <div class=" background_css">
                <h5 class="text-center">Technical Analysis for BTCUSDT</h5>

                <ul class="nav nav-tabs contents" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                    >
                      1 minute
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                    >
                      5 minute
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                    >
                      15 mintue
                    </a>
                  </li>

                  <li class="">
                    <select name="cars" id="cars" class="select_s">
                      <option value="volvo">More</option>
                      <option value="saab">30 mintue</option>
                      <option value="opel">1 hour</option>
                      <option value="audi">2 hours</option>
                      <option value="audi">4 hours</option>
                      <option value="audi">1 Day</option>
                      <option value="audi">1 Week</option>
                      <option value="audi">1 Month</option>
                    </select>
                  </li>
                </ul>
                {/* <!-- Tab panes --> */}
                <div class="tab-content">
                  <div class="tab-pane active" id="tabs-1" role="tabpanel">
                    <div class="gauge-wrapper">
                      <div id="arc-wrapper" class="gauge">
                        <h4>''''''''''</h4>
                        <div class="pointer"></div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tabs-2" role="tabpanel">
                    <p>Second Panel</p>
                  </div>
                  <div class="tab-pane" id="tabs-3" role="tabpanel">
                    <p>Third Panel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container no-fluid">
        <div class="row sm-gutters">
          {/* <!-- TradingView Widget BEGIN --> */}
          <div class="tradingview-widget-container widthss">
            <div class="tab-content">
              <div class="row">
                <div class="col-md-12 " style={{ overflow: "scroll" }}>
                  <table class="table crypto-table table-resposive">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">MKT CAP</th>
                        <th scope="col">FD MKT CAP</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">AVAIL COINS</th>
                        <th scope="col">TOTAL COINS</th>
                        <th scope="col">TRADED VOL</th>
                        <th scope="col">CHG %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <img src="https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/bitcoincash_bch_bitcoin-128.png" />
                          <span class="text-warning"> Bitcoin</span>
                        </td>
                        <td>BTC</td>
                        <td>$134.655,333</td>
                        <td class="text-warning">$768.655</td>
                        <td class="text-warning">$122.998</td>
                        <td class="text-warning">$5.443.233,600</td>
                        <td class="text-success">
                          %5.54 <i class="fa fa-arrow-up"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <img src="https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/bitcoincash_bch_bitcoin-128.png" />{" "}
                          <span class="text-warning"> Bitcoin</span>
                        </td>
                        <td>BTC</td>
                        <td>$134.655,333</td>
                        <td class="text-warning">$768.655</td>
                        <td class="text-warning">$122.998</td>
                        <td class="text-warning">$5.443.233,600</td>
                        <td class="text-danger">
                          %8.14 <i class="fa fa-arrow-down"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <img src="https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/bitcoincash_bch_bitcoin-128.png" />{" "}
                          <span class="text-warning"> Bitcoin</span>
                        </td>
                        <td>BTC</td>
                        <td>$134.655,333</td>
                        <td class="text-warning">$768.655</td>
                        <td class="text-warning">$122.998</td>
                        <td class="text-warning">$5.443.233,600</td>
                        <td class="text-success">
                          %6.85 <i class="fa fa-arrow-up"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- TradingView Widget END --> */}
        </div>
      </div>

      <div class="landing-feature landing-coin-price bt-none">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>
                Check your favorite coin price <br /> within a glance
              </h2>
            </div>
            <div class="col-md-3 mb30">
              <div class="cards">
                <div class="card1">
                  <div class="img_src">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/btc.png"
                      class="img_w"
                    />
                    <img src="assets/img/icon/1.png" class="img_w position" />
                  </div>
                  <div class="coin-data">
                    <p class="para">Bitcoin (BTC)</p>
                    <p>Bitcoin / Ethereum</p>
                    {/* <!-- <p>$ 27,679.8</p> --> */}
                  </div>
                </div>
                <h3 class="text-left">24785.85</h3>

                <img src="assets/img/trading.png" />
                <div class="tab_date">
                  <div>
                    <p class="para">Jun</p>
                  </div>
                  <div>
                    <p class="para">2023</p>
                  </div>
                  <div>
                    <p class="para">May</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb30">
              <div class="cards">
                <div class="card1">
                  <div class="img_src">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/btc.png"
                      class="img_w"
                    />
                    <img src="assets/img/icon/9.png" class="img_w position" />
                  </div>
                  <div class="coin-data">
                    <p class="para">Bitcoin (BTC)</p>
                    <p>BNB / Bitcoin</p>
                    {/* <!-- <p>$ 27,679.8</p> --> */}
                  </div>
                </div>
                <h3 class="text-left">75842.85</h3>

                <img src="assets/img/trading1.png" />
                <div class="tab_date">
                  <div>
                    <p class="para">Jun</p>
                  </div>
                  <div>
                    <p class="para">2023</p>
                  </div>
                  <div>
                    <p class="para">May</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb30">
              <div class="cards">
                <div class="card1">
                  <div class="img_src">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/btc.png"
                      class="img_w"
                    />
                    <img src="assets/img/icon/7.png" class="img_w position" />
                  </div>
                  <div class="coin-data">
                    <p class="para">Bitcoin (BTC)</p>
                    <p>BNB / Bitcoin</p>
                    {/* <!-- <p>$ 27,679.8</p> --> */}
                  </div>
                </div>
                <h3 class="text-left">235847.85</h3>

                <img src="assets/img/trading2.png" />
                <div class="tab_date">
                  <div>
                    <p class="para">Jun</p>
                  </div>
                  <div>
                    <p class="para">2023</p>
                  </div>
                  <div>
                    <p class="para">May</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb30">
              <div class="cards">
                <div class="card1">
                  <div class="img_src">
                    <img src="assets/img/icon/6.png" class="img_w" />
                    <img src="assets/img/icon/9.png" class="img_w position" />
                  </div>
                  <div class="coin-data">
                    <p class="para">Tron (TRX)</p>
                    <p>Tron / BNB</p>
                    {/* <!-- <p>$ 27,679.8</p> --> */}
                  </div>
                </div>
                <h3 class="text-left">69854.85</h3>

                <img src="assets/img/trading3.png" />
                <div class="tab_date">
                  <div>
                    <p class="para">Jun</p>
                  </div>
                  <div>
                    <p class="para">2023</p>
                  </div>
                  <div>
                    <p class="para">May</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb30">
              <div class="cards">
                <div class="card1">
                  <div class="img_src">
                    <img src="assets/img/icon/1.png" class="img_w" />
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/btc.png"
                      class="img_w position"
                    />
                  </div>
                  <div class="coin-data">
                    <p class="para">Ethereum (ETH)</p>
                    <p>ETH / BNB</p>
                    {/* <!-- <p>$ 27,679.8</p> --> */}
                  </div>
                </div>
                <h3 class="text-left">85767.85</h3>

                <img src="assets/img/trading4.png" />
                <div class="tab_date">
                  <div>
                    <p class="para">Jun</p>
                  </div>
                  <div>
                    <p class="para">2023</p>
                  </div>
                  <div>
                    <p class="para">May</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb30">
              <div class="cards">
                <div class="card1">
                  <div class="img_src">
                    <img src="assets/img/icon/3.png" class="img_w" />
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/btc.png"
                      class="img_w position"
                    />
                  </div>
                  <div class="coin-data">
                    <p class="para">Bitcoin (BTC)</p>
                    <p>ETH / BNB</p>
                    {/* <!-- <p>$ 27,679.8</p> --> */}
                  </div>
                </div>
                <h3 class="text-left">35365.85</h3>

                <img src="assets/img/trading5.png" />
                <div class="tab_date">
                  <div>
                    <p class="para">Jun</p>
                  </div>
                  <div>
                    <p class="para">2023</p>
                  </div>
                  <div>
                    <p class="para">May</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb30">
              <div class="cards">
                <div class="card1">
                  <div class="img_src">
                    <img src="assets/img/icon/4.png" class="img_w" />
                    <img src="assets/img/icon/9.png" class="img_w position" />
                  </div>
                  <div class="coin-data">
                    <p class="para">Binance (BNB)</p>
                    <p>ETH / BNB</p>
                    {/* <!-- <p>$ 27,679.8</p> --> */}
                  </div>
                </div>
                <h3 class="text-left">75899.30</h3>

                <img src="assets/img/trading6.png" />
                <div class="tab_date">
                  <div>
                    <p class="para">Jun</p>
                  </div>
                  <div>
                    <p class="para">2023</p>
                  </div>
                  <div>
                    <p class="para">May</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb30">
              <div class="cards">
                <div class="card1">
                  <div class="img_src">
                    <img src="assets/img/icon/5.png" class="img_w" />
                    <img src="assets/img/icon/10.png" class="img_w position" />
                  </div>
                  <div class="coin-data">
                    <p class="para">Binance (BNB)</p>
                    <p>ETH / BNB</p>
                    {/* <!-- <p>$ 27,679.8</p> --> */}
                  </div>
                </div>
                <h3 class="text-left">69321.60</h3>

                <img src="assets/img/trading7.png" />
                <div class="tab_date">
                  <div>
                    <p class="para">Jun</p>
                  </div>
                  <div>
                    <p class="para">2023</p>
                  </div>
                  <div>
                    <p class="para">May</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="landing-feature">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>
                Check fiat currency cross rates <br /> within a second
              </h2>
            </div>
            <div class="col-md-12">
              {/* <!-- TradingView Widget BEGIN --> */}
              <div class="tradingview-widget-container">
                <div class="tv-embed-widget-wrapper__body js-embed-widget-body tv-embed-widget-wrapper__body--border-on-transparent">
                  <div id="widget-forex-cross-rates-container">
                    <div class="container-ae3EQWDL tv-embed-widget-wrapper">
                      <table class="table-ae3EQWDL tv-embed-widget-wrapper">
                        <tbody>
                          <tr class="tableRow-ae3EQWDL">
                            <th class="tableHeaderCell-ae3EQWDL tableHeaderCell-g15l2Mkg"></th>
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/EU.svg"
                                  alt=""
                                />
                                EUR
                              </span>
                            </th>
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/US.svg"
                                  alt=""
                                />
                                USD
                              </span>
                            </th>
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/JP.svg"
                                  alt=""
                                />
                                JPY
                              </span>
                            </th>
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/GB.svg"
                                  alt=""
                                />
                                GBP
                              </span>
                            </th>
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/CH.svg"
                                  alt=""
                                />
                                CHF
                              </span>
                            </th>
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/AU.svg"
                                  alt=""
                                />
                                AUD
                              </span>
                            </th>
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/CA.svg"
                                  alt=""
                                />
                                CAD
                              </span>
                            </th>
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/NZ.svg"
                                  alt=""
                                />
                                NZD
                              </span>
                            </th>
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/CN.svg"
                                  alt=""
                                />
                                CNY
                              </span>
                            </th>
                          </tr>
                          <tr class="tableRow-ae3EQWDL">
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/EU.svg"
                                  alt=""
                                />
                                EUR
                              </span>
                            </th>
                            <td class="tableDataCellEmpty-ae3EQWDL tableDataCellEmpty-g15l2Mkg"></td>
                            <td>
                              <span>1.09710</span>
                            </td>
                            <td>
                              <span>148.540</span>
                            </td>
                            <td>
                              <span>0.86900</span>
                            </td>
                            <td>
                              <span>0.976250</span>
                            </td>
                            <td>
                              <span>1.62157</span>
                            </td>
                            <td>
                              <span>1.46833</span>
                            </td>
                            <td>
                              <span>1.730600</span>
                            </td>
                            <td>
                              <span>7.6008</span>
                            </td>
                          </tr>
                          <tr class="tableRow-ae3EQWDL">
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/US.svg"
                                  alt=""
                                />
                                USD
                              </span>
                            </th>
                            <td>
                              <span>0.9113</span>
                            </td>
                            <td class="tableDataCellEmpty-ae3EQWDL tableDataCellEmpty-g15l2Mkg"></td>
                            <td>
                              <span>135.378</span>
                            </td>
                            <td>
                              <span>0.79220</span>
                            </td>
                            <td>
                              <span>0.88969</span>
                            </td>
                            <td>
                              <span>1.4779</span>
                            </td>
                            <td>
                              <span>1.33823</span>
                            </td>
                            <td>
                              <span>1.5774</span>
                            </td>
                            <td>
                              <span>6.9279</span>
                            </td>
                          </tr>
                          <tr class="tableRow-ae3EQWDL">
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/JP.svg"
                                  alt=""
                                />
                                JPY
                              </span>
                            </th>
                            <td>
                              <span>0.0067318</span>
                            </td>
                            <td>
                              <span>0.007385</span>
                            </td>
                            <td class="tableDataCellEmpty-ae3EQWDL tableDataCellEmpty-g15l2Mkg"></td>
                            <td>
                              <span>0.005847</span>
                            </td>
                            <td>
                              <span>0.006572</span>
                            </td>
                            <td>
                              <span>0.010914</span>
                            </td>
                            <td>
                              <span>0.009880</span>
                            </td>
                            <td>
                              <span>0.011650</span>
                            </td>
                            <td>
                              <span>0.05113</span>
                            </td>
                          </tr>
                          <tr class="tableRow-ae3EQWDL">
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/GB.svg"
                                  alt=""
                                />
                                GBP
                              </span>
                            </th>
                            <td>
                              <span>1.1505</span>
                            </td>
                            <td>
                              <span>1.2623</span>
                            </td>
                            <td>
                              <span>170.907</span>
                            </td>
                            <td class="tableDataCellEmpty-ae3EQWDL tableDataCellEmpty-g15l2Mkg"></td>
                            <td>
                              <span>1.123230</span>
                            </td>
                            <td>
                              <span>1.865800</span>
                            </td>
                            <td>
                              <span>1.68941</span>
                            </td>
                            <td>
                              <span>1.990940</span>
                            </td>
                            <td>
                              <span>8.7449</span>
                            </td>
                          </tr>
                          <tr class="tableRow-ae3EQWDL">
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/CH.svg"
                                  alt=""
                                />
                                CHF
                              </span>
                            </th>
                            <td>
                              <span>1.0237</span>
                            </td>
                            <td>
                              <span>1.1237</span>
                            </td>
                            <td>
                              <span>152.136</span>
                            </td>
                            <td>
                              <span>0.8897</span>
                            </td>
                            <td class="tableDataCellEmpty-ae3EQWDL tableDataCellEmpty-g15l2Mkg"></td>
                            <td>
                              <span>1.6597</span>
                            </td>
                            <td>
                              <span>1.5030</span>
                            </td>
                            <td>
                              <span>1.7723</span>
                            </td>
                            <td>
                              <span>7.7841</span>
                            </td>
                          </tr>
                          <tr class="tableRow-ae3EQWDL">
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/AU.svg"
                                  alt=""
                                />
                                AUD
                              </span>
                            </th>
                            <td>
                              <span>0.6165</span>
                            </td>
                            <td>
                              <span>0.67655</span>
                            </td>
                            <td>
                              <span>91.591</span>
                            </td>
                            <td>
                              <span>0.5357</span>
                            </td>
                            <td>
                              <span>0.601950</span>
                            </td>
                            <td class="tableDataCellEmpty-ae3EQWDL tableDataCellEmpty-g15l2Mkg"></td>
                            <td>
                              <span>0.905380</span>
                            </td>
                            <td>
                              <span>1.067120</span>
                            </td>
                            <td>
                              <span>4.6861</span>
                            </td>
                          </tr>
                          <tr class="tableRow-ae3EQWDL">
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/CA.svg"
                                  alt=""
                                />
                                CAD
                              </span>
                            </th>
                            <td>
                              <span>0.6808</span>
                            </td>
                            <td>
                              <span>0.7472</span>
                            </td>
                            <td>
                              <span>101.148</span>
                            </td>
                            <td>
                              <span>0.5915</span>
                            </td>
                            <td>
                              <span>0.66476</span>
                            </td>
                            <td>
                              <span>1.1042</span>
                            </td>
                            <td class="tableDataCellEmpty-ae3EQWDL tableDataCellEmpty-g15l2Mkg"></td>
                            <td>
                              <span>1.1778</span>
                            </td>
                            <td>
                              <span>5.1766</span>
                            </td>
                          </tr>
                          <tr class="tableRow-ae3EQWDL">
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/NZ.svg"
                                  alt=""
                                />
                                NZD
                              </span>
                            </th>
                            <td>
                              <span>0.5777</span>
                            </td>
                            <td>
                              <span>0.63392</span>
                            </td>
                            <td>
                              <span>85.825</span>
                            </td>
                            <td>
                              <span>0.5021</span>
                            </td>
                            <td>
                              <span>0.56407</span>
                            </td>
                            <td>
                              <span>0.9369</span>
                            </td>
                            <td class="">
                              <span>0.84837</span>
                            </td>
                            <td class="tableDataCellEmpty-ae3EQWDL tableDataCellEmpty-g15l2Mkg"></td>
                            <td>
                              <span>4.388</span>
                            </td>
                          </tr>
                          <tr class="tableRow-ae3EQWDL">
                            <th>
                              <span>
                                <img
                                  class="tv-circle-logo tv-circle-logo--xxxsmall"
                                  src="https://s3-symbol-logo.tradingview.com/country/CN.svg"
                                  alt=""
                                />
                                CNY
                              </span>
                            </th>
                            <td class="">
                              <span>0.13151</span>
                            </td>
                            <td>
                              <span>0.1443</span>
                            </td>
                            <td>
                              <span>19.522</span>
                            </td>
                            <td class="">
                              <span>0.11430</span>
                            </td>
                            <td class="">
                              <span>0.1281</span>
                            </td>
                            <td class="">
                              <span class="">0.209</span>
                            </td>
                            <td class="">
                              <span>0.1928</span>
                            </td>
                            <td class="">
                              <span>0.224</span>
                            </td>
                            <td class=""></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- TradingView Widget END --> */}
            </div>
          </div>
        </div>
      </div>

      <div class="landing-feature">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>
                Check latest news and key events of popular <br /> companies and
                cryptocurrencies
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb30">
              <div class="cards">
                <div class="card1">
                  <div class="img_src1">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/btc.png"
                      class="img_w"
                    />
                  </div>
                  <div class="coin-data">
                    <p class="para">BRK.A &nbsp;May 08 · 2023</p>

                    {/* <!-- <p>$ 27,679.8</p> --> */}
                  </div>
                </div>
                <br />
                <div class="d-flex1">
                  <div class="">
                    <h6 class="text-left">
                      BRK.A: Berkshire Hathaway Sits on $130bn Cash Pile as
                      Buffett Sees Little to Bet On
                    </h6>
                  </div>
                  <div class="">
                    <img src="assets/img/1.jpg" class="with_img" />
                  </div>
                </div>

                <div class="">
                  <p class="para text-left">
                    The conglomerate disclosed on Saturday that it dumped
                    $13.3bn worth of shares during the first quarter.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-3 mb30">
              <div class="cards">
                <div class="card1">
                  <div class="img_src1">
                    <img src="assets/img/icon/9.png" class="img_w" />
                  </div>
                  <div class="coin-data">
                    <p class="para">EURUSD &nbsp;May 08 · 2023</p>

                    {/* <!-- <p>$ 27,679.8</p> --> */}
                  </div>
                </div>
                <br />
                <div class="d-flex1">
                  <div class="">
                    <h6 class="text-left">
                      EUR/USD: Dollar Gains Fade After US Economy Adds 253,000
                      Jobs
                    </h6>
                  </div>
                  <div class="">
                    <img src="assets/img/2.jpg" class="with_img" />
                  </div>
                </div>

                <div class="">
                  <p class="para text-left">
                    Americans landed more jobs than expected in April, but the
                    surge in the US dollar was short lived.
                  </p>
                </div>
                <br />
                <br />
              </div>
            </div>

            <div class="col-md-3 mb30">
              <div class="cards">
                <div class="card1">
                  <div class="img_src1">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/btc.png"
                      class="img_w"
                    />
                  </div>
                  <div class="coin-data">
                    <p class="para">TOTALDEFI &nbsp;May 05 · 2023</p>

                    {/* <!-- <p>$ 27,679.8</p> --> */}
                  </div>
                </div>
                <br />
                <div class="d-flex1">
                  <div class="">
                    <h6 class="text-left">
                      Former OpenSea Head of Product Convicted of Money
                      Laundering and Wire Fraud
                    </h6>
                  </div>
                  <div class="">
                    <img src="assets/img/3.jpg" class="with_img" />
                  </div>
                </div>

                <div class="">
                  <p class="para text-left">
                    Chastain’s punishment is still unknown, but the case could
                    establish a form of precedent for future NFT insider trading
                    cases.
                  </p>
                </div>
                <br />
              </div>
            </div>

            <div class="col-md-3 mb30">
              <div class="cards">
                <div class="card1">
                  <div class="img_src1">
                    <img src="assets/img/icon/6.png" class="img_w" />
                  </div>
                  <div class="coin-data">
                    <p class="para">CELUSDT &nbsp;May 03 · 2023</p>

                    {/* <!-- <p>$ 27,679.8</p> --> */}
                  </div>
                </div>
                <br />
                <div class="d-flex1">
                  <div class="">
                    <h6 class="text-left">
                      CEL: Ex-CEO Alex Mashinsky Hits Back at Claims of
                      Responsibility for Celsius Collapse
                    </h6>
                  </div>
                  <div class="">
                    <img src="assets/img/1.jpg" class="with_img" />
                  </div>
                </div>

                <div class="">
                  <p class="para text-left">
                    Mashinksky has been accused of failing to register Celsius
                    as a securities dealer and exaggerated the safety of user
                    deposits.
                  </p>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* </body> */}
    </div>
  );
}

export default Home;
