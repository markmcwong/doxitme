import * as firebase from 'firebase';
import $ from "jquery";

export const socialLoginUser = (social) => dispatch => {
    let provider
    switch (social) {
        case 'facebook':
            provider = new firebase.auth.FacebookAuthProvider();
            break;
        case 'google':
            provider = new firebase.auth.GoogleAuthProvider();
            break;
    }

    // dispatch(requestLogin());
    return (dispatch) => {
        firebase.auth().signInWithPopup(provider).then(result => {
            console.log(result.user)
            $("#login_modal").click();
            var user = result.user
            dispatch({
                type: 'USER_LOGIN',
                user
            })
            // return Promise.resolve()
        }).catch(function(error) {
            console.log(error)
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
};
