import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import BacktoTop from './components/BacktoTop';
import Navbar from './components/Navbar';

import MainPage from './MainPage';
import ShortPage from './ShortPage';
import LongPage from './LongPage';
import UGCpage from './UGCpage';
import ProcessPage from './ProcessPage';

import Login from './components/Dashboard/Login';
import Logout from './components/Dashboard/Logout';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import Dashboard from './components/Dashboard/Dashboard';
import MainpageMange from './components/Dashboard/MainpageMange';
import ShortpageManage from './components/Dashboard/ShortpageManage';
import LongFormManage from './components/Dashboard/LongFormManage';
import UgcpageManage from './components/Dashboard/UgcpageManage';

import PrivateRoute from './components/Dashboard/PrivateRoute';
import Terms from './Terms';
import AdminUpdateForm from './components/Dashboard/AdminUpdateForm';
import Newadmin from './components/Dashboard/AdminRegister';
import Newslettersubscribers from './components/Dashboard/Newslettersubscribers';
import Candly from './components/Candly';

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<><Navbar /><MainPage /><BacktoTop /></>} />
        <Route path="/short-page" element={<><Navbar /><ShortPage /><BacktoTop /></>} />
        <Route path="/long-page" element={<><Navbar /><LongPage /><BacktoTop /></>} />
        <Route path="/UGCpage" element={<><Navbar /><UGCpage /><BacktoTop /></>} />
        <Route path="/#faq" element={<><Navbar /><MainPage /><BacktoTop /></>} />
        <Route path="/#portfolio" element={<><Navbar /><MainPage /><BacktoTop /></>} />
        <Route path="/#tes" element={<><Navbar /><MainPage /><BacktoTop /></>} />
        <Route path="/#candly" element={<><Navbar /><MainPage /><BacktoTop /></>} />
        <Route path="/Process" element={<><Navbar /><ProcessPage /><BacktoTop /></>} />
        <Route path="/trems" element={<><Navbar /><Terms /><BacktoTop /></>} />

        {/* Login & Logout */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        {/* Protected Dashboard Routes */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="main" element={<MainpageMange />} />
          <Route path="shortpagemanage" element={<ShortpageManage />} />
          <Route path="LongFormManage" element={<LongFormManage />} />
          <Route path="ugcpage" element={<UgcpageManage />} />
          <Route path="update" element={<AdminUpdateForm />} />
          <Route path="addadmin" element={<Newadmin />} />
          <Route path="Newslettersubscribers" element={<Newslettersubscribers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
