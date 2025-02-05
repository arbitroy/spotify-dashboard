import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock Spotify data
const spotifyData = {
    monthlyListeners: [
        { month: 'January', listeners: 65000 },
        { month: 'February', listeners: 59000 },
        { month: 'March', listeners: 80000 },
        { month: 'April', listeners: 81000 },
        { month: 'May', listeners: 56000 },
        { month: 'June', listeners: 55000 },
        { month: 'July', listeners: 40000 }
    ],
    topTracks: [
        { name: 'Track Alpha', streams: '2.5M', image: 'https://avatar.iran.liara.run/public/2' },
        { name: 'Track Beta', streams: '2.1M', image: 'https://avatar.iran.liara.run/public/3' },
        { name: 'Track Gamma', streams: '1.8M', image: 'https://avatar.iran.liara.run/public/4' },
        { name: 'Track Delta', streams: '1.5M', image: 'https://avatar.iran.liara.run/public/20' }
    ],
    topArtists: [
        { name: 'Artist One', role: 'Featured Artist', image: 'https://avatar.iran.liara.run/public/5' },
        { name: 'Artist Two', role: 'Producer', image: 'https://avatar.iran.liara.run/public/6' },
        { name: 'Artist Three', role: 'Collaborator', image: 'https://avatar.iran.liara.run/public/7' }
    ]
};

const SpotifyDashboard = () => {
    return (
        <div className="flex h-screen bg-gray-900 text-gray-100">

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Main Body */}
                <div className="p-4 flex-1">
                    {/* Chart Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gray-800 h-[50vh] rounded-lg p-4 mb-4"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={spotifyData.monthlyListeners}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis
                                    dataKey="month"
                                    stroke="#9CA3AF"
                                />
                                <YAxis
                                    stroke="#9CA3AF"
                                    tickFormatter={value => `${value / 1000}k`}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1F2937',
                                        border: 'none',
                                        borderRadius: '0.5rem'
                                    }}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="listeners"
                                    stroke="#F97316"
                                    strokeWidth={2}
                                    dot={{ fill: '#F97316' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Bottom Section */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Track List */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:w-3/4"
                        >
                            <div className="space-y-4">
                                {spotifyData.topTracks.map((track, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4"
                                    >
                                        <img
                                            src={track.image}
                                            alt={track.name}
                                            className="w-20 h-20 rounded-lg object-cover"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold">{track.name}</h3>
                                            <p className="text-gray-400">{track.streams} streams</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Artist Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:w-1/4 space-y-4"
                        >
                            {spotifyData.topArtists.map((artist, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-800 rounded-lg p-4 text-center"
                                >
                                    <img
                                        src={artist.image}
                                        alt={artist.name}
                                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                    />
                                    <h3 className="text-lg font-semibold">{artist.name}</h3>
                                    <p className="text-gray-400 text-sm">{artist.role}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotifyDashboard;