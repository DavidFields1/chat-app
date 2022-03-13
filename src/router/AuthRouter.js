import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import '../css/login-register.css';
import LoginRegisterLayout from '../layouts/LoginRegisterLayout';

const AuthRouter = () => {
    return (
        <LoginRegisterLayout>
            <Routes>
                <Route path="/login" element={<LoginView />} />
                <Route path="/register" element={<RegisterView />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </LoginRegisterLayout>
    )
};

export default AuthRouter;