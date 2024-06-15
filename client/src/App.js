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
import HomeAuthenticatedScreen from './screens/HomeAuthenticatedScreen';
import ProtectedRoute from './components/AuthProtection'; // Correct the import path
import RedirectIfAuthenticated from './components/RedirectedIfAuthenticated'; // New component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signUpScreen" element={<RedirectIfAuthenticated><SignUpScreen /></RedirectIfAuthenticated>} />
          <Route path="/signInScreen" element={<RedirectIfAuthenticated><SignInScreen /></RedirectIfAuthenticated>} />
          <Route path="/reset-password" element={<ResetPasswordScreen />} />
          <Route path="/passwordReset" element={<PasswordResetScreen />} />
          <Route path="/verify-Email" element={<VerifyEmailScreen />} />
          <Route path="/roleOptionScreen" element={<RoleOptionScreen />} />
          <Route path="/EmailVerificationLink" element={<EmailVerificationLinkScreen />} />
          <Route path="/HomeAuthenticatedScreen" element={<ProtectedRoute><HomeAuthenticatedScreen /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
