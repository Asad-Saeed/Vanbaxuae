import React from 'react'
import DashboardNavbar from '../../Components/Navbar/DashboardNavbar'
import Footer from '../../Components/Footer/Footer'

function BankAccount() {
  return (
    <div>
<DashboardNavbar />
<section class="section_bg">
        <div class="container">
            <div class="welcome_section">
                <h1>Bank Account</h1>
            </div>
        </div>
    </section>
    <section class="mt2">
        <div class="container">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-5">
                    <div class="assets_page">
                        <div class="login-inner">
                           <form method="post" class="login-form">
                            <div class="Reset_login">
                              <h1>Bank Account</h1>
                            </div>
                              <div class="form-group">
                                 <label class="form-label">Account name</label> 
                                 <div class="d-flex">
                                    <div class="flex-fill">
                                        <input name="Name" type="text" placeholder="Sate Bank of India" class="form-control phone text_inputcss" disabled />
                                    </div>
                                 </div>
                              </div>
                              <div class="form-group">
                                <label class="form-label">IFSC Code</label>
                                 <input type="password" placeholder="SBIN0000328" class="form-control text_inputcss" />
                             </div>
                              <div class="form-group">
                               
                                <label class="form-label">Bank account number</label>
                                 <input name="cpwd" type="password" placeholder="389****9820" class="form-control text_inputcss account_input" disabled /><br />
                                  <input name="cpwd" type="password" placeholder="389****9820" class="form-control text_inputcss" />
                              </div>
                              <div class="form-group"><button type="submit" class="btn-submits">Submit</button></div>
                           </form>
                           
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

export default BankAccount