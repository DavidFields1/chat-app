import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import PropTypes from 'prop-types';

// react router 5
// const PublicRoute = ({ isAuthenticated, component: Component, ...props}) => {
//     return (
//         <Route {...props}
//             component={ (props) => (
//                 isAuthenticated ? (
//                     navigate('/')
//                 ) : (
//                     <Component {...props} />
//                 )
//             )}
//         />
//     )
// };

// react router 6
export const PublicRoute = ({ isAuthenticated }) => {
	return !isAuthenticated ? <AuthRouter /> : <Navigate to='/' />;
};

PublicRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};

export default PublicRoute;
