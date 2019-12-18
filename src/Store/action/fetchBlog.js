import * as firebase from 'firebase';

export const fetchBlog = () => {
    let db = firebase.firestore();
    const request = db.collection("blog").get()
    return (dispatch, getState) => {
        request.then(res => {
            const result = res.docs.map(doc => {
                Object.assign(doc.data(), {title: doc.title});
                return doc.data()
            })
            dispatch({
                type: 'FETCH_BLOG',
                result
            })
            return Promise.resolve()
        });
    }
}
// export default function fetchBlog(){
//         return db.collection("blog").get().then(res => {
//             return res.docs.map(doc => {
//                 Object.assign(doc.data(), {title: doc.title});
//                 return doc.data()
//             })
//         });
// }
// export const LogInAc = data => {
//     var login = JSON.stringify(data)
//     return (dispatch, getState) => {
//         dispatch( {
//             type: 'CREATE_LOGIN',
//             login
//         })
//         return Promise.resolve()
//     }
//
// }
// export default function fetchBlog()
// {
//     return function action(dispatch)
//     {
//         // dispatch({ type: FETCH_OFFERS })
//         let db = firebase.firestore();
//         const request = db.collection("blog").get()
//         return request.then(res => {
//             dispatch({
//                 type: 'FETCH_BLOG',
//                 blog: res.docs.map(doc => {
//                     Object.assign(doc.data(), {title: doc.title});
//                     return doc.data()
//                 })
//             })
//
//         });
//     };
// }
