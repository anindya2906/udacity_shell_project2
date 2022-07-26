import { _getUsers } from "../utils/_DATA";

export const SET_AUTHED_USER = "SET-AUTHED-USER";

export const setAuthedUser = (id) => {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export const login = (userid, password) => {
    return async (dispatch) => {
        try{
            const users = await _getUsers();
            const user = users[userid];
            if (user && user.password === password){
                dispatch(setAuthedUser(userid));
            }
            else{
                throw new Error("Username/Password incorrect");
            }
        }
        catch(e) {
            alert(e.message);
        }
    }
}