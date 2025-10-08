import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import ChatbotAI from './pages/ChatbotAI.tsx';
import VoiceBot from './pages/VoiceBot.tsx';
import AITravel from './pages/AITravel.tsx';
import ComputerVision from './pages/ComputerVision.tsx';
import About from './pages/About.tsx';
import Consulting from './pages/Consulting.tsx';
import Development from './pages/Development.tsx';
import Integration from './pages/Integration.tsx';
import Support from './pages/Support.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chatbot-ai" element={<ChatbotAI />} />
        <Route path="/voice-bot" element={<VoiceBot />} />
        <Route path="/ai-travel" element={<AITravel />} />
        <Route path="/computer-vision" element={<ComputerVision />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/development" element={<Development />} />
        <Route path="/services/integration" element={<Integration />} />
        <Route path="/services/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
