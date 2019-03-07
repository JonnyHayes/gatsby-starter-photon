import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons footerlists">
                    <li>
                      <ul className="nonbulleted">
                        <li><a href="#" className="footer-col bold">Platform</a></li>
                        <li><a href="#" className="footer-col">Marketing</a></li>
                        <li><a href="#" className="footer-col">Sales</a></li>
                        <li><a href="#" className="footer-col">Analytics</a></li>
                        <li><a href="#" className="footer-col">Apps</a></li>
                        <li><a href="#" className="footer-col">Pricing</a></li>
                        <li><a href="#" className="footer-col">Developer</a></li>
                      </ul>
                    </li>
                    <li>
                      <ul className="nonbulleted">
                        <li><a href="#" className="footer-col bold">Resources</a></li>
                        <li><a href="#" className="footer-col">Blog</a></li>
                        <li><a href="#" className="footer-col">White Papers</a></li>
                        <li><a href="#" className="footer-col">Events & seminars</a></li>
                      </ul>
                    </li>
                    <li>
                      <ul className="nonbulleted">
                        <li><a href="#" className="footer-col bold">Help</a></li>
                        <li><a href="#" className="footer-col">Help Center</a></li>
                        <li><a href="#" className="footer-col">Contact Support</a></li>
                        <li><a href="#" className="footer-col">Service & support</a></li>
                      </ul>
                    </li>
                    <li>
                      <ul className="nonbulleted">
                        <li><a href="#" className="footer-col bold">Company</a></li>
                        <li><a href="#" className="footer-col">About</a></li>
                        <li><a href="#" className="footer-col">Jobs</a></li>
                        <li><a href="#" className="footer-col">Team</a></li>
                        <li><a href="#" className="footer-col">Partner Program</a></li>
                        <li><a href="#" className="footer-col">1% For the Planet</a></li>
                      </ul>
                    </li>
                    <li>
                      <ul className="nonbulleted">
                        <li><a href="#" className="footer-col bold">Subscribe to our newsletters</a></li>
                        <li>The latest Upsales news, articles, and resources, sent straight to your inbox every month.</li>
                        <li><input type="text" width="300px" /><button>Subscribe</button></li>


                      </ul>

                    </li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Jon</li><li>Development: <a href="https://jons.world">Jon Hayes</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
