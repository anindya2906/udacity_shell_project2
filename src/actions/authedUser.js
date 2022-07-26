export const SET_AUTHED_USER = "SET-AUTHED-USER";

export const setAuthedUser = (id) => {
    return {
        type: SET_AUTHED_USER,
        id
    }
}