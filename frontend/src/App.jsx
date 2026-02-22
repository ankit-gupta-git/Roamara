import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import ListingDetail from './pages/ListingDetail';
import CreateListing from './pages/CreateListing';
import EditListing from './pages/EditListing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthSuccess from './pages/AuthSuccess';
import MyBookings from './pages/MyBookings';
import PrivateRoute from './components/PrivateRoute';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isHomePage={isHomePage} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:id" element={<ListingDetail />} />
          <Route path="/listings/new" element={
            <PrivateRoute>
              <CreateListing />
            </PrivateRoute>
          } />
          <Route path="/listings/:id/edit" element={
            <PrivateRoute>
              <EditListing />
            </PrivateRoute>
          } />
          <Route path="/bookings" element={
            <PrivateRoute>
              <MyBookings />
            </PrivateRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth-success" element={<AuthSuccess />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
