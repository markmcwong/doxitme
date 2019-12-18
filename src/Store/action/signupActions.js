import * as firebase from "firebase";
import $ from "jquery";

export const SignUp = (email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error.code, error.message);
            // ...
        }).then((result)=>{
            console.log(result)
            $("#signup_modal").click();
            var user = firebase.auth().currentUser;
            dispatch( {
                type: 'CREATE_USER',
                user
            })
            user.sendEmailVerification().then(function() {
                // Email sent.
            }).catch(function(error) {
                console.log(error)
                // An error happened.
            });
        })
    }
}
