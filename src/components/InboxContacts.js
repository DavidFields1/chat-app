import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import Contact from './Contact';
import Search from './Search';

const InboxContacts = () => {
	const { chatState } = useContext(ChatContext);
	const users = chatState.users;

	const { auth } = useContext(AuthContext);
	const uid = auth.uid;

	return (
		<div className='inbox_people'>
			<Search />

			<div className='inbox_chat'>
				{users
					.filter(user => user.uid !== uid)
					.map(user => {
						return <Contact key={user.uid} contact={user} />;
					})}
				;<div className='extra_space'></div>
			</div>
		</div>
	);
};

export default InboxContacts;
