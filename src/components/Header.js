import React from 'react'
import logo from '../assets/images/Shape/png/Shape@2x.png'

import pic07 from '../assets/images/trianglebg.png'
var tribg = {


  backgroundImage: `url(${pic07})`,
  backgroundRepeat  : 'no-repeat',
  backgroundPosition: 'center'

};



class Header extends React.Component {
    render() {
        return (





            <section id="header">
            <div className="skewy">
               <div  id="nav"  className="grid-wrapper nav-wrapper col-12">
                 <div className="navitems">
                  <div className="logo-container">
                    <img src={logo} alt="Upsales Logo" className="logo" />
                  </div>
                   <ul className="inline">
                     <li><a href="#">Platform</a></li>
                     <li><a href="#">Resources</a></li>
                     <li><a href="#">Pricing</a></li>
                   </ul>
                 </div>
                 <div className="button-nav">
                   <div className="button-container login navitems">Log in</div>
                   <div className="button-container"><button className="rectangle-14-copy-6 regular">Free Trial</button></div>
                 </div>
               </div>
               <div className="grid-wrapper header-contents">
                  <div className="inner col-12">

                      <h1 className="the-revenue-engine-f">Your entire customer journey. Automated</h1>
                      <p className="headercopy">You need to move fast and sell more. You need a revenue engine with CRM and Marketing Automation that can handle it. Unite sales and marketing with one platform for the whole customer journey.</p>
                      <ul className="actions">
                          <li><a href="#one" className="button scrolly">Try it out</a></li>
                          <li><a href="#two" className="button scrolly">Watch the video</a></li>
                      </ul>
                  </div>
                </div>
            </div>
            <div className="tribg" style={tribg}></div>
          </section>

        )
    }
}

export default Header
