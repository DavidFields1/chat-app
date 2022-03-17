import React from 'react';
import { Navigate } from 'react-router-dom';
import ChatView from '../views/ChatView';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ isAuthenticated }) => {
	return isAuthenticated ? <ChatView /> : <Navigate to='/auth/login' />;
};

PrivateRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};
