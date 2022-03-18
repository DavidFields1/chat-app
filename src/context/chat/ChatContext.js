import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { chatReducer } from './chatReducer';
import { types } from '../../types/types';

export const ChatContext = createContext();

const initialState = {
	uid: null,
	activeChat: null, // uid of the user you want to chat with
	users: [], // list of users
	messages: [], // list of messages
};

export const ChatProvider = ({ children }) => {
	const [chatState, dispatch] = useReducer(chatReducer, initialState);

	const setActiveChat = uid => {
		dispatch({
			type: types.setActiveChat,
			payload: uid,
		});
	};

	const getUsers = users => {
		dispatch({ type: types.getUsers, payload: users });
	};

	const setMessages = messages => {
		dispatch({ type: types.setMessages, payload: messages });
	};

	const loadChat = messages => {
		dispatch({ type: types.loadChat, payload: messages });
	};

	const cleanData = () => dispatch({ type: types.cleanData });

	return (
		<ChatContext.Provider
			value={{
				chatState,
				setActiveChat,
				getUsers,
				setMessages,
				loadChat,
				cleanData,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};

ChatProvider.propTypes = {
	children: PropTypes.node,
};
