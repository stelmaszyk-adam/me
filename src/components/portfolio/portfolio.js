import React, { Component } from 'react';
export default class Header extends Component {
    render() {

        let portfolioData = this.props.portfolioData;

        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed text-center ">
                            {/* <h1>Check Out My Works.</h1> */}
                            {/* <div className="pagination"> */}
                                <h1>Check Out My Works</h1>
                            {/* </div> */}

                            {/* portfolio-wrapper */}
                            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" title>
                                            <img alt="" src={portfolioData.firstPhoto} />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>{portfolioData.firstApp}</h5>
                                                    <p>Mobile App</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-02" title>
                                            <img alt="" src={portfolioData.secondPhoto} />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>{portfolioData.secondApp}</h5>
                                                    <p>Mobile App</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                            </div> {/* portfolio-wrapper end */}
                        </div> {/* twelve columns end */}
                        {/* Modal Popup
	      --------------------------------------------------------------- */}
                        <div id="modal-01" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src={portfolioData.firstPhoto} alt="" />
                            <div className="description-box">
                                <h4>{portfolioData.firstApp}</h4>
                                <p>{portfolioData.firstDescription}</p>
                                <span className="categories"><i className="fa fa-tag" />Mobile App</span>
                            </div>
                            <div className="link-box">
                                <a href={portfolioData.firstWeb}>Google Play</a>
                                <a className="popup-modal-second" href={portfolioData.firstFacebook} >Facebook</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-01 End */}
                        <div id="modal-02" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src={portfolioData.secondPhoto} alt="" />
                            <div className="description-box">
                                <h4>{portfolioData.secondApp}</h4>
                                <p>{portfolioData.secondDescription}</p>
                                <span className="categories"><i className="fa fa-tag" />Mobile App</span>
                            </div>
                            <div className="link-box">
                                <a href={portfolioData.secondWeb}>Google Play</a>
                                <a className="popup-modal-second" href={portfolioData.secondFacebook} >Facebook</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-02 End */}

                    </div> {/* row End */}
                </section> {/* Portfolio Section End*/}
            </React.Fragment>
        );
    }
}