import React, { useState, useEffect } from 'react';import { motion } from 'framer-motion';
import { Music2, Mail, Lock, User, ArrowRight, Key, Link as LinkIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

// Login Component
export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Proceed with login
        navigate('/spotify-setup');
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="bg-black p-8 rounded-xl shadow-2xl w-full max-w-md"
            >
                <div className="flex justify-center mb-8">
                    <Music2 className="w-16 h-16 text-orange-500" />
                </div>

                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Welcome Back
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-gray-300 text-sm">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-gray-300 text-sm">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="••••••••"
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300"
                    >
                        <span>Sign In</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <p className="mt-8 text-center text-gray-400">
                    Don&apos;t have an account?{' '}
                    <Link to="/signup" className="text-orange-500 hover:text-orange-400">
                        Sign up
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

// Signup Component
export const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        navigate('/spotify-setup');
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="bg-black p-8 rounded-xl shadow-2xl w-full max-w-md"
            >
                <div className="flex justify-center mb-8">
                    <Music2 className="w-16 h-16 text-orange-500" />
                </div>

                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Create Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-gray-300 text-sm">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="John Doe"
                            />
                        </div>
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-gray-300 text-sm">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-gray-300 text-sm">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="••••••••"
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-gray-300 text-sm">Confirm Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="••••••••"
                            />
                        </div>
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300"
                    >
                        <span>Create Account</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <p className="mt-8 text-center text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-orange-500 hover:text-orange-400">
                        Sign in
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

// Spotify Setup Component
export const SpotifySetup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        clientId: '',
        clientSecret: '',
        callbackUrl: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.clientId) newErrors.clientId = 'Client ID is required';
        if (!formData.clientSecret) newErrors.clientSecret = 'Client Secret is required';
        if (!formData.callbackUrl) newErrors.callbackUrl = 'Callback URL is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Save credentials and navigate to dashboard
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="bg-black p-8 rounded-xl shadow-2xl w-full max-w-md"
            >
                <div className="flex justify-center mb-8">
                    <Music2 className="w-16 h-16 text-orange-500" />
                </div>

                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Spotify API Setup
                </h2>

                <p className="text-gray-400 text-center mb-6">
                    Enter your Spotify API credentials to connect your application
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-gray-300 text-sm">Client ID</label>
                        <div className="relative">
                            <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="clientId"
                                value={formData.clientId}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter your Spotify Client ID"
                            />
                        </div>
                        {errors.clientId && <p className="text-red-500 text-sm">{errors.clientId}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-gray-300 text-sm">Client Secret</label>
                        <div className="relative">
                            <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                name="clientSecret"
                                value={formData.clientSecret}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter your Spotify Client Secret"
                            />
                        </div>
                        {errors.clientSecret && <p className="text-red-500 text-sm">{errors.clientSecret}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-gray-300 text-sm">Callback URL</label>
                        <div className="relative">
                            <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="url"
                                name="callbackUrl"
                                value={formData.callbackUrl}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="http://localhost:3000/callback"
                            />
                        </div>
                        {errors.callbackUrl && <p className="text-red-500 text-sm">{errors.callbackUrl}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300"
                    >
                        <span>Connect Spotify</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <div className="mt-6">
                    <p className="text-gray-400 text-sm">
                        Need help? Check out the{' '}
                        <a
                            href="https://developer.spotify.com/dashboard"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-orange-400"
                        >
                            Spotify Developer Dashboard
                        </a>
                    </p>
                    <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                        <h3 className="text-sm font-semibold text-white mb-2">Quick Guide:</h3>
                        <ol className="text-sm text-gray-400 list-decimal list-inside space-y-1">
                            <li>Go to Spotify Developer Dashboard</li>
                            <li>Create a new application</li>
                            <li>Add http://localhost:3000/callback to Redirect URIs</li>
                            <li>Copy the Client ID and Client Secret</li>
                        </ol>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// AuthContext for state management
export const AuthContext = React.createContext({
    isAuthenticated: false,
    hasSpotifyCredentials: false,
    user: null,
    loading: true,
    error: null,
    login: () => { },
    logout: () => { },
    setSpotifyCredentials: () => { },
    clearError: () => { }
});

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [state, setState] = useState({
        isAuthenticated: false,
        hasSpotifyCredentials: false,
        user: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            // Check for existing auth token
            const token = localStorage.getItem('authToken');
            const spotifyCredsString = localStorage.getItem('spotifyCredentials');

            if (token) {
                // In a real app, validate the token with your backend here
                setState(prev => ({
                    ...prev,
                    isAuthenticated: true,
                    hasSpotifyCredentials: !!spotifyCredsString,
                    loading: false
                }));
            } else {
                setState(prev => ({
                    ...prev,
                    loading: false
                }));
            }
        } catch (error) {
            setState(prev => ({
                ...prev,
                error: 'Failed to check authentication status',
                loading: false
            }));
        }
    };

    const login = async (email, password) => {
        try {
            setState(prev => ({ ...prev, loading: true, error: null }));

            // In a real app, make an API call to your backend here
            // For now, we'll simulate a successful login
            const mockUser = { id: 1, email, name: 'John Doe' };
            const mockToken = 'mock-jwt-token';

            // Store the token
            localStorage.setItem('authToken', mockToken);

            setState(prev => ({
                ...prev,
                isAuthenticated: true,
                user: mockUser,
                loading: false
            }));

        } catch (error) {
            setState(prev => ({
                ...prev,
                error: error.message || 'Failed to log in',
                loading: false
            }));
        }
    };

    const logout = () => {
        // Clear all stored tokens and credentials
        localStorage.removeItem('authToken');
        localStorage.removeItem('spotifyCredentials');

        setState({
            isAuthenticated: false,
            hasSpotifyCredentials: false,
            user: null,
            loading: false,
            error: null
        });
    };

    const setSpotifyCredentials = (credentials) => {
        try {
            // Store credentials securely
            localStorage.setItem('spotifyCredentials', JSON.stringify(credentials));

            setState(prev => ({
                ...prev,
                hasSpotifyCredentials: true
            }));
        } catch (error) {
            setState(prev => ({
                ...prev,
                error: 'Failed to save Spotify credentials'
            }));
        }
    };

    const clearError = () => {
        setState(prev => ({ ...prev, error: null }));
    };

    const value = {
        ...state,
        login,
        logout,
        setSpotifyCredentials,
        clearError
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// useAuth hook for easy access to auth context
export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};