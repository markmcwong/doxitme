const blogReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_BLOG':
            return action.result
        default:
            return state;
    }
}
export default blogReducer;
// import initState1 from '../../softdata.json';
// import fetchBlog from '../action/fetchBlog.js'
/*import * as firebase from 'firebase';
var db = firebase.firestore();
const fetchBlog = () => db.collection("blog").get().then(res => {
            return res.docs.map(doc => {
                Object.assign(doc.data(), {title: doc.title});
                return doc.data()
            // })
});*/
// import * as firebase from 'firebase';
// let db = firebase.firestore();
// const request = db.collection("blog").get()
// const initState = request.then(res => {
//         return res.docs.map(doc => {
//             Object.assign(doc.data(), {title: doc.title});
//             return doc.data()
//         })
//
// });
