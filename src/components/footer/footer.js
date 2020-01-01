import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
            <li><a href="https://www.facebook.com/adam.stelmaszyk"><i className="fa fa-facebook" /></a></li>
              {/* <li><a href="#"><i className="fa fa-twitter" /></a></li> */}
              {/* <li><a href="#"><i className="fa fa-google-plus" /></a></li> */}
              <li><a href="https://www.linkedin.com/in/adam-stelmaszyk-b8054215a/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/stelmaszykadam/"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://github.com/stelmaszyk-adam"><i className="fa fa-github" /></a></li>
              {/* <li><a href="#"><i className="fa fa-skype" /></a></li> */}
            </ul>
            <ul className="copyright">
              <li>© Copyright 2019</li>
              <li>Design by <a title="Styleshout" href="#"> Adam Stelmaszyk</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}
      </React.Fragment>
    );
  }
}