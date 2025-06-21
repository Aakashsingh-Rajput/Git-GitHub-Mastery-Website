
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import GitBasics from '../components/sections/GitBasics';
import GitHubFeatures from '../components/sections/GitHubFeatures';
import AdvancedWorkflows from '../components/sections/AdvancedWorkflows';
import BestPractices from '../components/sections/BestPractices';
import Troubleshooting from '../components/sections/Troubleshooting';
import Footer from '../components/Footer';
import AIChat from '../components/AIChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <Header />
      <Hero />
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GitBasics />
        <GitHubFeatures />
        <AdvancedWorkflows />
        <BestPractices />
        <Troubleshooting />
      </div>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
