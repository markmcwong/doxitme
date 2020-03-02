import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../../../Store/action/loginAction';
import { bindActionCreators } from 'redux';
// import { facebookLoginUser } from '../../../../Store/action/facebookLoginAction';
import { socialLoginUser } from '../../../../Store/action/socialLoginAction';
import { phoneLoginUser} from '../../../../Store/action/phoneLoginAction'
import * as firebase from 'firebase/app';
import SimpleReactValidator from 'simple-react-validator';

const noAction = e => e.preventDefault();
class Login extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            email: '',
            password: '',
            visibility: true,
            verified: false,
            code: '',
            registerModal: true
        };
        this.validator = new SimpleReactValidator();
        this.setStateFromInput = this.setStateFromInput.bind(this);
    }

    setStateFromInput = (event) => {
        this.setState({[event.target.name]: event.target.value});
        if(this.validator.fieldValid("phone")){
            this.setState({"visibility":false})
        }
    };

    componentDidMount() {
        firebase.auth().settings.appVerificationDisabledForTesting = true;

        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(this.recaptcha, {
            'size': 'normal',
            'callback': function (response) {
            },
            'expired-callback': function () {
                // Response expired. Ask user to solve reCAPTCHA again.
            }
        });
        window.recaptchaVerifier.render().then(function (widgetId) {
            window.recaptchaWidgetId = widgetId;
        });
    }
    render() {
        const phoneLogin = () => {
            var phoneNumber = this.state.email;
            console.log(phoneNumber);
            var appVerifier = window.recaptchaVerifier;
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                    console.log(window.confirmationResult)
                    this.setState({"verified":true})
                }).catch(function (error) {
                // Error; SMS not sent
                    console.log(error);
                    window.recaptchaVerifier.render().then(function(widgetId) {
                        console.log(widgetId);
                        window.recaptchaVerifier.reset(widgetId);
                    })
                });
        };
        return (
            <Fragment>
                <div className="modal fade" id="login_modal" tabIndex={-1} role="dialog" aria-labelledby="login_modal_label" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="login_modal_label"><i className="la la-lock" /> 登入</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="login-form">
                                    <input name="email" value={this.state.email} onChange={this.setStateFromInput} className="form-control" placeholder="電郵或電話號碼" required />
                                    <div className="text-danger">{this.validator.message('phone', this.state.email, 'required|phone')}</div>

                                    <input type="password" name="password" value={this.state.password} onChange={this.setStateFromInput} type="password" className="form-control" placeholder="密碼" required/>
                                    <div className="text-danger">{this.validator.message('Password', this.state.password, 'required|string')}</div>

                                    <div className="keep_signed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                        <input type="checkbox" className="custom-control-input" name="keep_signed_in" defaultValue={1} id="keep_signed_in" />
                                        <label htmlFor="keep_signed_in" className="not_empty custom-control-label">保留登入狀態</label>
                                    </div>
                                    <button onClick={this.props.loginUser(this.state.email, this.state.password)} type="button"
                                            style={{display: this.state.visibility === false ? 'none' : 'block'}} className="btn btn-block btn-lg btn-gradient btn-gradient-two">登入</button>
                                </form>
                                <button onClick={phoneLogin} className="btn btn-block btn-lg btn-gradient btn-gradient-two"
                                        style={{display: this.state.visibility === true ? 'none' : 'block'}}>獲取短訊驗証碼登入</button>
                                <div style={{display: this.state.visibility === true ? 'none' : 'block'}} ref={(ref)=>this.recaptcha=ref}></div>


                                <div id="phoneVerification"  style={{display: this.state.verified === false ? 'none' : 'block'}}>
                                    <input id="code" name="code" value={this.state.code} onChange={this.setStateFromInput} type="text" className="form-control" placeholder="驗証碼" />
                                    <button onClick={this.props.phoneLoginUser(this.state.code, window.confirmationResult)} className="btn btn-block btn-lg btn-gradient btn-gradient-two">Confirm</button>
                                </div>

                                <div className="form-excerpts">
                                    <ul className="list-unstyled">
                                        <li>還不是會員? <NavLink to="/at_demo" data-dismiss="modal" data-toggle="modal" data-target="#signup_modal">現即註冊</NavLink></li>
                                        <li><NavLink to='/at_demo' onClick={noAction}>忘記密碼</NavLink></li>
                                    </ul>
                                    <div className="social-login">
                                    <span>或用社交帳號登錄</span>
                                    <p>
                                        <button onClick={this.props.socialLoginUser("facebook")} className="btn btn-outline-secondary">
                                            <i className="fab fa-facebook-f" /> Facebook
                                        </button>
                                        <button onClick={this.props.socialLoginUser("google")} className="btn btn-outline-danger">
                                            <i className="fab fa-google-plus-g" /> Google
                                        </button>
                                    </p>
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
        // login: state.login,
        // users: state.users
        modal: state.modal
    }
}
const mapDispatchToProp = dispatch => {
    return {
        loginUser : (email,password) => bindActionCreators(loginUser(email,password), dispatch),
        socialLoginUser : (social) => bindActionCreators(socialLoginUser(social), dispatch),
        phoneLoginUser : (code, confirmationResult) => bindActionCreators(phoneLoginUser(code, confirmationResult), dispatch)
        // googleLoginUser : () => dispatch(googleLoginUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Login);
;
