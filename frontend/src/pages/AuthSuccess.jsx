import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthSuccess = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        const token = searchParams.get('token');
        if (token) {
            login(token);
            navigate('/');
        } else {
            console.error("No token found in URL");
            navigate('/login');
        }
    }, [searchParams, login, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-airbnb-primary"></div>
            <p className="ml-4 text-lg font-semibold">Completing login...</p>
        </div>
    );
};

export default AuthSuccess;
