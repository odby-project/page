import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoticePage from './pages/notice/NoticePage';
import RootPage from './pages/root/RootPage';
import QnAPage from './pages/qna/QnAPage';
import AnnouncementPage from './pages/announcement/AnnouncementPage';

function App() {
  return (
    <BrowserRouter basename="/page">
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/qna" element={<QnAPage />} />
        <Route path="/announcement" element={<AnnouncementPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
