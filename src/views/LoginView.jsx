import React from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

const LoginView = () => {
	const { form, handleSubmit, handleChange, toggleCheckbox } = useLogin();

	return (
		<form
			className='login100-form validate-form flex-sb flex-w'
			onSubmit={e => handleSubmit(e)}
		>
			<span className='login100-form-title mb-3'>Chat App Login</span>

			<div className='wrap-input100 validate-input mb-3'>
				<input
					className='input100'
					type='email'
					name='email'
					placeholder='Email'
					value={form.email}
					onChange={handleChange}
				/>
				<span className='focus-input100'></span>
			</div>

			<div className='wrap-input100 validate-input mb-3'>
				<input
					className='input100'
					type='password'
					name='password'
					placeholder='Password'
					value={form.password}
					onChange={handleChange}
				/>
				<span className='focus-input100'></span>
			</div>

			<div className='row mb-3'>
				<div className='col' onClick={toggleCheckbox}>
					<input
						className='input-checkbox100'
						id='ckb1'
						type='checkbox'
						name='rememberMe'
						checked={form.rememberMe}
						readOnly
					/>
					<label className='label-checkbox100'>Remember me</label>
				</div>

				<div className='col text-right'>
					<Link to='/auth/register' className='txt1'>
						Create Account
					</Link>
				</div>
			</div>

			<div className='container-login100-form-btn m-t-17'>
				<button
					className='login100-form-btn'
					disabled={
						!form.email ||
						!form.password ||
						form.password.length < 6
					}
				>
					Log In
				</button>
			</div>
		</form>
	);
};

export default LoginView;
