import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ResumeBuilder from './components/ResumeBuilder';
import Featured from './components/Featured';
import Jobs from './components/Jobs';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showResumeBuilder, setShowResumeBuilder] = React.useState(false);

  if (showResumeBuilder) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
              onClick={() => setShowResumeBuilder(false)}
              className="mb-6 text-purple-600 hover:text-purple-800 font-medium flex items-center"
            >
              ← Back to Main Site
            </button>
            <ResumeBuilder />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onResumeToolClick={() => setShowResumeBuilder(true)} />
      <Hero />
      <About />
      <Services onResumeToolClick={() => setShowResumeBuilder(true)} />
      <Featured />
      <Jobs />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;