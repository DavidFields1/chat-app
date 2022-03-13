import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<form class="login100-form validate-form flex-sb flex-w">
			<span class="login100-form-title mb-3">
				Chat App Register
			</span>

			<div class="wrap-input100 validate-input mb-3">
				<input class="input100" type="text" name="name" placeholder="Name" />
				<span class="focus-input100"></span>
			</div>

			
			<div class="wrap-input100 validate-input mb-3">
				<input class="input100" type="email" name="email" placeholder="Email" />
				<span class="focus-input100"></span>
			</div>
			
			
			<div class="wrap-input100 validate-input mb-3">
				<input class="input100" type="password" name="password" placeholder="Password" />
				<span class="focus-input100"></span>
			</div>
			
			<div class="row mb-3">
				<div class="col text-right">
					<Link to="/auth/login" class="txt1">
						Alredy have an account?
					</Link>
				</div>
			</div>

			<div class="container-login100-form-btn m-t-17">
				<button class="login100-form-btn">
					Create Account
				</button>
			</div>
		</form>
	);
};

export default Register;
