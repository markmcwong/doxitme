import * as firebase from 'firebase';

export const logOutUser = () => dispatch => {
    return (dispatch) => {
        firebase.auth().signOut().then(()=> {
            // Sign-out successful.
            dispatch({
                type: 'USER_LOGOUT'
            })
        }).catch(function(error) {
            console.log(error)
            // An error happened.
        });
    }
}
