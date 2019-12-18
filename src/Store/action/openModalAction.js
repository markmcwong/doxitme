export const openLoginModal = (modal) => {
    return (dispatch) => {
        console.log(modal)
        dispatch({
            type: 'OPEN_MODAL',
            modal
        })
    }
}
