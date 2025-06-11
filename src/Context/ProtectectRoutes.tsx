import React from 'react';
import { useAuth } from "./AuthContext"; 
import { Redirect, Route } from 'wouter';

interface ProtectRouterProps {
    path: string;
    allowedRoles: string[];
    children: React.ReactNode;
}

export const ProtectRoute: React.FC<ProtectRouterProps> = ({ path, allowedRoles, children }) => {
    const { role, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Redirect to='/login/HJQL9823'/>;
    }

    if (!allowedRoles.includes(role || '')) {
        return <Redirect to='/'/>
    }
    return <Route path={path}>{children}</Route>;
};