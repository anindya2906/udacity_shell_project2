import { connect } from "react-redux";

import { login } from "../actions/authedUser";

const LoginForm = (props) => {

    const submitHandler = (event) => {
        event.preventDefault();
        const userid = event.target.username.value;
        const password = event.target.password.value;
        props.dispatch(login(userid, password));
    }

    return <form onSubmit={submitHandler}>
        <input type={"text"} id="username" placeholder={"Username"}/>
        <input type={"password"} id="password" placeholder={"Password"}/>
        <button>Login</button>
    </form>
}

export default connect()(LoginForm);