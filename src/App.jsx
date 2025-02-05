import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SpotifyDashboard from './components/dashboard/SpotifyDashboard';
import SpotifyStats from './components/stats/SpotifyStats';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SpotifyDashboard />} />
          <Route path="/stats" element={<SpotifyStats />} />
          <Route path="/settings" element={<div className="p-6">Settings Page (Coming Soon)</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;