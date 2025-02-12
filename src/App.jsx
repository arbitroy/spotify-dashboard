import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SpotifyDashboard from './components/dashboard/SpotifyDashboard';
import SpotifyStats from './components/stats/SpotifyStats';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './components/auth/Auth';
import { Login, Signup, SpotifySetup } from './components/auth/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/spotify-setup" element={<SpotifySetup />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<SpotifyDashboard />} />
              <Route path="/stats" element={<SpotifyStats />} />
              <Route path="/settings" element={<div className="p-6">Settings Page (Coming Soon)</div>} />
            </Route>
          </Route>

          {/* Catch-all route for 404 */}
          <Route path="*" element={
            <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="mb-4">The page you&apos;re looking for doesn&lsquo;t exist.</p>
                <a href="/" className="text-orange-500 hover:text-orange-400">
                  Go back home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;