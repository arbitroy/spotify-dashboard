// src/components/auth/ProtectedRoute.jsx
import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from './Auth';

const ProtectedRoute = () => {
    const { isAuthenticated, hasSpotifyCredentials, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            if (!isAuthenticated) {
                navigate('/login');
            } else if (!hasSpotifyCredentials) {
                navigate('/spotify-setup');
            }
        }
    }, [isAuthenticated, hasSpotifyCredentials, loading, navigate]);

    // Show nothing while checking auth status
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    // Only render children if authenticated and has Spotify credentials
    return isAuthenticated && hasSpotifyCredentials ? <Outlet /> : null;
};

export default ProtectedRoute;