import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music2, Home, PieChart, Settings, Bell, LogOut, User, Grid, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Layout = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const location = useLocation();

    const sidebarVariants = {
        expanded: { width: '16rem' },
        collapsed: { width: '4rem' }
    };

    const textVariants = {
        expanded: { opacity: 1, display: 'block' },
        collapsed: { opacity: 0, display: 'none' }
    };

    const navItems = [
        { icon: <Home />, text: 'Home', path: '/' },
        { icon: <PieChart />, text: 'Stats', path: '/stats' },
        { icon: <Settings />, text: 'Settings', path: '/settings' }
    ];

    return (
        <div className="flex h-screen bg-gray-900 text-gray-100">
            {/* Sidebar */}
            <motion.div
                initial="expanded"
                animate={isSidebarCollapsed ? 'collapsed' : 'expanded'}
                variants={sidebarVariants}
                className="bg-black shadow-lg relative"
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    <div className="flex items-center space-x-2">
                        <Music2 className="w-8 h-8 text-orange-500" />
                        <motion.span
                            variants={textVariants}
                            className="text-xl font-bold whitespace-nowrap"
                        >
                            Spotify Stats
                        </motion.span>
                    </div>
                    <button
                        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                        className="text-gray-400 hover:text-orange-500"
                    >
                        {isSidebarCollapsed ? <ChevronRight /> : <ChevronLeft />}
                    </button>
                </div>

                <nav className="p-4">
                    <ul className="space-y-2">
                        {navItems.map((item, index) => (
                            <motion.li key={index}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center p-2 rounded-lg group ${location.pathname === item.path
                                            ? 'bg-gray-800 text-orange-500'
                                            : 'hover:bg-gray-800'
                                        }`}
                                >
                                    <div className={`${location.pathname === item.path
                                            ? 'text-orange-500'
                                            : 'text-gray-400 group-hover:text-orange-500'
                                        }`}>
                                        {item.icon}
                                    </div>
                                    <motion.span
                                        variants={textVariants}
                                        className="ml-2"
                                    >
                                        {item.text}
                                    </motion.span>
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <div className="bg-black shadow-md p-4 flex justify-end items-center">
                    <div className="flex items-center space-x-4">
                        <Bell className="text-gray-400 hover:text-orange-500 cursor-pointer" />
                        <div className="relative">
                            <div
                                className="flex items-center space-x-2 cursor-pointer"
                                onClick={() => setShowProfileMenu(!showProfileMenu)}
                            >
                                <img
                                    src="/api/placeholder/40/40"
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full"
                                />
                                <span>John Doe</span>
                            </div>

                            <AnimatePresence>
                                {showProfileMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-50"
                                    >
                                        <ul className="py-1">
                                            {[
                                                { icon: <User />, text: 'Profile' },
                                                { icon: <Grid />, text: 'Dashboard' },
                                                { icon: <Settings />, text: 'Settings' },
                                                { icon: <LogOut />, text: 'Logout' }
                                            ].map((item, index) => (
                                                <li key={index}>
                                                    <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-gray-700">
                                                        <span className="mr-2">{item.icon}</span>
                                                        {item.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;