import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { SignUp } from '../../../../Store/action/userActions';
import SimpleReactValidator from 'simple-react-validator';
import $ from 'jquery';
import * as firebase from 'firebase/app';
import {LogInAc} from "../../../../Store/action/loginAction";

const noAction = e => e.preventDefault();
class Register extends Component {
    constructor (props) {
        super (props)
        this.state = {
            username: 'woadud akand',
            email: '',
            password: ''
        }
        this.validator = new SimpleReactValidator();
        this.setStateFromInput = this.setStateFromInput.bind(this);
    }

    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }

    render() {
        var data = this.props.users
        const addUser = (e) => {
            e.preventDefault();
            if (this.validator.allValid()) {
                // const filter = data.filter(item => {
                //     return item.email === this.state.email
                // });
                // if(filter.length){
                //     alert("Email already exists");
                // } else {
                    const email = this.state.email;
                    console.log(this.state.email)
                    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(error.code, error.message);
                        // ...
                    }).then((result)=>{
                        $("#signup_modal").click();
                        this.props.logindata(email);
                        var user = firebase.auth().currentUser;
                        console.log(user);
                        user.sendEmailVerification().then(function() {
                            // Email sent.
                        }).catch(function(error) {
                            console.log(error)
                            // An error happened.
                        });
                    })
                    var success = true;
                    return success;
                // }

            } else {
                this.validator.showMessages();
                this.forceUpdate();
                var success2 = false;
                return success2;
            }
        }

        return (
            <Fragment>
                <div className="modal fade" id="signup_modal" tabIndex={-1} role="dialog" aria-labelledby="signup_modal_label" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="signup_modal_label"><i className="la la-lock" /> 註冊</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="/" id="signup-form">
                                    <input type="email" name="email" value={this.state.email} onChange={this.setStateFromInput} className="form-control" placeholder="電郵或電話號碼" required />
                                    <div className="text-danger">{this.validator.message('Email', this.state.email, 'required|email')}</div>

                                    <input type="password" name="password" value={this.state.password} onChange={this.setStateFromInput} className="form-control" placeholder="密碼" required />
                                    <div className="text-danger">{this.validator.message('Password', this.state.password, 'required|string')}</div>

                                    <button type="submit" onClick={addUser} className="btn btn-block btn-lg btn-gradient btn-gradient-two">註冊</button>
                                </form>
                                <div className="form-excerpts">
                                    <ul className="list-unstyled">
                                        <li>已經是會員? <NavLink to="/at_demo" data-toggle="modal" data-target="#login_modal">立即登入</NavLink></li>
                                        <li><NavLink onClick={noAction} to="/at_fb_demo" onClick={noAction}>忘記密碼</NavLink></li>
                                    </ul>
                                    <div className="social-login">
                                        <span>或用社交帳號註冊</span>
                                        <p><NavLink to="/at_fb_demo" onClick={noAction} className="btn btn-outline-secondary"><i className="fab fa-facebook-f" /> Facebook</NavLink><NavLink onClick={noAction} to="/at_demo" className="btn btn-outline-danger"><i className="fab fa-google-plus-g" /> Google</NavLink></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        users: state.users
    }
}
const mapDispatchToProp = dispatch => {
    return {
        userAdd : (user) => dispatch(SignUp(user)),
        logindata : (login) => dispatch(LogInAc(login))

    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Register);
