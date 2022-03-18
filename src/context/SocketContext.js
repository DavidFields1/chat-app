import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSocket } from '../hooks/useSocket';
import { createContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from './chat/ChatContext';
import { scrollToBottomAtMessages } from '../helpers/scrollChat';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
	const { socket, online, connectSocket, disconnectSocket } = useSocket(
		'http://localhost:8080'
	);
	const { auth } = useContext(AuthContext);
	const { getUsers, setMessages } = useContext(ChatContext);

	// listen if its logged in
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

	// listen to connected users event
	useEffect(() => {
		socket?.on('get-users', users => {
			getUsers(users);
		});
	}, [socket, getUsers]);

	// listen to send message event
	useEffect(() => {
		socket?.on('private-message', message => {
			setMessages(message);

			scrollToBottomAtMessages('scroll-chat');
		});
	}, [socket]);

	return (
		<SocketContext.Provider value={{ socket, online }}>
			{children}
		</SocketContext.Provider>
	);
};

SocketProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
