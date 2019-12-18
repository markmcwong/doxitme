import $ from "jquery";

const loginReducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case 'USER_LOGIN':
            return action.user;
        // case 'USER_COOKIE':
        //     return action.user
        case 'USER_LOGOUT':
            console.log(action)
            return {};
        default:
            return state;
    }
}
export default loginReducer
