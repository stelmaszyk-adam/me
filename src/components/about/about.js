import React, { Component } from 'react';
import pdf from '../../astelmaszykCV.pdf'

export default class About extends Component {
 
	
	downloadEmployeeData = () => {
		fetch('http://localhost:3000/src/')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'astelmaszykCV.pdf';
					a.click();
				});
				//window.location.href = response.url;
		});
	}

  render() {

    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilePhoto.png" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.shortDescription}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span><br />
                  <span>{resumeData.city}</span><br />
                  {/* <span>(123)456-7890</span><br /> */}
                  <span>{resumeData.email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                {/* some kind of bug */}
                  <a href={pdf} className="button"><i className="fa fa-download" />Download Resume</a>
                  {/* <a href="#" onClick={this.downloadEmployeeData} className="button"><i className="fa fa-download" />Download Resume</a> */}
                  {/* <a href="#" onClick={this.downloadEmployeeData}>Download</a> */}
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}