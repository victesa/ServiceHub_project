import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpScreen from './common/screens/SignUpScreen';
import SignInScreen from './common/screens/SignInScreen';
import HomeScreen from './common/screens/HomeScreen';
import ResetPasswordScreen from './common/screens/ResetPasswordScreen';
import PasswordResetScreen from './common/screens/PasswordResetScreen';
import VerifyEmailScreen from './common/screens/VerifyEmailScreen';
import RoleOptionScreen from './common/screens/RoleOptionScreen';
import EmailVerificationLinkScreen from './common/screens/EmailVerificationLinkScreen';
import ProtectedRoute from './common/components/AuthProtection'; // Correct the import path
import RedirectIfAuthenticated from './common/components/RedirectedIfAuthenticated'; // New component
import ProfileSetUpScreen from './ServiceProvider/screens/ProfileSetupScreen';
import ServiceProviderHomeScreen from './ServiceProvider/screens/ServiceProviderHomeScreen';
import ClientHomeScreen from './common/screens/ClientHomeScreen';

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
