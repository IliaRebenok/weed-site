import React from 'react';
import { useLocalStorage } from 'react-use';
import { Navigate, useLocation } from 'react-router-dom';

function AgeVerificationMiddleware({ children }) {
    const [ageVerified] = useLocalStorage('age_verified', false);
    const location = useLocation();

    if (!ageVerified && location.pathname !== '/age-verification') {
        return <Navigate to="/age-verification" />;
    }

    return children;
}

export default AgeVerificationMiddleware;
