import React, { createContext, useCallback, useContext, useState } from 'react';
import { fetchUrl, fetchWithToken } from '../helpers/fetch';
import PropTypes from 'prop-types';
import { ChatContext } from '../context/chat/ChatContext';

export const AuthContext = createContext();

const initialState = {
	uid: null,
	checking: true,
	loggedIn: false,
	name: null,
	email: null,
};

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialState);

	const login = async (email, password) => {
		const resp = await fetchUrl('/login', { email, password }, 'POST');
		if (resp.status === 200) {
			localStorage.setItem('token', resp.token);

			const {
				user: { uid, name, email },
			} = resp;

			setAuth({
				uid: uid,
				checking: false,
				loggedIn: true,
				name: name,
				email: email,
			});
		}

		return resp;
	};

	const register = async (name, email, password) => {
		const resp = await fetchUrl(
			'/login/new',
			{ name, email, password },
			'POST'
		);
		if (resp.status === 201) {
			localStorage.setItem('token', resp.token);

			const {
				user: { uid, name, email },
			} = resp;

			setAuth({
				uid: uid,
				checking: false,
				loggedIn: true,
				name: name,
				email: email,
			});
		}
		return resp;
	};

	// this function will be a dependency of the useEffect hook, so useCallback is used to avoid infinite loop
	const validateToken = useCallback(async () => {
		const token = localStorage.getItem('token');

		if (!token) {
			setAuth({
				uid: null,
				checking: false,
				loggedIn: false,
				name: null,
				email: null,
			});
			return false;
		}

		const resp = await fetchWithToken('/login/renew', {}, 'GET');
		const {
			user: { uid, name, email },
		} = resp;

		if (resp.status === 200) {
			setAuth({
				uid: uid,
				checking: false,
				loggedIn: true,
				name: name,
				email: email,
			});
			return true;
		} else {
			setAuth({
				uid: null,
				checking: false,
				loggedIn: false,
				name: null,
				email: null,
			});
			return false;
		}
	}, []);

	const logout = () => {
		localStorage.removeItem('token');
		setAuth({
			uid: null,
			checking: false,
			loggedIn: false,
			name: null,
			email: null,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				auth,
				login,
				register,
				validateToken,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
