import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogInAc } from '../../../../Store/action/loginAction';
import $ from 'jquery';
import * as firebase from 'firebase/app';

const noAction = e => e.preventDefault();
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            disabled: false
        }
    }
    componentDidMount() {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(this.recaptcha, {
            'size': 'normal',
            'callback': function (response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
            },
            'expired-callback': function () {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...
            }
        });
        window.recaptchaVerifier.render().then(function (widgetId) {
            window.recaptchaWidgetId = widgetId;
        });
    }
    render() {
        var data = this.props.users
        const change = (e) => {
            const email = e.target.value;
            this.setState({
                email: email
            })

            // if(filter.length) {
            //     this.setState({
            //         disabled: true,
            //         email: email
            //     })
            // } else {
            //     this.setState({
            //         disabled: false
            //     })
            // }
        }


        const changePass = (e) => {
            const pass = e.target.value;
            this.setState({
                password: pass
            })

        }
        const phoneLogin = () => {
            var phoneNumber = "+85257446911";
            console.log(phoneNumber);
            var appVerifier = window.recaptchaVerifier;
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                .then(function (confirmationResult) {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                    console.log(confirmationResult);
                }).catch(function (error) {
                // Error; SMS not sent
                console.log(error)
                // ...
            });
        }

        const Login = (e) => {
            e.preventDefault();
            const filter = data.filter(item => {
                return this.state.email === item.email && this.state.password === item.password
            });

            //if(filter.length) {
            if(true) {
                this.props.logindata(filter);
                $("#login_modal").click();
                console.log(this.state.email, this.state.password)
                firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    // ...
                }).then(function (result) {
                    console.log(result);
                })
            } else {
                alert('Password does not match!')
            }
        }
        const signInWithGmail = () => {
            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(user);
                // ...
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        }
        return (
            <Fragment>
                <div className="modal fade" id="login_modal" tabIndex={-1} role="dialog" aria-labelledby="login_modal_label" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="login_modal_label"><i className="la la-lock" /> Sign In</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="/" id="login-form">
                                    <input onChange={change} type="text" className="form-control" placeholder="Phone Number or Email" required />

                                    <input onChange={changePass} type="password" className="form-control" placeholder="Password" required/>

                                    <div className="keep_signed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                        <input type="checkbox" className="custom-control-input" name="keep_signed_in" defaultValue={1} id="keep_signed_in" />
                                        <label htmlFor="keep_signed_in" className="not_empty custom-control-label">Keep me signed in</label>
                                    </div>
                                    <button onClick={Login} type="submit" className="btn btn-block btn-lg btn-gradient btn-gradient-two">Sign In</button>
                                </form>
                                <button onClick={phoneLogin} className="btn btn-block btn-lg btn-gradient btn-gradient-two">Phone</button>

                                <div className="form-excerpts">
                                    <ul className="list-unstyled">
                                        <li>Not a member? <NavLink to="/at_demo" onClick={noAction}>Sign up</NavLink></li>
                                        <li><NavLink to='/at_demo' onClick={noAction}>Recover Password</NavLink></li>
                                    </ul>
                                    <div className="social-login">
                                    <span>Or connect with</span>
                                    <p>
                                        <NavLink to="/at_demo" onClick={noAction} className="btn btn-outline-secondary">
                                            <i className="fab fa-facebook-f" /> Facebook
                                        </NavLink>
                                        <NavLink to="/" onClick={signInWithGmail} className="btn btn-outline-danger">
                                            <i className="fab fa-google-plus-g" /> Google
                                        </NavLink>
                                    </p>
                                    </div>
                                </div>
                                <div ref={(ref)=>this.recaptcha=ref}></div>
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
        login: state.login,
        users: state.users
    }
}
const mapDispatchToProp = dispatch => {
    return {
        logindata : (login) => dispatch(LogInAc(login))
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Login);