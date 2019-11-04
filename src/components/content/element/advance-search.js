import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const noAction = e => e.preventDefault();
export class AdvSearch extends Component {

    render() {
        return (
            <Fragment>

                <div className="directory_content_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="search_title_area">
                                    <h2 className="title">真·免費補習中介</h2>
                                    <p className="sub_title">創新全免補習中介</p>
                                </div>{/* ends: .search_title_area */}
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item col">
                                        <a className="nav-link active text-center" data-toggle="tab" href="#issue"
                                           role="tab" aria-controls="home" aria-selected="true">提出報價</a>
                                    </li>
                                    <li className="nav-item col">
                                        <a className="nav-link text-center" data-toggle="tab" href="#find"
                                           role="tab" aria-controls="profile" aria-selected="false">搜尋報價</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="issue" role="tabpanel"
                                         aria-labelledby="home-tab">
                                        <form action="/" className="search_form">
                                            <div className="atbd_seach_fields_wrapper">
                                                <div className="single_search_field search_query">
                                                    <input className="form-control search_fields" type="text" placeholder="你想搜尋的條件" />
                                                </div>
                                                <div className="single_search_field search_category">
                                                    <select className="search_fields" id="at_biz_dir-category">
                                                        <option value>選擇科目</option>
                                                        <option value="chinese">中文</option>
                                                        <option value="english">英文</option>
                                                        <option value="maths">數學</option>
                                                    </select>
                                                </div>
                                                <div className="single_search_field search_location">
                                                    <select className="search_fields" id="at_biz_dir-location">
                                                        <option value>選擇等級</option>
                                                        <option value="primary">小學</option>
                                                        <option value="middle">中一至中三</option>
                                                        <option value="high">中四至中六</option>
                                                    </select>
                                                </div>
                                                <div className="atbd_submit_btn">
                                                    <button type="submit" onClick={noAction} className="btn btn-block btn-gradient btn-gradient-one btn-md btn_search">搜尋</button>
                                                </div>
                                            </div>
                                        </form>{/* ends: .search_form */}
                                    </div>
                                    <div className="tab-pane fade" id="find" role="tabpanel"
                                         aria-labelledby="profile-tab">
                                        <form action="/" className="search_form">
                                            <div className="atbd_seach_fields_wrapper">
                                                <div className="single_search_field search_query">
                                                    <input className="form-control search_fields" type="text" placeholder="What are you looking for?" />
                                                </div>
                                                <div className="single_search_field search_category">
                                                    <select className="search_fields" id="at_biz_dir-subject">
                                                        <option value>Select a subject</option>
                                                        <option value="chinese">Chinese</option>
                                                        <option value="english">English</option>
                                                        <option value="maths">Maths</option>
                                                    </select>
                                                </div>
                                                <div className="single_search_field search_location">
                                                    <select className="search_fields" id="at_biz_dir-level">
                                                        <option value>Select level</option>
                                                        <option value="primary">Primary School</option>
                                                        <option value="middle">Form 1-3</option>
                                                        <option value="high">Form 4-6</option>
                                                    </select>
                                                </div>
                                                <div className="atbd_submit_btn">
                                                    <button type="submit" onClick={noAction} className="btn btn-block btn-gradient btn-gradient-one btn-md btn_search">Search</button>
                                                </div>
                                            </div>
                                        </form>{/* ends: .search_form */}
                                    </div>
                                </div>
                                {/*<div className="directory_home_category_area">
                                    <ul className="categories">
                                        <li>
                                            <NavLink onClick={noAction} to="/at_demo">
                                                <span className="color-primary"><i className="la la-cutlery" /></span>
                                                Restaurants
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={noAction} to="/at_demo">
                                                <span className="color-success"><i className="la la-map-marker" /></span>
                                                Places
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={noAction} to="/at_demo">
                                                <span className="color-warning"><i className="la la-shopping-cart" /></span>
                                                Shopping
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={noAction} to="/at_demo">
                                                <span className="color-danger"><i className="la la-bed" /></span>
                                                Hotels
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>*/}{/* ends: .directory_home_category_area */}
                            </div>{/* ends: .col-lg-10 */}
                        </div>
                    </div>
                </div>{/* ends: .directory_search_area */}
            </Fragment>
        )
    }
}

