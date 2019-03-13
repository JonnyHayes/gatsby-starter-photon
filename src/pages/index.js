import React from "react";
import Helmet from "react-helmet";
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/font-awesome.min.css'
import Layout from '../components/layout';

import pic01 from '../assets/images/ui-perspective/png/ui-perspective.png'
import pic02 from '../assets/images/Engine_1/png/Engine@2x.png'
import pic03 from '../assets/images/Microsoft_exchange_logo/png/Microsoft_exchange_logo.png'
import pic04 from '../assets/images/1200px-Google-calendar/png/1200px-Google-calendar.png'
import pic05 from '../assets/images/Islands_Campaign_Engine/png/Islands_Campaign_Engine@2x.png'
import pic06 from '../assets/images/Browserpic/png/Browserpic@2x.png'
import pic07 from '../assets/images/trianglebg.png'
import pic08 from '../assets/images/graylinebg.png'
var sectionStyle1 = {


  backgroundImage: `url(${pic01})`,
  backgroundRepeat  : 'no-repeat',
  backgroundPosition: 'center left',


};

var tribg = {


  backgroundImage: `url(${pic07})`,
  backgroundRepeat  : 'no-repeat',
  backgroundPosition: 'center top',
  height: '50px',
  position: 'relative'
};

var graylinebg = {


  backgroundImage: `url(${pic08})`,
  backgroundRepeat  : 'repeat-y',
  backgroundPosition: 'center top',
  paddingTop: '5em'
};

