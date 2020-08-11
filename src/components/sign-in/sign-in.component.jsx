import React from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  hnadleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>계정이 있어요!</h2>
        <span>이메일과 암호로 로그인하세요..</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.hnadleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.hnadleChange}
            label="Password"
            required
          />
          <CustomButton type="submit">로그인</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSiginIn>
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default Signin;
