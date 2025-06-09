// App.jsx
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { supabase } from "./services/supabaseClient";
import LandingScreen from "./pages/LandingScreen";
import StudentRegistration from "./pages/StudentSignUp";
import StudentDashboard from "./pages/StudentDashboard";

function AppRoutes({ session }) {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/registration/student" element={<StudentRegistration />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
    </Routes>
  );
}

function App() {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check current session on app load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) navigate("/student/dashboard");
    });

    // Watch for session changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) navigate("/student/dashboard");
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return <AppRoutes session={session} />;
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
