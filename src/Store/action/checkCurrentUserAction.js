import * as firebase from 'firebase';
// only for checking if the user was logged in when user opens the webpage
function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
}
export const checkCurrentUser = () => {
    // dispatch(requestLogin());
    return (dispatch) => {
        getCurrentUser().then((user)=>{
            if(user){
                dispatch({
                    type: "USER_LOGIN",
                    user
                })
            }
        }).catch((error)=>{
            console.log(error)
        })
    }
};
