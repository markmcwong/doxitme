const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_LOGIN':
            return {
                data: action.login,
                success: true
            }
            case 'CREATE_DELETE':
                localStorage.removeItem("login");
                return localStorage.getItem("login")
            default:
                return state;
    }
}
export default loginReducer
