import { Routes, Route, Navigate } from 'react-router-dom';
import LeftNavigation from './components/leftNavigation/leftNavigation';
import LoginForm from './pages/Login/LoginForm';
import './styles/App.css';
import Dashboard from './pages/dashboard';
import Purchases from './components/purchases/purchases';
import Reports from './components/reports/reports';
import Properties from './components/properties/properties';
import UnAssignedPurchases from './components/purchases/unAssigned';
import AssignedPurchases from './components/purchases/assigned';
import Receipts from './components/receipts/receipt';
import Users from './components/users/user';
import Companies from './components/companies/companies';

// Helper function to check for token
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // or use sessionStorage based on your logic
};

// Private route wrapper
const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<LoginForm />} />

        {/* Protected Routes */}
        <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/leftNavigation" element={<PrivateRoute element={<LeftNavigation />} />} />
        <Route path="/purchases" element={<PrivateRoute element={<Purchases />} />} />
        <Route path="/receipts" element={<PrivateRoute element={<Receipts />} />} />
        <Route path="/reports" element={<PrivateRoute element={<Reports />} />} />
        <Route path="/properties" element={<PrivateRoute element={<Properties />} />} />
        <Route path="/purchases-unassiged" element={<PrivateRoute element={<UnAssignedPurchases />} />} />
        <Route path="/purchases-assiged" element={<PrivateRoute element={<AssignedPurchases />} />} />
        <Route path="/users" element={<PrivateRoute element={<Users />} />} />
        <Route path="/companies" element={<PrivateRoute element={<Companies />} />} />
      </Routes>
    </div>
  );
}

export default App;
