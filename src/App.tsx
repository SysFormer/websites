import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { HomePage } from './pages/HomePage'
import { SzkoleniePage } from './pages/SzkoleniePage'
import { WdrozeniaPage } from './pages/WdrozeniaPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsOfUsePage } from './pages/TermsOfUsePage'
import './App.css'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/szkolenie" element={<SzkoleniePage />} />
          <Route path="/wdrozenia" element={<WdrozeniaPage />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
          <Route path="/regulamin" element={<TermsOfUsePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