class Homepage extends React.Component {
    render() {
        const siteTitle = "Upsales";
        // const siteLang = "en";
        return (
            <Layout>
                <Helmet> <html lang="en" />
                <title>{siteTitle}</title>
                </Helmet>

                <section id="one" className="main style1 bg1" style={ sectionStyle1 }>
                    <div className="tribg" style={tribg}></div>
                    <div className="grid-wrapper" style={graylinebg}>
                        <div className="col-12">
                            <header className="major">
                                <h2 className="the-column-headline">Always one step ahead</h2>
                            </header>

                        </div>
                        <div className="col-6 separator-line">

                        </div>
                        <div className="col-6">
                          <ul className="sendbullet">
                            {/* TODO make these a component */}
                            <li className="first"><i className="fa fa-paper-plane oval"></i>
                            <span className="color-title">Attract Leads</span>
                            <h3>Design. Deliver. Attract.</h3>
                              <p className="largertext">Upsales empowers you with al the outbound resources you need to attracct new leads and at the same time maintaining a quality customer dialog.</p>
                            </li>

                            <li className="norm"><i className="fa fa-paper-plane oval"></i>
                            <span className="bl-head">Find out what's attracting your leads</span>

                              <p className="bl-text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                              </p>
                            </li>
                            <li className="norm"><i className="fa fa-paper-plane oval"></i>
                            <span className="bl-head">Advanced Campaign Engine</span>

                              <p className="bl-text">Reach you audience with advanced outbound and inbound tools.
                              </p>
                              <ul className="bulletedlist">
                                <li>Email campaigns</li>
                                <li>Website tracking</li>
                                <li>Forms & landing pages</li>
                                <li>Event Marketing</li>
                                <li>Targeted Advertising</li>
                                <li>UTM Management</li>
                              </ul>
                            </li>
                            <li className="norm"><i className="fa fa-paper-plane oval"></i>
                            <span className="bl-head">Synced brand profile for all your resource</span>

                              <p className="bl-text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                              </p>

                            </li>
                          </ul>

                        </div>
                    </div>
                </section>

                <section id="two" className="main style2 pad200">
                  <div className="grid-wrapper">


                      <div className="col-6 separator-line">
                        <ul className="sendbullet">
                          {/* TODO make these a component */}
                          <li className="first"><i className="fa fa-paper-plane oval"></i>
                          <span className="color-title">Qualify leads</span>
                          <h3>Automatically qualify and categorize your leads</h3>
                            <p className="largertext">Find out what type of leads usually end up becoming customers. Use these insights to build advanced target groups and customized journeys.</p>
                          </li>

                          <li className="norm"><i className="fa fa-paper-plane oval"></i>
                          <span className="bl-head">Build dynamic target groups</span>

                            <p className="bl-text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                          </li>
                          <li className="norm"><i className="fa fa-paper-plane oval"></i>
                          <span className="bl-head">Analyze your website visitors</span>

                            <p className="bl-text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>

                          </li>
                          <li className="norm"><i className="fa fa-paper-plane oval"></i>
                          <span className="bl-head">Synced brand profile for all your resource</span>

                            <p className="bl-text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>

                          </li>
                        </ul>

                      </div>
                      <div className="col-6 ">
                        <img src={pic02} width="358.39px" />
                      </div>
                  </div>
                </section>

                <section id="three" className="main style1 pad200">
                  <div className="grid-wrapper">

                      <div className="col-6 separator-line">
                        <img src={pic05} width="357.8px" />
                      </div>
                      <div className="col-6">
                        <ul className="sendbullet">
                          {/* TODO make these a component */}
                          <li className="first"><i className="fa fa-paper-plane oval"></i>
                          <span className="color-title">Assigning leads</span>
                          <h3>Seamless hand over from marketing to sales</h3>
                            <p className="largertext">You need to move fast and sell more. You need a revenue engine with CRM and Marketing Automation that can handle it. Unite sales and marketing with one platform for the whole customer journey.</p>
                          </li>

                          <li className="norm"><i className="fa fa-paper-plane oval"></i>
                          <span className="bl-head">Automatically distribute leads to your teams</span>

                            <p className="bl-text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                          </li>
                          <li className="norm"><i className="fa fa-paper-plane oval"></i>
                          <span className="bl-head">Advanced task management and calendar sync</span>

                            <p className="bl-text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo.
                            </p>
                            <ul className="nonbulletedlist">
                              <li><img src={pic03} /></li>
                              <li className="pad10"><img src={pic04} /></li>
                            </ul>
                          </li>

                        </ul>

                      </div>
                  </div>
                </section>

                <section id="four" className="main pad200">
                  <div className="grid-wrapper">

                      <div className="col-6 separator-line">
                          <img src={pic06} className="thevideo" />
                      </div>
                      <div className="col-6">
                        <ul className="sendbullet">
                          {/* TODO make these a component */}
                          <li className="first"><i className="fa fa-paper-plane oval"></i>
                          <span className="color-title">Sales funnel</span>
                          <h3>Open the sales funnel</h3>
                            <p className="largertext">You need to move fast and sell more. You need a revenue engine with CRM and Marketing Automation that can handle it. Unite sales and marketing with one platform for the whole customer journey.</p>
                          </li>

                          <li className="norm"><i className="fa fa-exclamation-triangle oval"></i>
                          <span className="bl-head">Pipeline control</span>

                            <p className="bl-text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                          </li>
                          <li className="norm"><i className="fa fa-exclamation-triangle oval"></i>
                          <span className="bl-head">Identify and engage important stake holders</span>

                            <p className="bl-text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo.
                            </p>

                          </li>
                          <li className="norm"><i className="fa fa-envelope oval"></i>
                          <span className="bl-head">Digital document signing</span>

                            <p className="bl-text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo.
                            </p>

                          </li>
                          <li className="norm"><i className="fa fa-envelope oval"></i>
                          <span className="bl-head">Order management</span>

                            <p className="bl-text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo.
                            </p>

                          </li>
                        </ul>

                      </div>
                  </div>
                </section>
                <section id="five" className="main style1 pad200">
                  <div className="grid-wrapper">

                      <div className="col-6 separator-line">
                          <img src={pic06} className="thevideo" />
                            <ul className="sendbullet">
                              <li className="norm abnorm"><i className="fa fa-paper-plane oval"></i>
                                <span className="bl-head">Subscription management</span>
                                  <p className="bl-text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                  </p>
                              </li>
                            </ul>
                      </div>
                      <div className="col-6">
                        <ul className="sendbullet">
                          {/* TODO make these a component */}
                          <li className="first"><i className="fa fa-paper-plane oval"></i>
                          <span className="color-title">Customer Relations</span>
                          <h3>Keeping your customers is just as important as acquiring them</h3>
                            <p className="largertext">You need to move fast and sell more. You need a revenue engine with CRM and Marketing Automation that can handle it. Unite sales and marketing with one platform for the whole customer journey.</p>
                          </li>

                          <li className="norm"><i className="fa fa-paper-plane oval"></i>
                          <span className="bl-head">Digital Document Signing</span>

                            <p className="bl-text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                          </li>
                          <li className="norm"><i className="fa fa-paper-plane oval"></i>
                          <span className="bl-head">Use your favorite services with Upsales</span>

                            <p className="bl-text">Connect your favorite services with the Upsales App Directory.
                            </p>
                            <ul className="nonbulletedlist">
                              <li><img src={pic03} /></li>
                              <li className="pad10"><img src={pic04} /></li>
                            </ul>
                          </li>

                        </ul>

                      </div>
                  </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
