import './App.css';
import "./styles/app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Login from './components/admin/Login';
import Nav from './components/utility/Nav';
import Home from './components/user/Home';
import Footer from './components/layout/Footer'
import UserLogin from './components/user/UserLogin';
import Signup from './components/user/Signup';
import { AuthProvider } from './context/AuthContext';
import AlertsForm from './components/user/AlertsForm';
import RaiseFundForm from './components/user/RaiseFundForm'
import Donation from './components/home/Donation'
import VolunteerForm from './components/user/VolunteerForm'
import Maps from "./components/utility/Maps";
import NotFound from './components/layout/NotFound';
import DonationCard from './components/home/DonationCard';
import UserProfile from './components/user/UserProfile';
import Popup from './components/admin/Popup'
import Admin from './components/admin/Admin';
import UploadDocs from './components/utility/UploadDocs';
import AdminNotification from './components/admin/AdminNotification';

function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Nav />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/usersignup" element={<Signup />} />
            <Route path="/adminlogin" element={<Login />} />
            <Route path="/alertsform" element={<AlertsForm/>} />
            <Route path="/maps" element={<Maps/>}/>
            <Route path="/raisefund" element={<RaiseFundForm/>} />
            <Route path="/volunteerform" element={<VolunteerForm/>} />
            <Route path="/donation" element={<Donation/>} />
            <Route path="/userprofile" element={<UserProfile/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/popup" element={<Popup/>}/>
            
            

            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </AuthProvider>
      </Router>
      <Footer></Footer>

    </div>
  );
}

export default App;
