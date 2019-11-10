import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const noAction = e => e.preventDefault();
export class ContentBlockHome extends Component {

    render() {
        return (
            <Fragment>
                <section className="cta section-padding border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>為何選擇使用<span>Doxit</span>...?</h2>
                                    <p>三大原因，缺一不可</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <img src="./assets/img/svg/illustration-1.svg" alt="" className="svg" />
                                    </div>
                                    <div className="col-lg-5 offset-lg-1 col-md-6 mt-5 mt-md-0">
                                        <ul className="feature-list-wrapper list-unstyled">
                                            <li>
                                                <div className="icon"><span className="circle-secondary"><i className="la la-check-circle"></i></span></div>
                                                <div className="list-content">
                                                    <h4>免費配對系統</h4>
                                                    <p>學生導師即時配對</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"><span className="circle-success"><i className="la la-money"></i></span></div>
                                                <div className="list-content">
                                                    <h4>以人為本</h4>
                                                    <p>踢走收費中介</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"><span className="circle-primary"><i className="la la-map"></i></span></div>
                                                <div className="list-content">
                                                    <h4>隨時隨地按你需要</h4>
                                                    <p>地點，價錢由你決定</p>
                                                </div>
                                            </li>
                                        </ul>{/*<!-- ends: .feature-list-wrapper -->*/}
                                        <ul className="action-btns list-unstyled">
                                            <li><NavLink onClick={noAction} to="/at_demo" className="btn btn-success">立即報價</NavLink></li>
                                            <li><NavLink onClick={noAction} to="/at_demo" className="btn btn-primary">搜尋報價</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export class ContentBlockAbout extends Component {

    render() {
        return (
            <Fragment>
                <section className="about-contents section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 contents-wrapper">
                                <div className="contents">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-sm-6">
                                            <img src="./assets/img/about-img1.png" alt="" />
                                        </div>
                                        <div className="col-lg-6 offset-lg-1 col-sm-6 mt-5 mt-md-0">
                                            <h1>About Our Community and Our Expertise</h1>
                                            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa officia
                                                runmollit anim laborum occaecat cupidatat proident. Cupidatat non
                                                proident sunt in culpa officia deserunt.</p>
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .contents -->*/}
                                <div className="contents">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-sm-6">
                                            <h1>Why List on <span>Direo</span></h1>
                                            <ul className="list-unstyled list-features p-top-15">
                                                <li>
                                                    <div className="list-count"><span>1</span></div>
                                                    <div className="list-content">
                                                        <h4>Easy Registration</h4>
                                                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list-count"><span>2</span></div>
                                                    <div className="list-content">
                                                        <h4>Promote your Listing</h4>
                                                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list-count"><span>3</span></div>
                                                    <div className="list-content">
                                                        <h4>Great Sales Benefits</h4>
                                                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 offset-lg-1 text-right col-sm-6 mt-5 mt-md-0">
                                            <img src="./assets/img/about-img2.png" alt="" />
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .contents -->*/}
                            </div>{/*<!-- ends: .content-block -->*/}
                        </div>
                    </div>
                </section>
                
            </Fragment>
        )
    }
}

