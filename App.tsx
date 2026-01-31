
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Assessment from './components/Assessment';
import Dashboard from './components/Dashboard';
import Checkout from './components/Checkout';
import { View, UserState, AssessmentResult } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [user, setUser] = useState<UserState | null>(null);

  // Load user from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('metodo_zero_user');
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const handleStartAssessment = () => {
    setView('assessment');
  };

  const handleAssessmentComplete = (result: AssessmentResult) => {
    const newUser: UserState = {
      name: "Explorador",
      procrastinationType: result.type,
      currentDay: 1,
      completedTasks: [],
      microGoal: ""
    };
    setUser(newUser);
    localStorage.setItem('metodo_zero_user', JSON.stringify(newUser));
    setView('dashboard');
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Hero onStart={handleStartAssessment} />;
      case 'assessment':
        return <Assessment onComplete={handleAssessmentComplete} />;
      case 'dashboard':
        return user ? <Dashboard user={user} /> : <Hero onStart={handleStartAssessment} />;
      case 'checkout':
        return <Checkout />;
      default:
        return <Hero onStart={handleStartAssessment} />;
    }
  };

  return (
    <Layout currentView={view} setView={setView}>
      {renderView()}
    </Layout>
  );
};

export default App;
