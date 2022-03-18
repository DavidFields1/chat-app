import React from 'react';
import AppRouter from './router/AppRouter';
import { AuthProvider } from './auth/AuthContext';
import { SocketProvider } from './context/SocketContext';
import { ChatProvider } from './context/chat/ChatContext';

const ChatApp = () => {
	return (
		<AuthProvider>
			<ChatProvider>
				<SocketProvider>
					<AppRouter />
				</SocketProvider>
			</ChatProvider>
		</AuthProvider>
	);
};

export default ChatApp;
