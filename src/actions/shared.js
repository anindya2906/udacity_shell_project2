import { setAuthedUser } from "./authedUser";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { getInitialData } from "../utils/helper";


export const handleInitialData = () => {
    return async (dispatch) => {
        try{
            const { users, questions } = await getInitialData();
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthedUser(null));
        }
        catch {}
    }
}