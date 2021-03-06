import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
export class NavItem extends Component {
    render() {
        return (
            <Fragment>
                <ul className="navbar-nav">
                    <li>
                        <NavLink to="/">主頁</NavLink>
                    </li>
                    <li>
                        <NavLink to="/all-listings-grid" id="drop3">報價庫</NavLink>
                        {/*
                        <a href="# " className="dropdown-toggle" id="drop3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">報價庫</a>
                        <ul className="dropdown-menu" aria-labelledby="drop3">
                            <li><NavLink to="/all-listings-grid">Listing Grid</NavLink></li>
                            <li><NavLink to="/all-listings-list">Listing List</NavLink></li>
                            <li><NavLink to="/listing-details1">Listing Details</NavLink></li>
                            <li><NavLink to="/add-listing">Add Listing</NavLink></li>
                        </ul>*/}
                    </li>
                    <li>
                        <NavLink to="/all-categories" id="drop4">如何運作</NavLink>
{/*                        <ul className="dropdown-menu" aria-labelledby="drop4">
                            <li><NavLink to="/all-categories">All Categories</NavLink></li>
                            <li><NavLink to="/all-locations">All Locations</NavLink></li>
                        </ul>*/}
                    </li>
                    <li>
                        <NavLink to="/faqs" id="drop5">FAQ</NavLink>
                        {/*                        <ul className="dropdown-menu" aria-labelledby="drop4">
                            <li><NavLink to="/all-categories">All Categories</NavLink></li>
                            <li><NavLink to="/all-locations">All Locations</NavLink></li>
                        </ul>*/}
                    </li>
                    {/*<li className="dropdown has_dropdown">
                        <a className="dropdown-toggle" href="# " id="drop2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pages
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="drop2">
                            <li><NavLink to="/author-profile">Author Profile</NavLink></li>
                            <li><NavLink to="/dashboard-listings">Author Dashboard</NavLink></li>
                            <li><NavLink to="/pricing-plans">Pricing Plans</NavLink></li>
                            <li><NavLink to="/checkout">Checkout</NavLink></li>
                            <li><NavLink to="/invoice">Invoice</NavLink></li>
                            <li><NavLink to="/faqs">FAQ</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/cards">Products Cards</NavLink></li>
                            <li><NavLink to="/headers">Header Styles</NavLink></li>
                        </ul>
                    </li>*/}
                    {/*<li className="dropdown has_dropdown">
                        <a className="dropdown-toggle" href="# " id="drop1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            部落格
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="drop1">
                            <li><NavLink to="/blog-right-sidebar">Blog Right Sidebar</NavLink></li>
                            <li><NavLink to="/blog-grid">Blog Grid Layout</NavLink></li>
                            <li><NavLink to="/blog-details1">Blog Details</NavLink></li>
                             <!-- dropdowns example -->
                        </ul>
                    </li>*/}
                    <li>
                        <NavLink to="/blog-right-sidebar" id="drop1">部落格</NavLink>
                        {/*                        <ul className="dropdown-menu" aria-labelledby="drop4">
                            <li><NavLink to="/all-categories">All Categories</NavLink></li>
                            <li><NavLink to="/all-locations">All Locations</NavLink></li>
                        </ul>*/}
                    </li>
                </ul>
            </Fragment>
        )
    }
}
