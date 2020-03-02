import * as firebase from 'firebase';
import $ from "jquery";

export const loginUser = (email, password) => dispatch => {
    // dispatch(requestLogin());
    console.log(email, password);
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                $("#login_modal").click();
                dispatch( {
                    type: 'USER_LOGIN',
                    user
                });
            })
            .catch(error => {
                console.log(error)
                //Do something with the error if you want!
                // dispatch(loginError());
            });
    }
};
