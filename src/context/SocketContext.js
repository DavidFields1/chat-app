import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';
import PropTypes from 'prop-types';
import { AuthContext } from '../auth/AuthContext';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
	const { socket, online, connectSocket, disconnectSocket } = useSocket(
		'http://localhost:8080'
	);
	const { auth } = useContext(AuthContext);

	useEffect(() => {
		if (auth?.loggedIn) {
			connectSocket();
		}
	}, [auth, connectSocket]);

	useEffect(() => {
		if (!auth?.loggedIn) {
			disconnectSocket();
		}
	}, [auth, disconnectSocket]);

	return (
		<SocketContext.Provider value={{ socket, online }}>
			{children}
		</SocketContext.Provider>
	);
};

SocketProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
