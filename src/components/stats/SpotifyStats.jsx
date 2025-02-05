import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Play, Headphones, Calendar, TrendingUp, BarChart3 } from 'lucide-react';

// Mock data remains the same
const mockData = {
    topSongs: [
        { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', plays: 543, duration: '5:55', image: 'https://avatar.iran.liara.run/public/2' },
        { id: 2, title: 'Hotel California', artist: 'Eagles', plays: 432, duration: '6:30', image: 'https://avatar.iran.liara.run/public/2' },
        { id: 3, title: 'Sweet Child O Mine', artist: 'Guns N Roses', plays: 398, duration: '5:56', image: 'https://avatar.iran.liara.run/public/2' },
        { id: 4, title: 'Stairway to Heaven', artist: 'Led Zeppelin', plays: 375, duration: '8:02', image: 'https://avatar.iran.liara.run/public/2' },
        { id: 5, title: 'Imagine', artist: 'John Lennon', plays: 352, duration: '3:03', image: 'https://avatar.iran.liara.run/public/2' }
    ],
    topArtists: [
        { id: 1, name: 'Queen', genre: 'Rock', monthlyListeners: '32.5M', image: 'https://avatar.iran.liara.run/public/2' },
        { id: 2, name: 'Eagles', genre: 'Rock', monthlyListeners: '28.7M', image: 'https://avatar.iran.liara.run/public/2' },
        { id: 3, name: 'Guns N Roses', genre: 'Hard Rock', monthlyListeners: '25.1M', image: 'https://avatar.iran.liara.run/public/2' },
        { id: 4, name: 'Led Zeppelin', genre: 'Rock', monthlyListeners: '22.3M', image: 'https://avatar.iran.liara.run/public/2' }
    ],
    listeningStats: {
        totalMinutes: 12460,
        topGenre: 'Rock',
        differentArtists: 245,
        differentSongs: 867
    }
};

const SpotifyStats = () => {
    const [timeRange, setTimeRange] = useState('month');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="p-6">
            {/* Stats Overview */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            >
                <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
                    <Clock className="w-8 h-8 text-orange-500 mb-2" />
                    <h3 className="text-lg font-semibold">Minutes Listened</h3>
                    <p className="text-2xl font-bold text-orange-500">{mockData.listeningStats.totalMinutes}</p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-orange-500 mb-2" />
                    <h3 className="text-lg font-semibold">Top Genre</h3>
                    <p className="text-2xl font-bold text-orange-500">{mockData.listeningStats.topGenre}</p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
                    <Headphones className="w-8 h-8 text-orange-500 mb-2" />
                    <h3 className="text-lg font-semibold">Different Artists</h3>
                    <p className="text-2xl font-bold text-orange-500">{mockData.listeningStats.differentArtists}</p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-orange-500 mb-2" />
                    <h3 className="text-lg font-semibold">Different Songs</h3>
                    <p className="text-2xl font-bold text-orange-500">{mockData.listeningStats.differentSongs}</p>
                </motion.div>
            </motion.div>

            {/* Time Range Selector */}
            <div className="flex gap-4 mb-8">
                {['month', '6months', 'year'].map((range) => (
                    <button
                        key={range}
                        onClick={() => setTimeRange(range)}
                        className={`px-4 py-2 rounded-lg ${timeRange === range
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                    >
                        {range === 'month' ? 'This Month' : range === '6months' ? 'Last 6 Months' : 'This Year'}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Top Songs */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="bg-gray-800 rounded-lg p-6"
                >
                    <h2 className="text-2xl font-bold mb-6">Top Songs</h2>
                    <div className="space-y-4">
                        {mockData.topSongs.map((song, index) => (
                            <motion.div
                                key={song.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
                            >
                                <div className="flex items-center space-x-4">
                                    <span className="text-lg font-bold text-gray-400 w-6">{index + 1}</span>
                                    <img src={song.image} alt={song.title} className="w-12 h-12 rounded" />
                                    <div>
                                        <h3 className="font-semibold">{song.title}</h3>
                                        <p className="text-sm text-gray-400">{song.artist}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-6">
                                    <span className="text-gray-400">{song.duration}</span>
                                    <div className="flex items-center space-x-2">
                                        <Play className="w-4 h-4 text-gray-400" />
                                        <span>{song.plays}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Top Artists */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="bg-gray-800 rounded-lg p-6"
                >
                    <h2 className="text-2xl font-bold mb-6">Top Artists</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mockData.topArtists.map((artist) => (
                            <motion.div
                                key={artist.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-700 p-4 rounded-lg flex items-center space-x-4"
                            >
                                <img src={artist.image} alt={artist.name} className="w-20 h-20 rounded-lg object-cover" />
                                <div>
                                    <h3 className="font-semibold text-lg">{artist.name}</h3>
                                    <p className="text-gray-400">{artist.genre}</p>
                                    <div className="flex items-center mt-2">
                                        <Headphones className="w-4 h-4 text-orange-500 mr-2" />
                                        <span className="text-sm">{artist.monthlyListeners} monthly listeners</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SpotifyStats;