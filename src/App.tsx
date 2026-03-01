import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './i18n/context'
import { ThemeProvider } from './context/ThemeContext'
import { useContent } from './hooks/useContent'
import { HomePage } from './pages/HomePage'
import { SzkoleniePage } from './pages/SzkoleniePage'
import { WdrozeniaPage } from './pages/WdrozeniaPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsOfUsePage } from './pages/TermsOfUsePage'
import './App.css'

const AppRoutes: React.FC = () => {
  const { content } = useContent();
  const { locale } = useLanguage();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={`/${content.NAV.URLS.TRAINING}`} element={<SzkoleniePage />} />
      <Route path={`/${content.NAV.URLS.IMPLEMENTATIONS}`} element={<WdrozeniaPage />} />
      {locale === 'pl' && (
        <>
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
          <Route path="/regulamin" element={<TermsOfUsePage />} />
        </>
      )}
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
