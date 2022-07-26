const LoginForm = () => {

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return <form onSubmit={submitHandler}>
        <input type={"text"} placeholder={"Username"}/>
        <input type={"password"} placeholder={"Password"}/>
        <button>Login</button>
    </form>
}

export default LoginForm;