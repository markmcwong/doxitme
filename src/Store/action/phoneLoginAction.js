import * as firebase from 'firebase';
import $ from "jquery";

export const phoneLoginUser = (code, confirmationResult) => dispatch => {
    // dispatch(requestLogin());
    return (dispatch) => {
        confirmationResult.confirm(code)
            .then(function (userInfo) {
                // User signed in successfully.
                var user = userInfo.user;
                $("#login_modal").click();
                console.log(userInfo)
                dispatch({
                    type: 'USER_LOGIN',
                    user
                })
            }).catch(function (error) {
            // User couldn't sign in (bad verification code?)
            console.log(error)
        });
    }
};
