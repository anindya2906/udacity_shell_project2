import { useEffect } from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { handleInitialData } from "../actions/shared";

function App(props) {

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return <div>
    <LoginForm/>
  </div>;
}

export default connect()(App);
