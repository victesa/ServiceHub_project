import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import VerifyEmailScreen from './screens/VerifyEmailScreen';
import RoleOptionScreen from './screens/RoleOptionScreen';
import EmailVerificationLinkScreen from './screens/EmailVerificationLinkScreen';
import ProtectedRoute from './components/AuthProtection'; // Correct the import path
import RedirectIfAuthenticated from './components/RedirectedIfAuthenticated'; // New component
import ProfileSetUpScreen from './screens/clientScreen/ProfileSetupScreen';
import ServiceProviderHomeScreen from './screens/clientScreen/ServiceProviderHomeScreen';
import ClientHomeScreen from './screens/ClientHomeScreen';
import AccountBalanceScreen from './screens/AccountBalanceScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RedirectIfAuthenticated><HomeScreen error = {false} onChange={{}} errorMessage={false}/></RedirectIfAuthenticated>} />
          <Route path="/signUpScreen" element={<RedirectIfAuthenticated><SignUpScreen /></RedirectIfAuthenticated>} />
          <Route path="/signInScreen" element={<RedirectIfAuthenticated><SignInScreen /></RedirectIfAuthenticated>} />
          <Route path="/reset-password" element={<ResetPasswordScreen />} />
          <Route path="/passwordReset" element={<PasswordResetScreen />} />
          <Route path="/verify-Email" element={<VerifyEmailScreen />} />
          <Route path="/roleOptionScreen" element={<RoleOptionScreen />} />
          <Route path="/EmailVerificationLink" element={<EmailVerificationLinkScreen />} />
          <Route path="/HomeAuthenticatedScreen" element={<ProtectedRoute><ProfileSetUpScreen /></ProtectedRoute>} />
          <Route path="ProfileSetupScreen" element={<ProtectedRoute><ProfileSetUpScreen/></ProtectedRoute>}/>
          <Route path="/ServiceProviderScreen" element={<ProtectedRoute><ServiceProviderHomeScreen/></ProtectedRoute>}/>
          <Route path="/ClientHomeScreen" element={<ProtectedRoute><ClientHomeScreen/></ProtectedRoute>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
