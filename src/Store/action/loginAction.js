import * as firebase from 'firebase';
import $ from "jquery";

export const loginUser = (email, password) => dispatch => {
    // dispatch(requestLogin());
    console.log(email, password)
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log(user)
            $("#login_modal").click();
            return (dispatch, getState) => {
                dispatch( {
                    type: 'USER_LOGIN',
                    user
                })
                return Promise.resolve()
            }
        })
        .catch(error => {
            //Do something with the error if you want!
            // dispatch(loginError());
        });
};
