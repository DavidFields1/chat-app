import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';
import Swal from 'sweetalert2';

const useLogin = () => {
	const { login } = useContext(AuthContext);

	const [form, setForm] = useState({
		email: 'email3@example.com',
		password: '123445',
		rememberMe: false,
	});

	useEffect(() => {
		const rememberedEmail = localStorage.getItem('email');
		if (rememberedEmail) setForm(form => ({ ...form, rememberMe: true }));
	}, []);

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const toggleCheckbox = () => {
		setForm({
			...form,
			rememberMe: !form.rememberMe,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();

		if (form.rememberMe) localStorage.setItem('email', form.email);
		else localStorage.removeItem('email');

		const { email, password } = form;
		const resp = await login(email, password);

		if (resp.status !== 200) {
			Swal.fire('Error', resp.message, 'error');
		}
	};

	return {
		form,
		handleChange,
		handleSubmit,
		toggleCheckbox,
	};
};

export default useLogin;
