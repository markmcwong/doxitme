import * as firebase from "firebase";
import $ from "jquery";

export const SignUp = (email, password) => dispatch => {
    return (dispatch) => {
        console.log("test")
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result)=>{
                console.log(result)
                console.log("test")
                $("#signup_modal").click();
                var user = firebase.auth().currentUser;
                dispatch( {
                    type: 'USER_LOGIN',
                    user
                })
                user.sendEmailVerification().then(function() {
                    // Email sent.
                }).catch(function(error) {
                    console.log(error)
                    // An error happened.
                });
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
                // ...
            })
    }
}
