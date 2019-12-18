// var item = localStorage.getItem('user');

const modalReducer = (state = {}, action) => {
    switch(action.type){
        case 'OPEN_MODAL' :
            // localStorage.setItem("user", action.user);
            return action.modal; //JSON.parse(localStorage.getItem('user'));
        default:
            return state;
    }
}
export default modalReducer
