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
import * as firebase from 'firebase';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import {SignUp} from "../../Store/action/userActions";
import {LogInAc} from "../../Store/action/loginAction";
import {fetchBlog} from "../../Store/action/fetchBlog";

const noAction = e => e.preventDefault();
class Index extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    };
    onEditorStateChange: Function = (editorState) => {
        this.setState({
            editorState,
        });
    };
    componentDidMount()
    {
        // this.props.fetchBlog();
    }
    componentWillReceiveProps(newProps){
        console.log(newProps);
    }
    render() {
        const { editorState } = this.state;
        const logdIn = () => {
            return this.props.login
        };
/*        var db = firebase.firestore();

        db.collection("blog").get().then(res => {
            console.log(
            res.docs.map(doc => {
                Object.assign(doc.data(), {title: doc.title})
                return(doc.data())
            }))
        });*/
        /*.then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            console.log(data, data.category);

        });
    });*/
        const light = this.props.logo[0].light;
        const add = () => {
            console.log(this.props);
            var db = firebase.firestore();
            db.collection("blog").add({
                author: "Ada",
                content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
                title: "十個DSE溫習的技巧",
                imgSrc: "./assets/img/b1.jpg",
                type: "tutoring",
                date: firebase.firestore.Timestamp.fromDate(new Date())
            })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    db.collection('blog').doc(docRef.id).get().then((doc) => {
                        console.log(doc.data())
                    }).catch( (error) => { console.log(error)})

                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
        };
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
                <section className="categories-cards section-padding-two">
                    <div className="container">
                        <Editor
                            editorState={editorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={this.onEditorStateChange}
                        />
                        <button onClick={add}/>
                    </div>
                </section>

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
                {/*<section className="contact-area section-bg p-top-100 p-bottom-70">

                </section>*/}
                <section className="section-bg">
                    <Footer />
                </section>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        list: state.list,
        login : state.login,
        logo: state.logo,
        blog: state.blog
    }
};
const mapDispatchToProp = dispatch => {
    return {
        fetchBlog : () => dispatch(fetchBlog())
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Index);