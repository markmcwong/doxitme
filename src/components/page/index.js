import React, {Fragment, Component} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { AdvSearch } from '../content/element/advance-search';
import { FloatingButton } from '../content/element/floating-button';
import CardCategoryGrid4 from '../content/element/card/card-category-grid-4';
import { SectionTitle } from '../content/element/section-title';
import CardListingGrid4 from '../content/element/card/card-listing-grid-4';
import { NavLink } from 'react-router-dom';
import { ContentBlockHome } from '../content/element/content-block';
import CardCategoryGrid2 from '../content/element/card/card-category-grid-2';
import { PlaceList } from '../content/element/place-list';
import Testimonial from '../content/element/carousel/testimonial';
import ClientLogo from '../content/element/carousel/client-logo';
import { Subscribe } from '../content/element/subscribe';
import { connect } from 'react-redux';
import {BreadcrumbWraper} from "../content/element/breadcrumb";
import {ContactForm2} from "../content/element/contact-form";
import {WidgetContactInfo} from "../content/element/widget";

const noAction = e => e.preventDefault();
class Index extends Component {
    
    render() {
        const logdIn = () => {
            return this.props.login
        }
        const light = this.props.logo[0].light;       
        return (
            <Fragment>


                {/* Header section start */}
                <section className="intro-wrapper bgimage overlay overlay--dark">
                    <div className="bg_image_holder"><img src="./assets/img/index-background.jpg" alt="" /></div>
                    <div className="mainmenu-wrapper">
                        <Header logo={light} class="menu--light" />                    
                    </div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                    <AdvSearch />
                </section>
                {/* Header section end */}

    
                {/* Category section start */}            
                <section className="categories-cards section-padding-two">
                    <div className="container">
                        <SectionTitle 
                            title="搜尋你想輔導的學生"
                            content="根據你的學歷、背景、經驗，進行最佳配對"
                        />
                        <div className="row">
                            <CardCategoryGrid4 />
                        </div>
                    </div>
                </section>
                {/* Category section end */}
    
                {/* Listing section start */}
                <section className="listing-cards section-bg section-padding">
                    <div className="container">
                        <SectionTitle 
                            title="現在需要輔導的學生"
                            content="搜尋你下一個補習學生"
                        />
                        <div className="row">                        
                            <div className="listing-cards-wrapper col-lg-12">
                                <div className="row">
                                    <CardListingGrid4 logdIn={logdIn()} />
                                    <div className="col-lg-12 text-center m-top-20">
                                        <NavLink onClick={noAction} to="/at_demo" className="btn btn-gradient btn-gradient-two">瀏覽全部 200+</NavLink>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </section>
                {/* Listing section end */}
                
                <ContentBlockHome />
    
                {/* Place section start */}
                {/* <section className="places section-padding">
                    <div className="container">
                        <SectionTitle 
                            title="Destination We Love" 
                            content="Explore best listings around the world by city"
                        />
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cat-places-wrapper">
                                    <CardCategoryGrid2 />
                                </div>
                            </div>
                            <PlaceList />
                        </div>
                    </div>
                </section>*/}
                {/* Place section end */}
    
                {/* Testimonial section start */}
                <section className="testimonial-wrapper section-padding--bottom section-padding">
                    <div className="container">
                        <SectionTitle 
                            title="超過四千名用家信賴"
                            content="各位用家的評語"
                        />
                        <div className="row">
                            <Testimonial />
                        </div>
                    </div>
                </section>
                {/* Testimonial section end */}
    
                {/* Client section start
                <section className="clients-logo-wrapper border-top p-top-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ClientLogo />
                            </div>
                        </div>
                    </div>
                </section>
                 client section end*/}
                
                {/*<Subscribe />*/}
                <FloatingButton/>
                <section className="contact-area section-bg p-top-100 p-bottom-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="widget atbd_widget widget-card contact-block">
                                    <div className="atbd_widget_title">
                                        <h4><span className="la la-envelope"></span> 有問題嗎？立即聯絡我們！</h4>
                                    </div>
                                    <div className="atbdp-widget-listing-contact contact-form">
                                        <ContactForm2 />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="widget atbd_widget widget-card">
                                    <div className="atbd_widget_title">
                                        <h4><span className="la la-phone"></span>聯絡資料</h4>
                                    </div>
                                    <WidgetContactInfo />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               <Footer />
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        list: state.list,
        login : state.login,
        logo: state.logo
    }
}

export default connect(mapStateToProps)(Index);