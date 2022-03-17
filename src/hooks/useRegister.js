import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthContext';

const useRegister = () => {
	const navigate = useNavigate();

	const { register } = useContext(AuthContext);

	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setForm({
			...form,

			[name]: value,
		});
	};

	const showAlert = async (title, text, icon, timer = 1000) => {
		await Swal.fire({
			title: title,
			text: text,
			icon: icon,
			timer: timer,
			showCancelButton: false,

			showConfirmButton: false,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();

		const { name, email, password } = form;
		const resp = await register(name, email, password);

		if (resp.status === 201) {
			await showAlert('Success', resp.message, 'success');
			navigate('/auth/login');
		} else {
			await showAlert('Error', resp.message, 'error');
		}
	};

	return {
		form,

		handleChange,
		handleSubmit,
	};
};

export default useRegister;
