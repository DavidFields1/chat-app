import { types } from '../../types/types';

export const chatReducer = (state, action) => {
	switch (action.type) {
		case types.getUsers:
			return {
				...state,
				users: [...action.payload],
			};

		case types.setActiveChat:
			if (state.activeChat === action.payload) return state;
			return {
				...state,
				activeChat: action.payload,
				messages: [],
			};
		case types.setMessages:
			if (
				state.activeChat === action.payload.from ||
				state.activeChat === action.payload.to
			) {
				return {
					...state,
					messages: [...state.messages, action.payload],
				};
			} else return state;

		case types.loadChat:
			return {
				...state,
				messages: [...action.payload],
			};
		case types.cleanData:
			return {
				uid: null,
				activeChat: null,
				users: [],
				messages: [],
			};

		default:
			return state;
	}
};
