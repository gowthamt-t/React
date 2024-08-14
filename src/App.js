import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DiscoverNGOs from './pages/DiscoverNGOs';
import PaymentPage from './pages/PaymentPage';
import Donate from './pages/Donate';
import Login from './pages/Login';
import Mission1 from './donate.pages/Mission1';
import Mission2 from './donate.pages/Mission2';
import Mission3 from './donate.pages/Mission3';
import Mission4 from './donate.pages/Mission4';
import Mission5 from './donate.pages/Mission5';
import Mission6 from './donate.pages/Mission6';
import FundraiserForm from './pages/FundraiserForm';  // Import the FundraiserForm component
import EnrollPage from './pages/EnrollPage';
import AgaramFoundation from './pages/AgaramFoundation';
import HorizontalCardSlider from './pages/HorizontalCardSlider';
import Register from './pages/Register';
import AdminPage from './pages/AdminPage';


const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register-page" element={<Register />} />
                <Route path="/" element={<HorizontalCardSlider />} />
                <Route path="/discover-ngos" element={<DiscoverNGOs />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mission1" element={<Mission1 />} />
                <Route path="/mission2" element={<Mission2 />} />
                <Route path="/mission3" element={<Mission3 />} />
                <Route path="/mission4" element={<Mission4 />} />
                <Route path="/mission5" element={<Mission5 />} />
                <Route path="/mission6" element={<Mission6 />} />
                <Route path="/fundraiser-form" element={<FundraiserForm />} />  
                <Route path="/enroll" element={<EnrollPage />} />
                <Route path="/agaram-foundation-page" element={<AgaramFoundation />} />
                <Route path="/adminpage" element={<AdminPage />} />
                {/* Add the route for FundraiserForm */}
            </Routes>
            
        </Router>
    );
};

export default App;
