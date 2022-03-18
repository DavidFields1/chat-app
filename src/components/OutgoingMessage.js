/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { hourMonth } from '../helpers/formatDate';

const OutgoingMessage = ({ messageData }) => {
	const { message, createdAt } = messageData;
	return (
		<div className='outgoing_msg'>
			<div className='sent_msg'>
				<p>{message}</p>
				<span className='time_date'> {hourMonth(createdAt)} </span>
			</div>
		</div>
	);
};

OutgoingMessage.protoTypes = {
	messageData: PropTypes.object.isRequired,
};

export default OutgoingMessage;
