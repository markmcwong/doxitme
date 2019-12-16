// import * as firebase from 'firebase';
// const initState = firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         // User is signed in.
//         console.log(user)
//         return user
//     } else {
//         // No user is signed in.
//         console.log("no user")
//         return null
//     }
// })
export const LogInAc = data => {
    var login = JSON.stringify(data)
    return (dispatch, getState) => {
        dispatch( {
            type: 'CREATE_LOGIN',
            login
        })
        return Promise.resolve()
    }

}
